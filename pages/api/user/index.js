import { UserRepository } from "@/repository/Users/UserRepository";
import { UserSchema } from "@/src/schemas/user";
import { generateHash } from "@/src/utils/tools";


const controllers = {
    async updateUser(req, res) {
        const { body } = req;
        const { email, password, name, id } = body;

        const valid_schema = await UserSchema.updateUserDataSchema(body)
        
        if (!valid_schema) {
            res.status(400).json({
                message: 'Dados inválidos'
            })
            return
        }

        const existingUser = await UserRepository.getUserByEmail(email);

        if (existingUser && existingUser.id !== id) {
            res.status(400).json({
                message: 'Email já cadastrado'
            })
            return
        }

        if (!existingUser){
            res.status(400).json({
                message: 'Usuário não encontrado'
            })
            return
        }
        
        let hashedPassword
        if (password){
          hashedPassword = await generateHash(password)
        }
        
        const updateData = {
            name: name,
            email: email,
            id: id
        }
        
        if (password !== undefined && hashedPassword != existingUser.password) {
          updateData['password'] = hashedPassword
        }

        const user = await UserRepository.updateUser(updateData)

        res.status(200).json({ 
            message: 'FOI',
            updateData: {
                name: name,
                email: email,
                id: id
            }
        })
    }
  };


const controllerBy = {
    PUT: controllers.updateUser,
    OPTIONS: (_, res) => res.send('OK'),
  }

export default function handler(req, res) {
    if (controllerBy[req.method]) return controllerBy[req.method](req, res);
  
    res.status(404).json({
      status: 404,
      message: 'Not Found'
    });
  }