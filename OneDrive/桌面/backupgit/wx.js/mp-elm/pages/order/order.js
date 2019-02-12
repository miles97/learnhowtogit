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
    gotoinfo:function(){
        wx.switchTab({
            url: '../nameList/nameList',
        })
    },
      gotoservice:function(){
        wx.navigateTo({
            url: '../help/help',
        })
      },
    //为了在getuserinfo之前点击我的获取不到用户信息的问题
    onPullDownRefresh: function () {
        // 显示顶部刷新图标
        wx.showNavigationBarLoading();
        this.onLoad();
        setTimeout(function () {
            // 隐藏导航栏加载框
            wx.hideNavigationBarLoading();
            // 停止下拉动作
            wx.stopPullDownRefresh();
        }, 2000)
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
