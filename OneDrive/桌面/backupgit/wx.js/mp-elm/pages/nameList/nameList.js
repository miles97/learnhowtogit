// pages/nameList/nameList.js
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
  }
})
