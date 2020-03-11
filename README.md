# customTimerJavascript
Asnchronous Non-blocking custom setTimeout Functionality
using webworkers(API)

cTimer is the Object which is Exposed.
 ```
/**
 * @function callTimeout
 * @param {function} callback
 * @param {number} milliseconds
 * @returns {Object} worker
 * @description takes a callback function and time in milliseconds, starts the timer using a 
 * worker thread and returns a worker reference as an object 
 */
/**
 * @function cancelTimeout
 * @param {Object} worker
 * @returns {null}
 * @description takes a already created worker reference as input, cancels the timer 
 * (terminates the worker thread) 
 */

working Example:

let ct = cTimer.callTimeout(()=>{
    console.log(1);
}, 4000);

cTimer.cancelTimeout(ct);
