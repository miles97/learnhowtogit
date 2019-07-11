## 代码规范笔记

### html向
项目的命名方式大概偏向于   vehicle_nav_first,包括css的命名方式
	目录结构

	project
	|__build
	|__src
		|__css
		|__html
		|	|__20160311
		|	|__20180930		//然后每个目录里面再放入相关文件，本地测试引用的实例链接用实际地址代替
		|__js
		|__image														

## html内部结构规范

# html原始模板，wap端，web端
主要的图片插入都使用css背景插入，调整样式完成适配
图片页面代码 <div class="vehicle_banner_img"></div>
外层父div <div class="vehicle_banner"></div>


## css样式操作
# 图片操作
·banner
控制大小，定位(relative)，以及撑起元素大小，overfolw:hidden,背景颜色;

·vehicle_banner_img 控制图片显示，通过Margin属性为负正确缩放显示图片,引入图片url，确定实际宽度
定位absolute;


# 具体的html实现（布局以及代码规范以及JS简单效果）
# ·滚动浏览器实现导航栏show 然后fixed在浏览器窗口
```javascript
 <script>
$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()>=$("#vehicle_nav")[0].offsetTop+$("#vehicle_nav")[0].offsetHeight){
            $('.vehicle_nav_fixed').show()
        }else{
            $('.vehicle_nav_fixed').hide()
        }
    })
    $(".logo_small").click(function () {
        $(window).scrollTop(0)   //点击返回top
    })
})
</script>
```
# ·ajax实现(一个简单手机验证码实例)
```javascript
<script>
$.ajax({ 
	url:'http://web.qq.com/financeClueInfo/sendCode',
	data:{
		//这个是用来传数据给服务器完成响应的
		cellphone:$("#phont").val()
		//传手机num到后台
	},
	beforeSend:function(){
		$("#loading").show();
	},
	type:"get",
	success:function(data){
		if (data.success) {
			showAlert("验证码发送成功")
		}else{
			showAlert(data.msg)
		}
		$("#loading").hide();

	},
	error:function(){
		alert("网络异常或服务器已断开连接");
		$("#loading").hide();
	}
})
</script>
```



## 项目提交向

svn commit 
	push 
	update


## 开发环境向
phpstudy
switchhost
webstorm

## 系统方向的想法

前端的技术栈 vue+ vue.router,vue cli构建项目

后端直接用现成的node构建，展示数据用echarts

数据库直接用mongodb+++

实际上现在已经不用数据库了  直接前后端分离使用接口 vans

+++++++++++++++++++==
