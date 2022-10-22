fetch("/api/user/profile").then( res => { 

    res.json().then( profile =>{
        // code
    })

    if(res.ok && res.headers.get("Content-Type") === "application/json"){
        // code
    }
})

// best way use promise 
fetch("/api/user/profile").then( response => {
    return response.json()
}).then(  profile => {
    displayUserProfile(profile)
})


fetch(theURL) //task1 return promise 1
    .then(callback1)  // return promise 2
    .then(callback2) // return promise 3

