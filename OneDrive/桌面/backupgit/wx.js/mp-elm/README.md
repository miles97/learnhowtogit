# 项目数据接口来自bailicangdu的elm社区开源项目elm-node

[elm](http://elm.cangdu.org/)

```
03.优化mapstatus里面的http请求，集成到service里面，用分离的方式减少请求的冗余性
04.关于报表页面的设计以及详细实现
体现出主要的功能以及其他内容。日报周报月报等
然后发现饮食中的存在问题检测的提示语，设置主要的逻辑，检测。
最后关于现成接口的使用问题。
05.其他优化建议，关于界面的重新设计以及排版，体现轻食以及健康的新特性。
06.对于一些影响小程序体验评分的优化建议，setData以及setStorage等代码优化。
07.对于JS代码的精简优化方法。
08.对于echarts的字段修改以及修改新数组的全局生成
09.搜索页面 通过id, 跳转到itemDetail页面，实现搜索功能
10.对于一些触摸跳转样式，添加hover-class，提供交互反馈
11.将一些错误信息通过显示模态对话框的方式表现出来，不直接添加到Virtualdom里面
12.关于主题颜色选取#f4b92c；
13.关于布局的问题，display:flex;等等
14.关于首页布局的问题
15.条件判断登录以及拿取地理位置的逻辑，如果没有地理位置，请返回首页进行地理位置定位。如果没有用户信息，无法完成确认订单操作。
16.系统推荐功能实现
```

2019年2月28日
## 更新了营养价值计算器的设计。

2019年3月1日16:27:59
## 更新了对于搜索店铺接口的支持，由于微信小程序内置地图的问题，目前还未能进行调试。

2019年3月4日10:22:45

## 更新对于NRV计算器页面的相关要求以及研究相应的数据计算以及代码实现，再考虑其他页面的组件引用

2019年3月4日15:47:47

## 完成NRV.wxs组件的编写以及成功复用至mine.wxml中

2019年3月5日14:47:52

## 更新了搜索店铺的相关内容，还未对样式进行调整。

2019年3月6日10:35:26
## 调整了搜索店铺的样式问题

2019年3月6日10:48:07

## 添加了关于订单的显示页面,完成了相应的样式调整，直接沿用fillterList的相关样式结构，增加border-radius

2019年3月7日13:57:22

## 取消使用hover-class由于样式匹配问题

2019年3月11日11:10:04

## 更新了关于banner点击即进入随机商家id的列表页

2019年3月11日13:47:27

## 更新了关于条件判断用户信息以及地理位置信息的逻辑

2019年3月11日16:28:22

## 更新了对于随机时间显示小于10的统一方法，设置为10

2019年3月12日09:17:04

## 更新了关于统一获取接口的问题(failed)

2019年3月12日16:55:29

## 更改统一主题颜色以及相应样式微调

2019年3月13日09:27:49

## 关于首页是页面的显示的主要逻辑 ad页面 推荐算法渲染页面 固定页面,
直接使用wx:if条件判断相应食物的评分含量，然后通过接口返回数据
（新用户逻辑通过else直接随机推荐，登录过用户通过条件判断缺少的营养物质，然后通过set存储,在首页渲染时取出，然后通过wx:if条件筛选两个数值，达到推荐的主要逻辑）

## 通过一些食品分析API检测相关的内容，完成推荐或者科普(still 前后端分离)


2019年3月18日16:06:57

## 根据vue学习成果重构部分代码(将部分代码独立)

2019年3月18日16:21:06

## 更新商店评价功能以及完成接口

2019年3月19日17:04:33

## 更新店铺评价错误信息处理

2019年3月20日15:00:36

## 更新关于重构页面样式的部分代码
## 考虑更改首页店铺显示为渲染列表

## 更新关于项目的重构计划