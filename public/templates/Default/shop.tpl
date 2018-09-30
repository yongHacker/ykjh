{include header.tpl}
<link href="{$t_url}/css/shop.css" rel="stylesheet">
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/shop.jpg">
    </div>
</div>
<div class="cont">
    <div class="jinh_one">
     查找永坤店铺
    </div>
    <div class="city">
         <select name="province" class="province-select" style="margin-right:39px;">
                <option value="">-选择省份-</option>
         </select>
         <select name="city" class="city-select">
             <option value="">-选择城市-</option>
         </select>
    </div>
    <div class="city-cont">
        <ul class="shop-list-left">

        </ul>
        <div class="hr"></div>

    </div>
    <div class="page">
        <ul class="page-ul">
        </ul>
    </div>


    <div class="shop-selected">
    {if count($product)}
    <div class="fullSlide">
    	<div class="bd">
    		<ul>
    			{foreach $product AS $car}
    			<li _src="url({PrintImageURL($car.path, $car.filename)})" style="background:#FFFFFF center 0 no-repeat;">
    			    <div class="shop-hd">
                            <div class="left">
                            <span>{$car.shop_name}</span>
                            <span><i class="icon icon-shop1"></i>{$car.address}</span>
                            </div>
                            <div class="right">
                          <i class="icon icon-shop2"></i> {$car.linkman}&nbsp;{$car.link}
                            </div>
                        </div>
    				<a href="{$car.title_en}"></a>
    			</li>
    			{/foreach}
    		</ul>
    	</div>
    	<span class="prev"></span>
    	<span class="next"></span>
    </div>
    {/if}
    </div>
</div>
<script src="{$t_url}js/shop.js"></script>
{include footer.tpl}
