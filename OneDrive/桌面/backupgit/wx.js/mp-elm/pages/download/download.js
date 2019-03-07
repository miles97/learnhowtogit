// pages/download/download.js
Component({
    data: {

    },

    methods: {
        download: function() {
            wx.showLoading({
                title: '正在保存中',
            })
            setTimeout(function(){
                wx.showToast({
                    title: '保存成功',
                    icon: "success",
                    duration: 2000,
                })
            },2000)
        }
    }
})