$("#project-summarize").click(function(){
	$(".project-product").show();
	$(".project-background").hide();
	$("#li-background").removeClass("selected");
	$("#li-summarize").addClass("selected");
});

$("#project-background").click(function(){
	$(".project-background").show();
	$(".project-product").hide();
	$("#li-background").addClass("selected");
	$("#li-summarize").removeClass("selected");
});