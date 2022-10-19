class Range{
    static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/
    #noAccess = "esto es privado"

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
        let matches = s.match(Range.integerRangePattern)

        if(!matches) throw new TypeError(`Cannot parse Range from "${s}".`)

        return new Range( parseInt(matches[1]), parseInt(matches[2]))
    }
}


const newParse = Range.parse('(2...10)')

console.log(newParse.from)
console.log(newParse)

const range = new Range(1,10);
console.log(range.noAccess)