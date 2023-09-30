export default function handler(req, res) {
    const email = req.body.email
    const password = req.body.password
    if (password !== 'admin' || email !== 'henriquepbalsimelli@outlook.com' ){
        res.status(401).json({ message: 'Login Inválido' })
        return
    }

    const access_token = (Math.random() + 1).toString(36).substring(7)
    res.status(200).json({ 
        message: 'Hello from Next.js!',
        access_token: access_token 
    })
} 