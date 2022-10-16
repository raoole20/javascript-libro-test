
{
    let [x, y] = [1] 
    
    x
    y
}

{
    let [,a,, b] = [1,2,3,4];
    
    a
    b
}

// resto 
{
    let [c, ...z] = [1,2,3,4]
    
    c
    z
}

{
    let [a, [b,c]] = [1, [1,2.3],3]
    a
    b
    c
}

{
    let [first, ...rest] = "hello";
    first
    rest
} 

{
    let transparent = {r: 3, b: 0, a: 1}

    const {a,b,r} = transparent

    a
    b
    r
}

{
    // rename values
    let { cos: cosine, tan: tangent } = Math
}

// destructuring array of objet or object of array
{
    const obj = { var1: [0,2], var2: [1,4]}
    const { var1: [x1, y1], var2: [x2, y2]} = obj

    x1
    y1
    x2
    y2
}
