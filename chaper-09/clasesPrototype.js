function* countAppleSales() {
  let saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}

let appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }


let hola = "holi paso 1";

function* counter(value) { // el asterisco significa que esta es una funcion generadora
  let step;
  while (true) {
    step = yield ++value; // retorna los valores que se le pasen a la funcion next
    console.log(hola)
    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3

hola = "cambio el valor a mitad de la ejecucion";

console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15


console.log(Symbol.iterator)


const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);
console.log(iterable1[Symbol.iterator]().next());
console.log(iterable1[Symbol.iterator]().next());
console.log(iterable1[Symbol.iterator]().next());
// expected output: Array [1, 2, 3]