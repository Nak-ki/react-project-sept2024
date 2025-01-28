import axios from "axios";
import {baseURL} from "../constants/constants.ts";
import {authService} from "./authService.ts";

const apiService = axios.create({baseURL})

// Добавляем accessToken к запросам GET
apiService.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        const accessToken = authService.getAccessToken();

        if (accessToken) {
            requestObject.headers.Authorization = `Bearer ${accessToken}`
        }
      }
    return requestObject
})

export {
    apiService
}
