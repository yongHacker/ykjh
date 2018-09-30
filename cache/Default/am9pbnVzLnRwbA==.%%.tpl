<?php $this->display('header.tpl'); ?>
<div class="bannerbox">
    <div class="banner">
        <img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/jiameng.png">
    </div>
</div>
<div class="helpBox clearfix">
    <!-- 	<h2>招商加盟</h2> -->
    <div class="helpBd">
        <ul class="helpSubNav" id="helpSubNav">
            <li style="clear: none; width: 200px; height: 126px;"><img
                        style="padding-top: 30px; padding-left: 57px"
                        src="<?php echo $this->_tpl_vars['t_url']; ?>/slices/logo_s.png"></li>
            <li style="clear: none; width: 200px; text-align: center; padding-top: 0px; font-size: 20px; color: #D02121;">招商加盟</li>
            <?php foreach($this->_tpl_vars['article'] AS $this->_tpl_vars['p']){; ?>
                <li id="<?php echo $this->_tpl_vars['p']['a_id']; ?>" class="<?php echo $this->_tpl_vars['p']['selected']; ?>" style="font-size: 16px; color: #000000; margin-top: 15px; cursor: pointer;">
                    <a title="<?php echo $this->_tpl_vars['p']['title']; ?>" href="<?php PURL('joinus?id=' . $this->_tpl_vars['p']['a_id']); ?>">
                        <em></em><?php echo $this->_tpl_vars['p']['title']; ?></a>
                </li>
            <?php }; ?>
        </ul>

    </div>
    <div class="helpContent">
        <div class="con">
            <!-- S 右侧内容 -->
            <div class="jinright">
                <div class="join-jizhi-content"  >
                    <?php echo $this->_tpl_vars['art']; ?>
                 </div>
            </div>
        </div>
    </div>
    <input type="hidden" value="$<?php image_server_url; ?>" id="image_server_url" />
</div>

<script type="text/javascript">
   // $(".join-flow-content").hide();
    $(".application-join-content").hide();
    document.getElementById('nav_5').className = "selected";
    function getParam(paramName) {
        paramValue = "", isFound = !1;
        if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
            arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
            while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
        }
        return paramValue == "" && (paramValue = null), paramValue
    }
    document.getElementById(getParam('id')).className = "selected";
</script>
<?php $this->display('footer.tpl'); ?>