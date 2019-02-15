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
      "name": "健康轻食捞烫", 
      "price": 3,
      "start":20
          }, { 
      "name": "大步大骨浓汤麻辣烫", 
      "price": 3,
      "start": 20
          }, {
      "name": "清汤小面", 
      "price": 3,
      "start": 20
      }]
    },
    hasUserInfo: false,
    geoinfoList:"请选择地址",
      shopname:""
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
    gotoShop:function(e){
    var shopname = e.target.dataset.id;
    // console.log(shopname),
    wx.setStorageSync("shopname", shopname);
    // console.log(e.target.dataset.value);
    var restaurant_id =e.target.dataset.value + 4;
        wx.setStorageSync("restaurant_id", restaurant_id);

    wx.navigateTo({
        url: '../itemDetail/itemDetail',
    })
    },
    getUserInfo:function(e){

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

    },
    onShow:function(){
    let geoinfo = wx.getStorageSync("geoinfo");
    if (geoinfo!=null){
        var geoinfoList = this.data.geoinfoList;
        geoinfoList = geoinfo.name;
        this.setData({
            geoinfoList: geoinfoList,
        });
        this.init();
    }else{
        
    }
    },
    init: function(){
      this.onLoad();
    },

  }
})
