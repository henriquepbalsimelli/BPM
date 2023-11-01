import { OmieClient } from '../../../components/infra/OmieClient/index'

const OMIE_APP_KEY = process.env.OMIE_APP_KEY
const OMIE_APP_SECRET = process.env.OMIE_APP_SECRET

export class IntegrationUserService {
    async createOmieUser(id: number, data: any) {
        try {
            const url = 'https://app.omie.com.br/api/v1/geral/clientes/'
            const content = {
                "app_key": OMIE_APP_KEY,
                "app_secret": OMIE_APP_SECRET,
                "call": "IncluirCliente",
                "param": [
                    {
                        "codigo_cliente_integracao": id,
                        "email": data.email,    
                        "razao_social": data.name,
                        "nome_fantasia": data.name,
                        "cnpj_cpf": data.documentNumber,
                        "telefone1_numero": data.cell
                    }
                ]

            }
            const omieCreatedUser = await OmieClient(
                url,
                content
            )
            return omieCreatedUser
        } catch (error: any) {
            return error
        }

    }
}