import {IRes} from "../types/responeType.tsx";
import {IUser, IUserList} from "../interfaces/IUser.ts";
import {urls} from "../constants/constants.ts";
import {apiService} from "./apiService.ts";

export const userService = {
    getUsers: (skip:number): IRes<IUserList> => apiService.get(urls.users.getUsers(skip)),
    getById: (id: number): IRes<IUser> => apiService.get(urls.users.getById(id)),
    searchUser: (query: string): IRes<IUserList> => apiService.get(urls.users.searchUser(query))
}