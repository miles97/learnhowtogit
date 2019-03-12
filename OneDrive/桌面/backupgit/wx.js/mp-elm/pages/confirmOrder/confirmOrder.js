// pages/confirmOrder/confirmOrder.js
Component({

    data: {
        hour: Math.floor(Math.random() * 24),
        minute: Math.floor(Math.random() * 60) < 10 ? 10 : Math.floor(Math.random() * 60),
        payway: "先欠着",
    },

    /**
     * 组件的方法列表
     */
    methods: {
        gotopay: function() {
            wx.showToast({
                title: '支付中',
                icon: 'loading',
                duration: 2000,
            })
            setTimeout(function() {
                setTimeout(function() {
                    wx.switchTab({
                        url: '../mine/mine',
                    })
                }, 1000)
                wx.showToast({
                    title: '支付成功',
                    icon: 'success',
                    duration: 2000,
                })
            }, 2500)
            var isHaveOrderList = false;
            wx.setStorageSync("isHaveOrderList", isHaveOrderList);
        },
        onShow: function() {
            let geoinfo = wx.getStorageSync("geoinfo");
            console.log(geoinfo)
            if (geoinfo != null) {
                var geoinfoList = this.data.geoinfoList;
                geoinfoList = geoinfo.name;
                this.setData({
                    geoinfoList: geoinfoList,
                });
                //   this.init();
            };
            if (!geoinfo) {
                wx.showToast({
                    title: '请先登录并定位',
                    icon: "none",
                    duration: 2000,
                    image: '../../images/ding.svg'
                }),
                setTimeout(function(){
                    wx.navigateTo({
                        url: '../mapStatus/mapStatus',
                    })
                },2500)
            }
        },
        onLoad: function() {
            let add = wx.getStorageSync("add");
            let shopitemList = wx.getStorageSync("shopitemList");
            let shopname = wx.getStorageSync("shopname");
            this.setData({
                shopname: shopname,
                shopitemList: shopitemList,
                add: add,
            })
            if (!geoinfo) {
                wx.showToast({
                    title: '请先登录并定位',
                    icon: "none",
                    duration: 2000,
                    image: '../../images/ding.svg'
                }),
                    setTimeout(function () {
                        wx.navigateTo({
                            url: '../mapStatus/mapStatus',
                        })
                    }, 2500)
            }
        }
    }
})