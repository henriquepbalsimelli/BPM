import { UserRepository } from '../../../repository/Users/UserRepository'
import { generateHash } from '../../../src/utils/tools'
import { tokenService } from '../../../services/authService/tokenService'
import { Knex } from 'knex'
import { IntegrationUserService } from '../integration/integrationUserService'
import { CreateUserInterface } from '../../../src/Interfaces/CreateUserInterface'


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
            console.log('OMIEUSER', omieUser.response.status)

            if (omieUser.response.status != 200){
                throw new Error('Erro ao criar usuário no Omie')
            }

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