import { GET_AVAILABLE_TEST, GET_TEST, GET_USER_ATTEMPTS } from "../helpers/apiRoutes";
import { getApi } from "../helpers/request";

export class TestService {
    getAllTets() {
        return getApi(GET_AVAILABLE_TEST)
    }

    getTest(id: string) {
        return getApi(GET_TEST.replace('{:id}', id));
    }

    getAttempts() {
        const user_id: string = localStorage.getItem('user_id') as string;
        return getApi(GET_USER_ATTEMPTS.replace('{:uder_id}', user_id))
    }
}