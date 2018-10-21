$(function(){
	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var r=150;
	ctx.strokeStyle="violate";
	ctx.beginPath();
	ctx.arc(r+50,r+50,r,0,Math.PI*2,false);
	ctx.closePath();
	ctx.stroke();
	ctx.translate(r+50,r+50);
	for(var i=0;i<12;i++){
		var deg=i*Math.PI/6;
		var rad=deg/180;
		var x=r*Math.cos(deg);
		var y=r*Math.sin(deg);
		var txtDeg="角度："+Math.ceil(deg*180/Math.PI)+"°";
		var txtRad="弧度:"+Math.ceil(rad);
		toLine(ctx,x,y,r);
		if(x>0 && y<0){
			txtFill(ctx,txtDeg,x,y-5);
		}else if(x<0 && y>0){
			txtFill(ctx,txtDeg,x-5,y+5);		
		}else if(x<0 && y<0){
			txtFill(ctx,txtDeg,x-5,y-5);
		}else if(x>0 && y>0){
			txtFill(ctx,txtDeg,x-5,y+5);		
		}else{
			txtFill(ctx,txtDeg,x,y);		
		}
	}
	ctx.translate(-r-50,-r-50);
	//绘制上半圆
	ctx.beginPath();
	ctx.fillStyle="yellow";	
	ctx.arc(100,500,100,0,Math.PI,true);
	ctx.closePath();
	ctx.fill();
	//绘制下半圆
	ctx.beginPath();	
	ctx.fillStyle="orange";	
	ctx.arc(100,520,100,0,Math.PI,false);
	ctx.closePath();
	ctx.fill();
	//绘制左半圆
	ctx.beginPath();	
	ctx.fillStyle="green";	
	ctx.arc(310,520,100,Math.PI/2,Math.PI*3/2,false);
	ctx.closePath();
	ctx.fill();
	//绘制右半圆
	ctx.beginPath();
	ctx.fillStyle="#9cb";	
	ctx.arc(330,520,100,Math.PI*3/2,Math.PI/2,false);
	ctx.closePath();
	ctx.fill();
})

function drawCircle(ctx,x,y){
	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.arc(x,y,5,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fill();
}

function toLine(ctx,x,y,r){
	ctx.beginPath();
	ctx.moveTo(0,0);	
	ctx.lineTo(x,y);
	ctx.closePath();
	ctx.stroke();
}

function txtFill(ctx,txt,x,y){
	ctx.font="14px Arial";
	ctx.fillText(txt,x,y);
}