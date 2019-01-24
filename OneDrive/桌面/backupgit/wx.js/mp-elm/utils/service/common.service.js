import API from '../api.js'
import HTTP from '../httpRequest.js'

export default {

  // 测试：拿到食品列表
  getMenuList(params) {
    return HTTP.request(API.GET_SHOP_LIST, 'GET', params)
  },
  }
