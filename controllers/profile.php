<?php if(!defined('ROOT')) die('Access denied.');

class c_profile extends SWeb{
    public function __construct(){
        parent::__construct();

        $this->id = ForceIntFrom('id'); //当前新闻ID
    }
    public function index(){

        $id=$_GET["id"];



        if(IS_CHINESE){
            //如果有新闻ID则显示新闻, 其它情况所有新闻
            $article_sql = "SELECT a_id,title";
            $article = $this->db->getAll($article_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=8");
            if(!$id){
                $id=$article[0]["a_id"];
                $selected = 'selected';
                $article[0]['selected'] = $selected;
            }
            if ($id) {
                //如果有新闻ID则显示新闻, 其它情况所有新闻
                $art_sql = "SELECT content";
                $art = $this->db->getOne($art_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=8 AND a_id=".$id);
            }
        
            $this->assign('art', htmlspecialchars_decode(empty($art["content"]) ? '' : $art["content"])); //分配新闻
            $this->assign('article', empty($article) ? array() : $article); //分配新闻
            $this->display('profile.tpl');
        }else{
            //如果有新闻ID则显示新闻, 其它情况所有新闻
            $article_sql = "SELECT a_id,title_en";
            $article = $this->db->getAll($article_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=8");
            if(!$id){
                $id=$article[0]["a_id"];
                $selected = 'selected';
                $article[0]['selected'] = $selected;
            }
            if($id){
                //如果有新闻ID则显示新闻, 其它情况所有新闻
                $art_sql = "SELECT content_en";
                $art = $this->db->getOne($art_sql . " FROM " . TABLE_PREFIX . "article WHERE is_show = 1 AND cat_id=8 AND a_id=".$id);
            }
        
            $this->assign('art', htmlspecialchars_decode(empty($art["content_en"]) ? '' : $art["content_en"])); //分配新闻
            $this->assign('article', empty($article) ? array() : $article); //分配新闻
            $this->display('profile_en.tpl');
        }
    }
}
?>