// pages/help/help.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        questionId: '2',
        regionList: [{
            name: '外卖说明',
            value: '下单一律不退'
        }, {
            name: '商家投诉',
            value: '没有渠道投诉'
        }, {
            name: 'VIP说明',
            value: '在本平台下单满一万单自动成为平台会员，享受自己配送外卖等优质权益。'
        }, {
            name: '人均消费',
            value: '很贵很贵滴'
        }, {
            name: '下单说明',
            value: '点击点击，下单，下单之前请确认钱包余额是否足够。'
        }, {
            name: '意见收集',
            value: '有任何意见请直接拨打12315消费者协会热线，直接举报本平台。'
        }, {
            name: '关于数据报表',
            value: '所有数据随机生成，并不准确，请量力而行，自己判断'
        }, {
            name: '保存报表',
            value: '功能过分复杂，未能实现。'
        }],
    },

})
