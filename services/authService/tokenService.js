const ACCESS_TOKEN_KEY = 'accessToken'
import nookies from "nookies"

const ONE_SECOND = 1
const ONE_MINUTE = 60 * ONE_SECOND
const ONE_HOUR = 60 * ONE_MINUTE
const ONE_DAY = 24 * ONE_HOUR
const ONE_MONTH = 30 * ONE_DAY
const ONE_YEAR = 365 * ONE_DAY

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
        globalThis?.sessionStorage?.removeItem('accessToken')
        nookies.destroy(ctx, ACCESS_TOKEN_KEY)
    },

    async generateAccessToken(userId) {
        return await jwt.sign(
            { roles: ['user'] },
            ACCESS_TOKEN_KEY,
            { subject: userId, expiresIn: ONE_DAY }
        );
    },

    async validateAccessToken(accessToken) {
        return await jwt.verify(accessToken, ACCESSTOKEN_SECRET);
    },

    async generateRefreshToken(userId) {
        return await jwt.sign(
            {},
            REFRESHTOKEN_SECRET,
            { subject: userId, expiresIn: REFRESHTOKEN_EXPIRATION }
        );
    },
    
    async validateRefreshToken(refreshToken) {
        return await jwt.verify(refreshToken, REFRESHTOKEN_SECRET);
    },

    async decodeToken(token) {
        return await jwt.decode(token);
    }

}