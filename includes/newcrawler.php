<?php
/**
 * 抓新闻爬虫类
 * @author alam 2018-3-16
 */
class newcrawler
{
	// 构造
	public function __constuct() {

	}

	public function getContents($url)
	{
		if (!$url) return false;
		$ch = curl_init();
		curl_setopt ($ch, CURLOPT_URL, $url);
		curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, 5);
		$file_contents = curl_exec($ch);
		curl_close($ch);
		return $file_contents;
	}

	/**
	 * 获取http://24k99.fx168.com/gold/中头版新闻链接
	 * @author lzy 2018-3-15
	 * @return multitype:
	 */
	public function getGoldHeaderUrls(){
	    $url="http://24k99.fx168.com/gold/";
	    $rs=$this->getContents($url);
	    //获取轮播div
	    $preg_div='/<div\sclass=\"bd\">[\S\s]*?<ul>[\S\s]*?<\/ul>/i';
	    preg_match_all($preg_div,$rs,$rs_div);
	    //获取轮播a标签
	    $preg_a='/<a\shref=\"[\S\s]*?<\/a>/i';
	    preg_match_all($preg_a,$rs_div[0][0],$rs_a);
	    //获取轮播img标签
	    $preg_img='/<img[\S\s]*?>/i';
	    preg_match_all($preg_img,$rs_div[0][0],$rs_img);
	    
	    $arr_url=array();
	    for($i=0;$i<count($rs_a[0]);$i++){
	        //链接
	        $preg_url='/http[\S\s]*?shtml/i';
	        preg_match_all($preg_url,$rs_a[0][$i],$rs_url);
	        $arr_url['url'][]=$rs_url[0][0];
	    }
	    for($i=0;$i<count($rs_img[0]);$i++){
	        //图片
	        $preg_img='/http[\S\s]*?\"/i';
	        preg_match_all($preg_img,$rs_img[0][$i],$rs_image);
	        $rs_image=preg_replace('/\"/i','',$rs_image[0][0]);
	        $arr_url['img'][]=$rs_image;
	    }
	    $arr_url['url']=array_unique($arr_url['url']);
	    $curl=$arr_url['url'];
	    unset($arr_url['url']);
	    foreach($curl as $key => $val){
	        $arr_url['url'][]=$curl[$key];
	    }
	    return $arr_url;;
	}

	/**
	 * 通过网址获取网页新闻信息
	 * @author lzy 2018-3-15
	 * @param string $url 头版新闻链接地址
	 */
	public function getGoldHeaderNewsDetail($url){
	    $rs=$this->getContents($url);
	    $base_url_ex=explode('/', $url);
	    $base_url='';
	    foreach ($base_url_ex as $key => $val){
	        if($key<count($base_url_ex)-1){
	            $base_url.=$base_url_ex[$key].'/';
	        }
	    }
	    /*标题操作*/
	    $preg_title='/<h1\sclass=\"headline1\"[\S\s]*?<\/h1>/i';
	    //获取标题html
	    preg_match_all($preg_title,$rs,$content_title);
	    $content_title=$content_title[0][0];
	    //获取真实标题
	    $real_title=preg_replace('/<h1[\S\s]*?>/i','',$content_title);
	    $real_title=preg_replace('/<\/h1>/i','',$real_title);

	    //获取文章时间
	    $preg_time='/<b\sclass=\"shijian\"[\S\s]*?<\/b>/i';
	    preg_match_all($preg_time,$rs,$time);
	    $time=strtotime(strip_tags($time[0][0]));
	    
	    /*正文操作*/
	    $preg_main='/TRS_Editor[\S\s]*?<\/div>/i';
	    preg_match_all($preg_main,$rs,$content_main);
	    $real_main=preg_replace('/TRS_Editor>/i','',$content_main[0][0]);
	    $real_main=preg_replace('/<\/div>/i','',$real_main);
	    
	    /*去除正文中不必要的a标签*/
	    $real_main=preg_replace('/<a[\S\s]*?>/i','',$real_main);
	    $real_main=preg_replace('/<\/a>/i','',$real_main);
	    
	    /*给img标签加域名使其显示*/
	    $preg_img='/<img[\S\s]*?>/i';
	    preg_match_all($preg_img,$real_main,$content_img);
	    
	    /*获取关键字*/
	    $preg_keywords_c='/<h3>[\S\s]*?关键[\S\s]*?<\/h3>/i';
	    preg_match_all($preg_keywords_c,$rs,$content_keywords_c);
	    $preg_keywords='/<a[\S\s]*?<\/a>/i';
	    preg_match_all($preg_keywords,$content_keywords_c[0][0],$content_keywords);
	    $keywords='';
	    foreach($content_keywords[0] as $key => $val){
	        $keyword=preg_replace('/<a[\S\s]*?>/i','',$content_keywords[0][$key]);
	        $keyword=preg_replace('/<\/a>/i','',$keyword);
	        $keywords.=$keyword.',';
	    }
	    
	    $content_img_url=array();
	    foreach ($content_img[0] as $key => $val){
	        preg_match_all('/\.\/[\S\s]*?\"/i',$content_img[0][$key],$img_url);
	        /*替换url*/
	        $img_url_rep=preg_replace('/\.\//i','',$img_url[0][0]);
	        $img_url_rep=$base_url.$img_url_rep;
	        $real_main=str_replace($img_url[0][0],$img_url_rep,$real_main);
	    }
	    $result=array(
	        'title1'=>$content_title,//带h1标签的title
	        'title'=>$real_title,    //不带h1标签的title
	        'content'=>$real_main,
	        'keywords'=>$keywords,
	        'time'=>$time,
	    );
	    return $result;
	}
	
	/**
	 * 得到一条黄金子页面最新新闻的链接和图片
	 * @author lzy 2018-3-15
	 * @return array $arr
	 */
	function getGoldNewUrl(){
	    $url="http://24k99.fx168.com/gold/";
	    $rs=$this->getContents($url);
	    //获取黄金新闻的div
	    $preg_div='/newsCont_1\">[\S\s]*?<\/li>/i';
	    preg_match_all($preg_div,$rs,$rs_div);
	    //获取左边菜单栏
	    $preg_left='/<div\sclass=\"left\">[\S\s]*?<\/a><\/div>/i';
	    preg_match_all($preg_left,$rs_div[0][0],$rs_left);
	    //获取链接
	    $preg_url='/http[\S\s]*?shtml/i';
	    preg_match_all($preg_url,$rs_left[0][0],$rs_url);
	    //获取img标签
	    $preg_img='/<img[\S\s]*?>/i';
	    preg_match_all($preg_img,$rs_left[0][0],$rs_img);
	    //获取图片链接
	    $preg_image='/http[\S\s]*?\"/i';
	    preg_match_all($preg_image,$rs_img[0][0],$rs_image);
	    $img_url=preg_replace('/\"/i','',$rs_image[0][0]);
	    
	    $arr=array(
	        'url'=>$rs_url[0][0],
	        'img'=>$img_url,
	    );
	    return $arr;
	}

	public function getNew()
	{
		$arr=$this->getGoldNewUrl();
		$web_msg=$this->getGoldHeaderNewsDetail($arr['url']);
		$res['img'] = $arr['img'];
		$res['title'] = $web_msg['title1'];
		$res['keywords'] = $web_msg['keywords'];
		$res['content'] = $web_msg['content'];
		$res['time'] = $web_msg['time'];

		return $res;
	}

	public function getMain()
	{
		$arr_url=$this->getGoldHeaderUrls();
		$i=0;
		foreach($arr_url['url'] as $key=>$val){
		    $web_msg=$this->getGoldHeaderNewsDetail($arr_url['url'][$key]);
		    $res[$i]['img'] = $arr_url['img'][$key];
		    $res[$i]['title'] = $web_msg['title1'];
		    $res[$i]['keywords'] = $web_msg['keywords'];
		    $res[$i]['content'] = $web_msg['content'];
		    $res[$i]['time'] = $web_msg['time'];
		    $i++;
		}
		return $res;
	}
}
/*eg:
$crawler = new newCrawler();
$new=$crawler->getMain();
$main=$crawler->getMain();*/
?>