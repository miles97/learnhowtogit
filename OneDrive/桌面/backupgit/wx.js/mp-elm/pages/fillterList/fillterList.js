import commonService from '../../utils/service/common.service.js';
Page({
    data: {
        searchList: {},
        shopName: '',
        extromessage: "",
        foodsList: {},
        isHaveList: false, //未使用
        imgUrl: "https://elm.cangdu.org/img/",
    },
    shopNameInput: function(e) {
        this.setData({
            shopName: e.detail.value,
        })
    },
    gotosearch: function(e) {
        console.log(this.data.shopName);
        this.getSearchList();
    },
    getSearchList: function() {
        let geohash = wx.getStorageSync("geohash");
        let keyword = this.data.shopName;
        let data = {
            geohash: geohash,
            keyword: keyword,
        }
        commonService.getSearchList(data).then(res => {
            this.data.searchList = res
            let arr1 = []
            // res.forEach((item, index) => {
            //     arr1.push(item)
            // })
            if (res.message) {
                // console.log(res);
                this.setData({
                    extromessage: res.message,
                })
            } else {
                var searchList = this.data.searchList;
                this.setData({
                    searchList: res,
                    foodsList: res,
                    extromessage: null, //重置提示数据，防止显示
                    isHaveList: false,  //重置提示数据，防止显示
                })
                console.log(searchList);
                if (searchList.length===0){
                    this.setData({
                        isHaveList:true,
                    })
                }
            }
        })

    },
    gotoFiveStore: function(e) {
        console.log(e);
        var restaurant_id = e.currentTarget.dataset.value;
        var shopname = e.currentTarget.dataset.name;
        wx.setStorageSync("restaurant_id", restaurant_id);
        wx.setStorageSync("shopname", shopname);
        wx.navigateTo({
            url: '../itemDetail/itemDetail',
        })
    },
    onLoad: function(options) {},
})