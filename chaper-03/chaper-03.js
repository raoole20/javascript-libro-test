// en la practica son el mismo valor
console.log(undefined == null)

// null es un objeto
console.log(typeof null)

/// es un tipo especial de dato
console.log(typeof undefined)

function example (){
    const a = 1
    return () => { console.log( a ) }
}
var a = 10;
const newValue = example()
newValue()

let s = Symbol( " sym_x")
s. toString()// => "Symbol (sym_x) " 

let sa = Symbol( " sym_x")
sa.toString()// => "Symbol (sym_x) " 

console.log(s)
console.log(sa)
console.log(sa === s)


let si = Symbol.for("shared")
let t = Symbol. for("shared") 

t === si 

si.toString() // true => "Symbol (shared) " "shared"
Symbol.keyFor(t) // shared

const Object = "is not a reserved words"

console.log( global )

global.NewValueGlobal = "es una nueva variable";

NewValueGlobal