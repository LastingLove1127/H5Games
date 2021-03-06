var matchingGame={};
matchingGame.deck=[
			'cardAK','cardAK',
			'cardAQ','cardAQ',
			'cardAJ','cardAJ',
			'cardBK','cardBK',
			'cardBQ','cardBQ',
			'cardBJ','cardBJ'
			];
$(function() {
	matchingGame.deck.sort(shuffle);
    for (var i = 0; i < 11; i++) {
        $(".card:first-child").clone().appendTo("#cards");
    }

    $("#cards").children().each(function(index) {
        $(this).css({
            "left": ($(this).width() + 20) * (index % 4),
            "top": ($(this).height() + 20 ) * Math.floor(index / 4)
        })

        var pattern=matchingGame.deck.pop();
        $(this).find(".back").addClass(pattern);
        $(this).attr("data-pattern",pattern);
        $(this).click(selectCard);
    })
})
function shuffle(){
	return 0.5-Math.random();
}

function selectCard(){
	if($(".card-fliped").length>1){
		return;
	}
	$(this).addClass("card-fliped");
	if($(".card-fliped").length==2){
		setTimeout(checkPattern,700);
	}
}

function checkPattern(){
	if(isMatchPattern()){
		$(".card-fliped").removeClass("card-fliped").addClass("card-removed");
		$(".card-removed").bind("webkitTransitionEnd",removeTookCards);
	}else{
		$(".card-fliped").removeClass("card-fliped");
	}
}

function isMatchPattern(){
	var cards=$(".card-fliped");
	var pattern=$(cards[0]).data("pattern");
	var otherPattern=$(cards[1]).data("pattern");
	return (pattern==otherPattern);
}

function removeTookCards(){
	$(".card-removed").remove();
}
function gameOver(){
	if($("#cards").children().length==0){
		alert("Game Over");
	}
}