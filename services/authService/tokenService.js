import nookies from "nookies"
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_KEY = 'accessToken'
const ONE_SECOND = 1
const TEN_SECONDES = 10 * ONE_SECOND
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const THREE_HOURS = 3 * ONE_HOUR
const ONE_DAY = 24 * ONE_HOUR
const ONE_MONTH = 30 * ONE_DAY
const ONE_YEAR = 365 * ONE_DAY

const REFRESHTOKEN_EXPIRATION = '7d';

const REFRESHTOKEN_SECRET = process.env.REFRESHTOKEN_SECRET;

const ACCESSTOKEN_SECRET = process.env.ACCESSTOKEN_SECRET;

export const tokenService = {
    save(accessToken, ctx = null){
        globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken)
        nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
            path: '/',
            maxAge: ONE_YEAR,
            sameSite: 'lax'
        })
    },

    get(ctx=null){
        const cookies = nookies.get(ctx)
        return cookies[ACCESS_TOKEN_KEY]
    },

    delete(ctx=null){
        globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY)
        nookies.destroy(ctx, ACCESS_TOKEN_KEY)
    },

    async generateAccessToken(userId) {
        return await jwt.sign(
            { roles: ['user'] },
            ACCESSTOKEN_SECRET,
            { subject: `${userId}`, expiresIn: THREE_HOURS }
        );
    },

    async validateAccessToken(accessToken) {
        return await jwt.verify(accessToken, ACCESSTOKEN_SECRET);
    },

    async generateRefreshToken(userId) {
        return await jwt.sign(
            {},
            REFRESHTOKEN_SECRET,
            { subject: `${userId}`, expiresIn: REFRESHTOKEN_EXPIRATION }
        );
    },
    
    async validateRefreshToken(refreshToken) {
        return await jwt.verify(refreshToken, REFRESHTOKEN_SECRET);
    },

    async decodeToken(token) {
        return await jwt.decode(token);
    },

    isAuthenticated: async (req) => {
        const authHeader = req.headers['x-authorization'] || req.headers['authorization'] || '';
        const token = authHeader?.split(' ')[authHeader?.split(' ').length - 1];

        try {
            await authService.validateAccessToken(token);
            return true;
        } catch (err) {
            return false;
        }
    }


}