$("#gold-market-a").click(function(){
	$(".gold-market").show();
	$(".gold-rent").hide();
	$("#gold-market-li").addClass("selected");
	$("#gold-rent-li").removeClass("selected");
});

$("#gold-rent-a").click(function(){
	$(".gold-rent").show();
	$(".gold-market").hide();
	$("#gold-market-li").removeClass("selected");
	$("#gold-rent-li").addClass("selected");
});