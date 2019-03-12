// pages/VRVcompute/nrvcom.js
Page({
    data: {
        contain1: '',
        contain2: '',
        contain3: '',
        contain4: '',
        contain5: '',
        fat: '',
        energy: '',
        protein: '',
        carbohydrate: '',
        na: '',
        inputValue:null,
    },
    gotosum: function(e) {
        var num1 = this.data.contain1;
        var num2 = this.data.contain2;
        var num3 = this.data.contain3;
        var num4 = this.data.contain4;
        var num5 = this.data.contain5;
        // console.log(this.data.contain1 +','+ this.data.contain2 +','+ this.data.contain3);
        // var eggcontain = num1/60*1;
        this.setData({
            fat: Math.floor(num1 / 60 * 100) >= 0.5 ? Math.floor(num1 / 60 * 100) : "0",
            energy: Math.floor(num2 / 8400 * 100) >= 0.5 ? Math.floor(num2 / 8400 * 100) : "0",
            protein: Math.floor(num3 / 60 * 100) >= 0.5 ? Math.floor(num3 / 60 * 100) : "0",
            carbohydrate: Math.floor(num4 / 300 * 100) >= 0.5 ? Math.floor(num4 / 300 * 100) : "0",
            na: Math.floor(num5 / 2000 * 100) >= 0.5 ? Math.floor(num5 / 2000 * 100) : "0",
        })
    },
    containInput1: function(e) {
        this.setData({
            contain1: e.detail.value,
        })
    },
    containInput2: function(e) {
        this.setData({
            contain2: e.detail.value,
        })
    },
    containInput3: function(e) {
        this.setData({
            contain3: e.detail.value,
        })
    },
    containInput4: function(e) {
        this.setData({
            contain4: e.detail.value,
        })
    },
    containInput5: function(e) {
        this.setData({
            contain5: e.detail.value,
        })
    },
    onLoad: function(options) {
        
    },
    init:function(){
        this.setData({
            contain1: '',
            contain2: '',
            contain3: '',
            contain4: '',
            contain5: '',
            fat: '',
            energy: '',
            protein: '',
            carbohydrate: '',
            na: '',
            'inputValue': ''
        })
    }
    //最后的NRV算法是直接通过一个js暴露的接口调用还是直接复用组件类型的调用，以及在NRV组件中如何使用一些简单算法进行优化（实际上没什么必要）
})