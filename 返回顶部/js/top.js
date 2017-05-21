window.onload = function(){
	
	var btn = document.getElementById("btn");
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var timer = null;
	var speed = 2;
	var isscroll = false;
	window.onscroll = function(){
		var top = document.documentElement.scrollTop ||　document.body.scrollTop;
		if(top > clientHeight){
			btn.style.display = "block";
		}else{
			btn.style.display = "none";
		}
		if(isscroll){
			clearInterval(timer);
		}
		isscroll = true;
	}
	btn.onclick = function(){
		
		timer = setInterval(function(){
			isscroll = false;
			var top = document.documentElement.scrollTop ||　document.body.scrollTop;
			var step = top / speed; 
			document.documentElement.scrollTop = document.body.scrollTop = top - step;
			if(top <= 0){
				clearInterval(timer);
			}
		},300);
	}
}
