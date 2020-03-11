
var cTimer = (function(){
    function callTimeout(cb,ms){
        if(window.Worker){
            let worker = new Worker('slave.js');
            worker.postMessage(ms);
            worker.onmessage = function(e) {
                cb();
            }
            return worker;
        }else{
            throw new Error("browser does not support worker api");
        }
    }
    function cancelTimeout(w_id){
        w_id.terminate();
        console.log(`cancelled cTimer`);
    }
    return {
        callTimeout,
        cancelTimeout
    }
})();