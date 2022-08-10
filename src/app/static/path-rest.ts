import { environment } from "../../../src/environments/environment";

export class PathRest{

    //Auth
    static readonly POST_LOGIN = environment.backend+'/v1/auth/login'
    static readonly POST_LOGOUT = environment.backend+'/v1/auth/logout'

    // Products
    static readonly GET_PRODUCTS = environment.backend+'/v1/products'
    static readonly GET_PRODUCT = environment.backend+'/v1/products'

    // Buy
    static readonly GET_SHOPPING = environment.backend+'/v1/shopping'
    static readonly POST_BUY = environment.backend+'/v1/buy'

    // Users
    static readonly GET_USERS = environment.backend+'/v1/users'
    static readonly GET_USER = environment.backend+'/v1/users'
    static readonly PUT_USERS = environment.backend+'/v1/users'
    static readonly POST_USERS = environment.backend+'/v1/users'
   
}