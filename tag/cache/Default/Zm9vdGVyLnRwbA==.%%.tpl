<div class="dibu">
	<div class="dibu_con">
		<div class="dibu_con1">
			<ul class="dibu_t1">
				<li class="dibu_t0">联系我们</li>
				<li class="dibu_t30">电话：400-881-9958</li>
				<li class="dibu_t30">邮箱：yk9878@qq.com</li>
				<li class="dibu_t31">杭州市拱墅区莫干山路188号之江饭店6号楼</li>
			</ul>
			<div align="center"></div>
			<ul class="dibu_t1" style="margin-left:80px;">
				<li class="dibu_t2">友情链接</li>
				<li class="dibu_t31">
					<div align="center"><a href="http://www.yk988.com" target="_blank">永坤控股</a></div>
				</li>
				<li class="dibu_t31">
					<div align="center"><a href="https://yongkunzhubao.tmall.com/?spm=a1z10.1-b.w5001-10112838750.3.m6N8vN&scene=taobao_shop" target="_blank">天猫旗舰店</a></div>
				</li>
				<li class="dibu_t31">
					<div align="center"><a href="http://yongkun.jd.com/" target="_blank">京东旗舰店</a></div>
				</li>
			</ul>
			<ul class="dibu_t1" style="margin-left:88px;">
				<li class="dibu_t2">加盟热线</li>
				<li class="dibu_t4" style="color: white;">400-881-9958</li>
			</ul>
			<ul class="dibu_t1" style="margin-left:90px;">
				<li class="dibu_t5">关注我们</li>
				<img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/n9.png" alt="" >
			</ul>
		</div>
	</div>
	<div style="clear: both;"></div>
	<hr class="mark-hr" />
	<div class="mark-number">
		<div align="center">
			<p>Copyright © 2018 永坤金行　版权所有　　粤ICP备16080807号　 </p>
		</div>
	</div>
</div>
<!-- E 首页内容  -->

<!-- JS加载文章数据 -->
<!--#include virtual="include/footer_0.html"-->

<script type="text/javascript">
	$(".fullSlide").hover(function(){
				$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
			},
			function(){
				$(this).find(".prev,.next").fadeOut()
			});
	$(".fullSlide").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		effect: "fold",
		autoPlay: true,
		autoPage: true,
		trigger: "click",
		startFun: function(i) {
			var curLi = jQuery(".fullSlide .bd li").eq(i);
			if ( !! curLi.attr("_src")) {
				curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
			}
		}
	});
</script>

	<script>
		var _hmt = _hmt || [];
		(function() {
		  var hm = document.createElement("script");
		  hm.src = "https://hm.baidu.com/hm.js?be6854d391867242d4f9afc54263dd56";
		  var s = document.getElementsByTagName("script")[0]; 
		  s.parentNode.insertBefore(hm, s);
		})();
	</script>

</body>
</html>
<script src="http://localhost:10080/zcms/Services/Stat.js" type="text/javascript"></script>
<script>
	if(window._zcms_stat)_zcms_stat("SiteID=206&Type=Article&Dest=http://localhost:10080/zcms/Services/Stat.jsp");
</script>

<!-- Powered by loglNet(开发平台) 1.0.0.1 PublishDate 2016-07-04 15:50:21-->