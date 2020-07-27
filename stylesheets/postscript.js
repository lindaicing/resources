$(window).ready(function(){
    var delay = ( function() {
        var timer = 0;
        return function(callback, ms) {
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    delay(function(){
        $("#pageTransition").css({
            "display":"none"
        });
    }, 20 ); // end delay

    // $("pageTransition").css({
    //     "display":"none"
    // });
});