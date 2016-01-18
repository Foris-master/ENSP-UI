/**
 * Created by Thedward on 18/01/2016.
 */
function getWindowHeight() {
    var windowHeight=0;
    if (typeof(window.innerHeight)=='number') {
        windowHeight=window.innerHeight;
    } else {
        if (document.documentElement&& document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body&&document.body.clientHeight) {
                windowHeight=document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}

window.onload = function() {
    //setFooter();
    var h=getWindowHeight();
    $(".main-section .container").css("min-height", (h*0.77));
}
window.onresize = function() {
    //setFooter();
    var h=getWindowHeight();
    $(".main-section .container").css("min-height", (h*0.77));
}