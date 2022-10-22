function* oneDigitPrimes(){
    yield 2
    yield 3
    yield 5
    yield 7 
}

let primes = oneDigitPrimes()

console.log(primes.next())
console.log(primes.next())
console.log(primes.next())
console.log(primes.next())
console.log(primes.next())

primes[Symbol.iterator]()

const seq = function* (from, to){
    for( let i = from; i <= to; i++) yield i
}

console.log([...seq(3,5)])

let o ={
    x: 1, y:2, z: 3,
    *g(){
        for (const key of Object.keys(this)) {
            yield key
        }
    }
}

console.log([...o.g()])


function* fibonacciSequence() {
    let x = 0, y = 1;

    for(; ;){
        yield y;
        [x,y] = [ y, x + y ]
    }
}

function fibbonacci(n) {
    for (const f of fibonacciSequence()) {
        if( n-- <= 0){
            return f
        }
    }
    
}
console.log(fibbonacci(20))


function* take(n, iterable) {
    let it = iterable[Symbol.iterator]()

    while( n-- > 0){
        let next = it.next()

        if(next.done) return;
        yield next.value
    }
}

console.log([...take(20, fibonacciSequence())])

function* zip( ...iterable ){
    let iterators = iterable.map( i =>  i[Symbol.iterator]() )

    let index = 0;

    console.log(iterators)

    while(iterators.length > 0){
        if(index >= iterators.length){
            index =  0
        }
        let item = iterators[index].next()

        if(item.done){
            iterators.splice(index, 1)
        }else{
            yield item.value
            index++
        }
    }
}

console.log([...zip(oneDigitPrimes(), "ab", [0])])

function* sequence( ...iterables) {
    
    for (const iterable of iterables) {
        for (const item of iterable) {
            yield item
        }
    }
}

console.log( ...sequence("abc", oneDigitPrimes()))


function* sequence2( ...iterables ){
    for(let iterable of iterables){
        yield* iterable
    }
}

console.log( ...sequence2("abc", oneDigitPrimes()))

function* sequence3(...iterables){
    iterables.forEach(iterable => yield* iterable)
}

function* oneAndDone(){
    yield 1
    return "done"
}
console.log( ...oneAndDone() )


