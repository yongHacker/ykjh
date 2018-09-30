{include header.tpl}
<link href="{$t_url}/css/news.css" rel="stylesheet">
<div class="bannerbox">
    <div class="banner">
        <img src="{$t_url}/images/news.png">
    </div>
</div>


<!-- 新闻列表页 start -->
<div id="news" class="w">
	<!-- 新闻列表 start -->
	<div class="n_left">
		{*<div class="title">{$langs.news}</div>*}
		<div class="list">
			<!-- 输出错误信息 start -->
			{PrintInfo($errorinfo)}
			<!-- 输出错误信息 end -->

			<ul class="new-ul">
			{$num = 1}
			{foreach $article AS $p}
				   <li  id="{$p.a_id}" class="art_list"  style="font-size:16px;color:#000000;cursor: pointer;">
				          <div class="img" style="background:url('{$p.default_img}') no-repeat 100%"></div>
				           <div class="article-list">
                            <a title="{$p.title}" href="{PURL('news?id=' . $p.a_id)}">
                                <div class="cont">
                                    <span class="hd">{$p.title}</span>
                                    <br/><div class="content">{$p.content}</div>
                                    <span class="time">{$p.created}</span>
                                </div>
                            </a>
                                </div>
                        </li>
                        {/foreach}
			</ul>
		</div>
	<!-- 分页 start -->

				 
    		<!-- 分页 end -->
	</div>

	<!-- 新闻列表 end -->

	<!-- 最新产品 start -->
	{if count($recommend)}
	<div class="n_right">
	     <div class="right-hd">
	        <span>活动资讯</span>
	     </div>
	    <ul class="recommend-ul">
		{foreach $recommend AS $v}
			  <li  id="{$v.a_id}" class="re-list"  style="font-size:16px;color:#000000;cursor: pointer;">
				    <a title="{$v.title}" href="{PURL('news?id=' . $v.a_id)}">
				           <div class="img" style="background:url('{$v.default_img}') no-repeat 100%"></div>
				           <div class="title">
				               <span>{$v.title}</span>
                           </div>
                    </a>
              </li>
        {/foreach}

        </ul>
	</div>
	{/if}
	<!-- 最新产品 end -->
	   {if $page.total_page>1}
                     <div class="page" data-total="{$page.total_page}" data-page="{$page.page}">
                        <ul class="page-ul">
                            <li class="page-first">首页</li>
                            <li class="page-up">上一页</li>
                            <li class="page-down">下一页</li>
                            <li class="page-last">尾页</li>

                        </ul>
                        <div class="skip">
                            <input type="number" class="in-skip"/>
                			<button class="btn-skip">跳转</button>
                        </div>

                     </div>
    				 {/if}
</div>
<!-- 新闻列表页 end -->
<script src="{$t_url}js/news.js"></script>
{include footer.tpl}
