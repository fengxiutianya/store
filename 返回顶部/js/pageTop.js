(function($){
	
	var defaults = {
		btn:"#btn",
		speed:2,
		time:30
	};
	var timer = null;       //用于接收定时任务返回的对象
	var isScroll = false;  //用于确定是不是用户操作的滑动事件
	var speed,btn;         //全局变量
	var opts = null;       //默认设置项
	var clientheight;      //屏幕可视区域
	var PT = $.fn.pageTop = function(options){
		opts = $.extend({},defaults , options ||　{});
		btn = $(opts.btn);
		clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		speed = opts.speed;
		btn.click(function(){
			
			timer = setInterval(function(){
				isScroll = false;
				var top = document.documentElement.scrollTop ||　document.body.scrollTop;
				var step = top / speed; 
				document.documentElement.scrollTop = document.body.scrollTop = top - step;
				if(top <= 0){
					clearInterval(timer);
				}
			},300);
		});
		window.onscroll = function(){
			var top = document.documentElement.scrollTop ||　document.body.scrollTop;
			if(top > clientHeight){
				btn.css("display","block");
			}else{
				btn.css("display","none");
			}
			if(isScroll){
				clearInterval(timer);
			}
			isScroll = true;
		}
			return this.each(function(){
				
			});
	}
	
	
	
})(jQuery)
