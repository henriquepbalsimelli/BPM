export default function handler(req, res) {
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password
    if (password !== 'admin' || email !== 'henriquepbalsimelli@outlook.com' ){
        res.status(401).json({ message: 'Login Inválido' })
        return
    }
    res.status(200).json({ message: 'Hello from Next.js!' })
}