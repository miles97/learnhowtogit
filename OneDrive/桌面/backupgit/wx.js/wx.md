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

## 关于e.target.dataset的问题

业务需要，需要将选择的内容获取到并且更新到另外一个视图，不过试了很多次
e.target.dataset.value 取到的值都是无效，最后看到data-value="{{cityList}}",
在表达式里面加入自己想要取到的变量就OK。
当然，如果是简单的取数值，并不需要加上这个属性，直接可以用e.target.dataset
像是一些监听切换事件，展示页面事件。

## 业务场景，关于渲染数据中需要分别控制的切换按钮

业务需要，每一个渲染出来的列表里面一定有一个展开，收起按钮，单独控制渲染出来的每一列表。

原本一列切换按钮如下。
js代码
	//是否展开按钮。
	  isShowItem: function (e) {
	    this.data.item = !this.data.item;
	    this.setData({
	      item: this.data.item,
	    })
	  },
wxml代码
 <view class="dealer-number color-primary" bindtap="isShowItem">
        {{item ? '收起' : '展开'}}
        <!-- 这里是切换列表，一般来说在内容头部 -->
 </view>

 <view  wx:if="{{item}}">
<!-- {这里是需要展开的内容} -->
 </view>}

但是当我们将所有的业务列表用block wx:for渲染之后，单独切换肯定是不可行的
<block wx:for="{{listName}}">
	<view class="dealer-number color-primary" bindtap="isShowItem">
	    {{item ? '收起' : '展开'}}
	    <!-- 这里是切换列表，一般来说在内容头部 -->
	</view>
   <view  wx:if="{{item}}">
<!-- {这里是需要展开的内容} -->
   </view>
</block>
这样显然是不可行的，切换item的时候会将所有的item属性变动.
	主要思想是，在data中声明一个itemList:[],用数组的元素分别控制属性，然后用数组(wx:for)的index控制
代码修改如下
js
isShowItemt: function (e) {
var index = e.target.dataset.id;
this.data.itemList[index]=!this.data.itemList[index];
this.setData({
  itemList: this.data.itemList,
})
},
wxml
<block wx:for="{{listName}}" wx:key="index" wx:for-index="index">
	<view data-id="{{index}}" bindtap="isShowItemt"> 
		<!-- 这里担心e.target.dataset.id得不到Index，所以套了一层view,将bingtap套在父元素内的第一个子元素 -->
	<view class="dealer-number color-primary">
	    {{itemList[index] ? '收起' : '展开'}}
	    <!-- 这里是切换列表，一般来说在内容头部 -->
	</view>
   <view  wx:if="{{itemList[index]}}">
<!-- {这里是需要展开的内容} -->
   </view>
   </view>
</block>

其实以上代码会发现一个问题，就是点击view.dealer-number的时候，继承不了bindtap点击事件，这是因为我们的JS代码中并没有指向父元素的view，
只要改动一行代码即可，e.target.dataset.id中的target改为currentTarget,可以继承点击事件。