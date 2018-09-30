/*获取光标位置*/
function getCursorPos(obj)
{ 
    var CaretPos = 0; 
    // IE Support 
    if (document.selection) { 
        obj.focus (); //获取光标位置函数 
        var Sel = document.selection.createRange (); 
        Sel.moveStart ('character', -obj.value.length);
        CaretPos = Sel.text.length; 
    } 
    // Firefox/Safari/Chrome/Opera support 
    else if (obj.selectionStart || obj.selectionStart == '0') 
        CaretPos = obj.selectionEnd; 
    return (CaretPos); 
} 
/* 
定位光标 
*/ 
function setCursorPos(obj,pos) 
{ 
    if(obj.setSelectionRange) { //Firefox/Safari/Chrome/Opera
        obj.focus(); //
        obj.setSelectionRange(pos,pos); 
    } else if (obj.createTextRange) { // IE
        var range = obj.createTextRange(); 
        range.collapse(true); 
        range.moveEnd('character', pos); 
        range.moveStart('character', pos); 
        range.select(); 
    } 
} 

/* 
替换后定位光标在原处,可以这样调用onkeyup=replaceAndSetPos(this,/[^/d]/g,''); 
*/ 
function replaceAndSetPos(obj,pattern,text){ 
    var pos=getCursorPos(obj);//保存原始光标位置 
    var temp=obj.value; //保存原始值 
    obj.value=temp.replace(pattern,text);//替换掉非法值 
   
    //截掉超过长度限制的字串（此方法要求已设定元素的maxlength属性值）
    var max_length = obj.getAttribute? parseInt(obj.getAttribute("maxlength")) : "";
    if( obj.value.length > max_length){
        var str1 = obj.value.substring( 0,pos-1 );
        var str2 = obj.value.substring( pos,max_length+1 );
        obj.value = str1 + str2;
    }
   
    pos=pos-(temp.length-obj.value.length);//当前光标位置 
    setCursorPos(obj,pos);//设置光标 
} 