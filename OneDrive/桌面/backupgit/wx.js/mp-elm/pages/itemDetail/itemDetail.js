// pages/itemDetail/itemDetail.js
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
    showMenu: false,
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
      "exintro":"水煮，干拌，轻食麻辣烫，任你选择。"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeshowitem:function(){
      var itemChoose = this.data.itemChoose;
      // this.data.itemChoose=!this.data.itemChoose;
      this.setData({
        itemChoose: true, 
        showScore: false,
      })
    },
    changeshowscore: function () {
      var showScore = this.data.showScore;
      // this.data.showScore = !this.data.showScore;
      this.setData({
        showScore: true,
        itemChoose: false,
      })
    },

  }
})