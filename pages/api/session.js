import { UserRepository } from "@/repository/Users/UserRepository";
import { tokenService } from "@/services/authService/tokenService";

export async function getSessionData(token){
    try {

        await tokenService.validateAccessToken(token);
        const decodedToken = await tokenService.decodeToken(token);
    
        const user = await UserRepository.getUserById(decodedToken.sub);
        const data = {
            user: {
                username: user.name,
                email: user.email,
                coins: user.coins_qty
            },
            id: decodedToken.sub,
            roles: decodedToken.roles
        }
        return data
    }catch(err){
        console.error(err)
        throw new Error(err);
    }
}

export default async function handler(req, res) {
    const authHeader = req.headers['x-authorization'] || req.headers['authorization'] || '';
    const token = authHeader?.split(' ')[authHeader?.split(' ').length - 1];

    if (!token) return res.status(401).json({ error: { status: 401, message: 'You don\'t have credentials' } });

    try {
        const data = await getSessionData(token);
        
        if (data === null) {
            res.status(401).json({
                error: {
                    status: 401,
                    message: 'Invalid access token, please login again.',
                }
            });
        }

        res.status(200).json(data);
        

    } catch (err) {
        res.status(401).json({
            status: 401,
            message: 'Your access token is not valid, so you are not able to get a session.',
        });
    }
}