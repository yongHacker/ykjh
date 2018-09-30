define(function(require, exports,module){
	require('jquery');
	require('common');
	function banInputSapce(e)
	{
		var keynum;
		if(window.event) // IE
		{
			keynum = e.keyCode
		}
		else if(e.which) // Netscape/Firefox/Opera
		{
			keynum = e.which
		}
		if(keynum == 32){
			return false;
		}
		return true;
	}
  $("input[type='text'],input[type='password']").keydown(function(event){
	  return banInputSapce(event);
  })
	//协议弹窗
	$("#service_contract").click(function(){
		require.async("/plugins/layer-v1.8.4/layer.min",function(){
			var i = $.layer({
				type :1,
				title : "协议内容",
				closeBtn :[0,true],
				border: [1, 1, '#cecfd0'],
				area :['auto','550px'],
				page : {dom:'#modal_dialog'}
			});
		})
	});

	//邮箱调用
	require.async('commonJS/jquery.mailAutoComplete',function(){
		$("#customTest").mailAutoComplete({
			boxClass: "out_box",
			listClass: "list_box",
			focusClass: "focus_box",
			markCalss: "mark_box",
			autoClass: false,
			textHint: true,
			hintText: ""
		});
	})

	//验证码倒计时
	var wait = 60;
	get_code_time = function (o) {
		if (wait == 0) {
			o.removeAttribute("disabled");
			o.value = "重新发送";
			wait = 60;
		} else {
			o.setAttribute("disabled", true);
			o.value = "(" + wait + ")秒后重新获取";
			wait--;
			setTimeout(function() {
				get_code_time(o);
			}, 1000)
		}
		
	}
	if(document.documentElement.scrollWidth!=0){
		document.getElementById("getPhoneVcode").removeAttribute("disabled");
	}
	
	//获取手机验证码
	$("#getPhoneVcode").click(function(){
		var o = this;
		var mobile = /^1[3|4|5|7|8][0-9]{9}$/; 
		if($('#regPhone').text()!="" && mobile.test($('#regPhone').text())){
			$.ajax({
				url:'/user/getPhoneCode.html?mobilePhone=' + $('#regPhone').text() + '&sign=' + $('#sign').val() + '&randomTime=' + (new Date()).getTime(),
				type:'post',
				success:function(data){
					if(data.error!=null){
						$("#tipw").html("*"+data.error);
					}else{
						if(data.result){
							$("#tipw").html();
							get_code_time(o);
							$("#sign").val(data.sign);
						}
					}
				}
			});			
		}else{
			$("#tipw").html("* 请输入正确的手机验证码");
//			require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
//				$.layer({
//				    type: 1,
//				    closeBtn: [0,true],
//	                		    title: "&nbsp;",
//				    area: ['384px', '186px'],
//				    border: [1, 1, '#cecfd0'],
//				    page: {
//				        html: '<div class="tipsWrap w384"><div class="tipsTxt"><i class="iconfont errIco">&#xe63e;</i><span>请输入正确的手机号码</span></div><div class="tipsBtnBar"><a href="javascript:;" class="okBtn failBtn">确定</a></div></div>'
//				    },
//				    close: function(index){
//				    	window.location.reload();	
//				    }
//				});
//				$(".failBtn").click(function(){
//					window.location.reload();	
//				});
//				return false;
//			})
		}
	})
	
	//表单验证
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			$("#signupForm").validate({
				
				rules: {
				  	userName:{
				  		required:true,
				  		regexUserName:true,
						remote:{
								type: "POST",
								url: "/user/checkUsername.html",
								dataType: "json",
								data:{userName: function(){return $("#username").val();}}
							}
					},
					email: {
						required: true,
						email:true,
						remote:{
							type: "get",
							url: "/user/checkEmail.html",
							data:{
								email: function(){
									return $("#customTest").val();
								}
							}
						}	
				   	},
				   	mobilePhone:{
				   		required:true,
						isMobile:true,
						remote:{
							type: "get",
							url: "/user/checkMobilePhone.html",
							data:{
								mobilePhone: function(){
									return $("#mobilePhone").val();
								}
							}
						}
			   		},
			   		pwd: {
						required: true,
						regexPassword:true
			   		},
			   		confirmPassword: {
						required: true,
						equalTo: "#password"
			   		},
			   		validCode:{
			   			required:true,
			   			minlength:4
			   			// remote:{
			   			// 	type:"POST",
			   			// 	url:"/user/checkValidCode.html"
			   				// ,success:function(response){
			   				// 	if(response)
			   				// 	{
			   				// 		$(".validCodeMsg").html('<i class="iconfont success">&#xe657;</i>');
			   				// 	}
			   				// 	else
			   				// 	{
			   				// 		$('input[name="validCode"]').val("");
			   				// 		$(".valicode_img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());})
			   				// 		$(".validCodeMsg").html('<label id="validCode-error" class="error" for="validCode">验证码错误</label>');
			   				// 	}
			   				// }
			   			// }
			   		},
			   		agree:{
			   			required:true
			   		}
				},
				messages:{
				   		userName:{
							required:"用户名由英文字母、数字组成，且不能为纯数字",
							regexUserName:"请输入长度为4到16位的用户名，由英文字母、数字组成，且不能为纯数字",
							remote:"该用户名已经存在"
					   	},
						email: {
							required: "请输入正确的email地址",
							email: "请输入正确的email地址",
							remote:"邮箱地址已经存在"
						},
				   		mobilePhone:{
							required:"请输入手机号码",
							isMobile:"手机号码格式错误",
							remote:"该手机号码已存在"
						},
						pwd: {
							required: "8-16位字符，其中包括至少一个字母和一个数字" ,
							regexPassword:"密码格式错误"
						},
						confirmPassword: {
							required: "请输入确认密码",
							equalTo: "两次输入密码不一致"
						},
						validCode:{
					   			required:"请输入验证码",
					   			minlength:"验证码格式错误",
					   			// remote:"验证码错误"
					   	},
						agree:{
						   	required:"请勾选服务协议条款"
						}
				},
				errorPlacement:function(error, element){
				  	element.parents("li").find(".msg_tip").html(error);	
				},
				success:function(element){
					if(element.parents("li").find("input").has("validCode")){
						element.parents("li").find(".msg_tip").html('<i class="iconfont success">&#xe657;</i>');
					}
					else
					{
						element.parents("li").find(".msg_tip").html('');
					}
					
				},
				submitHandler: function(form,event,validator) 
				{      	
				   	require.async('jquery.form',function(){
				   		$(form).ajaxSubmit({
				   			type:"post",
    							dataType:'json',
    							success:function(data){
					    	  		if(data.result ==true)
					    	  		{
						    		  	/*$(".js_sucEmail").text(data.email);
							    		$(".js_resetEmail").val(data.email);
							    		$(".js_userid").val(data.userId);*/
					    	  			$("#regPhone").text(data.mobilePhone);
					    	  			$("#code").val("");
					    	  			$("#sign").val(data.sign);
						    		  	$(".reg_process li:eq(1)").addClass("hover").siblings().removeClass("hover");
						    		  	$(".reg_content").slideUp();
						    		  	$(".success_reg_con").slideDown();
							    		 loginEmail(data.email);
						    		}
						    		else
						    		{
				    		  			$("input[name='validCode']").val('');
				    		  			if(data.msg == "用户名格式错误！"){
				    		  				$(".reg_table li:eq(0)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">用户名格式错误！</label>');
				    		  			}else if(data.msg == "验证码错误！") {
				    		  				$(".reg_table li.validCodeLi").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">验证码错误！</label>');
				    		  			} else if(data.msg == "手机已经被使用"){
				    		  				$(".reg_table li:eq(2)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">手机号码已经存在！</label>');
				    		  			}
				    					$(".valicode_img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());})
				    		  		}
				        		}
				        });
				   	})
				}  
			});
			
		})
	})
	//密码强弱判断
	$("#password").keyup(function(){
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
		var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
		var enoughRegex = new RegExp("(?=.{8,}).*", "g"); 
		var $pw = $(".passwordStrength");
		if (false == enoughRegex.test($(this).val())) { 
			$pw.removeClass('level1 level2 level3').addClass('level0'); 
			//密码小于八位的时候，密码强度图片都为灰色 
		} 
		else if (strongRegex.test($(this).val())) {
			$pw.removeClass('level1 level2 level3').addClass('level3');
			//密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
		} 
		else if (mediumRegex.test($(this).val())) { 
			$pw.removeClass('level1 level2 level3').addClass('level2');
			//密码为八位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
		} 
		else { 
			$pw.removeClass('level1 level2 level3').addClass('level1');
			//如果密码为8为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
		} 
		return true; 
	});
	//邮件再次发送
	$("#reset_email").click(function(){
	    	var  that = $(this)
	    	var EmailVal = $(".js_sucEmail").text();
	    	var userid = $(".js_userid").val();
	    	var timeNum = 60;
	    	resttEmailUrl = "/user/sentActivationEmail.html?userId=" + userid + "&randomTime=" + (new Date()).getTime();
	    	$.ajax({
	    		url:resttEmailUrl,
	    		type:"post",
	    		data:{email:EmailVal},
	    		success:function(data){
	    			var result = data.result;
	    			var Time = "";
	    			if(result==true){
	    				$("#email_msg").html('<font style="color:red;">发送成功!</font>')
    					Time = setInterval(function(){
    						timeNum--;
    						if(timeNum>0){
    							that.val(timeNum+"秒后重发").addClass("disabled");
    						}
    						else{
    							clearInterval(Time);
    							that.val("重新发送").removeAttr("disabled");
    						}
    					},1000)
    				}
	    		}
	    	});
	    });
	
		//["qq.com","gmail.com","126.com","163.com","hotmail.com","yahoo.com","yahoo.com.cn","live.com","sohu.com","sina.com"]	
		//点击登录邮箱地址
	    function loginEmail(emailValue){
	    	var loginEmailBox = $("#loginEmail");
	    	var loginEmailValue = "";
	    	emailValue = (emailValue.split("@"))[1];
	    	switch (emailValue)
	    	{
	    		case "qq.com":
	    			loginEmailValue = "mail.qq.com";
	    			break;
	    		case "gmail.com":
	    			loginEmailValue = "mail.google.com";
	    			break;
	    		case "126.com":
	    			loginEmailValue = "mail.126.com";
	    			break;
	    		case "163.com":
	    			loginEmailValue = "mail.163.com";
	    			break;
	    		case "hotmail.com":
	    			loginEmailValue = "login.live.com";
	    			break;
	    		case "yahoo.com":
	    			loginEmailValue = "login.yahoo.com";
	    			break;
	    		case "live.com":
	    			loginEmailValue = "login.live.com";
	    			break;
	    		case "sohu.com":
	    			loginEmailValue = "mail.sohu.com";
	    			break;
	    		case "sina.com":
	    			loginEmailValue = "mail.sina.com";
	    			break;
	    	}
    	    	if(loginEmailValue)
	    	{
	    		loginEmailBox.attr("href","http://"+loginEmailValue);
	    	}
	    	else
	    	{
	    		loginEmailBox.html("邮件已发送成功");
	    	}
	    } 

	    //邮箱倒计时
	    var time = parseInt($(".remain_time").text())
	    if(time > 0)
	    {
	    	var t = setInterval(function(){
	    		time --;
	    		$(".remain_time").text(time);
	    		if(time <= 1)
	    		{	
	    			window.location.href = $(".reg_link").attr("href");
	    		}
	    	},1000);
	    }
	    
	    //	注册验证表单
	    require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
			require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			    $("#verifyRegistrationForm").validate({
			    	rules:{
			    		code:{
			    			required:true,
				   			minlength:4
			    		}
			    	},
			    	messages:{
			    		code:{
			    			required:"请输入验证码",
				   			minlength:"验证码格式错误",
			    		}
			    	},
			    	errorPlacement:function(error, element){
					  	element.parents("li").find(".msg_tip").html(error);	
					},
					success:function(element){
						if(element.parents("li").find("input").attr("name") != "validCode"){
							element.parents("li").find(".msg_tip").html('');
						}
						else
						{
							element.parents("li").find(".msg_tip").html('');
						}
					},
					submitHandler: function(form,event,validator) 
					{      	
						$.ajax({
					    	url: '/user/doRegister.html?randomTime=' + (new Date()).getTime(),
					    	type: 'post',
					    	dataType: 'json',
					    	data: {mobilePhone:$("#regPhone").text(),code:$("#code").val()},
					    	success: function(data){
					    		if(data.result == true){
					    			$(".reg_process li:eq(2)").addClass("hover").siblings().removeClass("hover");
					    			$(".reg_content").slideUp();
						    		$(".success_reg_con").slideUp();
						    		$(".success_cg").slideDown();
					    		}else{
					    			$("#success_reg_code").html('<label id="code-error" class="error" for="code">验证码不正确或已过期</label>');
					    		}
					    		
					    	},
					    	
					    });
					}
			    });
			})
		})
	    
	    
	    
});
