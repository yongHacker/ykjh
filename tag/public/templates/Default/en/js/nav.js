define(function(require,exports,modlue){
	require('jquery');
	require.async('common',function(){
		//	头部导航
		$("#nav").navmenu({
			isTab: false,
			childLi:"li",
			childContent:"dl",
			hoverClassName:"hover",
			hasClassName:"active"
		});
	});
	
});