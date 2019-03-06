// pages/mine/mine.js
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
        isHaveOrderList: false,
        isHaveList:false,
        ratingScoresData:{
            "cho":150,
            "egg":22,
            "other":12,
            "energy":5000,
            "fat":100,
            "na":1100,
            "ca":70,
            "vc":60,
        },
        imgUrl: "https://elm.cangdu.org/img/",
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
        getOrderList:function(){
            let data = {
                // restaurant_id: restaurant_id,
                offset:0,
                limit:20,
            }
            commonService.getOrderList(data).then(res => {
                this.data.orderList = res
               var orderList = this.data.orderList
                // let arr1 = []
                // res.forEach((item, index) => {
                //     arr1.push(item.foods)
                // })
                this.setData({
                    orderList: res,
                    isHaveList:true,
                })
                console.log(orderList);
            })
        },
        onLoad:function(){
        },
        onShow:function(){
            this.getOrderList();
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