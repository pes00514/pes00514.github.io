	var preloadImg_count =0;
	var img = new Array()
function preloadImg(image) {//預載圖片
   img[preloadImg_count] = new Image();
   img[preloadImg_count].src = path+image;
   preloadImg_count++;
  }


	
function Enter(){
var ename =document.getElementById("name").value;
document.getElementById("fontone").value = ename;
document.getElementById("fonttwo").value = ename;
document.getElementById("fontthree").value = ename;
document.getElementById("fontfour").value = ename;
}


//錶面>
function surfacenext(){	
	surface_count++;
	if(surface_count==surface.length){surface_count=0;}
	document.getElementById("Imgid1").src=surface[surface_count];
	document.getElementById("P1").src=surfaceB[surface_count];
}
	
//錶面<
function surfaceprevious(){
	surface_count--;
	if(surface_count==-1){surface_count=surface.length-1;}
	document.getElementById("Imgid1").src=surface[surface_count];
	document.getElementById("P1").src=surfaceB[surface_count];

}
//錶框>
function shellnext(){
	shell_count++;
	if(shell_count==shell.length){shell_count=0;}
	document.getElementById("Imgid2").src=shell[shell_count];
	document.getElementById("P2").src=shellB[shell_count];
	
	//銀色只能是經典面板
	if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"){
		surface = ["idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約黑.png"];
		surface_count = surface.length-1;
		surfacenext();
	}else if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
		surface = ["idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"];	
		surface_count = surface.length-1;
		surfacenext();
	
	}else if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"){
		surface = ["idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"];	
	}
}
//錶框<
function shellprevious(){
	shell_count--;
	if(shell_count==-1){shell_count=shell.length-1;}
	document.getElementById("Imgid2").src=shell[shell_count];
	document.getElementById("P2").src=shellB[shell_count];
	
	//銀色只能是經典面板
	if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"){
	surface = ["idwatchimg/Watchsurface/S面板-簡約白.png",
				"idwatchimg/Watchsurface/S面板-簡約黑.png"];
	surfaceB =["idwatchimg/surfaceBig/41mm-面板-簡約白.png",
				"idwatchimg/surfaceBig/41mm-面板-簡約黑.png"];
	surface_count = surface.length-1;
	surfacenext();
	}else if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
		surface = ["idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"];
		surface_count = surface.length-1;
		surfacenext();
	
	}else if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"){
		surface = ["idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"];	
	}
}
//錶帶>
function ropenext(){
	rope_count++;
	if(rope_count==rope.length){rope_count=0;}
	document.getElementById("Imgid3").src=rope[rope_count];
	document.getElementById("P3").src=ropeB[rope_count];
}
//錶帶<
function ropeprevious(){
	rope_count--;
	if(rope_count==-1){rope_count=rope.length-1;}
	document.getElementById("Imgid3").src=rope[rope_count];
	document.getElementById("P3").src=ropeB[rope_count];
}

function sizechange(sId){

	if(sId=="36mm"){
		surface = ["idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/36mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/36mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-翠綠.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png",
					"idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png",
					"idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"];
		
		shell = ["idwatchimg/Watchshell/S錶殼-玫瑰金.png",
					"idwatchimg/Watchshell/S錶殼-銀色.png",
					"idwatchimg/Watchshell/S錶殼-亮黑.PNG"];
		shellB = ["idwatchimg/shellBig/36mm-錶殼-玫瑰金.png",
					"idwatchimg/shellBig/36mm-錶殼-銀色.png",
					"idwatchimg/shellBig/36mm-錶殼-亮黑.png"];
		rope = ["idwatchimg/rope/S皮-沉黑.png",
				"idwatchimg/rope/S皮-紅褐.png",
				"idwatchimg/rope/S皮-粉色(近膚色的淺粉).png",
				"idwatchimg/rope/S金屬米蘭-玫瑰金.png",
				"idwatchimg/rope/S金屬米蘭-銀色.png",
				"idwatchimg/rope/S金屬米蘭-黑鋼.png"];
		ropeB = ["idwatchimg/ropeBig/36mm皮-沉黑.png",
					"idwatchimg/ropeBig/36mm皮-紅褐.png",
					"idwatchimg/ropeBig/36mm皮-粉色(近膚色的淺粉).png",
					"idwatchimg/ropeBig/36mm-金屬米蘭-玫瑰金.png",
					"idwatchimg/ropeBig/36mm-金屬米蘭-銀色.png",
					"idwatchimg/ropeBig/36mm-金屬米蘭-黑鋼.png"];
	}else if(sId=="41mm"){
		surface = ["idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"];				
		shell = ["idwatchimg/Watchshell/S錶殼-玫瑰金.png",
					"idwatchimg/Watchshell/S錶殼-亮黑.PNG",
					"idwatchimg/Watchshell/S錶殼-銀色.png"];
		shellB = ["idwatchimg/shellBig/41mm-錶殼-玫瑰金.png",
					"idwatchimg/shellBig/41mm-錶殼-亮黑.png",
					"idwatchimg/shellBig/41mm-錶殼-銀色.png"];
		rope = ["idwatchimg/rope/S皮-沉黑.png",
				"idwatchimg/rope/S皮-紅褐.png",
				"idwatchimg/rope/S皮-粉色(近膚色的淺粉).png",
				"idwatchimg/rope/S皮-瘋馬褐.png",
				"idwatchimg/rope/S金屬米蘭-玫瑰金.png",
				"idwatchimg/rope/S金屬米蘭-黑鋼.png",
				"idwatchimg/rope/S金屬米蘭-銀色.png"];
		ropeB = ["idwatchimg/ropeBig/41mm皮-沉黑.png",
					"idwatchimg/ropeBig/41mm皮-紅褐.png",
					"idwatchimg/ropeBig/41mm皮-粉色(近膚色的淺粉).png",
					"idwatchimg/ropeBig/41mm皮-瘋馬褐.png",
					"idwatchimg/ropeBig/41mm-金屬米蘭-玫瑰金.png",
					"idwatchimg/ropeBig/41mm-金屬米蘭-黑鋼.png",
					"idwatchimg/ropeBig/41mm-金屬米蘭-銀色.png"];
	}
	return_zero();
}
//切換size歸零
function return_zero(){
	surface_count=0;
	document.getElementById("Imgid1").src=surface[surface_count];
	document.getElementById("P1").src=surfaceB[surface_count];
	shell_count=0;
	document.getElementById("Imgid2").src=shell[shell_count];
	document.getElementById("P2").src=shellB[shell_count];
	rope_count=0;
	document.getElementById("Imgid3").src=rope[rope_count];
	document.getElementById("P3").src=ropeB[rope_count];
}

function imgRadio(sId) {
    var oImg = document.getElementsByClassName("watchSize");

    for (var i = 0; i < oImg.length; i++) {
      if (oImg[i].id == sId) {
        oImg[i].style = 'margin-right: -30px;margin-left: -30px;-webkit-filter: invert(100%);filter: invert(100%);';
      } else {
        oImg[i].style = 'margin-right: -30px;margin-left: -30px;-webkit-filter: invert(0%);filter: invert(0%);';
      }
    }
	size=sId;
  }
//判斷選配後的網址
function goidwatch(){
	/*var fm = document.getElementById("form1");
	var size;
	var go_href;
	for (var i=0; i<fm.wsize.length; i++)
	{
	   if (fm.wsize[i].checked)
	   {
		  size = fm.wsize[i].value;
		  break;
	   }
	}*/
	if(size=="41mm"){
		if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-紅褐.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/Et1yQZ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/HQVhmR';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/juBpaX';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-沉黑.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/9Y2Zv3';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/4EquSh';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/WTcy8v';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-瘋馬褐.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/dwzE4q';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/MLV7NC';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/BiJSQo';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm-金屬米蘭-玫瑰金.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/9zaRFe';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/zLMNxy';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/QBjVf4';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm-金屬米蘭-黑鋼.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/tCy45R';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/kXALcZ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/Ebnb2F';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-粉色(近膚色的淺粉).png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/7du9tg';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/kHku8G';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/ZPXzoa';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm-金屬米蘭-銀色.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"){
					location.href='https://goo.gl/zkbgtP';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/Vg7YHM';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://goo.gl/6Y3ELc';
				}
			}
		}
		if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png"){
			location.href='https://goo.gl/yTh9su';
		}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
			location.href='https://goo.gl/AbpFSh';
		}
	}else if(size=="36mm"){
		if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-紅褐.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/dyZHFi';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/NdZZom';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/7kwNbY';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-沉黑.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/HGZQ8r';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/rQ7DjY';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/CZ6ijJ';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-粉色(近膚色的淺粉).png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/Vmybce';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/81AMmU';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/4D9h8B';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm-金屬米蘭-銀色.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/MBPAqF';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/9im6Sj';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/nSTo7q';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm-金屬米蘭-玫瑰金.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/pdSC1X';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/qiPoRH';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/YMFMJb';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm-金屬米蘭-黑鋼.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/KVWhcx';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/AdU1f4';
				}
			}
		}
		if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-翠綠.png"){
			location.href='https://goo.gl/iNu5cb';
		}
	}
}