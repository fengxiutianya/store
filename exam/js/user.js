
define(function(require, exports, module) {

	require("mmRouter");
	var vm = avalon.define({
	    $id: "user",
	    username:conf.username,
	    pageUrl:seajs.data.vars.tem+"mine.html"  //默认为mine.html
 	 });
  	avalon.scan();
});
