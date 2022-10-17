{
    const PROPERTY_NAME = "p1"

    function conpute() {
        return null
    }
    const symbol = Symbol();

    let p = {
        [PROPERTY_NAME]: 1,
        [conpute()]: 2,
        [symbol](x){
            return x + 1
        },
        [PROPERTY_NAME + 1](x){
            return x + 1
        }
    }

    console.log(p)
    console.log(p[symbol](2))


    const h = {
        name: "raul",
        get presentar(){
            console.log(this.name)
        },
        set presentar(name){
            this.name = name
        }
    }

    h.presentar = "la putisima" // usa la funcion set
    h.presentar // se ejecuta sin necesidad de usar los parentesis

}