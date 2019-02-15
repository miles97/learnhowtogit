// pages/confirmOrder/confirmOrder.js
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
      hour: Math.floor(Math.random() * 24),
      minute: Math.floor(Math.random() * 60),
      payway:"先欠着",
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onShow: function () {
          let geoinfo = wx.getStorageSync("geoinfo");
          if (geoinfo != null) {
              var geoinfoList = this.data.geoinfoList;
              geoinfoList = geoinfo.name;
              this.setData({
                  geoinfoList: geoinfoList,
              });
            //   this.init();
          } else {

          }
      },
      onLoad: function () {
          let shopname = wx.getStorageSync("shopname");
          this.setData({
              shopname: shopname,
          })
      }
  }
})
