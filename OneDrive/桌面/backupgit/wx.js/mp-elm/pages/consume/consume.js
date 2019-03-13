import * as echarts from '../../ec-canvas/echarts.min.js';

let chart = null;
let five = [];
let fivename = [];
//echarts内的变量需要全局声明


function initChart(canvas, width, height) {
    chart = echarts.init(canvas, null, {
        width: width,
        height: height
    });
    canvas.setChart(chart);

    var option = {
        color: ['#37a2da', '#32c5e9', '#67e0e3'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            confine: true
        },
        legend: {
            data: ['vt', '蛋白质', '碳水']
        },
        grid: {
            left: 15,
            right: 20,
            bottom: 15,
            top: 40,
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#666'
            }
        }],
        yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            data: fivename,
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#666'
            }
        }],
        series: [{
                name: 'vt',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
            data: five,
                itemStyle: {
                    // emphasis: {
                    //   color: '#37a2da'
                    // }
                }
            },
            {
                name: '蛋白质',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [120, 102, 141],
                itemStyle: {
                    // emphasis: {
                    //   color: '#32c5e9'
                    // }
                }
            },
            {
                name: '碳水',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [300, 500, 700],
                itemStyle: {
                    // emphasis: {
                    //   color: '#67e0e3'
                    // }
                }
            }
        ]
    };

    chart.setOption(option);
    return chart;
}


Page({
    data: {
        foodList: {
            "vt": "100",
            "carbohydrate": "8300",
            "protein": "1400",
            "energy": 1200,
            "fat": 5000,
        },
        
        showList: true,
        ec: {
            onInit: initChart
        },
        isHaveWeekOrderList: true,
    },
    init: function() {

    },
    onShow: function() {
        five = [200,300,400]
        //five数组通过二维数组的[arr][i]来设置取值。
        fivename = ['炸鸡块','大面条儿','麻辣烫']
        //在这里给five赋值，然后通过展示页面数据,fivename通过取出storage然后排进数组
        //未来的实现方向还是set get storage，在confirmorder页面获取。实际上场景只有一餐的话可以通过对比相关标准来进行衡量，
        //或者直接通过多点菜单来进行对比排列。
    },
    onReady() {
        setTimeout(function() {
            // 获取 chart 实例的方式
            //   console.log(chart)
        }, 2000);
    }
})