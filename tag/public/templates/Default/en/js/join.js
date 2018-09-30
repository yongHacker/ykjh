$("#join-jizhi-a").click(function(){
	$(".join-jizhi-content").show();
	$(".join-flow-content").hide();
	$(".application-join-content").hide();
	
	$("#join-jizhi-li").addClass("selected");
	$("#join-flow-li").removeClass("selected");
	$("#application-join-li").removeClass("selected");
});

$("#join-flow-a").click(function(){
	$(".join-jizhi-content").hide();
	$(".join-flow-content").show();
	$(".application-join-content").hide();
	
	$("#join-jizhi-li").removeClass("selected");
	$("#join-flow-li").addClass("selected");
	$("#application-join-li").removeClass("selected");
	
});
$("#application-join-a").click(function(){
	$(".join-jizhi-content").hide();
	$(".join-flow-content").hide();
	$(".application-join-content").show();
	
	$("#join-jizhi-li").removeClass("selected");
	$("#join-flow-li").removeClass("selected");
	$("#application-join-li").addClass("selected");
	
});