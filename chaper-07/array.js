{ 
    let a  = new Array(1,2,3,4);
    console.log(a)
}
{ 
    let a  = Array.of(1,2,3,4);
    console.log(a)
    let ba  = Array.from(a);
    ba[0] = 100
    console.log(a, ba)
}