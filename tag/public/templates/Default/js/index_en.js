/**
 * Created by Administrator on 2017/12/29.
 */
/**
 * Created by Administrator on 2017/12/26.
 */
document.getElementById('nav_1').className = "selected";
//金价弹窗的拖拽
var box = $(".gold_price");
var contW=box.width();
var contH=box.height();
var startX,startY,sX,sY,moveX,moveY, disX, disY;
var winW=$(window).width();
var winH=$(window).height();
var win_w=document.body.clientWidth;//窗口可见宽度
box.on({//绑定事件
    touchstart: function (e) {
        startX = e.originalEvent.targetTouches[0].pageX;    //获取点击点的X坐标
        startY = e.originalEvent.targetTouches[0].pageY;    //获取点击点的Y坐标
        //console.log("startX="+startX+"************startY="+startY);
        sX = $(this).offset().left;//相对于当前窗口X轴的偏移量
        sY = $(this).offset().top;//相对于当前窗口Y轴的偏移量
        //console.log("sX="+sX+"***************sY="+sY);
        leftX = startX - sX;//鼠标所能移动的最左端是当前鼠标距div左边距的位置
        rightX = winW - contW + leftX;//鼠标所能移动的最右端是当前窗口距离减去鼠标距div最右端位置
        topY = startY - sY;//鼠标所能移动最上端是当前鼠标距div上边距的位置
        bottomY = winH - contH + topY;//鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端位置
    },
    touchmove: function (e) {
        e.preventDefault();
        moveX = e.originalEvent.targetTouches[0].pageX;//移动过程中X轴的坐标
        moveY = e.originalEvent.targetTouches[0].pageY;//移动过程中Y轴的坐标
        //console.log("moveX="+moveX+"************moveY="+moveY);
        if (moveX < leftX) {
            moveX = leftX;
        }
        if (moveX > rightX) {
            moveX = rightX;
        }
        if (moveY < topY) {
            moveY = topY;
        }
        if (moveY > bottomY) {
            moveY = bottomY;
        }
        $(this).css({
            "left": moveX + sX - startX,
            "top": moveY + sY - startY,
        });
    },
    mousedown:function (event) {
        var isMove = true;
        var abs_x = event.pageX - $('div.gold_price').offset().left;
        var abs_y = event.pageY - $('div.gold_price').offset().top;

        $(document).mousemove(function (event) {
                if (isMove) {
                    var obj = $('div.gold_price');
                    var top=event.pageY-abs_y;
                    var left=event.pageX-abs_x;
                    if(left>0 && left<win_w-270){
                        obj.css('top',event.pageY-abs_y);
                        obj.css('left',event.pageX-abs_x);
                    }
                }
            }
        ).mouseup(
            function () {
                isMove = false;
            });
    }
})
//金价获取
var myChart = echarts.init(document.getElementById('gold_trend'));
function setOp(res){
    myChart.setOption(option = {
        textStyle: {
            color: '#999'
        },
        title:{
            name:"Current gold price"
        },
        lineStyle:{
            fontSize:"10px",
            width:1,
            backgroundColor:"#EF4242",
            color:'#EF4242'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            axisLine: {show: false},
            axisTick: {
                show: false
            },
            data: res.arr.map(function (item) {
                return item.date.split(" ")[0];
            }),
            boundaryGap: false,
            backgroundColor:"#EF4242",
            splitNumber:4,
            splitLine:{

            }

        },
        grid: {
            top:'3%',
            left: '1%',
            right: '1%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            axisLine: {show: false},
// 去除y轴上的刻度线
            axisTick: {
                show: false
            },
            splitLine: {
                show: true
            },
            // show:false,
            boundaryGap: false,
            min:(Math.floor(res.min_price)),
            max:(Math.ceil(res.max_price)),
            splitNumber:4,
            scale:true,
            color:"#999"
        },
        series: [{
            name: 'Current gold price',
            type: 'line',
            animation:false,
            smooth:true,
            showSymbol: false,
            precision:2,
            data: res.arr.map(function (item) {
                return item.price;
            }),
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#EF4242',
                        width:1,
                    }
                }
            }
        }]
    })
}
var API_URL="http://erp.gold-banker.cn/index.php?g=Wechat";
function today(){
    $.ajax({
        url:API_URL+"&m=WebGoldPrice&a=oneday",
        method:"post"
    }).done(function (res) {
        $("#price").html(res.gold_price);
        setOp(res);
        myChart.setOption(option = {
            xAxis: {
                data: res.arr.map(function (item) {
                    var time=item.date.split(" ")[1];
                    time=time.split(":")[0]+":"+time.split(":")[1];
                    return time;
                })
            }
        })
    })
}
function week(){
    $.ajax({
        url:API_URL+"&m=WebGoldPrice&a=weekday",
        method:"post"
    }).done(function (res) {
        setOp(res);
        $("#price").html(res.gold_price);
    })
}
function month(){
    $.ajax({
        url:API_URL+"&m=WebGoldPrice&a=monthday",
        method:"post"
    }).done(function (res) {
        setOp(res);
        $("#price").html(res.gold_price);
    })
}
today();
$(".nav-bars .nav").click(function(){
    if($(this).hasClass("active")){
        return false
    }
    else{
        $(".nav-bars .nav").removeClass("active");
        $(this).addClass("active");
        if($(this).hasClass("today")){
            today();
        }
        else if($(this).hasClass("weekday")){
            week();
        }
        else if($(this).hasClass("monthday")){
            month();
        }
    }
})