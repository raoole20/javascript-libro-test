function getCuttentVersionNumber(versionCallback){
    let request = new XMLHttpRequest()

    request.open("GET", "https://httpbin.org/get")
    request.send()

    request.onload = function () {
        if(request.status === 200){
            let currentVersion = parseFloat(request.responseText)
            versionCallback(null, currentVersion)
        }else{
            versionCallback(request.statusText, null)
        }
    }

    request.onerror = request.ontimeout = function(e){
        versionCallback(e.type, null)
    }
}

