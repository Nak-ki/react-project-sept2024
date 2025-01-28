
import {apiService} from "./apiService.ts";
import {urls} from "../constants/constants.ts";
import {IUserWithTokens} from "../interfaces/IUserWithTokens.tsx";
import {ITokenPair} from "../interfaces/ITokenPair.tsx";




const accessTokenKey = "access"
const refreshTokenKey = "refresh"

const authService = {
    async login(user: {username:string, password:string, expiresInMins:number}): Promise<IUserWithTokens> {
        const {data} = await apiService.post(urls.auth.login, user);
        this.setTokens(data)
        return data
    },
    // async refresh(): Promise<void> {
    //     const refresh = this.getRefreshToken();
    //     const {data} = await apiService.post(urls.auth.refresh, {refresh});
    //     this.setTokens(data)
    // },
    setTokens({accessToken, refreshToken}: ITokenPair): void {
        localStorage.setItem(accessTokenKey, accessToken)
        localStorage.setItem(refreshTokenKey, refreshToken)
    },
    getAccessToken(): string {
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken(): string {
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens(): void {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}

export {
    authService
}