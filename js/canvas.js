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
		var x=r*Math.cos(deg);
		var y=r*Math.sin(deg);
		var txtDeg=Math.ceil(deg*180/Math.PI)+"°";
		toLine(ctx,x,y,r);
		if(x>0 && y<0){
			txtFill(ctx,txtDeg,x,y-10);
		}else if(x<0 && y>0){
			txtFill(ctx,txtDeg,x-30,y+10);			
		}else if(x<0 && y<0){
			txtFill(ctx,txtDeg,x-30,y-10);
		}else if(x>0 && y>0){
			txtFill(ctx,txtDeg,x,y+20);			
		}else{
			txtFill(ctx,txtDeg,x,y);		
		}
	}
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
	ctx.font="16px Arial";
	ctx.fillText(txt,x,y);
}