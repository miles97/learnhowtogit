import commonService from '../../utils/service/common.service.js';
const app = getApp();
Component({
    data: {
        menuIndex: 0, //已选菜单索引值，默认为0
        itemChoose: true,
        showCartList: true,
        showScore: false,
        itemDetail: {
            "intro": "真好恰，你吼辣么大声干嘛!",
            "exintro": "开业期间全场骨折"
        },
        menuList: [],
        itemId: 0,
        add: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //接口返回的数据过分复杂，先造点数据嘻嘻
        num: null,
        deliveryFee: 3,
        shopname: "",
        restaurant_id: 1,
        shopitemList: [],
        userInfo: {},
        ratingDetail:{},
    },

    methods: {
        //显示商品列表
        changeshowitem: function() {
            var itemChoose = this.data.itemChoose;
            // this.data.itemChoose=!this.data.itemChoose;
            this.setData({
                itemChoose: true,
                showScore: false,
            })
        },
        //显示评价列表
        changeshowscore: function() {
            var showScore = this.data.showScore;
            // this.data.showScore = !this.data.showScore;
            this.setData({
                showScore: true,
                itemChoose: false,
            })
        },
        chooseMenu: function(e) {
            var index = e.currentTarget.dataset.id;
            var itemId = index;
            this.data.menuIndex = index;
            this.setData({
                menuIndex: index,
                itemId: index,
            })
            // console.log(e);
        },
        gotofoodDetail: function() {
            //   wx.showToast({
            //     title: "还没做好呢，别催",
            //     icon: 'none',
            //     duration: 2000,
            //   })
        },
        //minus数量
        minusCount(e) {
            // const index = e.currentTarget.dataset.index;
            // let foodsList = this.data.foodsList;
            // let arr3 = [];
            // foodsList.forEach((item, index) => {
            //     arr3.push(item.forEach((item, index) => {
            //         arr3.push(item.is_featured)
            //     }))
            // })
            // let num = arr3[index];
            // num = num++;
            // arr3[index] = num;
            // this.setData({
            //     foodsList: foodsList,
            // });
            // this.getTotalPrice();
            const index = e.currentTarget.dataset.index;
            let add = this.data.add;
            let num = add[index];
            if (num > 0) {
                num = num - 1;
                add[index] = num
                this.setData({
                    add: add,
                })
            } else {
                num = 0;
            }
        },
        // add数量
        addCount(e) {
            const index = e.currentTarget.dataset.index;
            let add = this.data.add;
            let num = add[index];
            num = num + 1;
            add[index] = num
            this.setData({
                add: add,
            })
            // console.log(e.currentTarget)
            let shopitem = e._relatedInfo.anchorRelatedText;
            var shopitemList = [];
            shopitemList.unshift(shopitem)
            this.setData({
                shopitemList: shopitemList,
            })
            wx.setStorageSync("shopitemList", shopitemList);
            wx.setStorageSync("add", add);
            // console.log(shopitemList.unshift(shopitem));
            // console.log(shopitemList);
        },

        gotopay() {
            wx.navigateTo({
                url: '../confirmOrder/confirmOrder',
            })
        },
        showCartList() {
            this.data.showCartList = !this.data.showCartList
            this.setData({
                showCartList: showCartList
            })
        },
        //初始化数据
        init: function() {
            this.getMenuList();
            this.getRatingList();
        },
        //通过接口查询食品信息
        getMenuList: function() {
            let restaurant_id = wx.getStorageSync("restaurant_id");

            let data = {
                restaurant_id: restaurant_id,
            }

            commonService.getMenuList(data).then(res => {
                this.data.menuList = res
                // foodsList = this.data.foodsList
                let arr1 = []
                res.forEach((item, index) => {
                    arr1.push(item.foods)
                })
                this.setData({
                    menuList: res,
                    foodsList: arr1,
                })
                // console.log(arr1);
            })
        },
        //通过接口查询店铺评价信息
        getRatingList: function() {
            let restaurant_id = wx.getStorageSync("restaurant_id");
            var ratingDetail = this.data.ratingDetail;
            return new Promise((resolve, reject) => {
                return wx.request({
                    url: 'https://elm.cangdu.org/ugc/v2/restaurants/' + restaurant_id +"/ratings/scores",
                    success(res) {
                        if (res.success == false) {
                            reject(res.data.msg)
                        } else {
                            resolve(res.data);
                            // ratingDetail = res.data;
                            // console.log(res.data);
                            this.setData({
                                ratingDetail: res.data,
                            })
                            // wx.setStorageSync("ratingDetail", ratingDetail);
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
            let shopname = wx.getStorageSync("shopname");
            this.setData({
                shopname: shopname,
            })
            this.init();
            // this.showCartList();
            var userInfo = this.data.userInfo;
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            });

        },
        onShow: function() {
            let shopname = wx.getStorageSync("shopname");
            this.setData({
                shopname: shopname,
            })
            this.init();
            var userInfo = this.data.userInfo;
            if (userInfo === null) {
                wx.showToast({
                        title: '请先登录',
                        icon: "none",
                        duration: 2000,
                        image: '../../images/ding.svg'
                    }),
                    setTimeout(function() {
                        wx.navigateTo({
                            url: '../nameList/nameList',
                        })
                    }, 2500)
            }
        }
    }
})