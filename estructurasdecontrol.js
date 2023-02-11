for (let i = 0; i <= 19; i++){ //Puede ser i+=2 si se quiere que la serie sea de dos em dos
    if ((i % 2) !=0){
        continue;// Termina el ciclo e inicia el siguiente
    }
    if(i==12){
        break; //Rompe el ciclo
    }
    console.log(i);
}
console.log("Aqui me sali : 3");

var1 = null;
var3 = "";
var4 = 0;
var5 = false;
var6 = undefined; 

console.log(var1);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6+var6);
var6 = 5;
console.log(var6);