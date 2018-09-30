var cropX,cropY,cropW,cropH;
function ajaxFileUpload(_url,uploadid){
	if(uploadid == null){
		$.ajaxFileUpload({
				url:_url,
				secureuri:false,
				fileElementId:'upload',
				dataType: 'json',
				data:{name:'logan', id:'id'},
				success: function (data, status)
				{
						
				},
				error: function (data, status, e)
				{	  
					alert(e);
				}
			}
		);
		return false;
	}else{
		$.ajaxFileUpload({
				url:_url,
				secureuri:false,
				fileElementId:uploadid,
				dataType: 'json',
				data:{name:'logan', id:'id'},
				timeout:10000,
				success: function (data, status)
				{
				},
				error: function (data, status, e)
				{	  
					alert(e);
				}
			}
		);
		return false;
	}
}



function uploadImg(data){
	if(data!=0){
		 var imgurl = "http://localhost:8025";
		 $("#cropimg").html("<img src=\""+imgurl+data.msg+"?r="+Math.random()+"\" id=\"target\"></img>");
		 $("#preview").attr("src",imgurl+data.msg+"?r="+Math.random());
			crop();
		 $("#useravatar").hide();
		 $("#cropview").show();
		 var imgHeight = (300-(data.height))/2;
		 $("#cropimgbox").css({"paddingTop":imgHeight+"px","height":(300-imgHeight)+"px"});
	}
}


function cardPic1(data){
	if(data!=0){
		$('#cardPositivePath').val(data.msg);
		alert("身份证正面上传成功！");
	}else{
		alert("图片有误");
	}
}

function cardPic2(data){
	if(data!=0){
		$('#cardOppositePath').val(data.msg);
		alert("身份证反面上传成功！");
	}else{
		alert("图片有误");
	}
}

function crop(){
	/**crop**/
	$(".user_help").html("请上传你网站的头像").css("color","#c09853")
	var boundx=100;boundy=100;
	$("#preview").css({"height":"auto","width":"auto"});
	cropObj=$("#target").Jcrop({
		setSelect:[0,0,80,80],
		onChange: updatePreview,
		onSelect: updatePreview,
		aspectRatio: 1,
		minSize:[30,30]
	  },function(){
		// Use the API to get the real image size
		var bounds = this.getBounds();
		boundx = bounds[0];
		boundy = bounds[1];
		// Store the API in the jcrop_api variable
		jcrop_api = this;
	  });
	  
	  function updatePreview(c)
	  {
		if (parseInt(c.w) > 0)
		{
		  var rx = 100 / c.w;
		  var ry = 100 / c.h;
		  cropX=c.x;
		  cropY=c.y;
		  cropW=c.w;
		  cropH=c.h;
		  console.log(cropX,cropY,cropW,cropH)
		  $('#preview').css({
			width: Math.round(rx * boundx) + 'px',
			height: Math.round(ry * boundy) + 'px',
			marginLeft: '-' + Math.round(rx * c.x) + 'px',
			marginTop: '-' + Math.round(ry * c.y) + 'px'
		  });
		}
		
	  };
	  
	  function boxborder(){
			return [0,0,100,100];
	  }
}
//绑定保存头像功能
	
$("#saveavatar").click(function(){
	saveAvatar();
});
function saveAvatar(){
	var userid = $("#userid").val();
	var url = "http://localhost:8025/upload/saveAvatar.html?nid=avatar&userid=" + userid + "&cropX=" + cropX + "&cropY=" 
			+ cropY + "&cropW=" + cropW + "&cropH=" + cropH + "&randomTime=" + (new Date()).getTime();
	$.ajax({
		"url":url,
		"type":"get",
		"processData":"false",
		"dataType":"jsonp",
		"jsonp":"jsonpcallback",
		"jsonpCallback":"avatarCallback",
		"error":function(XMLHttpRequest, textStatus, errorThrown){
			alert("出错了");
			alert(XMLHttpRequest.status);
			alert(XMLHttpRequest + " - " + textStatus + " - " + errorThrown);
		},
		"success":function(data){
			if(data.msg!=''&data.msg!=null&data.msg=='success'){
				$("#cropview").hide();
				var img=$("#useravatar").find("img");
				var src=img.attr("src")+"?t="+(new Date()).getTime();
				img.attr("src",src);
				$("#useravatar").show();
				$(".user_help").html("头像保存成功").css("color","#000");
				window.parent.location.reload(true);
			}else{
				alert("保存图片出错");
			}	 
		}	  
		
	});
}
	

function card(value){
	document.getElementById('viewfile').value=value;
	ajaxFileUpload('http://localhost:8025/upload/card.html?nid=card&userid=10&flag=1','card1');
	
}




