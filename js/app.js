$( "#ventures>div>ul>.grid-25" )
.mouseenter(function() {
    $( this ).find(".hover").stop().animate({top: "0"}, 150);
});
$( "#ventures>div>ul>.grid-25" )
.mouseleave(function() {
	    $( this ).parent().find(".hover").stop().animate({top: "-100%"});
});




$( "#team>div>ul>.grid-25>div" )
.mouseenter(function() {
    $( this ).find(".hover").stop().animate({top: "0"}, 150);
});
$( "#team>div>ul>.grid-25>div" )
.mouseleave(function() {
	    $( this ).parent().find(".hover").stop().animate({top: "-100%"});
});
