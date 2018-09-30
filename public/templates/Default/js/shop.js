/**
 * Created by Administrator on 2017/12/22.
 */
document.getElementById('nav_8').className = "selected";
$.post('http://erp.gold-banker.cn/index.php?g=Wechat&m=WebShop&a=shop_list', {
    is_api: 1,
    cur_page: 0
}, function(res){
  resDeal(res);
});

//初始化城市选择
$.post("http://erp.gold-banker.cn/index.php?g=Wechat&m=WebShop&a=shop_city",null,function(res){
    var res=eval('('+res+')');
    console.log(res);
    var province=res.datas[0];
    var htm="";
    for(var i=1;i<province.length;i++){
        htm+='<option value="'+province[i].area_name+'">'+province[i].area_name+'</option>';
    }
    $(".province-select").append(htm);

});
//选中省份
$(".province-select").change(function(){
    var area_name=$(this).val();
    shopSearch(area_name,0);
    $.post("http://erp.gold-banker.cn/index.php?g=Wechat&m=WebShop&a=shop_city",{
        city:area_name
    },function(res){
        var res=eval('('+res+')');
        console.log(res);
        var city=res.datas[1];
        var htm='<option value="">-选择城市-</option>';
        for(var i=0;i<city.length;i++){
            htm+='<option value="'+city[i].area_name+'">'+city[i].area_name+'</option>';
        }
        $(".city-select").html(htm);
    })
});
//选中城市
$(".city-select").change(function(){
   var city_name=$(this).val();
   var area_name=$(".province-select").val()+" "+city_name;
   shopSearch(area_name,0);
});
//选择首页
$(document).on("click",".page-first",function(){
    if($(".page_li.on").attr("data-curpage")!=0){
        $(".page_li").removeClass("on").eq(0).addClass("on");
        var city_name=$(".city-select").val();
        var area_name=$(".province-select").val()+" "+city_name;
        pageSearch(area_name,0);

    }

});
//选择尾页
$(document).on("click",".page-last",function(){
    var index=$(".page_li").size()-1;
    if($(".page_li.on").attr("data-curpage")!=index){
        var city_name=$(".city-select").val();
        var area_name=$(".province-select").val()+" "+city_name;
         pageSearch(area_name,index);


    }

});
//上一页
$(document).on("click",".page-up",function(){
    if($(".page_li.on").attr("data-curpage")!=0){
        var index=parseFloat($(".page_li.on").attr("data-curpage"))-1;
        $(".page_li").removeClass("on").eq(index).addClass("on");
        var city_name=$(".city-select").val();
        var area_name=$(".province-select").val()+" "+city_name;
        pageSearch(area_name,index);

    }
});
//下一页
$(document).on("click",".page-down",function(){
    var index=$(".page_li").size()-1;
    if($(".page_li.on").attr("data-curpage")!=index){
        var i=parseFloat($(".page_li.on").attr("data-curpage"))+1;
        var city_name=$(".city-select").val();
        var area_name=$(".province-select").val()+" "+city_name;
        pageSearch(area_name,i);


    }

});
//点击每一页
$(document).on("click",".page_li",function(){
    if(!($(this).hasClass("on"))){
        var i=$(this).attr("data-curpage");
        var city_name=$(".city-select").val();
        var area_name=$(".province-select").val()+" "+city_name;
        pageSearch(area_name,i);


    }

});
//分页
function pageSearch(city,cur_page){
    $.post('http://erp.gold-banker.cn/index.php?g=Wechat&m=WebShop&a=shop_list', {
        is_api: 1,
        cur_page: cur_page,
        search_area:city
    }, function(res){
        pageDeal(res);
        $(".page_li").removeClass("on").eq(cur_page).addClass("on");
    });
}
//城市搜索门店
function shopSearch(city,cur_page){
    $.post('http://erp.gold-banker.cn/index.php?g=Wechat&m=WebShop&a=shop_list', {
        is_api: 1,
        cur_page: cur_page,
        search_area:city
    }, function(res){
       resDeal(res);
    });
}
//搜索结果处理
function resDeal(res){
    var res=eval('('+res+')');
    var shop_list=res.datas.shop_list;
    var totalPage=res.datas.totalPage;
    var ul1='';
    if(shop_list.length<1){
        $(".city-cont").hide();
    }
    else{
        $(".city-cont").show();
    }
    for(var i=0;i<shop_list.length;i++){
            ul1+='<li class="shop_li" data-img="'+shop_list[i].shop_image+'" data-name="'+shop_list[i].jhmc+'" data-area="'+shop_list[i].zcdz+'" '
                +' data-mastername="'+shop_list[i].shop_master_name+'" data-phone="'+shop_list[i].zxfzr_dh+'" ><a target="_blank" href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'+shop_list[i].zcdz+'">'
                +'<span class="shop-name">'+shop_list[i].jhmc+'</span><span class=shop-area><i class="icon icon-shop1"></i>'+shop_list[i].zcdz+'</span></a></li>';

    }
    $(".shop-list-left").html(ul1);
    if(totalPage>1){
        $(".page").show();
        var page_htm='<li class="page-first">首页</li><li class="page-up">上一页</li>';
        for(var j=0;j<totalPage;j++){
            if(j==0){
                page_htm+='<li class="page_li on" data-curpage="'+j+'">'+(j+1)+'</li>';
            }
            else{
                page_htm+='<li class="page_li" data-curpage="'+j+'">'+(j+1)+'</li>';
            }

        }
        page_htm+='<li class="page-down">下一页</li><li class="page-last">尾页</li>';
        $(".page-ul").html(page_htm);
    }
    else{
        $(".page-ul").html("");
        $(".page").hide();
    }
}
//分页处理
function pageDeal(res,cur_page){
    var res=eval('('+res+')');
    var shop_list=res.datas.shop_list;
    var ul1='';
    for(var i=0;i<shop_list.length;i++){

        ul1+='<li class="shop_li" data-img="'+shop_list[i].shop_image+'" data-name="'+shop_list[i].jhmc+'" data-area="'+shop_list[i].zcdz+'" '
            +' data-mastername="'+shop_list[i].shop_master_name+'" data-phone="'+shop_list[i].zxfzr_dh+'" ><a target="_blank" href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'+shop_list[i].zcdz+'">'
            +'<span class="shop-name">'+shop_list[i].jhmc+'</span><span class=shop-area><i class="icon icon-shop1"></i>'+shop_list[i].zcdz+'</span></a></li>';
    }
    $(".shop-list-left").html(ul1);

    // totalPage
}

