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
        }
    }).trigger('resize');

    
    // Scroll functions
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
})
