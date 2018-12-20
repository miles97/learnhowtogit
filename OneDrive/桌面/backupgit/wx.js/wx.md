# 微信小程序采坑

关于开发文档的东西不做记录，随便记录一点项目里面需要自己采坑的地方

## 关于二维数组和对象的问题,wx:for,wx:for-item,还有items??

因为后台给的数据就是一个二维数组，like this.

 {
    "data": [{
            "date": "2018-11-29",
            "auctionList": [{
                "id": 1728,
                "title": "2018-11-29 上海浦东中心"
            }]
        },
        {
            "date": "2018-11-28",
            "auctionList": [{
                "id": 1729,
                "title": "2018-11-28 成都中心"
            }, {
                "id": 1731,
                "title": "2018-11-28 武汉中心"
            }]
        }
    ],
    "success": true,
    "msg": "200",
    "extras": ""
}
当然测试用例的时候是自己先定义一个数组（可以先定义为空，然后分离数据在其他页面），
data:reportList：[{
            "date": "2018-11-29",
            "auctionList": [{
                "id": 1728,
                "title": "2018-11-29 浦东中心"
            }]
        },
        {
            "date": "2018-11-28",
            "auctionList": [{
                "id": 1729,
                "title": "2018-11-28 成都中心"
            }, {
                "id": 1731,
                "title": "2018-11-28 武汉中心"
            }]
        }
    ]，
如果用wx:for遍历对象的话获取不到对象，如果用wx:for-item的话也不能得到

所以解决方法就是用两层，先用
<view 	wx:key="index" 
		wx:for="{{reportList}}" 
		wx:for-item="reportList"
>
<view 	wx:for="{{reportList.auctionList}}" 
		wx:for-item="auctionList" 
		wx:key="index"
>{{auctionList.title}}

完成遍历

如果是一维数组的话更加简单，直接一层就可以解决问题，加上wx:key的原因只是为了增加稳定性。

## 关于e.target.dataset.value的问题

业务需要，需要将选择的内容获取到并且更新到另外一个视图，不过试了很多就
e.target.dataset.value 取到的值是无效，最后看到data-value="{{cityList}}",
在表达式里面加入自己想要取到的变量就OK。
当然，如果是简单的取数值，并不需要加上这个属性，直接可以用e.target.dataset
像是一些监听切换事件，展示页面事件。