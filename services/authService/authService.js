import { HttpClient } from "@/components/infra/HttpClient/HttpClient"
import { tokenService } from "./tokenService"
import {getSessionData} from "@/pages/api/session"


const ACCESSTOKEN_SECRET = process.env.ACCESSTOKEN_SECRET;
const ACCESSTOKEN_EXPIRATION = '1d';
const REFRESHTOKEN_SECRET = process.env.REFRESHTOKEN_SECRET;
const REFRESHTOKEN_EXPIRATION = '7d';
const API_URL = process.env.API_URL;

export const authService = {
    login: async (credentials) => {
        
        const response = await HttpClient(`/api/login`, {
            method: 'POST',
            body: credentials
        })
        .then((response) => {
            if (!response.ok) {throw new Error(response.body.message)}
            tokenService.save(response.body.access_token)
            return response.body
        })
    },

    signUp: async (credentials) => {
        const response = await HttpClient(`/api/sign-up`, {
            method: 'POST',
            body: credentials
        })
        .then((response) => {
            if (!response.ok) {throw new Error(response.body.message)}
            tokenService.save(response.body.access_token)
            return response.body
        })
    },

    getSession: async (ctx) => {
        const token = tokenService.get(ctx)

        const session = await getSessionData(token)

        return session

    
    }

}