define(function(require,exports,modlue){
	require('jquery');
	

 
	
	
	//轮播图
	$(function(){
		require.async('./jquery.flexslider-min',function(){
			$('.flexslider').flexslider({
				directionNav: true,
				pauseOnAction: false
			});
		})
	});
	
	
	
});
