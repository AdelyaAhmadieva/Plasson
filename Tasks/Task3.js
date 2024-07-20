(function() {
    var readyFunctions = [];
    var isReady = false;

    function executeReadyFunctions() {
        isReady = true;
        readyFunctions.forEach(function(fn) {
            fn.call(document);
        });
        readyFunctions = [];
    }

    function ready(fn) {
        if (isReady) {
            fn.call(document);
        } else {
            readyFunctions.push(fn);
        }
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        executeReadyFunctions();
    } else {
        document.addEventListener("DOMContentLoaded", executeReadyFunctions);
    }

    window.ready = ready;
})();


ready(function() {
    console.log("DOM is ready!");
});
