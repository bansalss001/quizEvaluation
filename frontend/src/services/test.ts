import { GET_AVAILABLE_TEST, GET_TEST } from "../helpers/apiRoutes";
import { getApi } from "../helpers/request";

export class TestService {
    getAllTets() {
        return getApi(GET_AVAILABLE_TEST)
    }    

   getTest(id: string) {
       return getApi(GET_TEST.replace('{:id}', id));
   }
}