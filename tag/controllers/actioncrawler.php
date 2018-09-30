<?php
/**
 * 爬虫数据处理
 * @author Alam
 * @time 2018/3/19 9:08
 */
class c_actionCrawler extends SWeb{

    // 运行爬虫 记录数据 1-最新一条 2-头版多条
    public function index()
    {
    	if ($this->config['siteNewCrawler']) {
    		$time = time();
    		$type = $_GET['type'];
	    	$result = getNews($type);

	    	if (!empty($result)) {
	    		if ($type == 1) {
	    			$result['time'] = $result['time'] ? $result['time'] : $time;
	    			$result['title'] = rtrim(strip_tags($result['title']));
	    			$result['content'] = htmlspecialchars($result['content']);
	    			$result['source'] = 'FX168财经网';
	    			$result['source_en'] = 'FX168';
	    			$this->insertNewData($result);
	    		} else {
	    			foreach ($result as $key => $value) {
	    				$value['time'] = $value['time'] ? $value['time'] : $time;
	    				$value['title'] = rtrim(strip_tags($value['title']));
	    				$value['content'] = htmlspecialchars($value['content']);
	    				$value['content'] = mysql_real_escape_string($value['content']);
		    			$value['source'] = 'FX168财经网';
		    			$value['source_en'] = 'FX168';
	    				$this->insertNewData($value);
	    			}
	    		}
	    	}
    	}
    	die('抓包成功 数据添加结束.');
    }

    // 记录数据
    protected function insertNewData($data) 
    {
		$is_exist = $this->db->getOne('SELECT count(*) as count FROM ' . TABLE_PREFIX . "article WHERE title = '{$data['title']}'");
		if ($is_exist['count'] > 0) {
			return true;
		}
    	$this->db->exe("INSERT INTO " . TABLE_PREFIX . "article 
		(cat_id, is_show, is_best, userid, username, title, title_en, content, content_en, keywords, keywords_en, clicks, created, path, default_img, default_img_en, source, source_en) 
		VALUES 
		('7', '1', '1', '0', 'Admin', '{$data['title']}', '{$data['title']}', '{$data['content']}', '{$data['content']}', '{$data['keywords']}', '{$data['keywords']}', '0', '{$data['time']}', 'http', '{$data['img']}', '{$data['img']}', '{$data['source']}', '{$data['source_en']}') ");
		return true;
    }
}