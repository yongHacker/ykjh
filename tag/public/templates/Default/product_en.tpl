{include header_en.tpl}
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/en_chanpin1.jpg">
    </div>
</div>

<div class="helpBox clearfix">

    <div class="helpBd" ></div>
    <ul class="helpSubNav" id="helpSubNav">
        <li style="clear: none;width: 200px;height: 126px;"><img style="padding-top: 30px;padding-left: 57px" src="{$t_url}/slices/logo_s.png"></li>
        <li style="clear: none;width: 200px;text-align: center;padding-top: 0px;font-size: 20px;color: #D02121;">Product introduction</li>
        {foreach $article AS $p}
            <li style="font-size: 16px; color: #000000; margin-top: 5px; cursor: pointer;">
                <a title="{$p.title_en}" href="{PURL('product?id=' . $p.a_id)}">
                    <div id="{$p.a_id}" class="{$p.selected}"></div>
                    <div style="margin-left: 30px;">{$p.title_en}</div>
                </a>
            </li>
        {/foreach}
    </ul>
    <div class="jinright">
        {$art}
    </div>
</div>
<script src="{$t_url}/js/common.js" type="text/javascript"></script>
<script>
    document.getElementById('nav_3').className = "selected";
</script>
{include footer_en.tpl}