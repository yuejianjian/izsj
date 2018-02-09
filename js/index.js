/*首页轮播图*/
$(function(){
    /*点击回到顶部*/
    $(".zixun .fanhui img").click(function() {
        $("html,body").animate({scrollTop:0}, 1000);
    });
    window.addEventListener('scroll', function () {

        if($(window).scrollTop()>100){
            $(".zixun .fanhui").css("display" ,"block");
        }else{
            $(".zixun .fanhui").css("display" ,"none");
        }
    })

    /*轮播图形式*/
    var timer = null;
    var iNow = 0;
    var unm = $(".banner ul li").length;
    timer = setInterval(function () {
        iNow++;
        if (iNow > unm-1) {
            iNow = 0;
        }
        /*$(".banner ul li").eq(iNow).fadeIn("fast").siblings().fadeOut();*/
        $(".banner ol li").eq(iNow).addClass("olbg").siblings().removeClass("olbg");
    }, 3000);
    var w=$("#banner ul li").width();
    var l=0;
    var timer=null;
    var len=$("#banner ul li").length*2;
    $("#banner ul").append($("#banner ul").html()).css({'width':len*w, 'left': -len*w/2});
    timer=setInterval(cc,3000);
    /*setTimeout(cc ,1000);*/
    function cc(){
        l=parseInt($("#banner ul").css("left"))-w;
        showCurrent(l);
    };
    function showCurrent(l){
        if($("#banner ul").is(':animated')){
            return;
        }
        $("#banner ul").animate({"left":l},500,function(){
            if(l==0){
                $("#banner ul").css("left",-len*w/2);
            }else if(l==(1-len)*w){
                $("#banner ul").css('left',(1-len/2)*w);
            }
        });
    }
    /*装修指南tab栏切换*/
    $(".tab-qie ul li").click(function () {
        var $this = $(this),
            index = $this.index();
        $(".tab-qie ul li").eq(index).addClass("bg").siblings().removeClass("bg");
        $(".tab-qie ul li").eq(index).children("p.line").addClass("line-color").parent().siblings().children("p.line").removeClass("line-color");
        $(".neirong .zhangshi").eq(index).addClass("show").siblings().removeClass("show");
    })
    $(".shousuo input").focus(function(){
        $(".big-box").addClass("ying-die");
        $(".guanjian").addClass("show");
    })
    /*$(".shousuo input").blur(function(){
        $(".big-box").removeClass("ying-die");
        $(".guanjian").removeClass("show");
    })*/
    $(".guanjian ul li").click(function(){
        var $this = $(this),
            index = $this.index();
        var zhi = $(this).html();
        $(".shousuo .user").val(zhi);

    })
    /*筛选按钮样式*/
    var usercenter = {
        init:function(){
            this.modal();
        },
        modal: function() {
            $(".listnav-nav .listnav-nav-tab").click(function(){
                var $this = $(this),
                    index = $this.index();
                $(".listnav-nav .listnav-nav-tab").eq(index).siblings().children().children().addClass("rotate1").removeClass("rotate");
                if($(".listnav-nav .listnav-nav-tab img").eq(index).hasClass("rotate")){ //点击箭头旋转180度
                    $(".listnav-nav .listnav-nav-tab img").eq(index).removeClass("rotate");
                    $(".listnav-nav .listnav-nav-tab img").eq(index).addClass("rotate1");
                    $(".listnav-nav .listnav-nav-tab").eq(index).removeClass("bg");
                    $(".listnav-nav-content .listnav-nav-content-modal").eq(index).removeClass("xianshi");
                    $(".listnav-nav-content").removeClass("xianshi");
                }
                else{
                    $(".listnav-nav .listnav-nav-tab img").eq(index).removeClass("rotate1"); //再次点击箭头回来
                    $(".listnav-nav .listnav-nav-tab img").eq(index).addClass("rotate");
                    $(".listnav-nav-content").addClass("xianshi");
                    $(".listnav-nav .listnav-nav-tab").eq(index).addClass("bg").siblings().removeClass("bg");
                    $(".listnav-nav-content .listnav-nav-content-modal").eq(index).addClass("xianshi").siblings().removeClass("xianshi");
                    $(".listnav-nav-content").addClass("xianshi");
                }
                /*1111*/
                $(".listnav-nav-content .listnav-nav-content-modal-1 div").click(function(){
                    var $this = $(this),
                        index = $this.index();
                   var zhi = $(this).html();
                   $(".listnav-nav .listnav-1 .name").html(zhi);

                    $(".listnav-nav-content .listnav-nav-content-modal-1 div").eq(index).addClass("listnav-nav-content-modal-active").siblings().removeClass("listnav-nav-content-modal-active");
                    $(".listnav-nav-content .listnav-nav-content-modal").removeClass("xianshi");
                    $(".listnav-nav-content").removeClass("xianshi");
                    if($(".listnav-nav .listnav-nav-tab img").hasClass("rotate")){
                        $(".listnav-nav .listnav-nav-tab img").removeClass("rotate");
                        $(".listnav-nav .listnav-nav-tab img").addClass("rotate1");
                    }
                    $(".listnav-nav .listnav-nav-tab").removeClass("bg");

                })
                $(".listnav-nav-content .listnav-nav-content-modal-1 .first").click(function(){
                    $(".listnav-nav .listnav-1 .name").html("风格");
                })
                /*222*/
                $(".listnav-nav-content .listnav-nav-content-modal-2 div").click(function(){
                    var $this = $(this),
                        index = $this.index();
                    var zhi =$(this).html() ;
                    $(".listnav-nav .listnav-2 .name").html(zhi);
                    $(".listnav-nav-content .listnav-nav-content-modal-2 div").eq(index).addClass("listnav-nav-content-modal-active").siblings().removeClass("listnav-nav-content-modal-active");
                    $(".listnav-nav-content .listnav-nav-content-modal").removeClass("xianshi");
                    $(".listnav-nav-content").removeClass("xianshi");
                    if($(".listnav-nav .listnav-nav-tab img").hasClass("rotate")){
                        $(".listnav-nav .listnav-nav-tab img").removeClass("rotate");
                        $(".listnav-nav .listnav-nav-tab img").addClass("rotate1");
                    }
                    $(".listnav-nav .listnav-nav-tab").removeClass("bg");
                })
                $(".listnav-nav-content .listnav-nav-content-modal-2 .first").click(function(){
                    $(".listnav-nav .listnav-2 .name").html("户型");
                })
            })
        }
    }
    usercenter.init();
    /*报名系统判断*/
    $("#appoint").click(function(){
        /*$(".din-center .baojia .baocuo").css("display" ,"none");*/
        /*判断手机号跟用户姓名填写是否正确*/
        var name = $(".main .info .name").val();
        var phone = jQuery(".main .info .tel").val();
        console.log(phone);
        var flag = false;
        var message = "";
      /*  var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;*/
        if(name == ''){
            var message = "请填写你的称呼！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        } else if(phone == ''){
            var message = "手机号码不能为空！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        }else if(phone.length !=11){
            var message = "请输入有效的手机号码！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        }else if(!$(".main .info .tel").val().match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/)){
            var message = "请输入有效的手机号码！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        }else {
            flag = true;
            var message = "恭喜你预约成功,我们客服稍后将电话与你联系!";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display", "block");
            $(".baocuo .box-cuo .ok-cuo").click(function(){
                console.log(777);
                $(".main .info .name").val("");
                $(".main .info .tel").val("");
            })
        }
        return flag;
    })
    $(".baocuo .box-cuo .ok-cuo").click(function(){
        console.log(666);
        $(".baocuo").css("display", "none");
    })

    $("#bao-price").click(function(){
        /*$(".din-center .baojia .baocuo").css("display" ,"none");*/
        /*判断手机号跟用户姓名填写是否正确*/
        console.log(111);
        var mianji = $(".shou-xing .mian-ping .mianji").val();
        var name = $(".shou-xing .name").val();
        var phone = jQuery(".shou-xing .tel").val();
        var huxing =$("#huxing option:selected").val();
        var leibie =$("#leixing option:selected").val();
        console.log(phone);
        var flag = false;
        var message = "";
        /*  var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;*/
        if(mianji == ''){
            console.log(222);
            var message = "请输入你的房屋面积！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        } else if(huxing == 1){
            var message = "请选择你的户型！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        } else if(leibie == 2){
            var message = "请选择你的装修类型！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        } else if(name == ''){
            var message = "请填写你的称呼！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        } else if(phone == ''){
            var message = "手机号码不能为空！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        }else if(phone.length !=11){
            var message = "请输入有效的手机号码！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        }else if(!$(".shou-xing .tel").val().match(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/)){
            var message = "请输入有效的手机号码！";
            $(".baocuo .box-cuo .xing-cuo").html(message);
            $(".baocuo").css("display" ,"block");
        }else {
            flag = true;
            console.log(111);
            $(".shengqing").css("display" , "block");
            $(".shengqing .sheng-box .sheng-1 img").click(function(){
                console.log(9999);
                $(".shengqing").css("display" , "none");
                $(".shou-xing .name").val("");
                $(".shou-xing .tel").val("");
                $(".shou-xing .mian-ping .mianji").val("");
                $("#huxing option:selected").val("1");
                $("#leixing option:selected").val("2");
            })
        }
        return flag;
    })
})


