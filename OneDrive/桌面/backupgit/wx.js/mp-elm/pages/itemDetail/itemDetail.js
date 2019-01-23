// pages/itemDetail/itemDetail.js
import commonService from '../../utils/service/common.service.js';

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
    menuIndex: 0,  //已选菜单索引值，默认为0
    itemChoose: true,
    showCartList: false,
    showScore: false,
    shopDetailData:{
      "rating":5,
      "damn":40,
    },
    ratingScoresData:{
      "service_score":3,
      "food_score":3,
      "order_lead_time":20,
    },
    itemDetail:{
      "shopname":"张亮麻辣烫",
      "intro":"张亮麻辣烫，我们不一样!",
      "exintro":"开业期间全场骨折"
    },
    menuList:[],
    itemId:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示商品列表
    changeshowitem:function(){
      var itemChoose = this.data.itemChoose;
      // this.data.itemChoose=!this.data.itemChoose;
      this.setData({
        itemChoose: true, 
        showScore: false,
      })
    },
    //显示评价列表
    changeshowscore: function () {
      var showScore = this.data.showScore;
      // this.data.showScore = !this.data.showScore;
      this.setData({
        showScore: true,
        itemChoose: false,
      })
    },
    chooseMenu: function(e){
      var index = e.currentTarget.dataset.id;
      var itemId = index;
      this.data.menuIndex=index;
      this.setData({
        menuIndex: index,
        itemId: index,
      })
      // console.log(e);
    },
    gotofoodDetail:function(){
      wx.showToast({
        title: "还没做好呢，别催",
        icon: 'none',
        duration: 2000,
      })
    },
    //初始化数据
    init: function () {
      this.getMenuList();
    },
    //通过接口查询食品信息
    getMenuList:function(){
      let data={
        restaurant_id: 1,
      }
      commonService.getMenuList(data).then(res => {
        this.data.menuList = res
        this.setData({
          menuList: res,
        })
        console.log(res);
      })
    },
    onLoad:function(){
      this.init();
    }
  }
})