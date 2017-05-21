seajs.config({
	  // 别名配置
	 alias: {
	 	 //加入avalon 并且用绝对路径
	 	 'avalon': '/{module}/js/avalon.shim.js#',
	 	 'jquery': '/{module}/js/jquery.min.js#'
	  },
	
	  // 路径配置 用于配置较深的路径，或者不在base路径下面的
	  paths: {
	  },
	
	  // 变量配置
	  vars: {
	  	//项目名
	    'module': 'dragImg'
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
	  base: '/dragImg/js/',
	
	  // 文件编码
	  charset: 'utf-8'
});