<?php if(!defined('ROOT')) die('Access denied.');

class c_index extends SWeb{

    public function index(){
//        $article_sql = "SELECT a_id,title";



//        $this->assign('product', $product);
//        $carousel=array();
//        $i=0;
//        foreach ($product as $p) {
//            $carousel[$i]["url"]=GetImageURL($p['path'], $p['filename']);
//            $carousel[$i]["title"]= $p['title'];
//            $i=$i+1;
//        }
//        echo "<pre>";
//        var_dump($product);
//        echo "</pre>";exit;





//        var_dump(GetImageURL($product[0]['path'], $product[0]['filename']));exit;

//        var_dump($product);exit;
        if(IS_CHINESE){
            $product = $this->db->getAll("SELECT path,filename,title FROM " . TABLE_PREFIX . "product WHERE is_show = 1 AND filename != '' AND type = 1");
            $this->assign('product',$product);
            $this->display('index.tpl');
        }else{
            $product = $this->db->getAll("SELECT path,filename_en,title_en FROM " . TABLE_PREFIX . "product WHERE is_show = 1 AND filename_en != '' AND type = 1");
//            var_dump($product);exit;
            $this->assign('product',$product);
            $this->display('index_en.tpl');
        }
	} 


}

?>