<!DOCTYPE HTML>
<html>
<head>
    <title>永坤金行</title>
    <meta name="viewport" content="width=1200">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" >
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="<?php echo $this->_tpl_vars['t_url']; ?>/css/header.css" rel="stylesheet">
    <link href="<?php echo $this->_tpl_vars['t_url']; ?>/css/base.css" rel="stylesheet">
    <link href="<?php echo $this->_tpl_vars['t_url']; ?>/css/style.css?v=0.003" rel="stylesheet">
    <link href="<?php echo $this->_tpl_vars['t_url']; ?>/css/member.css" rel="stylesheet">
    <link href="<?php echo $this->_tpl_vars['t_url']; ?>/css/index.css" rel="stylesheet">
    <script src="<?php echo $this->_tpl_vars['public']; ?>/js/jquery.js"></script>
    <script src="<?php echo $this->_tpl_vars['public']; ?>/js/jquery.flexslider-min.js"></script>
    <link href="<?php echo $this->_tpl_vars['t_url']; ?>/css/tail.css" rel="stylesheet">
    <script src="<?php echo $this->_tpl_vars['public']; ?>/js/commonJS/jquery.accordion.js"></script>
    <script src="<?php echo $this->_tpl_vars['public']; ?>/js/superslide.2.1.js"></script>
    <script src="<?php echo $this->_tpl_vars['public']; ?>/js/sea.js"></script>
    <script src="<?php echo $this->_tpl_vars['public']; ?>/js/seajs-text.js"></script>
    <style>
.bannerbox{
	width: 100%;
	position: relative;
	overflow: hidden;
	height: 252px;
}
.banner{
	width: 1920px;
	/*图片宽度*/
	position: absolute;
	left: 50%;
	margin-left: -960px;
	/*图片宽度的一半*/
}
	</style>
</head>
<div id="header">
    <!--S 头部信息显示-->
    <div id="header_info">
        <div  class="clearfix header_top">
            <div class="welcom-yongshen">
                <span >你好！欢迎来到永坤金行!</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            </div>

            <div class="zhaoshang-tel">
                <span class="zhaoshang-phone-title">  招商热线：</span>
                <span class="zhaoshang-phone"> 400-881-9958</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="cn" onclick="chinese()" title="Enter to Chinese" style="cursor:pointer;">中文</span>&nbsp;&nbsp;|
                <span id="en" onclick="english()" title="切换到英文站"  style="cursor:pointer;">English</span>
            </div>
            <div class="tel-logo">
                <img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/tele.png">
            </div>

        </div>
    </div>
    <!--E 头部信息显示-->

    <div class="header_con_wrapper">
        <div class="header_con  ">
            <div class="logo">
                <a href="<?php PURL('index'); ?>"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/logo.png"></a>
            </div>
            <ul   class=" caa">
                <li id="nav_1"><a href="<?php PURL('index'); ?>">首页</a></li>
                <li id="nav_8"><a href="<?php PURL('shop'); ?>">门店展示</a></li>
                <li id="nav_2"  onclick="nav1()">
                    <a href="<?php PURL('project'); ?>">项目介绍</a>
                </li>
                <li id="nav_3">
                    <a  href="<?php PURL('product'); ?>">产品介绍</a>
                </li>
                <li id="nav_5">
                    <a  href="<?php PURL('joinus'); ?>" >招商加盟</a>
                </li>
                <li id="nav_4">
                    <a  href="<?php PURL('news'); ?>">行情新闻</a>
                </li>

              <?php /*  <li id="nav_6">
                    <a  href="<?php PURL('operation'); ?>">运营中心</a>
                </li>*/?>
                <li id="nav_7">
                    <a  href="<?php PURL('profile'); ?>" >关于我们</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<script>

    function chinese(){
        setCookie('<?php echo COOKIE_KEY; ?>lang', 'Chinese', "s30");
        document.location=window.location.href.replace(/#[\w]*/ig, '');
//        document.getElementById("cn").style.fontcolor = '#000';

    };

    function english(){
    setCookie('<?php echo COOKIE_KEY; ?>lang', 'English', "s30");
    document.location=window.location.href.replace(/#[\w]*/ig, '');
    }
    function setCookie(name,value,time)
    {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec*1);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    function getsec(str)
    {
    //alert(str);
    var str1=str.substring(1,str.length)*1;
    var str2=str.substring(0,1);
    if (str2=="s")
    {
    return str1*1000*60;
    }
    else if (str2=="h")
    {
    return str1*60*60*1000;
    }
    else if (str2=="d")
    {
    return str1*24*60*60*1000;
    }
    }

</script>