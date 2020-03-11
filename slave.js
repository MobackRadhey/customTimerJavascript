onmessage = function(e){
    let end = Date.now() + e.data;
        while(Date.now() <= end){
        };
        postMessage('done');
}