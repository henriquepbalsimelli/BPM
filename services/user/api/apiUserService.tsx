import { UserRepository } from '../../../repository/Users/UserRepository'
import { generateHash } from '../../../src/utils/tools'
import { tokenService } from '../../../services/authService/tokenService'
import { Knex } from 'knex'
import { IntegrationUserService } from '../integration/integrationUserService'
import { CreateUserInterface } from '../../../src/Interfaces/CreateUserInterface'
import { FaultCode } from '../../../src/enums/integration/faultCodeEnum'

export class ApiUserService {
    async createUser(data: CreateUserInterface, trx: Knex.Transaction<any, any[]>) {
        try {

            const existingUser = await UserRepository.getUserByEmail(data.email)

            if (existingUser) {
                throw new Error('Usuário já cadastrado')
            }

            const hashedPassword = await generateHash(data.password)

            const id = await trx('users').insert({
                email: data.email,
                password: hashedPassword,
                name: data.name,
                cell: data.cell,
                document_number: data.documentNumber
            })

            const integrationUserService = new IntegrationUserService()
            const omieUser = await integrationUserService.createOmieUser(id[0], data)
            
            if (omieUser?.status != 200){
                if (omieUser.response.data.faultcode == FaultCode.INVALID_EMAIL){
                    throw new Error(`INTEGRATION_ERROR: O endereço de email '${data.email}' deve ter @ e um domínio válido`)
                }
                if (omieUser.response.data.faultcode == FaultCode.DOCUMENT_NUMBER_ALREADY_IN_USE){
                    throw new Error(`INTEGRATION_ERROR: Erro ao criar usuário: CPF já cadastrado`)
                }
                throw new Error(`INTEGRATION_ERROR: Erro ao criar usuário`)
            }
            trx.commit()

            const accessToken = await tokenService.generateAccessToken(id[0])
            const refreshToken = await tokenService.generateRefreshToken(id[0])

            await UserRepository.updateRefreshToken(id[0], refreshToken)

            return {
                accessToken: accessToken,
                omieUser
            }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}