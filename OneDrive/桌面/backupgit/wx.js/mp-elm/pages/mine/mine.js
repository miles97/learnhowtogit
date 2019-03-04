// pages/mine/mine.js
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
        isHaveOrderList: false,
        ratingScoresData:{
            "cho":150,
            "egg":22,
            "other":12,
            "energy":5000,
            "fat":100,
            "na":1100,
            "ca":70,
            "vc":60,
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        togglehave: function() {
            var  isHaveOrderList = this.data.isHaveOrderList
            // this.data.isHaveOrderList = !this.data.isHaveOrderList
            this.setData({
                isHaveOrderList: !isHaveOrderList,
            })

        },
        gotoecharts:function(){
            wx.navigateTo({
                url: '../consume/consume',
            })
        },
        onLoad:function(){

        },
        onShow:function(){
            var isHaveOrderList = this.data.isHaveOrderList;
            if (isHaveOrderList) {
                // let isHaveOrderList = wx.getStorageSync("isHaveOrderList");  频繁的取值拿值有点影响性能，先用！代替
                this.setData({
                    isHaveOrderList: !isHaveOrderList,
                })
            }else{
                this.setData({
                    isHaveOrderList: isHaveOrderList,
                })
            }
        }
    },
})