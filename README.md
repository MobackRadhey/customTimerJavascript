# customTimerJavascript
Asnchronous Non-blocking custom setTimeout Functionality
using webworkers(API)

cTimer is the Object which is Exposed.
 
function:
callTimeout(callback, milliseconds)
args {function} callback
     {int} milliseconds
returns {Object} worker

function:
cTimer.cancelTimeout(worker)
args {Object} worker
returns null

working Example:

let ct = CTimer.callTimeout(()=>{
    console.log(1);
}, 4000);

cTimer.cancelTimeout(ct);