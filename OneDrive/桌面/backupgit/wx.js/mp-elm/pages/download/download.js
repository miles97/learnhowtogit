// pages/download/download.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
      download:function(){
              wx.showToast({
                title: "还没做完 ^_^",
                icon: 'yes',
                duration: 2000,
              })
      }
  }
})
