$(document).ready(function(){
    $("#sandwich").click(function(){
        $("#page, nav, h1").toggleClass("showNav");
    });

    $("#keymoji").click(function(){
        $("#key div").toggleClass("keyClicked");
    });

    $(window).bind("resize", function () {
        console.log($(this).width())
        if ($(this).width() > 600) {
            $("#page, nav, h1").removeClass("showNav");
            $("#key div").removeClass("keyClicked");
        }
    }).trigger('resize');
})