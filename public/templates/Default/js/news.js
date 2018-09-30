/**
 * Created by Administrator on 2017/12/25.
 */
document.getElementById('nav_4').className = "selected";
function pageStart(){
    var total_page=parseFloat($(".page").attr("data-total"));
    var page=parseFloat($(".page").attr("data-page"));
    var pagehtm='';
    if(total_page<=10){
        for(var i=1;i<=total_page;i++){
            if(i==page){
                pagehtm+='<li class="page_li on" data-curpage="'+i+'">'+i+'</li>';
            }
            else{
                pagehtm+='<li class="page_li" data-curpage="'+i+'">'+i+'</li>';
            }

        }
        $(".page-up").after(pagehtm);
    }
    else{
        $(".page-up").after(pageDeal(page,total_page));
    }
}
//p为当前页码,pn为总页数
function pageDeal(p, pn) {
    //只有一页,直接显示1
    if (pn <= 1) {
        p = 1;
        pn = 1;
        pHtml2(1);
    }
    if (pn < p) {
        p = pn;
    };
    var re = "";
    //第一页
    if (p <= 1) {
        p = 1;
    } else {
        //总是显示第一页页码
        re += pHtml(1, pn, "1");
    }
    //校正页码
    p = p;
    pn = pn;

    //开始页码
    var start = 2;
    var end = (pn < 9) ? pn: 9;
    //是否显示前置省略号,即大于10的开始页码
    if (p >= 7) {
        re += '<li class="page_li no">...</li>';
        start = p - 3;
        var e = p + 3;
        end = (pn < e) ? pn: e;
     if(pn < e){
         start=start+pn-e-2;
     }
    }
    for (var i = start; i < p; i++) {
        re += pHtml(i, pn);
    };
    re += this.pHtml2(p);
    for (var i = p + 1; i <= end; i++) {
        re += pHtml(i, pn);
    };
    if(end< pn){
        if (end+1 < pn) {
            re += '<li class="page_li no">...</li>';
            //显示最后一页页码,如不需要则去掉下面这一句
        };
        re += pHtml(pn, pn);
    }

    return re;
};
//显示非当前页
function pHtml(pageNo, pn, showPageNo) {
    showPageNo = showPageNo || pageNo;
    var H = '<li class="page_li" data-curpage="'+pageNo+'">'+pageNo+'</li>';

    return H;

}
//显示当前页
function pHtml2(pageNo) {
    var H ='<li class="page_li on" data-curpage="'+pageNo+'">'+pageNo+'</li>';
    return H;
}

pageStart();
//选择首页
$(document).on("click",".page-first",function(){
    if($(".page_li.on").attr("data-curpage")!=1){
        $(".page_li").removeClass("on").eq(0).addClass("on");
        pageSearch("",1);

    }

});
//选择尾页
$(document).on("click",".page-last",function(){
    var index=$(".page").attr("data-total");
    if($(".page_li.on").attr("data-curpage")!=index){
        $(".page_li").removeClass("on").eq(index-1).addClass("on");
        pageSearch("",index);


    }

});
//上一页
$(document).on("click",".page-up",function(){
    if($(".page_li.on").attr("data-curpage")!=1){
        var index=parseFloat($(".page_li.on").attr("data-curpage"))-1;
        $(".page_li").removeClass("on").eq(index-1).addClass("on");
        pageSearch("",index);


    }
});
//下一页
$(document).on("click",".page-down",function(){
    var index=$(".page").attr("data-total");
    if($(".page_li.on").attr("data-curpage")!=index){
        var next=parseFloat($(".page_li.on").attr("data-curpage"))+1;
        pageSearch("",next);

    }

});
//点击每一页
$(document).on("click",".page_li",function(){
    var re=$(this).attr("data-curpage");
    if(!($(this).hasClass("on"))&&re!=undefined){
        var page=$(this).attr("data-curpage");
        pageSearch("",page);

    }

});
//点击跳转
$(".skip .btn-skip").unbind("click").click(function(){
    var index=parseInt($(".skip .in-skip").val());
    var total=$(".page").attr("data-total");
    if($(".page_li.on").attr("data-curpage")!=index&&index>0&&index<=total){
        pageSearch("",index);

    }

})
function pageSearch(limit,pagesize){
    var ROOT_URL="http://"+location.host;
    var API_URL=ROOT_URL+"/index.php";
    var url=API_URL+"/news";
    location.href=url+"?limit="+limit+"&pagesize="+pagesize;
}