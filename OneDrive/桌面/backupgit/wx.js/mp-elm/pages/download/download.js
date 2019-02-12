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
                title: "正在保存中",
                icon: 'loading',
                duration: 2000,
              })
      }
  }
})
