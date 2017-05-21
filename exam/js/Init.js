//前台代码配置文件

seajs.config({
	 
	 
	 // 别名配置
	 alias: {
	   "avalon":"/{module}/js/avalon.min.js"
	  },
	
	  // 路径配置 用于配置较深的路径，或者不在base路径下面的
	  paths: {
	  },
	
	  // 变量配置
	  vars: {
	  	//项目名
	    'module': 'exam',
	    //模板在的目录
	    'tem':"/exam/templete/"
	  },
	
	  // 映射配置
	  map: [
	  ],
	
	  // 预加载项
	  preload: [
	    Function.prototype.bind ? '' : 'es5-safe',
	    this.JSON ? '' : 'json'
	  ],
	
	  // 调试模式
	  debug: true,
	
	  // Sea.js 的基础路径
	  base: '/exam/js/',
	
	  // 文件编码
	  charset: 'utf-8'
});
seajs.use("user",function(user){
	
})