define(function(require,exports,module){
	//分页显示函数ajaxUrl(param,tpl)
	//param:请求参数
	//tpl:语义模板
	//curId:当前需要展示的div的id  list_div
	//pagerid:当前需要展示的div中的分页id
	
	//此js专供/bond/bond.html页面使用，因其每个tpl都不同
	var ajaxUrl = function (param,tpl,curId,pagerid){
		$.ajax({
			type:'get',
			url:param,
			cache:false,
			dataType:'json',
			success:function(json){
				//异步加载数据
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var template = Handlebars.compile(tpl);
						var html = template(json);
						curId.find('.table_content').html(html);
						//鼠标经过加颜色
						curId.find("#member_table tbody tr").hover(
							 function () {
							    $(this).addClass("showTabBg");
							 },
							 function () {
							    $(this).removeClass("showTabBg");
							 }
						);
					});
				});
				//分页插件
				require.async(['/plugins/pager/pager.css','/plugins/pager/pager'],function(){
					if(json.data.page.pages > 0)
					{
						
						kkpager.generPageHtml({
								pagerid : pagerid,
								pno : json.data.page.currentPage,//当前页码
								total : json.data.page.pages,//总页码
								totalRecords : json.data.page.total,//总数据条数
								isShowFirstPageBtn	: false, 
								isShowLastPageBtn	: false, 
								isShowTotalPage 	: false, 
								isShowTotalRecords 	: false, 
								isGoPage 			: false,
								lang:{
									prePageText		: '<b>&lt;</b>',
									nextPageText	: '<b>&gt;</b>'
								},
								mode:'click',
								click:function(n){
						        	$.ajax({
						        		type:"get",
						        		url:param + "&randomTime=" + (new Date()).getTime() + "&page=" + n,
						        		dataType:"json",
						        		success:function(json){
												var template = Handlebars.compile(tpl);
												var html    = template(json);
												curId.find('.table_content').html(html);
												//鼠标经过加颜色
												curId.find("#member_table tr").hover(
													 function () {
													    $(this).addClass("showTabBg");
													 },
													 function () {
													    $(this).removeClass("showTabBg");
													 }
												);
						        		}
						        	});
									this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
								}
						});
					
					}
					else
					{
						$("#"+pagerid).html('暂无数据');
					}
				});
				
			}
		})
		
	}
	exports.ajaxUrl = ajaxUrl;
});