import API from '../api.js'
import HTTP from '../httpRequest.js'

export default {
  
  //车商经销商排名及拍场业务能力
  // 1、车商排名TOP10查询
  getRankMerchant(params) {
    return HTTP.request(API.RANK_MERCHANT, 'GET', params)
  },

  // 2、经销商排名TOP5查询
  getRankDealer(params) {
    return HTTP.request(API.RANK_DERLER, 'GET', params)
  },

    // 3、拍场业务能力查询
  getAuctionPlaceTop(params) {
    return HTTP.request(API.AUCTION_PLACE_TOP, 'GET', params)
  },

  // 4、测试：拿到食品列表
  getMenuList(params) {
    return HTTP.request(API.GET_SHOP_LIST, 'GET', params)
  },
  }
