define(function(require,exports,module){
	var showTable = require('./showTable');
	var search = function(param,tpl,curId,pagerid){
		//具体日期搜索
		curId.find("#timeStatus a").click(function(){
			$(this).addClass("current").siblings().removeClass("current");
			if( $(".sInput").val() == undefined){
				var param0 = param + "time="+$(this).data("val") + "&status=" + curId.find("#status a.current").data("val") ;
			}else{
				var param0 = param + "time="+$(this).data("val") + "&status=" + curId.find("#status a.current").data("val") + "&borrowName=" + encodeURIComponent($(".sInput").val()); ;
			}
			showTable.ajaxUrl(param0,tpl,curId,pagerid);
		});

		//交易状态
		curId.find("#status a").click(function(){
			var startTime = curId.find("input[name='startTime']").val();
			var endTime = curId.find("input[name='endTime']").val();
			
			$(this).addClass("current").siblings().removeClass("current");
			if( $(".sInput").val() == undefined){
				var param0 = param + "status=" + $(this).data("val");
			}else{
				var param0 = param + "status=" + $(this).data("val") +"&borrowName=" + encodeURIComponent($(".sInput").val());
			}
			
			if (!curId.find("#fullTime").is(":hidden")){
				if(startTime !="" && startTime!="undefined" && typeof(startTime)!= "undefined"){
					param0 += "&startTime=" + startTime;
				}
				if(endTime != ""  && endTime!="undefined" && typeof(endTime)!= "undefined"){
					param0 +=  "&endTime="+ endTime;
				}
			}
			else{			
				param0 += "&time=" + curId.find("#timeStatus a.current").data("val");
			}
			showTable.ajaxUrl(param0,tpl,curId,pagerid);
		});
		
		
		//日期范围搜索
		curId.find("#searchBtn").click(function(){
			var startTime = curId.find("input[name='startTime']").val();
			var endTime = curId.find("input[name='endTime']").val();
			
			if( $(".sInput").val() == undefined || $(".sInput").val() == "")
			{
				var param0 = param + "status=" + curId.find("#status a.current").data("val");
			}
			else
			{
				var param0 = param + "status=" + curId.find("#status a.current").data("val") + "&borrowName=" + encodeURIComponent($(".sInput").val());
			}
			if(curId.find('#shortTime').is(":visible"))
			{
				param0 += "&time="+$('#timeStatus a.current').data("val");
			}
			else if(curId.find('#fullTime').is(":visible"))
			{
				param0 += "&startTime="+startTime+"&endTime="+endTime;
			}
			showTable.ajaxUrl(param0,tpl,curId,pagerid);
		});
		
		//标种标题
		var nameVal = $(".sInput").val();
		
		
		//具体日期和日期范围切换
		curId.find("#timeStatus em").click(function(){
			curId.find("#shortTime").hide();
			curId.find("#fullTime").show();
		});
		
		curId.find("#fullTime em").click(function(){
			curId.find("#fullTime").hide();
			curId.find("#shortTime").show();
		});
		
		//类型展开切换
		if(curId.find("#status a").length > 8)
		{
			curId.find("#status a:gt(7)").css("display","none");
			curId.find("#status a:lt(8)").css("display","inline-block");
			if(curId.find("#status em").length == 0){
				curId.find("#status").append('<em>更多类型&gt;&gt;</em>');
			}
		}
		else
		{
			curId.find("#status a:lt(8)").css("display","inline-block");
		}
		curId.find("#status em").live('click',function(){
			if(curId.find("#status a:gt(7)").is(':hidden'))
			{
				curId.find("#status a:gt(7)").css("display","inline-block");
				curId.find("#status em").html('&lt;&lt;默认类型');
			}
			else
			{
				curId.find("#status a:gt(7)").css("display","none");
				curId.find("#status em").html('更多类型&gt;&gt;');
			}
		});
	}
	exports.search = search;
	
	
	
	
});