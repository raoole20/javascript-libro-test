function c1(response){
    let p4 = response.json()
    return p4
}

function c2(profile){
    displauUserProfile(profile)
}

let p1 = fetch("/api/user/profile") // promise 1, task 1
let p2 = p1.then(c1) // promise 2 task 2
let p3 = p2.then(c2) // promise 3 task 3

fetch("/api/user/profile").then( response => {
    if( !response.ok ){
        return null
    }
    let type = response.headers.get("content-type")
    if(type !== "aplication/json"){
        throw new TypeError(`Expected Jso, hot ${type}`)
    }

    return response.json()
}).then( profile => { 
    if(profile){
        displauUserProfile(profile)
    }else{
        displayloggedOutProfilePage()
    }
}).catch( e => {
    if( e instanceof NetworkError){
        displayErrorMessage("Check yout internet connection.")
    }else if(e instanceof typeError){
        displayErrorMessage("Sonthing is wrong with our server!")
    }else{
        console.error(e)
    }
}).finally()

const urls = [ /** zeo or more urls here */]

promises = urls.map( url => {
    fetch(url).then( r => r.text() )
})

Promise.all(promises).then( bodies => {

}).catch( e => console.error(e))

function wait(duration){
    return  new Promise( (resolve, reject) => {
        if(duration < 0){
            reject(new Error("Time travel not yet implemented"))
        }

        setTimeout(resolve, duration)
    })
}