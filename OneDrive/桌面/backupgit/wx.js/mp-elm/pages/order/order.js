// pages/order/order.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    username:"登录/注册",
    mobile:"请绑定手机号",
    balance:"0.00",
    count:"3",
    pointNumber:"0",
    userInfo:{},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotodownload:function(){
      wx.navigateTo({
        url: '../download/download',
      })
    },
    gotoorder:function(){
      wx.switchTab({
        url: '../mine/mine',
      })
    },
    onLoad: function () {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
  }
})
