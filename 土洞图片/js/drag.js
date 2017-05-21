/*
 * avalon 拖动图片
 * 下面的格式是 首先模块名是 drag  及文件名
 * 然后加入依赖  avalon 在函数内部可以直接引用
 */

define(["avalon"],function(require, exports, module) {
	
	    var $ = function(e) {
			return document.getElementById(e)
		};
		
		var drag_holder=null,index=-1,ori_src=null,drag_flag=false,isIE =!-[1,];
		var drag_sort=avalon.define({
			$id:'drag_sort',
			photo_list:[],
			container:'wrap',
			target_index:-1,
			cell_size:0,
			start_drag:function(e,i,el){
				var img=$('wrap_img'+i).firstChild,target_img_width=img.clientWidth,target_img_height=img.clientHeight;
				drag_sort.cell_size=$('wrap_img0').clientWidth;
				var xx=e.clientX-target_img_width/2,yy=e.clientY-target_img_height/2,offset=avalon($(drag_sort.container)).offset(),target=e.target.parentNode.parentNode.parentNode; 
				$('drag_proxy').style.top=yy+avalon(window).scrollTop()-offset.top+'px';
				$('drag_proxy').style.left=xx-offset.left+'px';
				$('drag_proxy').style.width=target_img_width+'px';
				$('drag_proxy').style.height=target_img_height+'px';
				if(target&&target.nodeName=='LI'){
					ori_src=el;
					// $('drag_proxy').innerHTML=target.querySelector('p').innerHTML;
					$('drag_proxy').innerHTML=$('wrap_img'+i).innerHTML;
					$('drag_proxy').style.display='block';
					drag_sort.target_index=i;
					drag_flag=true;
				}
				if(isIE)
					target.setCapture();
				avalon.bind(document,'mouseup',function(){
					up(target);
				});
				e.stopPropagation();
				e.preventDefault();
			},
			drag_move:function(e){
				if(drag_flag){
					var xx=e.clientX,yy=e.clientY,offset=avalon($(drag_sort.container)).offset();
					var x=xx-offset.left,y=avalon(window).scrollTop()+yy-offset.top;
					var x_index=Math.floor(x/drag_sort.cell_size),y_index=Math.floor(y/drag_sort.cell_size),move_to=3*y_index+x_index;
					$('drag_proxy').style.top=y-drag_sort.cell_size/2+'px';
					$('drag_proxy').style.left=x-drag_sort.cell_size/2+'px';
					if(move_to!=drag_sort.target_index){
						drag_sort.photo_list.removeAt(drag_sort.target_index);
						drag_sort.photo_list.splice(move_to,0,{src:'1.jpg'});
						drag_sort.target_index=move_to;
					}
				}
				e.stopPropagation();
			}
		});
		
		
		function up(target){
			if(isIE)
				target.releaseCapture();
			var target_index=drag_sort.target_index;
			if(ori_src&&target_index!=-1){
				drag_sort.photo_list.splice(target_index,1);
				drag_sort.photo_list.splice(target_index,0,ori_src);
			}
			drag_holder=null;
			drag_flag=false;
			drag_sort.target_index=-1;
			$('drag_proxy').style.display='none';
			avalon.unbind(document,'mouseup');
		}
		
		
		for(var i=1;i<10;i++)
			drag_sort.photo_list.push({src:"img/"+i+'.jpg'});
		avalon.scan();

});