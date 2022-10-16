{
    let arr;

    let index = 0;

    try {
        arr[index++]
    } catch (error) {
        console.log(index)
    }

    arr?.[index++];
    index


    function optionalCall (x, log){
        log?.(x)
        return x*x
    }

    optionalCall(100, (x)=> console.log(x) )



    console.log( 2 +  2 * 6 / 2)

    let pint = {x: 1, y: 2}

    console.log(pint.toString())

    console.log("x" in pint)
    console.log("toString" in pint)
}


{
    let a , b = 1;

    let i = j = k = 1
    
    console.log(i,j,k)

    console.log((a = b) === 0)
}


// evaluation expressions
{
    console.log( eval("Object()") )
}