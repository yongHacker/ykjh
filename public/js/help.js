define(function(require,exports,module){
	require('jquery');
	
	$(".zfsmTab tbody tr:odd").addClass("tdbg");

	$(".qaBd dt").live("click",function(){
		if($(this).parent("dl").hasClass("current"))
		{
			$(this).find("a").removeClass("qaHiden").addClass("qaShow");
			$(this).parent("dl").removeClass("current");
			$(this).siblings("dd").slideUp();
		}
		else
		{
			$(this).find("a").removeClass("qaShow").addClass("qaHiden");
			$(this).parent("dl").addClass("current");
			$(this).siblings("dd").slideDown();
		}
	});
});