$(function(){
	/**
	 * 不能使用$("#game")这是jQuery对象
	 * 只能使用document.getElementById();
	 */
	var canvas=document.getElementById("game");
	console.log(canvas);
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="rgba(200,200,100,.6)";
	ctx.beginPath();
	ctx.arc(100,100,50,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
})