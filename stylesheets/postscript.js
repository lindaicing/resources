var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function(){
    addTransition();
}, 500 ); // end delay

function addTransition(){
    $("#page, body, nav, #shrink, #shrink span, #switch").css({
        "-webkit-transition":"all 500ms cubic-bezier(0.515, 0, 0.425, 1)",
        "-webkit-transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "-moz-transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "-o-transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "transition":"all 500ms cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "-webkit-transition-timing-function":"cubic-bezier(0.515, 0, 0.425, 1)",
        "-webkit-transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "-moz-transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "-o-transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
        "transition-timing-function":"cubic-bezier(0.515, -0.005, 0.425, 1.020)",
    })
}