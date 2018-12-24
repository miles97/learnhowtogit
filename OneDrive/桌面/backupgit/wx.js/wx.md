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
```
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
```
如果用wx:for遍历对象的话获取不到对象，如果用wx:for-item的话也不能得到

所以解决方法就是用两层，先用
```
<view 	wx:key="index" 
		wx:for="{{reportList}}" 
		wx:for-item="reportList"
>
<view 	wx:for="{{reportList.auctionList}}" 
		wx:for-item="auctionList" 
		wx:key="index"
>{{auctionList.title}}
```
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
```
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
```
这样显然是不可行的，切换item的时候会将所有的item属性变动.
	主要思想是，在data中声明一个itemList:[],用数组的元素分别控制属性，然后用数组(wx:for)的index控制
代码修改如下
js
```javascript
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
```
其实以上代码会发现一个问题，就是点击view.dealer-number的时候，继承不了bindtap点击事件，这是因为我们的JS代码中并没有指向父元素的view，
只要改动一行代码即可，e.target.dataset.id中的target改为currentTarget,可以继承点击事件。

## 关于监听不同选择从而实现不同标签切换，或者样式的问题

其实也是关于e.currentTarget.dataset.id的问题，用wx:for-index给index赋值，然后自定义data-id="{{index}}",拿到传递的值，
通过e.target取到，再通过不同的id[0,1,2,3,4]设置不同的样式或者规则。

	if (e.target.dataset.id==0){
	      this.setData({
	       <!--  itemList: [true,true,true,true], -->
	      });
	    }else{
	      this.setData({
	        <!-- itemList: [true,,,], -->
	      });
	    }
	  },
  
	tabYieldChange: function (e) {
	let yieldRadioCheckVal = e.currentTarget.dataset.id + 1;
	this.setData({
	  yieldRadioCheckVal: yieldRadioCheckVal,
	})
	//进入全国看板
	if (yieldRadioCheckVal == 1){
	  wx.navigateTo({
	    url: '../national/national',
	  })
	}else{
	  wx.navigateTo({
	    url: '../auction_list/auction_list',
	  })
	}


wxml代码

     <!-- index-0--title -->
	  <block wx:for="{{reportList}}" wx:key="index" wx:for-index="index">
	 <view class="report-title-wrap color-white" data-id="{{index}}" bindtap="isShowItemt">
	    <view class="title">
	      <view class="common-title">
	        <view class="span color-bg-primary"></view>
	        <view class="title-wrap" wx:for="{{reportList}}" wx:for-item="reportList"
	        wx:for-index="idx" wx:if="{{idx==index}}" wx:key="index">
	        {{reportList.date}}
	        </view> 
	      </view>
	      <view class="dealer-number color-primary">
	        {{itemList[index] ? '收起' : '展开'}}
	      </view>
	    </view>
	  </view>


## 微信小程序目录解析

	|_images				//放你的图片的地方
	|
	|_pages					//页面pages
	|
	|_组件包					//引入完整组件包，如e-charts
	|
	|_utils  				//项目的公用组件目录，写本地数据，调用接口
	|
	|_app.js			    //项目的入口文件，获取登录信息，判断用户状态|注册一个小程序指定生命周期函数等|接受一个object函数参数
	|_app.wxml			    //项目的公用样式，直接用class封装，全局可用
	|_app.json			    //项目的页面展示配置,window和tabbar对象可以设置状态栏、导航条、标题、窗口背景色，后者可以设置tab的状态和样式
	|_project.config.json   //项目配置文件             


## wx:for-index  以及wx:if的用法

wx:for-index给以渲染元素的indx，在筛选一些数据的时候很好用。
例如如果后台返回了十几个数据rank排名，需要筛选前五个（这边后台给的是按照排名降序的json，所以前端不需要添加其他规则）
wx:for-index="index"  wx:if="{{index<=4}}",就可以展示前五个数据,如果需要添加其他规则，在表达式内添加即可。


### {{index}}，和 wx:for-index="index","index"的问题。

{{}}这个是微信小程序的表达式大家都知道，所以{{index}}肯定是一个含有至少一个的变量，所以在一些复杂情况下的运用就如此。
e.g.
当我们定义了wx:for-index="index"的时候，如果整个block或者view是一个循环的话，index就是一个变量，所以单独使用index是获取不到想要的值，
故使用{{index}}来获取相应的值。具体列子如上data-id="{{index}}"，不重复说明。
而"index"就是一个下标,用于划分区域。

## this.data.

