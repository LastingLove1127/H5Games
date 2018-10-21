function Circle(x,y,r){
	this.x=x;
	this.y=y;
	this.r=r;
}
function Line(startPoint,endPoint,thickness){
	this.startPoint=startPoint;
	this.endPoint=endPoint;
	this.thickness;
}
var untangleGame={
	circle:[],
	thinLineThickness:1,
	lines:[]
}
function drawLine(ctx,x1,y1,x2,y2,thickness){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineWidth=thickness;
	ctx.strokeStyle="#c9c";
	ctx.closePath()
	ctx.stroke();
}
function drawCircle(ctx,x,y,radius){
	var rgbR=Math.random()*155+100;
	var rgbG=Math.random()*155+120;
	var rgbB=Math.random()*155+100;
	var rgbA=Math.random();
	ctx.beginPath();
	ctx.fillStyle="rgba("+rgbR+","+rgbG+","+rgbB+","+rgbA+")";
	ctx.arc(x,y,radius,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fill();
}

$(function(){
	/**
	 * 不能使用$("#game")这是jQuery对象
	 * 只能使用document.getElementById();
	 */
	var canvas=document.getElementById("game");
	console.log(canvas.width,canvas.height);
	var ctx=canvas.getContext("2d");
	var width=canvas.width;
	var height=canvas.height;
	
	for(var i=0;i<5;i++){
		var x=Math.random()*width;
		var y=Math.random()*height;		
		var radius=(Math.random()*20)+10;
		txtFill(ctx,i,x,y);
		drawCircle(ctx,x,y,radius);
		untangleGame.circle.push(new Circle(x,y,radius));
	}

	var circle=untangleGame.circle;
	var thickness=untangleGame.thinLineThickness;
	var len=circle.length;
	for(var i=0;i<len;i++){
		startPoint=circle[i];
		for(var j=0;j<i;j++){
			endPoint=circle[j];
			drawLine(ctx,startPoint.x,startPoint.y,endPoint.x,endPoint.y,thickness);
		untangleGame.lines.push(new Line(startPoint,endPoint,thickness));
		}

	}

})

function txtFill(ctx,txt,x,y){
	ctx.font="30px Arial";
	ctx.fillText(txt,x,y);
}

function clearctx(ctx){
	ctx.clearRect(0,0,canvas.width,canvas.height);
}