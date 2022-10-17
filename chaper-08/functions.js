{
    let calculator = {
        operand1: 1, 
        operand2: 2,
        m: function (){
            // puedo crear las variables en la funcion, this es una variable global
            console.log(this)
            this.result = this.operand1 + this.operand2
        }
    }

    calculator.m()
    console.log(calculator.result) 

    let o = { 
        var1: 1,
        m: function(){
            let self = this;
            console.log( this, self )
            console.log(this === o)

            f()
            function f() {
                console.log( this, self )
                console.log(this === o)
                console.log(self === o)
            }

            const b = (function() {
                console.log(this === o)
            }).bind(this)

            b()
            const bc = (() => {
                console.log(this === o)
            }).bind(this)

            bc()

        }
    }

    o.m();
}

{
    function sum(a) {
        let total = 0;
        console.log(a)
        for(let element of a){
            if(typeof element !== "number") throw new TypeError("sum(): elemnts mus be numer")

            total += element;
        }

        return total;

    }

    // console.log( sum(1,2,3,4,5,6) )
    console.log( sum([1,2,3,4,5,6]) )
}

{
    let scope = "global scope";          // A global variable 
    function checkscope() {
        let scope = "local scope";       // A local variable
        function f() { return scope; }   // Return the value in scope here
        return f; 
    } 
    let s = checkscope()();              // What does this return? In this code, a pair of parentheses has moved from inside checkscope() to outside of it. Instead of invoking the nested function and returning its result, checkscope() now just returns the nested function object itself. What happens when we invoke that nested function (with the second pair of parentheses in the last line of code) outside of the function in which it was defined? Remember the fundamental rule of lexical scoping: JavaScript functions are executed using the scope they were defined in. The nested function f() was defined in a scope where the variable scope was bound to the value “local scope”. That binding is still in effect when f is executed, no matter where it is executed from. So the last line of the preceding code example returns “local scope”, not “global scope”. This, in a nutshell, is the surprising and powerful nature of closures: they capture the local variable (and parameter) bindings of the outer function within which they are defined. In §8.4.1, we defined a uniqueInteger() function that used a property of the function itself to keep track of the next value to be code will return? let scope - "global scope" function checkscope() { let scope - "local scope" function f ( ) { return scope; scope here return f; let s checkscope()(); return? 
    s
}