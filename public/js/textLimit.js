(function($){
	$.fn.limitTextarea = function(opts){
		var defaults = {
			maxNumber:140,
			position:'top',
			overClass:'over',
			onOk:function(){},
			onOver:function(){}
		}
		var option = $.extend(defaults,opts);
		this.each(function(){
			var _this = $(this);
			var info = '<p class="textTip">(还可以输入<b>'+(option.maxNumber - _this.val().length)+'</b>个字！)<em>&nbsp;</em></p>';
			var fn = function(){
				var extraNumber = option.maxNumber - _this.val().length;
				if(extraNumber >= 0)
				{
					_this.next().html('(还可以输入<b>'+extraNumber+'</b>个字！)');
					_this.removeClass(option.overClass);
				}
				else
				{
					_this.next().html('(已超出<b class="extraNumber">'+extraNumber+'</b>个字！)');
					_this.addClass(option.overClass);
				}
			};
			switch(option.position)
			{
				case 'top':
				_this.before(info);
				break;
				default:
				_this.after(info);
			};
			//绑定输入事件监听器
			if(window.addEventListener) { //先执行W3C
			_this.get(0).addEventListener("input", fn, false);
			} else {
			_this.get(0).attachEvent("onpropertychange", fn);
			}
			if(window.VBArray && window.addEventListener) { //IE9
			_this.get(0).attachEvent("onkeydown", function() {
			  var key = window.event.keyCode;
			  (key == 8 || key == 46) && fn();//处理回退与删除
			});
			_this.get(0).attachEvent("oncut", fn);//处理粘贴
			}		  
		});
	}
})(jQuery)