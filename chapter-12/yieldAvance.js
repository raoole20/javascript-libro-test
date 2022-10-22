function* smallNumbers(){
    console.log("Next() invoked the frist time; argument discarded")

    let y1 = yield 1

    console.log("next() invoked a second time with argument", y1)

    let y2 = yield 2

    console.log("next invoked a third time with argument, ", y2)

    let y3 = yield 3 

    console.log("next() invoked a hourt time with argument ", y3)

    return 4
}

const iterator = smallNumbers()

console.log("generator created; no code runs yet")
let n1 = iterator.next("a")
n1

let n2 = iterator.next("b")
n2

let n3 = iterator.next("new value")
n3
console.log("ultimo yield")

let n4 = iterator.next("next")
n4