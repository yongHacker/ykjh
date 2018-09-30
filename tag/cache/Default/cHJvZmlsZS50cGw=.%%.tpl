<?php $this->display('header.tpl'); ?>
<div class="bannerbox">
    <div class="banner">
        <img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/guanyu.png">
    </div>
</div>

<div class="helpBox clearfix">
    <!-- 	<h2>关于我们</h2> -->
    <div class="helpBd">
        <ul class="helpSubNav" id="helpSubNav">

            <li style="clear: none; width: 200px; height: 126px;"><img
                        style="padding-top: 30px; padding-left: 57px"
                        src="<?php echo $this->_tpl_vars['t_url']; ?>/slices/logo_s.png"></li>
            <li
                    style="clear: none; width: 200px; text-align: center; padding-top: 0px; font-size: 20px; color: #D02121;">关于我们</li>
            <?php foreach($this->_tpl_vars['article'] AS $this->_tpl_vars['p']){; ?>
                <li id="<?php echo $this->_tpl_vars['p']['a_id']; ?>" class="<?php echo $this->_tpl_vars['p']['selected']; ?>" style="font-size: 16px; color: #000000; margin-top: 15px;cursor: pointer;">
                    <a title="<?php echo $this->_tpl_vars['p']['title']; ?>" href="<?php PURL('profile?id=' . $this->_tpl_vars['p']['a_id']); ?>">
                        <em></em><?php echo $this->_tpl_vars['p']['title']; ?></a>
                </li>
            <?php }; ?>
            <li  style="font-size: 16px; color: #000000; cursor: pointer;" id="company-honor-li"></li>
        </ul>
        <div class="helpContent">
            <div class="con">
                <div class="jinright">
                    <?php echo $this->_tpl_vars['art']; ?>
                </div>
            </div>
        </div>
    </div>
    <!-- 图片服务器地址 -->
    <input type="hidden" value="$<?php image_server_url; ?>" id="image_server_url" />
</div>
<script>
    document.getElementById('nav_7').className = "selected";
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