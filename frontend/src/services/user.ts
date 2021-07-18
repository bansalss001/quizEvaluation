import { GET_USER, NEW_USER } from "../helpers/apiRoutes";
import { getApi, postApi } from "../helpers/request";

export class UserService {
    createUser(name: string) {
        return postApi(NEW_USER, {
            name
        })
    }    

    getUserInfo(id: string) {
        return getApi(GET_USER.replace('{:id}', id))
    }
}