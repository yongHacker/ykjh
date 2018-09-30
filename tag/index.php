<?php  
if(empty($_GET['chenzy'])){
	header("Location: http://www.gold-banker.net/");
	die;
}
define('ROOT', dirname(__FILE__).'/');  //系统程序根路径, 必须定义, 用于防翻墙

require(ROOT . 'includes/core.php');  //加载核心文件

define('APP_DEBUG',true);

// APP::setSplitFlag("-."); //pathinfo分隔符
// APP::setDebug(0); //APP默认显示调试信息, 网站完成后可取消注释此行, 发生错误时自动跳转到首页
header('X-Frame-Options: deny');
APP::run();

?> 