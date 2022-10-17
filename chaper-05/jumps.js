{
    let token = 0
    mainloop: while(token !== null){
        token = null;
        continue mainloop; // salta a la definicion de mainloop
        console.log('esto es ifnorado')
    }

    token = 0
    mainloop: while(token !== null){
        if(token === 4){
            token = null
            debugger;
        }
        else ++token

        console.log(token) ;

        continue mainloop; // salta a la definicion de mainloop
        console.log('esto es ifnorado')
    }
}