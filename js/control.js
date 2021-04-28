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

//選擇表面後的錶框組成
 function setShell(){
	if(size=="41mm"){
		if(surfaceB[surface_count].indexOf("太陽紋")>0){
			/* shell = ["idwatchimg/Watchshell/S錶殼-玫瑰金.png",
						"idwatchimg/Watchshell/S錶殼-亮黑.PNG"];
			shellB = ["idwatchimg/shellBig/41mm-錶殼-玫瑰金.png",
						"idwatchimg/shellBig/41mm-錶殼-亮黑.png"];
			shell_count = shell.length-1;
			shellnext(); */
			shell = ["idwatchimg/Watchshell/S錶殼-玫瑰金.png",
						"idwatchimg/Watchshell/S錶殼-亮黑.PNG",
						"idwatchimg/Watchshell/S錶殼-銀色.png"];
			shellB = ["idwatchimg/shellBig/41mm-錶殼-玫瑰金.png",
						"idwatchimg/shellBig/41mm-錶殼-亮黑.png",
						"idwatchimg/shellBig/41mm-錶殼-銀色.png"];
		}else{
			shell = ["idwatchimg/Watchshell/S錶殼-玫瑰金.png",
						"idwatchimg/Watchshell/S錶殼-亮黑.PNG",
						"idwatchimg/Watchshell/S錶殼-銀色.png"];
			shellB = ["idwatchimg/shellBig/41mm-錶殼-玫瑰金.png",
						"idwatchimg/shellBig/41mm-錶殼-亮黑.png",
						"idwatchimg/shellBig/41mm-錶殼-銀色.png"];
		} 
	}
} 

//錶面>
function surfacenext(){	
	surface_count++;
	if(surface_count==surface.length){surface_count=0;}
	document.getElementById("Imgid1").src=surface[surface_count];
	document.getElementById("P1").src=surfaceB[surface_count];
	setShell();
}
	
//錶面<
function surfaceprevious(){
	surface_count--;
	if(surface_count==-1){surface_count=surface.length-1;}
	document.getElementById("Imgid1").src=surface[surface_count];
	document.getElementById("P1").src=surfaceB[surface_count];
	setShell();

}
//錶框>
function shellnext(){
	shell_count++;
	if(shell_count==shell.length){shell_count=0;}
	document.getElementById("Imgid2").src=shell[shell_count];
	document.getElementById("P2").src=shellB[shell_count];
	
	//銀色只能是經典面板
	/* if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"){
		surface = ["idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"];	
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
	} */
}
//錶框<
function shellprevious(){
	shell_count--;
	if(shell_count==-1){shell_count=shell.length-1;}
	document.getElementById("Imgid2").src=shell[shell_count];
	document.getElementById("P2").src=shellB[shell_count];
	
	//銀色只能是經典面板
	/* if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"){
	surface = ["idwatchimg/Watchsurface/S面板-簡約白.png",
				"idwatchimg/Watchsurface/S面板-簡約黑.png"];
	surfaceB =["idwatchimg/surfaceBig/41mm-面板-簡約白.png",
				"idwatchimg/surfaceBig/41mm-面板-簡約黑.png"];
	surface_count = surface.length-1;
	surfacenext();
	}else if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
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
		//surface_count = surface.length-1;
		//surfacenext();
	
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
	} */
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
					"idwatchimg/Watchsurface/S面板-羅馬黑.png",
					//20210428 Mochi新增
					"idwatchimg/Watchsurface/S面板-面板-粉白珠光紋.png",
					"idwatchimg/Watchsurface/S面板-海藍潮汐綠.png"];
		surfaceB =["idwatchimg/surfaceBig/36mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/36mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-翠綠.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png",
					"idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png",
					"idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png",
					"idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG",
					//20210428 Mochi新增
					"idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png",
					"idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"];
		
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
				"idwatchimg/rope/S金屬米蘭-黑鋼.png",
				"idwatchimg/rope/S快拆皮革-36小白 - new.png",
				"idwatchimg/rope/S快拆皮革-36深灰- new.png",
				"idwatchimg/rope/S快拆皮革-36深藍 - new.png",
				"idwatchimg/rope/S快拆皮革-36淺綠灰 - new.png",
				"idwatchimg/rope/S快拆皮革-36淺藍灰 - new.png",
				//20210428 Mochi新增
				"idwatchimg/rope/S快拆皮革-36小黃褐- new.png"];
		ropeB = ["idwatchimg/ropeBig/36mm皮-沉黑.png",
					"idwatchimg/ropeBig/36mm皮-紅褐.png",
					"idwatchimg/ropeBig/36mm皮-粉色(近膚色的淺粉).png",
					"idwatchimg/ropeBig/36mm-金屬米蘭-玫瑰金.png",
					"idwatchimg/ropeBig/36mm-金屬米蘭-銀色.png",
					"idwatchimg/ropeBig/36mm-金屬米蘭-黑鋼.png",
					"idwatchimg/ropeBig/36mm皮-白.png",
					"idwatchimg/ropeBig/36mm皮-深灰.png",
					"idwatchimg/ropeBig/36mm皮-深藍.png",
					"idwatchimg/ropeBig/36mm皮-淺綠灰.png",
					"idwatchimg/ropeBig/36mm皮-淺藍灰.png",
					//20210428 Mochi新增
					"idwatchimg/ropeBig/36mm皮-黃褐.png"];
	}else if(sId=="41mm"){
		surface = ["idwatchimg/Watchsurface/S面板-簡約白.png",
					"idwatchimg/Watchsurface/S面板-簡約黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-翠綠.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-銀白.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-曜黑.png",
					"idwatchimg/Watchsurface/S面板-面板-太陽紋-寶藍.png",
					"idwatchimg/Watchsurface/S面板-數字藍.png",
					"idwatchimg/Watchsurface/S面板-羅馬白.png",
					"idwatchimg/Watchsurface/S面板-羅馬黑.png",
					//20210428 Mochi新增
					"idwatchimg/Watchsurface/S面板-面板-粉白珠光紋.png",
					"idwatchimg/Watchsurface/S面板-海藍潮汐綠.PNG"];
		surfaceB =["idwatchimg/surfaceBig/41mm-面板-簡約白.png",
					"idwatchimg/surfaceBig/41mm-面板-簡約黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-翠綠.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png",
					"idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png",
					"idwatchimg/surfaceBig/41mm-面板-數字藍.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬白.png",
					"idwatchimg/surfaceBig/41mm-面板-羅馬黑.png",
					//20210428 Mochi新增
					"idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png",
					"idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"];				
		shell = ["idwatchimg/Watchshell/S錶殼-玫瑰金.png",
					"idwatchimg/Watchshell/S錶殼-亮黑.PNG",
					"idwatchimg/Watchshell/S錶殼-銀色.png"];
		shellB = ["idwatchimg/shellBig/41mm-錶殼-玫瑰金.png",
					"idwatchimg/shellBig/41mm-錶殼-亮黑.png",
					"idwatchimg/shellBig/41mm-錶殼-銀色.png"];
		rope = ["idwatchimg/rope/S皮-沉黑.png",
				"idwatchimg/rope/S皮-紅褐.png",
				"idwatchimg/rope/S皮-粉色(近膚色的淺粉).png",
				// 20210428 Mochi 下架"idwatchimg/rope/S皮-瘋馬褐.png",
				"idwatchimg/rope/S金屬米蘭-玫瑰金.png",
				"idwatchimg/rope/S金屬米蘭-黑鋼.png",
				"idwatchimg/rope/S金屬米蘭-銀色.png",
				"idwatchimg/rope/S快拆皮革-41大白- new.png",
				"idwatchimg/rope/S快拆皮革-41深灰- new.png",
				"idwatchimg/rope/S快拆皮革-41深藍 - new.png",
				"idwatchimg/rope/S快拆皮革-41淺綠灰- new.png",
				"idwatchimg/rope/S快拆皮革-41淺藍灰- new.png",
				//20210428 Mochi新增
				"idwatchimg/rope/S快拆皮革-41大黃褐- new.png"];
		ropeB = ["idwatchimg/ropeBig/41mm皮-沉黑.png",
					"idwatchimg/ropeBig/41mm皮-紅褐.png",
					"idwatchimg/ropeBig/41mm皮-粉色(近膚色的淺粉).png",
					// 20210428 Mochi 下架 "idwatchimg/ropeBig/41mm皮-瘋馬褐.png",
					"idwatchimg/ropeBig/41mm-金屬米蘭-玫瑰金.png",
					"idwatchimg/ropeBig/41mm-金屬米蘭-黑鋼.png",
					"idwatchimg/ropeBig/41mm-金屬米蘭-銀色.png",
					"idwatchimg/ropeBig/41mm皮-白.png",
					"idwatchimg/ropeBig/41mm皮-深灰.png",
					"idwatchimg/ropeBig/41mm皮-深藍.png",
					"idwatchimg/ropeBig/41mm皮-淺綠灰.png",
					"idwatchimg/ropeBig/41mm皮-淺藍灰.png",
					//20210428 Mochi新增
					"idwatchimg/ropeBig/41mm皮-黃褐.png"];
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
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://goo.gl/Et1yQZ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://goo.gl/HQVhmR';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E7%B4%85%E8%A4%90%E7%9A%AE%E9%9D%A9';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-沉黑.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%B6%93%E5%85%B8%E6%AC%BE-%E6%B2%89%E9%BB%91%E7%9A%AE%E9%9D%A9';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E5%A4%AA%E9%99%BD%E7%B4%8B-%E6%B2%89%E9%BB%91%E7%9A%AE%E9%9D%A9-%E6%97%A5%E6%9C%9F%E6%AC%BE';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E6%B2%89%E9%BB%91%E7%9A%AE%E9%9D%A9';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		/*}  20210428 Mochi 下架 
		else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-瘋馬褐.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%B6%93%E5%85%B8%E6%AC%BE-%E7%98%8B%E9%A6%AC%E8%A4%90%E7%9A%AE';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E5%A4%AA%E9%99%BD%E7%B4%8B-%E7%98%8B%E9%A6%AC%E8%A4%90%E7%9A%AE-%E6%97%A5%E6%9C%9F%E6%AC%BE';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E7%98%8B%E9%A6%AC%E8%A4%90%E7%9A%AE';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}   */
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm-金屬米蘭-玫瑰金.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%B6%93%E5%85%B8%E6%AC%BE-%E7%8E%AB%E9%87%91%E7%B1%B3%E8%98%AD';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E5%A4%AA%E9%99%BD%E7%B4%8B-%E7%8E%AB%E9%87%91%E7%B1%B3%E8%98%AD-%E6%97%A5%E6%9C%9F%E6%AC%BE';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E7%8E%AB%E9%87%91%E7%B1%B3%E8%98%AD';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm-金屬米蘭-黑鋼.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-%E7%B6%93%E5%85%B8%E6%AC%BE-%E6%B2%89%E9%BB%91%E7%9A%AE%E9%9D%A9';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-41mm%E5%A4%AA%E9%99%BD%E7%B4%8B-%E9%BB%91%E9%8B%BC%E7%B1%B3%E8%98%AD-%E6%97%A5%E6%9C%9F%E6%AC%BE';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E9%BB%91%E9%8B%BC%E7%B1%B3%E8%98%AD';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-粉色(近膚色的淺粉).png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/%E7%B6%93%E5%85%B8%E6%AC%BE-%E6%B7%BA%E7%B2%89%E7%9A%AE%E7%B3%BB%E5%88%97';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/%E5%A4%AA%E9%99%BD%E7%B4%8B-%E6%B7%BA%E7%B2%89%E7%9A%AE%E7%B3%BB%E5%88%97';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/36mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E8%A3%B8%E7%B2%89%E7%9A%AE%E9%9D%A9';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm-金屬米蘭-銀色.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/%E7%B6%93%E5%85%B8%E6%AC%BE-%E9%8A%80%E7%99%BD%E9%8B%BC%E5%B8%B6%E7%B3%BB%E5%88%97';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/%E5%A4%AA%E9%99%BD%E7%B4%8B-%E9%8A%80%E7%99%BD%E9%8B%BC%E5%B8%B6%E7%B3%BB%E5%88%97';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-%E7%BE%85%E9%A6%AC%E6%AC%BE-%E9%8A%80%E7%99%BD%E7%B1%B3%E8%98%AD';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-深藍.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-classic-style-royal-blue-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/41mm-solar-pattern-style-royal-blue-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-rome-style-royal-blue-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-淺藍灰.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-classic-style-light-blue-ash-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/41mm-solar-pattern-style-light-blue-ash-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-rome-style-light-blue-ash-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-淺綠灰.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-classic-style-light-green-ash-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/41mm-solar-pattern-style-light-green-ash-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-rome-style-light-green-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-深灰.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-classic-style-dark-gray-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/41mm-solar-pattern-style-dark-gray-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-rome-style-dark-gray-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-白.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-classic-style-white-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/41mm-solar-pattern-style-white-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-rome-style-white-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/41mm皮-黃褐.png"){   //20210428 Mochi新增
			if(shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/41mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-簡約黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-數字藍.png"){
					location.href='https://www.idwatch.me/products/41mm-classic-style-yellow-brown-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-太陽紋-寶藍.png"){
					location.href='https://www.idwatch.me/products/41mm-solar-pattern-style-royal-blue-leather-1';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-羅馬黑.png"){
					location.href='https://www.idwatch.me/products/41mm-rome-style-yellow-brown-leather';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-粉白珠光紋.png"){  
					location.href='https://is.gd/zmeEc4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/41mm-面板-海藍潮汐綠.png"){  
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B641mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
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
					location.href='https://www.idwatch.me/products/%E7%B6%93%E5%85%B8%E6%AC%BE-%E7%B4%85%E8%A4%90%E7%9A%AE%E7%B3%BB%E5%88%97';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://www.idwatch.me/products/36mm-solar-pattren-brown-leather-strip';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://www.idwatch.me/products/36mm-rome-style-brown-leather-strip';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-沉黑.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://www.idwatch.me/products/%E7%B6%93%E5%85%B8%E6%AC%BE-%E6%B2%89%E9%BB%91%E7%89%9B%E7%9A%AE%E5%B8%B6';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/rQ7DjY';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/CZ6ijJ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
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
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
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
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
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
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm-金屬米蘭-黑鋼.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/hvo66f';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/KVWhcx';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/AdU1f4';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-白.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/FPAfJj';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/jaL33s';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/Jf5PBJ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-深灰.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/Dg5AWg';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/f5r5y6';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/VMuXxf';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-深藍.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/EYjcaK';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/tkdrhZ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/crjnje';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-淺綠灰.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/7qoXae';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/jSyaiq';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/PxFSeJ';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-淺藍灰.png"){
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://goo.gl/wWcJsr';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://goo.gl/FKVmZB';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://goo.gl/42k6nH';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){  //20210428 Mochi新增
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ //20210428 Mochi新增 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}else if(ropeB[rope_count]=="idwatchimg/ropeBig/36mm皮-黃褐.png"){   //20210428 Mochi新增
			if(shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-銀色.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-玫瑰金.png"||shellB[shell_count]=="idwatchimg/shellBig/36mm-錶殼-亮黑.png"){
				if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-簡約黑.png"){
					location.href='https://is.gd/jUewYl';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-銀白.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-曜黑.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-寶藍.png"){
					location.href='https://is.gd/QHZAce';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬白 -.png"||surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-羅馬黑.PNG"){
					location.href='https://is.gd/ztzyp9';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-粉白珠光紋.png"){ 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E7%B2%89%E7%99%BD%E7%8F%A0%E5%85%89%E7%B4%8B';
				}else if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-海藍潮汐綠.png"){ 
					location.href='https://www.idwatch.me/products/%E5%AE%A2%E8%A3%BD%E5%8C%96%E6%89%8B%E9%8C%B6-36mm-%E9%8A%80%E6%B2%B3%E6%AC%BE-%E6%B5%B7%E8%97%8D%E6%BD%AE%E6%B1%90%E7%B6%A0';
				}
			}
		}
		if(surfaceB[surface_count]=="idwatchimg/surfaceBig/36mm-面板-太陽紋面板-翠綠.png"){
			location.href='https://goo.gl/iNu5cb';
		}
	}
}
