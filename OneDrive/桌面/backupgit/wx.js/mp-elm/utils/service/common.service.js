import API from '../api.js'
import HTTP from '../httpRequest.js'

export default {

    // 拿到食品列表
    getMenuList(params) {
        return HTTP.request(API.GET_SHOP_LIST, 'GET', params)
    },

    //拿到搜索店铺列表
    getSearchList(params) {
        return HTTP.request(API.GET_SHOP_SEARCH, 'GET', params)
    },

    //根据小程序内置地图lacation 获取gaohash数值，根据geohash数值,通过接口 查询地址位置对应地址

    //根据店铺id查询店铺具体评分内容，获取评分信息
}