/*
 * 日期范围控件使用注意事项：
 * 1、日期范围的name：开始时间（startTime），结束时间（endTime）
 * 			  id：开始时间（startTime），结束时间（endTime）
 * 2、当一个页面有多个日期范围时（如充值提现页面）：
 * 	   日期范围的name：开始时间（startTime），结束时间（endTime）
 * 			  id：开始时间（startTime1），结束时间（endTime1）
 * 			  id：开始时间（startTime2），结束时间（endTime2），以此类推
 * */



//日期范围控件
var start = {
            elem: '#startTime',
            min: '1990-04-10 23:59:59', //设定最小日期为当前日期
            max: '2099-06-16 23:59:59', //最大日期
            istoday: false, //是否显示今天
            choose: function(datas){
                 end.min = datas; //开始日选好后，重置结束日的最小日期
                 end.start = datas //将结束日的初始值设定为开始日
            }
        };
var end = {
            elem: '#endTime',
            min: '1990-04-10 23:59:59',
            max: '2099-06-16 23:59:59',
            istoday: false,
            choose: function(datas){
                start.max = datas; //结束日选好后，充值开始日的最大日期
            }
};
laydate(start);
laydate(end);


var start1 = {
        elem: '#startTime1',
        min: '1990-04-10 23:59:59', //设定最小日期为当前日期
        max: '2099-06-16 23:59:59', //最大日期
        istoday: false, //是否显示今天
        choose: function(datas){
             end1.min = datas; //开始日选好后，重置结束日的最小日期
             end1.start = datas //将结束日的初始值设定为开始日
        }
    };
var end1 = {
        elem: '#endTime1',
        min: '1990-04-10 23:59:59',
        max: '2099-06-16 23:59:59',
        istoday: false,
        choose: function(datas){
            start1.max = datas; //结束日选好后，充值开始日的最大日期
        }
};
laydate(start1);
laydate(end1);

//设置默认值
// var time = new Date();
// var year = time.getFullYear();
// var startmonth = time.getMonth();
// var endmonth = parseInt(time.getMonth())+1;
// var day = time.getDate();
// if(parseInt(startmonth) < 10)
// {
//     startmonth = '0' + startmonth;
// }
// if(endmonth < 10)
// {
//     endmonth = '0' + endmonth;
// }
// if(parseInt(day) < 10)
// {
//     day = '0' + day;
// }
// var startTimeVal = year+'-'+startmonth+'-'+day;
// var endTimeVal = year+'-'+endmonth+'-'+day;
// document.getElementById("startTime").value = startTimeVal;
// document.getElementById("endTime").value = endTimeVal;
