let lista = [];

let x = 5
let y = 10

// Asignación de adición
x += y // Esto es igual a x = x + y
x += y
console.log(x)
lista.push(x)
console.log(lista)
//Asignación de resta
y -= x
console.log(y)
lista.push(x)
console.log(lista)
//Asignación de multiplicación
x *= y
console.log("x = "+x)
lista.push(x)
console.log(lista)
x = 5
y = 10
//Operador de bit a bit de desplazamiento a la izquierda
x <<= y
console.log("x = "+x)
lista.push(x)
console.log(lista)
//Asignación de módulo o residuo
x = 5
y = 11
console.log(y % x ) // El resto es 1

y %= x // Asignandole el valor en una 
console.log(y)

lista.push(y)
console.log(lista)

//Estructura de control if
let var1 = 3;
let var2 = 4;

//Operador igual

if(var1 == '3'){
    console.log("Son iguales")
}else {
    console.log("No son iguales")
}

//Operador estrcitamente igual

if(var1 === '3'){
    console.log("Son iguales")
}else {
    console.log("No son iguales")
}

//Operador de desigualdad

if(var1 != var2){
    console.log("Son diferentes")
}else {
    console.log("No son diferentes")
}

//Operador de desigualdad extricta

if(var1 !== var2){
    console.log("Son diferentes")
}else {
    console.log("No son diferentes")
}

// > Mayor que
console.log(var1 > var2);

// > Menor que
console.log(var1 < var2);

// Otros >=  y <=

