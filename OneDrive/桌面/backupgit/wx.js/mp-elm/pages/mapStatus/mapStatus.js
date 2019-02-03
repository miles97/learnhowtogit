Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        markers: [],
        covers: [],
        msiteTitle: [],
    },
    onReady: function(e) {
        this.mapCtx = wx.createMapContext('myMap');
        this.moveToLocation();
    },
    onPullDownRefresh: function () {
        // 显示顶部刷新图标
        wx.showNavigationBarLoading();
        this.onLoad();
        setTimeout(function () {
            // 隐藏导航栏加载框
            wx.hideNavigationBarLoading();
            // 停止下拉动作
            wx.stopPullDownRefresh();
        }, 2000)
    },
    getCenterLocation: function() {
        this.mapCtx.getCenterLocation({
            success: function(res) {
                var geohash = res.latitude + "," + res.longitude;
                wx.setStorageSync("geohash", geohash);
            }
        });
        this.onLoad();
    },
    moveToLocation: function() {
        this.mapCtx.moveToLocation();

    },
    getback: function(params) {
        let geohash = wx.getStorageSync("geohash");
        return new Promise((resolve, reject) => {
            return wx.request({
                url: 'http://elm.cangdu.org/v2/pois/' + geohash,
                success(res) {
                    if (res.success == false) {
                        reject(res.data.msg)
                    } else {
                        resolve(res.data);
                        var geoinfo = res.data;
                        console.log(res.data.name);
                        // var msiteTitle = this.data.msiteTitle;
                        // msiteTitle.name = res.data.name;
                        // this.setData({
                        //     msiteTitle: msiteTitle,
                        // })
                        wx.setStorageSync("geoinfo", geoinfo);
                    }
                },
                fail(rejection) {
                    showToast('系统开小差了，请稍后再试')
                    reject(rejection);
                }
            })
        })

    },
    onLoad: function() {
        var geoinfo = wx.getStorageSync("geoinfo");
        this.data.msiteTitle = geoinfo;
        this.setData({
            msiteTitle: geoinfo,
        })
    }
})