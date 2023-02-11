function moverPosiciónRandom(elm){
elm.style.position = 'absolute';
elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter',function(e){moverPosiciónRandom(e.target)});

btnSi.addEventListener('click',function(e){

    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!!' )

    divModoSexo.style.display = "block";
    const cancion = new Audio("img/img_modo_hot.mp3");
    //cancion.play();

});

divModoSexo.addEventListener('click', function(e){

    divModoSexo.innerHTML = "<img  class='culo' src='https://cdn.shopify.com/s/files/1/0071/0977/1319/products/Taza_Bob_Esponja_08_portada_1024x1024.jpg?v=1570784477'>";

    /* const img = document.createElement("img"); ESTE SIRVE PERO NO SE LE PUEDE COLOCAR UN CLASS
    img.src = "https://cdn.shopify.com/s/files/1/0071/0977/1319/products/Taza_Bob_Esponja_08_portada_1024x1024.jpg?v=1570784477";
   console.log(img)
   divModoSexo.appendChild(img) */
});

botones = document.getElementsByTagName("button")
console.log(botones)

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";

});