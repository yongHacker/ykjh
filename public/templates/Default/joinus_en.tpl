{include header_en.tpl}
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/en_jiameng.jpg">
    </div>
</div>
<div class="helpBox clearfix">
    <!-- 	<h2>招商加盟</h2> -->
    <div class="helpBd">
        <ul class="helpSubNav" id="helpSubNav">
            <li style="clear: none; width: 200px; height: 126px;"><img
                        style="padding-top: 30px; padding-left: 57px"
                        src="{$t_url}/slices/logo_s.png"></li>
            <li style="clear: none; width: 200px; text-align: center; padding-top: 0px; font-size: 20px; color: #D02121;">Join us</li>
            {foreach $article AS $p}
                <li style="font-size: 16px; color: #000000; margin-top: 5px; cursor: pointer;">
                    <a  title="{$p.title_en}" href="{PURL('joinus?id=' . $p.a_id)}">
                            <div id="{$p.a_id}" class="{$p.selected}"></div>
                            <div style="margin-left: 30px;">{$p.title_en}</div>
                    </a>
                </li>
            {/foreach}
        </ul>

    </div>
    <div class="helpContent">
        <div class="con">
            <!-- S 右侧内容 -->
            <div class="jinright">
                {$art}
            </div>
        </div>
    </div>
    <input type="hidden" value="${image_server_url}" id="image_server_url" />
</div>
<script src="{$t_url}/js/common.js" type="text/javascript"></script>
<script type="text/javascript">
    $(".join-flow-content").hide();
    $(".application-join-content").hide();
    document.getElementById('nav_5').className = "selected";
</script>
{include footer_en.tpl}