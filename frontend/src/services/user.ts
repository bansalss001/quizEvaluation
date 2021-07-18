import { GET_USER, NEW_USER } from "../helpers/apiRoutes";
import { getApi, postApi } from "../helpers/request";
import { User } from "../models/user";

export class UserService {
    async createUser(name: string) {
        const response = await postApi(NEW_USER, {
            name
        })
         // TODO: handle errors
        return response.data
    }    

    async getUserInfo(id: string): Promise<User> {
        const response = await getApi(GET_USER.replace('{:id}', id));
        // TODO: handle errors
        return response.data;
    }
}