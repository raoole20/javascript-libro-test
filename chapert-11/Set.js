/**
 * Some role the set
 * no se puede duplicar valores
 * no tiene ningun orden
 * el constructor de set permite cualquier objeto iterable
 */

let s  = new Set() // set class
let k = new Set([1,s]) // a new set with two members

let t = new Set(s) // A new set that copies the elements of s
let inque = new Set("Mississippi"); // 4 elements one for each element

console.log(inque, inque.size)

inque.add("holi").add(1).add('2')

// ventajas de usar set, es muy rapido 

let sum = 0;

for(let p of inque){
    console.log(p)
}

// se puede convertir en un array
console.log([...inque])



let m = new Map()
let n = new Map([
    ["one", 1],
    ["two", 2]
])

let copy = new Map(n)

let o = { x: 1, y: 2}
let p = new Map(Object.entries(o))

console.log(p)


console.log(n.get("one"))

n.set('newValue', 12)
console.log(n.get('two'))

console.log(n.has("one"))

console.log(n.size)


let me = new Map().set("one",1).set("two", 2).set("three", 3)

const keyFunction = ()=> {
    return "hola"
}

let llavesLocas = new Map([
    [new Object(), 12],
    [ [1,2,3], 12],
    [null, "referencia nula"],
    [undefined, "undefinedt"],
    [2, "algo"],
    [()=>{}, "puedo poner una funcion comoo referencia"],
    [keyFunction, "algo"]
])


llavesLocas.set(null, 123)
llavesLocas.set(() => {}, 123)
llavesLocas.set(keyFunction, 123)

console.log(llavesLocas)
console.log(llavesLocas.size)