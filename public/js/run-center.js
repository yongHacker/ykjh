$("#zhejiang-run-a").click(function(){
	$(".zhejiang-run").show();
	$(".quanguo-run").hide();
	$(".jiangshu-run").hide();
	
	$("#zhejiang-run-li").addClass("selected");
	$("#quanguo-run-li").removeClass("selected");
	$("#jiangshu-run-li").removeClass("selected");
});

$("#quanguo-run-a").click(function(){
	$(".zhejiang-run").hide();
	$(".quanguo-run").show();
	$(".jiangshu-run").hide();
	
	
	$("#zhejiang-run-li").removeClass("selected");
	$("#quanguo-run-li").addClass("selected");
	$("#jiangshu-run-li").removeClass("selected");
});

$("#jiangshu-run-a").click(function(){
	$(".zhejiang-run").hide();
	$(".quanguo-run").hide();
	$(".jiangshu-run").show();
	
	
	$("#zhejiang-run-li").removeClass("selected");
	$("#quanguo-run-li").removeClass("selected");
	$("#jiangshu-run-li").addClass("selected");
});