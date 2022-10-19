function range(from, to){
    let r = Object.create(range.methods)

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    *[Symbol.iterator](){
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString(){
        return "(" + this.from + "..." + this.to + ")";
    }
}

let r = range(1,3)

console.log(r.includes(2))
console.log(r.toString())
console.log([...r])

let ra = new range(2,10) // con este metodo puedo eliminar Object.create()

console.log(ra.includes(1))
console.log(ra.toString())
console.log([...ra])


function Range(from, to){
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    *[Symbol.iterator](){
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },
    toString(){
        return "(" + this.from + "..." + this.to + ")";
    }
}

const newRange = new Range(1, 10)

console.log(newRange.includes(1))
console.log(newRange.toString())
console.log([...newRange])
