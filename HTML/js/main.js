
function styleOfLeftTitle() {
	// 左边标题的样式设置
	var left_titles = document.getElementsByClassName("tit_left");
	for (var i = 0; i < left_titles.length; i++) {
		left_titles[i].style.paddingLeft = "10px";
	};
	left_titles[0].style.background = "url(./images/holder_rec/acce.png) no-repeat left";
	left_titles[1].style.background = "url(./images/success/acce.png) no-repeat left";
	left_titles[2].style.background = "url(./images/new_users/acce.png) no-repeat left";
	left_titles[3].style.background = "url(./images/new_users/acce.png) no-repeat left";
}
// function $(className) {
// 	return typeof className === "string" ? document.getElementsByClassName(className)[0]:className;
// }
function holderRec() {
	// 主办推荐
	var holders = document.getElementsByClassName("holders")[0].getElementsByTagName("li");
	holders[0].onmouseover = function() {
		document.getElementsByClassName("holder_rec")[0].getElementsByTagName("img")[0].src = "images/holder_rec_img1_1.jpg";
	}
	holders[1].onmouseover = function() {
		document.getElementsByClassName("holder_rec")[0].getElementsByTagName("img")[0].src = "images/holder_rec_img2_1.jpg";
	}
	holders[2].onmouseover = function() {
		document.getElementsByClassName("holder_rec")[0].getElementsByTagName("img")[0].src = "images/holder_rec_img3_1.jpg";
	}
	holders[3].onmouseover = function() {
		document.getElementsByClassName("holder_rec")[0].getElementsByTagName("img")[0].src = "images/holder_rec_img4_1.jpg";
	}
}
function newUsers() {
	// 新增用户
	var speed = 50;
    nuc_tb2.innerHTML = nuc_tb1.innerHTML;
    function Marquee1() {
        if (nuc_table_body.scrollTop >= nuc_tb1.offsetHeight) {
            nuc_table_body.scrollTop = 0;
        } else {
            nuc_table_body.scrollTop++;
        }
    }
    var MyMar = setInterval(Marquee1, speed);
}
// function encyclopedia() {
// 	//首页会展百科右边特效
// 	var titles = document.getElementsByClassName("news_title")[0].getElementsByTagName("li");
// 	var divs = document.getElementsByClassName("news_content")[0].getElementsByTagName("div");

// 	if (titles.length != divs.length) return;
// 	for (var i = 0; i < titles.length; i++) {
// 		titles[i].id = i;
// 		titles[i].onmouseover = function() {
// 			for (var j = 0; j < titles.length; j++) {
// 				titles[j].className = "";
// 				divs[j].style.display = "none";
// 			}
// 			this.className = "mouseOn";
// 			divs[this.id].style.display = "block";
// 		}
// 	};
// }
function encyclopedia() {
    //首页会展百科右边特效
    // var wrapper = typeof n==="string"? document.getElementsByClassName(n)[0]:n;
    // var titles = wrapper.getElementsByClassName("news_title")[0].getElementsByTagName("li");
    // var divs = wrapper.getElementsByClassName("news_content")[0].getElementsByTagName("div");
    var titles = document.getElementsByClassName("news_title")[0].getElementsByTagName("li");
    var divs = document.getElementsByClassName("news_content")[0].getElementsByTagName("div");
    // if (n == null) {
    // 	titles = document.getElementsByClassName("news_title")[0].getElementsByTagName("li");
	   //  divs = document.getElementsByClassName("news_content")[0].getElementsByTagName("div");
    // };

    if (titles.length != divs.length) return;
    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        titles[i].onmouseover = function() {
            for (var j = 0; j < titles.length; j++) {
                titles[j].className = "";
                divs[j].style.display = "none";
            }
            this.className = "mouseOn";
            divs[this.id].style.display = "block";
        }
    };
}

function sjAndTjSlider() {
	var dang = 1;//当前点击
    var lin;//刚才显示的

    var t;

    //往左
    var fanLeft = function(){
        clearInterval(t)
        t = setInterval(fanRight,5000)
        var flag = true;
        if(dang <= 1){
            dang = 5;
            lin = 1;
            flag = false;
        }
        dang--
        if(flag) {
            lin = dang + 1;
        }
        $('#zhangshu').html(dang);
        $("[selfL="+lin+"]").removeClass('on')
        $("[selfL="+dang+"]").addClass('on')
        //$("[selfB="+lin+"]").removeClass('banner_on')
        //$("[selfB="+dang+"]").addClass('banner_on')
        $("[selfB="+lin+"]").fadeOut(800)
        $("[selfB="+dang+"]").fadeIn(800)
    }
    //往右
    var fanRight = function(){
        clearInterval(t)
        t = setInterval(fanRight,5000)
        var flag = true;
        if(dang >= 3){
            dang = 0;
            lin = 3;
            flag = false;

        }
        dang++
        if(flag) {
            lin = dang - 1;
        }
        $('#zhangshu').html(dang);
        $("[selfL="+lin+"]").removeClass('on')
        $("[selfL="+dang+"]").addClass('on')
        //$("[selfB="+dang+"]").addClass('banner_on')
        $("[selfB="+lin+"]").fadeOut(800)
        $("[selfB="+dang+"]").fadeIn(800)
    }



    $('.xgt_btn_left').bind('click',fanLeft);
    $('.xgt_btn_right').bind('click',fanRight);

    var t = setInterval(fanRight,5000);//1000为1秒钟
}

function serviceChange() {
	//服务流程变色
	var imgs = document.getElementsByClassName("service_content")[0].getElementsByTagName('img');
	//mouseover
	imgs[0].onmouseover = function() {
		this.src = "images/service_1_1.jpg";
	}
	imgs[1].onmouseover = function() {
		this.src = "images/service_2_1.jpg";
	}
	imgs[2].onmouseover = function() {
		this.src = "images/service_3_1.jpg";
	}
	imgs[3].onmouseover = function() {
		this.src = "images/service_4_1.jpg";
	}
	imgs[4].onmouseover = function() {
		this.src = "images/service_5_1.jpg";
	}
	imgs[5].onmouseover = function() {
		this.src = "images/service_6_1.jpg";
	}
	imgs[6].onmouseover = function() {
		this.src = "images/service_7_1.jpg";
	}
	imgs[7].onmouseover = function() {
		this.src = "images/service_8_1.jpg";
	}
	//mouseout
	imgs[0].onmouseout = function() {
		this.src = "images/service_1.jpg";
	}
	imgs[1].onmouseout = function() {
		this.src = "images/service_2.jpg";
	}
	imgs[2].onmouseout = function() {
		this.src = "images/service_3.jpg";
	}
	imgs[3].onmouseout = function() {
		this.src = "images/service_4.jpg";
	}
	imgs[4].onmouseout = function() {
		this.src = "images/service_5.jpg";
	}
	imgs[5].onmouseout = function() {
		this.src = "images/service_6.jpg";
	}
	imgs[6].onmouseout = function() {
		this.src = "images/service_7.jpg";
	}
	imgs[7].onmouseout = function() {
		this.src = "images/service_8.jpg";
	}
}

$(function() {
	//移入
    $('#a').mouseover(function(){
        $(this).css('background-color','#ff3c00');
        $('#erwm').show();
        $('.icon-weixin').hide();
        $('.icon-weixin2').show();
        $('#aaa').css('color','#fff')
    })
    $('#b').mouseover(function(){
        $(this).css('background-color','#ff3c00');
        $('#lxdh').show();
        $('.icon-phone').hide();
        $('.icon-phone2').show();
        $('#bbb').css('color','#fff')
    })
    $('#c').mouseover(function(){
        $(this).css('background-color','#ff3c00');
        $('.icon-tengxun').hide();
        $('.icon-tengxun2').show();
        $('#ccc').css('color','#fff');
    })

    //移出
    $('#a').mouseout(function(){
        $(this).css('background-color','#f0f0f0');
        $('#erwm').hide();
        $('.icon-weixin').show();
        $('.icon-weixin2').hide();
        $('#aaa').css('color','#808080')
    })
    $('#b').mouseout(function(){
        $(this).css('background-color','#f0f0f0');
        $('#lxdh').hide();
        $('.icon-phone').show();
        $('.icon-phone2').hide();
        $('#bbb').css('color','#808080')
    })
    $('#c').mouseout(function(){
        $(this).css('background-color','#f0f0f0');
        $('.icon-tengxun').show();
        $('.icon-tengxun2').hide();
        $('#ccc').css('color','#808080')
    })

    /**
     * 返回顶部js
     */
    $('#d').on('click',move);
    $(window).on('scroll',function(){
        checkPosition($(window).height());
    });

    function move(){
        $('html,body').animate({scrollTop:0},0);
    }

    function checkPosition(pos){
        if($(window).scrollTop() > pos){
            $('#d').fadeIn();
            $('.levitate').show();
            $('.show-di').show();
        }else{
            $('#d').fadeOut();
            $('.levitate').hide();
            $('.show-di').hide();
        }
    }
});