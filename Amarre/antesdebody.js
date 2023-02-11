window.onclick = function () {
    // Crea una seria de elemnts por cada tag encontrada
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("Quieres ser mi morrita?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

