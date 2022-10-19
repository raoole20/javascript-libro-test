class Range{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }

    includes(x){
        return this.from <= x && x <= this.to
    }

    *[Symbol.iterator](){
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString(){
        return "(" + this.from + "..." + this.to + ")";
    }

    static parse(s){
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/)

        if(!matches) throw new TypeError(`Cannot parse Range from "${s}".`)

        return new Range( parseInt(matches[1]), parseInt(matches[2]))
    }
}


let rango = Range.parse('(1...10)') // crea una neva instancia atravez del nuevo metodo statico

let r = new Range(1,3)

console.log(r.includes(2))
console.log(r.toString())
console.log(...r)

class Span extends Range{
    constructor(start, length){
        if(length >= 0){
            super(start, start + length)
        }else{
            super(start + length, start)
        }
    }
}

{
    let square = function (x) {
        return x * x;
    }

    square(3)
}

{
    let Square = class {
        constructor(x){
            this.area = x * x
        }
    }

    new Square(3).area
}