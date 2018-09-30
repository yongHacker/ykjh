{include header_en.tpl}
<link href="{$t_url}css/index_en.css" rel="stylesheet">
<div class="fullSlide">
	<div class="bd">
		<ul>
			{foreach $product AS $car}
			<li _src="url({PrintImageURL($car.path, $car.filename_en)})" style="background:#FFFFFF center 0 no-repeat;">
				<a href="{$car.title_en}"></a>
			</li>
			{/foreach}
		</ul>
	</div>
	<span class="prev"></span>
	<span class="next"></span>
</div>
<div class="w_all">
	<div class="jinh">
		<div class="jinh_one">GOLD PRODUCT INTEGRATED SERVICE PLATFORM</div>
		<div class="jinh_two">GOLD INDUSTRY O2O INNOVATORS</div>
		<div class="jinh_two">GOLD VALUE INNOVATION SERVICE PROVIDERS</div>
		<ul class="jinh_th">
			<li class="imgl">
				<div class="imgleft"><img src="{$t_url}/en/image/n3.png">
					<div class="imgleft_name">GOLD PRODUCTS SALES PLATFORM</div>
				</div>
				<div class="imgleft_one">Famous brand special edition and delivery collection, and value maintain
				</div>
			</li>

			<li class="imgl">
				<div class="imgleft"><img src="{$t_url}/en/image/n4.png">
					<div class="imgleft_name">GOLD PRODUCT REPURCHASE BUSINESS</div>
				</div>
				<div class="imgleft_one">Idle gold assets,reinvigorates the repurchase of gold products
				</div>
				<li class="imgl">
					<div class="imgleft"><img src="{$t_url}/en/image/n5.png">
						<div class="imgleft_name">CUSTOM GOLD JEWELRY EXPERIENCE</div>
					</div>

					<div class="imgleft_one">Virtual reality, experience technology, holographic experience, high-end custom
					</div>
				</li>

				<li class="imgl">
					<div class="imgleft"><img src="{$t_url}/en/image/n6.png">
						<div class="imgleft_name">ONLINE PLATFORM AND OFFLINE EXPERIENCE</div>
						<div class="imgleft_one">Online users buy gold by cash, massive user interact on both sides.</div>
				</li>

		</ul>
		</div>
	</div>
</div>
<div class="jindian">
	<div class="jindian_bg">
		<div class="jindian1">
			<div class="jindian_t1">The experience shop of Yunkun Gold</div>
			<ul class="jindianimg">
				<li class="jindian_img1"></li>
				<li class="jindian_img1"><img src="{$t_url}/en/image/ne1.png"></li>
				<li class="jindian_img2"><img src="{$t_url}/en/image/ne2.png"></li>
				<li class="jindian_img1"><img src="{$t_url}/en/image/ne3.png"></li>

			</ul>
		</div>
	</div>
</div>

<div class="shic">
	<div class="shic_q">
		<div class="shic_img"></div>
		<div class="shic_t">
			<div class="shic_t1">
				<p>MARKET LAYOUT</p>
			</div>
			<div class="shic_t2">
				<div class="justify">Yong Kun set up (Preparatory) multi store experience gradually to the national layout, construction of Yong Kun gold O2O offline experience store network in Shenzhen, Hangzhou, Wenzhou, Shaoxing, Jinhua, Yongkang, Suzhou, Yancheng, Xuzhou, Fuzhou, Qingdao, Enshi, Ordos, and other places

				</div>
				<div class="shic_t3">
				</div>

			</div>
		</div>
	</div>
	<div class="hezuo_con">
		<div class="hezuo_img"><b>PARTNER:</b> the strength of the giant strategic alliances joint us, to build the gold industry ecosystem, to innovative gold business value.
		</div>
		<div class="hezuo_net">
			<ul >
            	<li class="img2"><img src="{$t_url}/images/t10.png"></li>
                <li class="img2"><img src="{$t_url}/images/t6.png"></li>
                <li class="img2"><img src="{$t_url}/images/t12.png"></li>
            </ul>

		</div>
	</div>
</div>
	<div class="gold_price">
	    <div class="hd">Gold Price Today</div>
	    <div class="cont">
	        <div class="gold-price">
	            <span id="price"></span><span>RMB/g</span>
	        </div>
	        <div id="gold_trend"  style="width:250px;height:160px;"></div>
	        <div class="nav-bars">
                <button class="nav today active">Today</button>
                <button class="nav weekday">Weekday</button>
                <button class="nav monthday">Month</button>
            </div>
	    </div>
	</div>
    <script src="{$t_url}js/echarts.min.js"></script>
	<script src="{$t_url}js/index_en.js"></script>
{include footer_en.tpl}