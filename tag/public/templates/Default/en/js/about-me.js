$("#company-produce-a").click(function(){
	$(".company-produce").show();
	$(".company-honor").hide();
	$(".public-kind").hide();
	$("#company-produce-li").addClass("selected");
	$("#company-honor-li").removeClass("selected");
	$("#public-kind-li").removeClass("selected");
});

$("#company-honor-a").click(function(){
	$(".company-produce").hide();
	$(".company-honor").show();
	$(".public-kind").hide();
	
	$("#company-produce-li").removeClass("selected");
	$("#company-honor-li").addClass("selected");
	$("#public-kind-li").removeClass("selected");
	
});
$("#public-kind-a").click(function(){
	$(".company-produce").hide();
	$(".company-honor").hide();
	$(".public-kind").show();
	$("#company-produce-li").removeClass("selected");
	$("#company-honor-li").removeClass("selected");
	$("#public-kind-li").addClass("selected");
});