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
      "name": "大补大骨浓汤麻辣烫", 
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
    shopname:"",
        imgUrls: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551764753275&di=44c87dc13399e1b8399d88ad8d242839&imgtype=0&src=http%3A%2F%2Fimg1.mukewang.com%2F5b13add4000199b412740792.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551764753275&di=557998b10ee3b35d0bcdd378c594353e&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150713%2F0470102517447764_b.jpg',
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=108828198,4240002958&fm=26&gp=0.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        circular: true,
        interval: 5000,
        duration: 1000,
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
    gotoRandom:function(){
        var restaurant_id = Math.floor(Math.random() * 10); 
        //随机生成商店id,进入商店页面
        console.log(restaurant_id);
        wx.setStorageSync("restaurant_id", restaurant_id);
        wx.navigateTo({
            url: '../itemDetail/itemDetail',
        })
    },
    gotoShop:function(e){
    var shopname = e.target.dataset.id;
    console.log(e),
    wx.setStorageSync("shopname", shopname);
    // console.log(e.target.dataset.value);
    var restaurant_id =e.target.dataset.value + 4;
        // var restaurant_id = 4103;
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
        console.log(e.detail.userInfo);
    },
    gotomap:function(){
      wx.navigateTo({
        url: '../mapStatus/mapStatus',
      })
    },
    onLoad: function () {
        //通过已集成的函数来帮助判断缺少的物质，然后通过缺少的物质完成物质的补充，达到目标。
        //
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
