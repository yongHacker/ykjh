<div class="dibu">
    <div class="dibu_con">
        <div class="dibu_con1">
            <ul class="dibu_t1">
                <li class="dibu_t0">CONTACT US</li>
                <li class="dibu_t30">TELEPHONE:+86 400 881 9958</li>
                <li class="dibu_t30">E-MAIL:yk9878@qq.com</li>
                <li class="dibu_t31">ADDRESS:Building 6, no. 188 moganshan road, gongshu district, hangzhou city, zhejiang province</li>
            </ul>
            <div align="center"></div>
            <ul class="dibu_t1" style="margin-left:80px;">
                <li class="dibu_t2">FRIENDSHIP LINK</li>
                <li class="dibu_t31">
                    <div class="dibu_con30">
                        <a href="http://www.yk988.com" target="_blank">YONGKUN HOLDINGS</a>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</div>
</div>

<!-- E 首页内容  -->

<!-- JS加载文章数据 -->


<script type="text/javascript">
    $(".fullSlide").hover(function() {
                $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
            },
            function() {
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
            if(!!curLi.attr("_src")) {
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
<script>
    if(window._zcms_stat) _zcms_stat("SiteID=206&Type=Article&Dest=http://localhost:10080/zcms/Services/Stat.jsp");
</script>

<!-- Powered by loglNet(开发平台) 1.0.0.1 PublishDate 2016-07-04 15:50:21-->