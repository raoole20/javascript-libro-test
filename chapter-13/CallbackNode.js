const fs = require("fs")

let options = { 
    // default options would go here
}

fs.readFile("config.json", "utf-8",(err, text) => {
    if(err){
        console.log("Could not read config file:", err)
    }else{
        Object.assign(options, JSON.parse(text))
        startProgram(options)
    }
})