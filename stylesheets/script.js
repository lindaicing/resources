$(document).ready(function(){
    $("#sandwich").click(function(){
        $("nav").toggleClass("showNav");
    });

    $("#keymoji").click(function(){
        $("#key div").toggleClass("keyClicked");
    });

    $(window).bind("resize", function () {
        if ($(this).width() > 600) {
            $("nav").removeClass("showNav");
            $("#key div").removeClass("keyClicked");
            $("#shrink span").css({"display":"block"});
        }else{
            $("#shrink span").css({"display":"none"});
        }
    }).trigger('resize');


    // Hide Nav ------------------------------------------------------------
    $("#shrink span").click(function(){
        $("#page, nav").toggleClass("shrinkNav");
    });

    $("#shrink").click(function(){
        $("#shrink span p").toggleClass("switchDirection");
    });
    

    // Scroll functions ------------------------------------------------------------
    $(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta < 0) {
            $("nav").removeClass("showNav");
        }
    });
    (function () {
        var previousScroll = 0;
        $(window).scroll(function () {
           var currentScroll = $(this).scrollTop();
           if (currentScroll >= previousScroll){
               $("nav").removeClass("showNav");
           }
           previousScroll = currentScroll;
        });
    }());


    // Confetti --------------------------------------------------------------------
    // Code an altered version of the one from https://www.cssscript.com/confetti-falling-animation/
    $("#confetti").click(function(){
        confetti.start(2000, 50);
    });
})
