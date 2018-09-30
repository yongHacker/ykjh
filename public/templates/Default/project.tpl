{include header.tpl}
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/xiangmu1.png">
    </div>
</div>
<div class="helpBox clearfix">
    <!-- <h2>项目介绍</h2> -->
    <div class="helpBd" ></div>
    <ul class="helpSubNav" id="helpSubNav">
        <li style="clear: none;width: 200px;height: 126px;"><img style="padding-top: 30px;padding-left: 57px" src="{$t_url}/slices/logo_s.png">
        </li>
        <li style="clear: none;width: 200px;text-align: center;padding-top: 0px;font-size: 20px;color: #D02121;">项目介绍</li>
        {foreach $article AS $p}
        <li  id="{$p.a_id}" class="{$p.selected}"  style="font-size:16px;color:#000000; margin-top:15px;cursor: pointer;">
            <a title="{$p.title}" href="{PURL('project?id=' . $p.a_id)}">
                <em></em>{$p.title}</a>
        </li>
        {/foreach}
    </ul>

    <div class="jinright">
        <!-- 项目概况 -->
               {$art}
    </div>
</div>
<script src="{$t_url}/js/common.js" type="text/javascript"></script>
<script>
    document.getElementById('nav_2').className = "selected";
//    document.getElementsById('helpSubNav li').eq(3).className = "selected";
</script>
{include footer.tpl}
<script>
    if(window._zcms_stat)_zcms_stat("SiteID=206&Type=Article&Dest=http://localhost:10080/zcms/Services/Stat.jsp");
</script>