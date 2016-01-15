//swzx topnav
 $(function(){
	 $(".drop-down").mouseover(function(){
		 $(this).children(".drop-down-con").show();
		 })
	 $(".drop-down").mouseout(function(){
		 $(this).children(".drop-down-con").hide();
		 })
});

//swzx tav
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"hover":"";
		con.style.display=i==cursel?"block":"none";
	}
};
//swzx bottom scroll
(function($){
	$.fn.extend({
		Scroll:function(opt,callback){
				if(!opt) var opt={};
				var _this=this.eq(0).find("ul:first");
				var lineH=_this.find("li:first").height(), //获取行高
					line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
					speed=opt.speed?parseInt(opt.speed,10):500, //卷动速度，数值越大，速度越慢（毫秒）
					timer=opt.timer?parseInt(opt.timer,10):5000; //滚动的时间间隔（毫秒）
				if(line==0) line=1;
				var upHeight=0-line*lineH;
				scrollUp=function(){
						_this.animate({
								marginTop:upHeight
						},speed,function(){
								for(i=1;i<=line;i++){
										_this.find("li:first").appendTo(_this);
								}
								_this.css({marginTop:0});
						});
				}
				_this.hover(function(){
						clearInterval(timerID);
				},function(){
						timerID=setInterval("scrollUp()",timer);
				}).mouseout();
		}       
	});
})(jQuery);

$(document).ready(function(){
	$("#scrollDiv").Scroll({line:5,speed:800,timer:4000});
});

//左右按钮图片滚动
$(function(){
	$li1 = $(".apply_nav .apply_array");
	$window1 = $(".apply .apply_w");
	$left1 = $(".apply .img_l");
	$right1 = $(".apply .img_r");

	$window1.css("width", $li1.length*96);

	var lc1 = 0;
	var rc1 = $li1.length-5;

	$left1.click(function(){
		if (lc1 < 1) {
			alert("已经是第一张图片");
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=96px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			alert("已经是最后一张图片");
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=96px'}, 1000);
	});
});

//左右按钮图片滚动
$(function(){
	$li2 = $(".apply_nav1 .apply_array1");
	$window2 = $(".apply1 .apply_w1");
	$left2 = $(".apply1 .img_l1");
	$right2 = $(".apply1 .img_r1");

	$window2.css("width", $li2.length*96);

	var lc2 = 0;
	var rc2 = $li2.length-5;

	$left2.click(function(){
		if (lc2 < 1) {
			alert("已经是第一张图片");
			return;
		}
		lc2--;
		rc2++;
		$window2.animate({left:'+=96px'}, 1000);
	});

	$right2.click(function(){
		if (rc2 < 1){
			alert("已经是最后一张图片");
			return;
		}
		lc2++;
		rc2--;
		$window2.animate({left:'-=96px'}, 1000);
	});
});

$(function() {
	$(".dlks").on("click",function() {
		$(".ccad").toggleClass('active');
	});
})