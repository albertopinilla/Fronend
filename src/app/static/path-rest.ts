import { environment } from "../../../src/environments/environment";

export class PathRest{
    static readonly POST_LOGIN = environment.backend+'/v1/auth/login'
}