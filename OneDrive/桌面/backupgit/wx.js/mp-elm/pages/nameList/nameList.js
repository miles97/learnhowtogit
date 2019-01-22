// pages/nameList/nameList.js
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
    userInfo: {},
    nameList:{
      "locationName": "佳都大厦", 
      "what": [{ 
      "name": "杨国福", 
      "price": 3,
      "start":20
          }, { 
      "name": "张亮麻辣烫", 
      "price": 3,
      "start": 20
          }, {
      "name": "觅姐的麻辣烫", 
      "price": 3,
      "start": 20
      }]
    },
    hasUserInfo: false,
    geoinfoList:"请选择地区",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoSearch:function(){
      wx.switchTab({
        url: '../fillterList/fillterList',
      })
    },
    gotoShop:function(){
      wx.navigateTo({
        url: '../itemDetail/itemDetail',
      })
    },
    getUserInfo:function(e){
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    gotomap:function(){
      wx.navigateTo({
        url: '../mapStatus/mapStatus',
      })
    },
    onLoad: function () {

      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
      let geoinfo = wx.getStorageSync("geoinfo");
      this.data.geoinfoList = geoinfo.name;
        this.setData({
          geoinfoList:geoinfo.name,
        })
    },
    onShow:function(){
      let geoinfo = wx.getStorageSync("geoinfo");
      this.data.geoinfoList = geoinfo.name;
      this.setData({
        geoinfoList: geoinfo.name,
      });
      this.init();
    },
    init: function(){
      this.onLoad();
    },
    // onHide:function(){
    //   let geoinfo = wx.getStorageSync("geoinfo");
    //   this.data.geoinfoList = geoinfo.name;
    //   this.setData({
    //     geoinfoList: geoinfo.name,
    //   })
    // }
  }
})
