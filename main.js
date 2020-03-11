
var cTimer = (function(){
    /**
 * @function callTimeout
 * @param {function} callback
 * @param {number} milliseconds
 * @returns {Object} worker
 * @description takes a callback function and time in milliseconds, starts the timer using a 
 * worker thread and returns a worker reference as an object 
 */
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
    /**
 * @function cancelTimeout
 * @param {Object} worker
 * @returns {null}
 * @description takes a already created worker reference as input, cancels the timer 
 * (terminates the worker thread) 
 */
    function cancelTimeout(w_id){
        w_id.terminate();
        console.log(`cancelled cTimer`);
    }
    return {
        callTimeout,
        cancelTimeout
    }
})();