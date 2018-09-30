<!DOCTYPE HTML>

<head>
    <title>GOLDBANK</title>
    <meta name="viewport" content="width=1200">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="{$t_url}/en/css/base.css" rel="stylesheet">
    <link href="{$t_url}/en/css/style.css?v=0.003" rel="stylesheet">
    <link href="{$t_url}/en/css/member.css" rel="stylesheet">
    <link href="{$t_url}/en/css/index.css" rel="stylesheet">
    <script src="{$t_url}/en/js/jquery.js"></script>
    <script src="{$t_url}/en/js/jquery.flexslider-min.js"></script>

    <link href="{$t_url}/en/css/header.css" rel="stylesheet">
    <link href="{$t_url}/en/css/tail.css" rel="stylesheet">

    <script src="{$t_url}/en/js/commonJS/jquery.accordion.js"></script>
    <script src="{$t_url}/en/js/superslide.2.1.js"></script>

    <script src="{$t_url}/en/js/sea.js"></script>
    <script src="{$t_url}/en/js/seajs-text.js"></script>
</head>
<div id="header">
    <!--S 头部信息显示-->
    <div id="header_info">
        <div  class="clearfix header_top">
            <div class="welcom-yongshen">
                <span >HELLO,WELCOME TO YONG KUN GOLD BANK!</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            </div>

            <div class="zhaoshang-tel">
                <span class="zhaoshang-phone-title"> HOT LINE: </span>
                <span class="zhaoshang-phone"> 400-881-9958</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="cn" onclick="chinese()" title="Enter to Chinese" style="cursor:pointer;">中文</span>&nbsp;&nbsp;|
                <span id="en" onclick="english()" title="切换到英文站"  style="cursor:pointer;">English</span>
            </div>
            <div class="tel-logo">
                <img src="{$t_url}/images/tele.png">
            </div>

        </div>
    </div>

<div class="header_con_wrapper">

    <div class="header_con " style="width:1300px">
        <div class="logo">
            <a href="{PURL('index')}"><img src="{$t_url}/en/image/logo.png"></a>
        </div>
        <ul class=" caa">
           <li id="nav_1" ><a  href="{PURL('index')}">HOME PAGE</a></li>
            <li id="nav_2">
                <a href="{PURL('project')}">PROJECT INTRODUCTION</a>
            </li>
            <li id="nav_3">
                <a href="{PURL('product')}"> PRODUCT INTRODUCTION</a>
            </li>
           <li id="nav_5">
                 <a href="{PURL('joinus')}">JOIN US</a>
           </li>
            <li id="nav_4">
                <a href="{PURL('news')}"> MARKET NEWS</a>
            </li>

            {*<li id="nav_6">
                <a href="{PURL('operation')}">OPERATION CENTER</a>
            </li>*}
            <li id="nav_7">
                <a href="{PURL('profile')}">ABOUT US</a>
            </li>
        </ul>
    </div>
</div>
</div>
<script>
    function chinese(){
        setCookie('{echo COOKIE_KEY}lang', 'Chinese', "s30");
        document.location=window.location.href.replace(/#[\w]*/ig, '');
//        document.getElementById("cn").style.fontcolor = '#000';

    };

    function english(){
        setCookie('{echo COOKIE_KEY}lang', 'English', "s30");
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