{include header_en.tpl}
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/en_yunying.jpg">
    </div>
</div>
<!-- S 内容 -->
<style>

</style>

<div class="helpBox clearfix">
    <div class="helpBd" ></div>
    <ul class="helpSubNav" id="helpSubNav">
        <li style="clear: none;width: 200px;height: 126px;"><img style="padding-top: 30px;padding-left: 57px" src="{$t_url}/slices/logo_s.png">
        </li>
        <li style="clear: none;width: 200px;text-align: center;padding-top: 0px;font-size: 20px;color: #D02121;">Operation center</li>
        {foreach $article AS $p}
            <li style="font-size: 16px; color: #000000; margin-top: 5px; cursor: pointer;">
                <a title="{$p.title_en}" href="{PURL('operation?id=' . $p.a_id)}">
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
</div>
<script>
    document.getElementById('nav_6').className = "selected";
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
{include footer_en.tpl}