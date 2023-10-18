import { UserRepository } from "@/repository/Users/UserRepository";
import { generateHash } from "@/src/utils/tools";


const controllers = {
    async updateUser(req, res) {
        const { body } = req;
        const { email, password, name, id } = body;

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

        const hashedPassword = await generateHash(password)
        const updateData = {
            name: name,
            email: email,
            id: id
        }
        if (password !== null && hashedPassword != existingUser.password) {
          updateData['password'] = hashedPassword
        }

        console.log(updateData)

        //const user = await UserRepository.updateUser(updateData)

        res.status(200).json({ 
            message: 'FOI'
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