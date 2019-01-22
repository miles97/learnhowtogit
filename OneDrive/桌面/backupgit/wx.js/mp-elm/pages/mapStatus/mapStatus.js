Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [],
    covers: [],
    msiteTitle:"当前位置",
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap');
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        var geohash= res.latitude + "," + res.longitude;
        wx.setStorageSync("geohash", geohash);
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  getback: function (params){
    let geohash = wx.getStorageSync("geohash");
    return new Promise((resolve, reject) => {
    return wx.request({
      url: 'http://elm.cangdu.org/v2/pois/' + geohash,
      success(res) {
        if (res.success == false) {
          reject(res.data.msg)
        } else {
          resolve(res.data);
          var geoinfo=res.data;
          console.log(res.data.name);
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
  onLoad:function(){
    var geoinfo = wx.getStorageSync("geoinfo");
    this.data.msiteTitle=geoinfo;
    this.setData({
      msiteTitle:geoinfo,
    })
  }
})
