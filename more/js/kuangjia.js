$(function(){
				var item = ["北京","tj","hb","ah","db","hn"];
				var bj   = ["朝阳","丰台","通州","4","5","6","7"];
				var tj   = ["a","b","c","d","e","f"];
				var hb = ["1a","2b","3c","4d","5e","6f","7g","8h","3c","4d","5e","6f","7g","8h"]
				var ah = ["111","222","333","444","555","666","777"]
				var szzz = [bj,tj,hb,ah];
				var t = item.length;
				$(".page").before("<div class='asfsg' style='width:100%;overflow:hidden;background:red;'></div>");
				$(".asfsg").after("<div class='asfsgaa' style='width:100%; overflow:hidden;background:#fff;'></div>");
				$(".asfsgaa").append("<div class='asfsgaaa' style='width:100%;margin-right:1%;overflow:hidden;'></div>");
				for(i=0;i<t;i++){
					$(".asfsg").append("<div class='asfsga' style='margin:5px 5px; padding:5px 20px;border:solid 1px yellow; text-align:cenyer;float:left;'></div>");
					$(".asfsga").eq(i).text(item[i]);
					$(".asfsga").eq(i).click(function(){
						var ind=$(this).index();
						var szzzind = szzz[ind];
						var l=szzzind.length;
						//alert(l)
						clicknum(l,szzzind);
					});
				};
				function clicknum(num,tx){
						$(".asfsgaaa").text("");
						for(y=0;y<num;y++){
							$(".asfsgaaa").append("<span class='text' style='border:solid 1px #000; padding:2px 20px;margin:5px 5px;float:left; display:block; height:20px'></span>");
							$(".text").eq(y).text(tx[y]);
						}
				}
})
