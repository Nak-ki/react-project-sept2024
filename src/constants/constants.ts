const baseURL = 'https://dummyjson.com'

const auth = '/auth'
const users = '/users'
const recipes ='/recipes'

const urls = {
    auth: {
        login: `${auth}/login`,
        me: `${auth}/me`
    },
    users: {
        getUsers: (skip: number): string => `${auth}${users}?skip=${skip}`,
        getById: (id:number): string => `${auth}${users}/${id}`,
        searchUser: (query: string): string => `${auth}${users}/search?q=${query}`
    },
    recipes: {
        getRecipes: (skip: number): string => `${auth}${recipes}?skip=${skip}`,
        getById: (id:number): string => `${auth}${recipes}/${id}`,
        searchRecipes: (query: string): string => `${auth}${recipes}/search?q=${query}`,
        searchByTag: (tag: string): string => `${auth}${recipes}/tag/${tag}`,
    }

}



export {
    baseURL,
    urls
}