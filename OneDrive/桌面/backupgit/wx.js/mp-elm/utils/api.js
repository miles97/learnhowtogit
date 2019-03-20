import { BASE_URL} from './config.js'

//https://github.com/bailicangdu/node-elm/blob/master/API.md#
//接口开发文档如上

export default {
  // 得到商品列表
    GET_SHOP_LIST: BASE_URL + "/shopping/v2/menu",

    GET_LOCATION_LIST: BASE_URL + "/v2/pois",
    //  + geohash

    GET_SHOP_RATING: BASE_URL + "/ugc/v2/restaurants/ratings/scores",
    //https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores

    GET_ORDER_LIST: BASE_URL + "/bos/orders",
    // https://elm.cangdu.org/bos/orders

    GET_SHOP_SEARCH: BASE_URL + "/v4/restaurants",

    GET_SHOP_LONG: BASE_URL + "/shopping/restaurants",
    
    //https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762"
}