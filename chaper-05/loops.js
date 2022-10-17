const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

console.log(iterator1.next().value);

console.log( iterator1[0]);



let sum = 0;

let o = { x: 1, y: 2, z: 3}

console.log(Object.entries(o))

for (const [k,v] of Object.entries(o)) {
    sum += k + v
}

sum

let m = new Map([[1, "one"]]); 

console.log(m)

for(let [key, value] of m) {
    key    // => 1
    value  // => "one" 
} 

{
    let o =  {x:1, y:2, z:3}
    let a = [], i = 0;

    for(a[i++] in o) /** Empty */ ;

    a
}

{ 
    const objt = {
        get octet(){
            return 0
        },
        holi(params) {
            return "holi"
        },
        set valores(params){

        }
    }

    console.log(objt.holi())
}
