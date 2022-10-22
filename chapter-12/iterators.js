let iterable = [99,1,3,4,5,6]

let iterator = iterable[Symbol.iterator]()
console.log(iterator)

for(let result = iterator.next(); !result.done; result = iterator.next()){
    console.log(result.value)
}


let list = [1,2,3,4,5]
let iter = list[Symbol.iterator]()
let head = iter.next().value
console.log(head)

let tail = [...iter]

console.log(tail)


class Range{
    constructor (from, to){
        this.from = from;
        this.to = to;
    }

    has(x){
        return typeof x === "number" && this.from <= x && x<=this.to
    }

    [Symbol.iterator](){
        let next = Math.ceil(this.from)
        let last = this.to
        return{
            next(){
                return (next <= last) ? {value: next++} : {done: true}
            },
            [Symbol.iterator](){
                return this
            }
        }

    }
}

for(let x of new Range(1,4) ) console.log(x)

function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]()

    return {
        [Symbol.iterator](){
            return this
        },
        next(){
            let v = iterator.next()
            if(v.done){
                return v
            }else{
                return {
                    value: f(v.value)
                }
            }
        }
    }
}


console.log([...map(new Range(1,4), x => x * x )])

const newValue = map(new Range(1,10), x => x * x )

console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())
console.log(newValue.next())

console.log( "hola como estas".split(/\s+|$/gi))

function words( s = ""){
    var r = /\s+|$/g
    r.lastIndex = s.match(/[^ ]/).index
    console.log(r, r.lastIndex)

    return {
        [Symbol.iterator](){
            return this
        },
        next(){
            let start = r.lastIndex
            if(start < s.length){
                let match = r.exec(s)
                if(match){
                    return {
                        value: s.substring(start, match.index)
                    }
                }
            }
            return{
                done: true
            }
        }
    }
}

console.log( [...words(" abc def ghi!")])