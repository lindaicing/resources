$(document).ready(function(){
    $("#sandwich").click(function(){
        $("#page, nav, h1").toggleClass("showNav");
    });

    $("#keymoji").click(function(){
        $("#key div").toggleClass("keyClicked");
    });

    $('nav').on('swipe',function(){
        $("#key div").removeClass("keyClicked");
    } );

    $(window).bind("resize", function () {
        if ($(this).width() > 600) {
            $("#page, nav, h1").removeClass("showNav");
            $("#key div").removeClass("keyClicked");
        }
    }).trigger('resize');
})