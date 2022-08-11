let nativeSDK = new NativeSDK();
document.getElementById("deviceType").innerText = nativeSDK.OS;
document.getElementById("userAgent").innerText = navigator.userAgent;
document.getElementById("inHybridAPP").innerText = `inHybridAPP: ${nativeSDK.inHybridAPP}`;

function executeWeb2Native(type, options){
    try{
        switch(type){
            case "openWeb":
                nativeSDK.openWeb({url: "https://google.com", type: "Browser"},executelog,executelog);
            break;
        }
    }
    catch(error){
        document.getElementById(`${type}-result`).innerText = error;
    }
}

function executelog(options){
    var target = document.getElementById(`${options.name}-result`);
    target.innerText = typeof options === 'object' ? JSON.stringify(options):options;
}


window.openWeb = function(options) {
    window.open(options.args.url);
    options.returnCode = '0000';
    nativeSDK.native2Web(options);
}