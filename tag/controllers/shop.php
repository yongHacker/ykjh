<?php
if (! defined('ROOT'))die('Access denied.');

class c_shop extends SWeb
{

    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        if(IS_CHINESE){
            $product = $this->db->getAll("SELECT path,filename,shop_name,address,address as address_cn,linkman,link FROM " . TABLE_PREFIX . "product WHERE is_show = 1 AND filename != '' AND type = 2");
            $this->assign('product',$product);
            $this->display('shop.tpl');
        }else{
            $product = $this->db->getAll("SELECT path,filename_en as filename,shop_name_en as shop_name,address_en as address,address as address_cn,linkman_en as linkman,link FROM " . TABLE_PREFIX . "product WHERE is_show = 1 AND filename_en != '' AND type = 2");
            $this->assign('product',$product);
            $this->display('shop_en.tpl');
        }
    }
}
?>