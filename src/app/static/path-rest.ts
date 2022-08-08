import { environment } from "../../../src/environments/environment";

export class PathRest{

    //Auth
    static readonly POST_LOGIN = environment.backend+'/v1/auth/login'

    // Products
    static readonly GET_PRODUCTS = environment.backend+'/v1/products'
    static readonly GET_PRODUCT = environment.backend+'/v1/products'

    // Buy
    static readonly GET_SHOPPING = environment.backend+'/v1/shopping'
    static readonly POST_BUY = environment.backend+'/v1/buy'

}