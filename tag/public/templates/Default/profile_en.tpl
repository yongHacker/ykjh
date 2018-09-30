{include header_en.tpl}
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/en_guanyu.jpg">
    </div>
</div>

<div class="helpBox clearfix">
    <!-- 	<h2>关于我们</h2> -->
    <div class="helpBd">
        <ul class="helpSubNav" id="helpSubNav">
            <li style="clear: none; width: 200px; height: 126px;"><img
                        style="padding-top: 30px; padding-left: 57px"
                        src="{$t_url}/slices/logo_s.png"></li>
            <li style="clear: none; width: 200px; text-align: center; padding-top: 0px; font-size: 20px; color: #D02121;">Company profile</li>
            {foreach $article AS $p}
               <li style="font-size: 16px; color: #000000; margin-top: 5px; cursor: pointer;">
                    <a title="{$p.title_en}" href="{PURL('profile?id=' . $p.a_id)}">
                        <div id="{$p.a_id}" class="{$p.selected}"></div>
                        <div style="margin-left: 30px;">{$p.title_en}</div>
                    </a>
                </li>
            {/foreach}
            <li  style="font-size: 16px; color: #000000; cursor: pointer;" id="company-honor-li"></li>
        </ul>
        <div class="helpContent">
            <div class="con">
                <div class="jinright">
                    {$art}
                </div>
            </div>
        </div>
    </div>
    <!-- 图片服务器地址 -->
    <input type="hidden" value="${image_server_url}" id="image_server_url" />
</div>
<script src="{$t_url}/js/common.js" type="text/javascript"></script>
<script>
    document.getElementById('nav_7').className = "selected";
</script>
{include footer_en.tpl}