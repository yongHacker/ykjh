<?php if(!defined('ROOT')) die('Access denied.');

class c_news extends SWeb {
    public function __construct()
    {
        parent::__construct();
        
		$this->id = ForceIntFrom('id'); //当前新闻ID
    }

    public function index() 
    {
		//如果有新闻ID则显示新闻, 其它情况所有新闻
		if($this->id){
			$this->show_new();
		}else{
			$this->show_list();
		}
	}

    /**
     * 行情新闻列表页
     */
    public function show_list()
    {
        $pagesize = empty($_GET["pagesize"]) ? 1 : ($_GET["pagesize"] < 1 ? 1 : intval($_GET["pagesize"]));
        $limit = empty($_GET["limit"]) ? 4 : ($_GET["limit"] < 1 ? 4 : intval($_GET["limit"]));

        if (IS_CHINESE) {
            $article_sql = "SELECT a_id,title,content,default_img,created,path";
            $art_sql = "SELECT content as content";
            $recommend_sql = "SELECT a_id,title,default_img,path";
        } else {
            $article_sql = "SELECT a_id,title_en as title,content_en as content,default_img_en as default_img,created,path";
            $art_sql = "SELECT content_en as content";
            $recommend_sql = "SELECT a_id,title_en as title,default_img_en as default_img,path";
        }
        $article_count_sql = "SELECT count(*) as num";
        
        $count = $this->db->getOne($article_count_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id = 7");
        $count = $count['num'];
        $page = array();
        $page['limit'] = $limit;
        $page['has_more'] = ($count > $pagesize * $limit) ? 1 : 0;
        $page['total_page'] = @ceil($count / $limit);
        $page['page'] = ($pagesize > $page['total_page']) ? $page['total_page'] : $pagesize;
        $article = $this->db->getAll($article_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id = 7 ORDER BY a_id DESC LIMIT " . ($pagesize - 1) * $limit . ',' . $limit);
        
        if (!empty($article)) {
            foreach ($article as $key => $value) {
                $article[$key]['created'] = date('Y-m-d H:i:s', $value['created']);
                if (!empty($value['path']) && !empty($value['default_img'])){
                    if ($value['path'] != 'http') {
                        $article[$key]['default_img'] = '/uploads/' . $value['path'] . '/' . $value['default_img'] . '_m.jpg';
                    }
                }
                $content = '';
                $content = strip_tags(htmlspecialchars_decode($value['content']));
                $content = str_replace("\r\n", ' ', $content);
                $content = str_replace("\t", ' ', $content);
                $content = str_replace("&nbsp;", ' ', $content);
                $content = preg_replace( "/\s(?=\s)/","\\1", $content);
                $article[$key]['content'] = $content;
            }
        }
        
        add_clicks($this->id, 'news'); //增加点击次数
        
        $recommend_all_list = $this->db->getAll($recommend_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id = 7 AND is_best = 1 ORDER BY a_id DESC"); // 推荐
        $recommend_count = count($recommend_all_list);
        if ($recommend_count >= 4) {
            $rand_key = array_rand($recommend_all_list,4);
            foreach ($rand_key as $key => $value) {
                $recommend_list[] = $recommend_all_list[$value];
            }
        } else {
            $recommend_list = $recommend_all_list;
        }
        foreach ($recommend_list as $key => $value) {
            if (!empty($value['path']) && !empty($value['default_img'])){
                if ($value['path'] != 'http') {
                    $recommend_list[$key]['default_img'] = '/uploads/' . $value['path'] . '/' . $value['default_img'] . '_m.jpg';
                }
            }
        }

        $this->assign('page', $page);
        $this->assign('article', $article);
        $this->assign('recommend', $recommend_list);

        if (IS_CHINESE) {
            $this->display('news.tpl');
        } else {
            $this->display('news_en.tpl');
        }
    }
    
    /**
     * 新闻详情
     */
    public function show_new()
    {
        if (IS_CHINESE) {
            $art_sql = "SELECT content, title, created, source";
        } else {
            $art_sql = "SELECT content_en as content, title_en as title, source_en as source, created";
        }
        $art = $this->db->getOne($art_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id = 7 AND a_id = " . $this->id);
        $art['content'] = htmlspecialchars_decode($art['content']);
        $art['created'] = date('Y-m-d H:i:s', $art['created']);
        $this->assign('art', $art);
        if (IS_CHINESE) {
            $this->display('news_detail.tpl');
        } else {
            $this->display('news_detail_en.tpl');
        }
    }
}
?>