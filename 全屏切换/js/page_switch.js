/*
 *   FileName  : page_switch.js
 *   Time      : 2015-08-18
 *   Intro     : 用于前台页面全屏切换
 *   Author    : zhangke
 */

//写jqery对象的时候，先把大的框架拿出来，然后在具体实现每一个功能
(function($){
	
	var defaults = {
		"container":"#container",   //容器的名字
		"sections" :".section"  ,   //子容器
		'easing' : 'ease',//特效方式，ease-in,ease-out,linear
		'duration' : 1000,//每次动画执行的时间
		'pagination' : true,//是否显示分页
		'loop' : false,//是否循环
		'keyboard' : true,//是否支持键盘
		'direction' : 'vertical',//滑动的方向 horizontal,vertical,
		'onpageSwitch' : function(pagenum){}
	};
	//定义全局变量，并且此变量只能再此闭包中用
	 var win = $(window),
	     container,
	     sections;
	     
	 var opts = {},
	     canScroll = true;  //定义是否支持滑动鼠标滚轮，此参数待定是否放到defaults中
	     
	 var iIndex = 0; //初始化图片的index
	 
	 var arrElement = [];//定义接受图片的jquery对象
	//插件的主入口
	var SP = $.fn.switchPage(options){
		opts = $.extend({}, defaults,options || {}); //后面的要避免没传参数进来，所以此处应特别注意
		//全局对象初始化
		container = $(opts.container);
		//下面这种做法是不恰当的，因为可能在一个页面中有不同种类的section，我们肯能会误选
		//sections  = $(opts.sections);
		//此种做法是比较恰当的，返回的是比较准确的图片的dom对象
		sections = container.find(sections);  
		
		sections.each(function(){
			arrElement.push($(this));
		});
		
		return this.each(function(){
			if(opt.direction == "horizontal"){
				initLayout(;)
			}
			if(opts.onkeydown){
				keyDown();
			}
			if(opts.pagination){
				initPagination();
			}
		});
	};  
	//public function
	//定义滑轮向上滚动事件
	SP.moveSectionUp = function(){
		if(iIndex){
			iIndex++;
		}else{
			
		}
		
	}
	//定义滑轮向下的滚动事件
	SP.moveSectionDown() = function(){
		
	}
	//私有方法
	//页面滚动事件
	function scroolPage(){
		
	}
	
	//重写滑轮事件
	//dom对象绑定滑轮事件
	$(document).on("mousewheel DOMMouseScroll", MouseWheelHandler);
	function MouseWheelHandler(e){
		e.preventDefault();
	}
	
	//横向布局初始化
	function initLayout(){
		
	}
	//初始化分页
	function initPagination(){
		
	}
	//分页事件
	function paginationHandler(){
		
	}
	//判断css属性是否支持 (此处应该注意，只要一个要求可以写成一个函数，就应该给他分出来单写)
	function isSuportCss(proprety){
		
	}
	//渲染效果
	function initEffects(dest,element){
	}
	//当窗口改变的时候重写窗口(此有待检验)
	var resizeId;  //用于暂停正在执行的setTimeout
	//当窗口改变大小的时候执行此函数
	win.resize(function(){
		
	})
	function rebuild(){
		
	}
	//绑定键盘事件
	function keyDown(){
		
	}
})(jQuery)
