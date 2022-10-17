{
  var a1 = true && true; // t && t devuelve true
  var a2 = true && false; // t && f devuelve false
  var a3 = false && true; // f && t devuelve false
  var a4 = false && 3 == 3; // f && f devuelve false
  var a5 = "Cat" && "Dog"; // t && t devuelve Dog
  var a6 = false && "Cat"; // f && t devuelve false
  var a7 = "Cat" && false; // t && f devuelve false

  a4;

  // asignará el valor de la derecha si y solo si el primer valor es una expresion verdadera
  const a10 = 0 && "retornar esto si es true"; // si el primer operador es true devuelve lo que esta a la derecha

  a10;

  var o1 = true || true;    // t || t devuelve true
  var o2 = false || true;   // f || t devuelve true
  var o3 = true || false;   // t || f devuelve true
  var o4 = false || 3 == 4; // f || f devuelve false
  var o5 = "Cat" || "Dog";  // t || t devuelve Cat
  var o6 = false || "Cat";  // f || t devuelve Cat
  var o7 = "Cat" || false;  // t || f devuelve Cat


  // de volvera el valor que sea verdadero
  const o10 = "verdadero" || false

  o10

  const maxWidth = null, preferences = { maxWidth: 0 };

  let max = maxWidth || preferences.maxWidth || 500;

  max
}

{
    // first-difined tomara en cuenta valores como 0, "", false, y se tomara como verdadero
    // es decir solo ignorara los valores null, undefined
    const maxWidth = null, preferences = { maxWidth: null };

    let max = maxWidth ?? preferences.maxWidth ?? 500;
  
    max
}
