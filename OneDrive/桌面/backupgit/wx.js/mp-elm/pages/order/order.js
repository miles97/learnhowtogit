// pages/order/order.js
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
  }
})
