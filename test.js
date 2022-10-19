// 0, 1, 1, 2, 3, 5, 8 ...


/**
 * con un ciclo
 * @param n siendo n el numero de iteraciones que tendran nuestra secuencia 
 */
function fibonacci( n ) {
    let fibo = 0;
    let acum = 0;

    for (let i = 0; i <= n ; i++) {
        console.log(fibo)

        let temp = fibo 
        
        fibo = acum + fibo ?  acum + fibo : fibo + 1 
        acum = temp
    }
}

fibonacci(10)

function fibonacciRecurcion( n ) {
    if( n === 0 ) return [0]

    let temArray = fibonacciRecurcion(n-1)

    temArray.push(  temArray[temArray.length - 1] + temArray[temArray.length - 2] ? temArray[temArray.length - 1] + temArray[temArray.length - 2] : 1 )
    return temArray
}

console.log(fibonacciRecurcion(10))


function* fibonacciYield( n ) {
    let fibonacci = 0;
    let com = 0;

    for (let i = 0; i <= n; i++) {
        let tem = fibonacci
        yield fibonacci

        fibonacci = fibonacci + com ? fibonacci + com : 1;
        com = tem;
    }
}

const fiboS = fibonacciYield(10);

console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())
console.log(fiboS.next())