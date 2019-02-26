// pages/confirmOrder/confirmOrder.js
Component({

    data: {
        hour: Math.floor(Math.random() * 24),
        minute: Math.floor(Math.random() * 60),
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
        },
        onShow: function() {
            let geoinfo = wx.getStorageSync("geoinfo");
            if (geoinfo != null) {
                var geoinfoList = this.data.geoinfoList;
                geoinfoList = geoinfo.name;
                this.setData({
                    geoinfoList: geoinfoList,
                });
                //   this.init();
            } else {

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
        }
    }
})