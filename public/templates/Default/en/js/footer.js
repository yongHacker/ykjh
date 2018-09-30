define(function(require,exports,modlue){
	require('jquery');
	$(".backTop").on("click", function(){
		var _this = $(this);
		$('html,body').animate({ scrollTop: 0 }, 500 ,function(){
			_this.hide();
		});
	});
	$(window).scroll(function(){
		var htmlTop = $(document).scrollTop();
		if( htmlTop > 500){
			$(".backTop").show();
		}else{
			$(".backTop").hide();
		}
	});
	
});