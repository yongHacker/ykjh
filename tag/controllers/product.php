<?php if(!defined('ROOT')) die('Access denied.');

class c_product extends SWeb{
    public function __construct(){
        parent::__construct();

        $this->id = ForceIntFrom('id'); //当前新闻ID
    }

    public function index(){

        $id=$_GET["id"];

        //如果有新闻ID则显示新闻, 其它情况所有新闻

        if(IS_CHINESE){
            $article_sql = "SELECT a_id,title";
            $article = $this->db->getAll($article_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=3");
            if(!$id){
                $id=$article[0]["a_id"];
                $selected = 'selected';
                $article[0]['selected'] = $selected;
            }
            //如果有新闻ID则显示新闻, 其它情况所有新闻
            $art_sql = "SELECT content";
            $art = $this->db->getOne($art_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=3 AND a_id=".$id);
            $this->assign('article', $article); //分配新闻
            $this->assign('art', htmlspecialchars_decode($art["content"])); //分配新闻
            $this->display('product.tpl');
        }else{
            $article_sql = "SELECT a_id,title_en";
            $article = $this->db->getAll($article_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=3");
            if(!$id){
                $id=$article[0]["a_id"];
                $selected = 'selected';
                $article[0]['selected'] = $selected;
            }
            //如果有新闻ID则显示新闻, 其它情况所有新闻
            $art_sql = "SELECT content_en";
            $art = $this->db->getOne($art_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=3 AND a_id=".$id);
            $this->assign('article', $article); //分配新闻
            $this->assign('art', htmlspecialchars_decode($art["content_en"])); //分配新闻
            $this->display('product_en.tpl');
        }
    }
}

?>