onmessage = function(event) {
    var num = event.data;
    var i = num;

    function timedCount() {

        i = i + 1;
        postMessage(i);
        setTimeout("timedCount()", 500);
    }
    timedCount();
};