import commonService from '../../utils/service/common.service.js';

Page({

    data: {
        searchList: [],
        shopName: '',
        extromessage: "",
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
            //     arr1.push(item.foods)
            // })
            if (data.success) {
                console.log(arr1);
                this.setData({
                    searchList: res,
                    foodsList: arr1,
                })
            } else {
                console.log(res.message);
                this.setData({
                    extromessage: res.message,
                })
            }

        })
    },
    onLoad: function(options) {

    },

})