<?php $this->display('header.tpl'); ?>

<!-- 首页顶部 start -->
<div class="fullSlide">
	<div class="bd">
		<ul>
			<?php foreach($this->_tpl_vars['product'] AS $this->_tpl_vars['car']){; ?>
				<li _src="url(<?php PrintImageURL($this->_tpl_vars['car']['path'], $this->_tpl_vars['car']['filename']); ?>)" style="background:#FFFFFF center 0 no-repeat;"><a href="<?php echo $this->_tpl_vars['car']['title']; ?>"></a></li>
			<?php }; ?>
		</ul>
	</div>
	<span class="prev"></span>
	<span class="next"></span>
</div>
<div class="w_all">
<div class="jinh">
	<div class="jinh_one">黄金产品综合服务平台</div>
	<div class="jinh_two">黄金产业O2O变革者 黄金价值创新服务商</div>
	<ul class="jinh_th">
		<li class="imgl">
			<div class="imgleft"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/n3.png">
				<div class="imgleft_name">黄金制品销售平台</div>
			</div>

			<div class="imgleft_one">知名品牌专版供货
			</div>
			<div class="imgleft_two">典藏臻品 资产保值</div>


		</li>

		<li class="imgl">
			<div class="imgleft"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/n4.png">
				<div class="imgleft_name">黄金租赁回购服务</div>
			</div>
			<div class="imgleft_one">闲置黄金资产盘活
			</div>
			<div class="imgleft_two">租赁生息 回购变现</div>
		</li>

		<li class="imgl">
			<div class="imgleft"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/n5.png">
				<div class="imgleft_name">黄金珠宝高端定制</div>
			</div>

			<div class="imgleft_one">虚拟现实体验科技
			</div>
			<div class="imgleft_two">精工制造 个性定制</div>
		</li>

		<li class="imgl">
			<div class="imgleft"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/n6.png">
				<div class="imgleft_name">线上平台线下体验</div>
			</div>

			<div class="imgleft_one">线上用户提金换购

			</div>
			<div class="imgleft_two">海量用户 双向互动</div>
		</li>

	</ul>
</div>
</div>


<div class="jindian">
	<div class="jindian_bg">
		<div class="jindian1">
			<div class="jindian_t1">永坤金行体验店</div>

			<div class="jindian_t2">线下实体店全息式体验</div>

			<ul class="jindianimg">
				<li class="jindian_img1"></li>
				<li class="jindian_img1"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/ne1.png"></li>
				<li class="jindian_img2"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/ne2.png"></li>
				<li class="jindian_img1"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/ne3.png"></li>

			</ul>
		</div>
	</div>
</div>



<div class="shic">
	<div class="shic_q">
		<div class="shic_img"></div>
		<div class="shic_t">
			<div class="shic_t1">
				<p>市场布局    </p>
			</div>
			<div class="shic_t2">
				<div align="justify">永坤金行已深圳、杭州、温州、绍兴、金华、永康、苏州、盐城、徐州、福州、青岛、恩施、鄂尔多斯等地开设（筹备）多家体验店逐步向全国布局，构建永坤金行O2O线下体验店网络。 </div>
			</div>
			<div class="shic_t3">
			</div>

		</div>
	</div>

	<div class="hezuo">
		<div class="hezuo_con">
	    	<div class="jinh_one">黄金产品综合服务平台</div>
			<div class="jinh_two">实力巨头战略联合，共同打造黄金产业生态系统，创新黄金商业价值。</div>
			<div class="hezuo_net">
				<ul >
					<li class="img2"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/t10.png"></li>
					<li class="img2"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/t6.png"></li>
					<li class="img2"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/t12.png"></li>

					<?php /*<li class="img2"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/t9.png"></li>
					<li class="img2"><img src="<?php echo $this->_tpl_vars['t_url']; ?>/images/t5.png"></li>
					*/?>
				</ul>

				<?php /*<ul >
					<li class="img3"></li>
					<li class="img3"></li>
					<li class="img3"></li>
				</ul>*/?>
			</div>
		</div>
	</div>
	<div class="gold_price">
	    <div class="hd">今日金价</div>
	    <div class="cont">
	        <div class="gold-price">
	            <span id="price"></span><span>元/克</span>
	        </div>
	        <div id="gold_trend"  style="width:250px;height:160px;"></div>
	        <div class="nav-bars">
                <button class="nav today active">今日</button>
                <button class="nav weekday">7日</button>
                <button class="nav monthday">30日</button>
            </div>
	    </div>
	</div>
	<script src="<?php echo $this->_tpl_vars['t_url']; ?>js/echarts.min.js"></script>
	<script src="<?php echo $this->_tpl_vars['t_url']; ?>js/index.js"></script>
<?php $this->display('footer.tpl'); ?>
