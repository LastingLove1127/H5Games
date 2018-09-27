// var KEY={
// 	UP:38,
// 	DOWN:40,
// 	W:87,
// 	S:83
// }
// $(function(){
// 	$('#paddleB').css('top','20px');
// 	$('#paddleA').css('top','60px');
// 	$(document).keydown(function(e){
// 		switch(e.which){
// 			case KEY.UP:
// 				var top=parseInt($("#paddleB").css('top'));
// 				$("#paddleB").css("top",top-5);
// 				break;
// 			case KEY.DOWN:
// 				var top=parseInt($("#paddleB").css('top'));
// 				$("#paddleB").css("top",top+5);
// 				break;
// 			case KEY.W:
// 				var top=parseInt($("#paddleA").css('top'));
// 				$("#paddleA").css("top",top-5);
// 				break;
// 			case KEY.S:
// 				var top=parseInt($("#paddleA").css('top'));
// 				$("#paddleA").css("top",top+5);
// 				break;
// 		}
// 	});
// })
var KEY={
	UP:38,
	DOWN:40,
	W:87,
	S:83
}

var pingpong={};
pingpong.pressedKeys=[];
pingpong.ball={
	speed:1,
	x:150,
	y:100,
	directionX:1,
	directionY:1
};
pingpong.score={
	scoreA:0,
	scoreB:0
}
$(function(){
	pingpong.timer=setInterval(loopGame,30);
	$(document).keydown(function(e){
		pingpong.pressedKeys[e.which]=true;
	});

	$(document).keyup(function(e){
		pingpong.pressedKeys[e.which]=false;
	});
});

function loopGame(){
	moveBall();
	movePaddles();
}

function movePaddles(){
	if(pingpong.pressedKeys[KEY.UP]){
		var top=parseInt($("#paddleB").css("top"));
		$("#paddleB").css("top",top-5);
		if(parseInt($("#paddleB").css("top"))<0){
			$("#paddleB").css("top",0);
		}
	}

	if(pingpong.pressedKeys[KEY.DOWN]){
		var top=parseInt($("#paddleB").css("top"));
		var playgroundHeight=parseInt($("#playground").height());
		var paddleHeight=parseInt($("#paddleB").css("height"));
		$("#paddleB").css("top",top+5);
		if(parseInt($("#paddleB").css("top"))+paddleHeight > playgroundHeight){
			$("#paddleB").css("top",playgroundHeight-paddleHeight);
		}
	}

	if(pingpong.pressedKeys[KEY.W]){
		var top=parseInt($("#paddleA").css("top"));
		$("#paddleA").css("top",top-5);
		if(parseInt($("#paddleA").css("top"))<0){
			$("#paddleA").css("top",0);
		}
	}

	if(pingpong.pressedKeys[KEY.S]){
		var top=parseInt($("#paddleA").css("top"));
		var playgroundHeight=parseInt($("#playground").height());
		var paddleHeight=parseInt($("#paddleB").css("height"));
		$("#paddleA").css("top",top+5);
		if(parseInt($("#paddleA").css("top"))+paddleHeight > playgroundHeight){
			$("#paddleA").css("top",playgroundHeight-paddleHeight);
		}
	}
}

function moveBall(){
	var playgroundWidth=parseInt($("#playground").width());
	var playgroundHeight=parseInt($("#playground").height());
	var ball=pingpong.ball;
	var score=pingpong.score;

	//检测底部
	if(ball.y+ball.speed*ball.directionY>playgroundHeight-parseInt($("#ball").css("height"))){
		ball.directionY=-1;
	}

	//检测上边缘
	if(ball.y+ball.speed*ball.directionY<0){
		
		ball.directionY=1;
	}
	//检测右边缘
	if(ball.x+ball.speed*ball.directionX>playgroundWidth-parseInt($("#ball").css("width"))){
		//玩家B丢分
		score.scoreA++;
		$("#scoreA").html(score.scoreA);
		//重置乒乓球
		ball.x=250;
		ball.y=100;
		$("#ball").css({
			"left":ball.x,
			"top":ball.y
		});
		ball.directionX=-1;
	}
	//检测左边缘
	if(ball.x+ball.speed*ball.directionX<0){
		//玩家A丢分
		score.scoreB++;
		$("#scoreB").html(score.scoreB);		
		//重置乒乓球
		ball.x=150;
		ball.y=100;
		$("#ball").css({
			"left":ball.x,
			"top":ball.y
		});
		ball.directionX=1;
	}

	ball.x +=ball.speed*ball.directionX;
	ball.y +=ball.speed*ball.directionY;

	//检测左边球拍
	var paddleAX=parseInt($("#paddleA").css("left"))+parseInt($("#paddleA").css("width"));
	var paddleABottom=parseInt($("#paddleA").css("top"))+parseInt($("#paddleA").css("height"));
	var paddleATop=parseInt($("#paddleA").css("top"));
	if(ball.x+ball.speed*ball.directionX <paddleAX){
		if( ball.y+ball.speed*ball.directionY <=paddleABottom && 
			ball.y+ball.speed*ball.directionY >=paddleATop){
			ball.directionX=1;
		}
	}

	//检测右边球拍
	var paddleBX=parseInt($("#paddleB").css("left"));
	var paddleBBottom=parseInt($("#paddleB").css("top"))+parseInt($("#paddleB").css("height"));
	var paddleBTop=parseInt($("#paddleB").css("top"));
	if(ball.x+ball.speed*ball.directionX >=paddleBX-parseInt($("#ball").css("width"))){
		if( ball.y+ball.speed*ball.directionY <=paddleBBottom &&
			ball.y+ball.speed*ball.directionY >=paddleBTop){
			ball.directionX=-1;
		}
	}

		$("#ball").css({
		"left":ball.x,
		"top":ball.y
		});	
}