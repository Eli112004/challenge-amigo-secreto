//Challenge: Amigo Secreto

let amigos = [];

function agregarAmigo() { //agrega amigos a la lista
    let nombreAmigo = document.getElementById('amigo').value.trim(); // .trim: elimina espacios extra
    //checamos
    console.log(`Nombre: "${nombreAmigo}"`);

    if (nombreAmigo === '') {
        console.log(amigos)
        alert('Por favor, inserte un nombre.');
        return null; // Retorna null si el campo está vacío
    }

    if(amigos.includes(nombreAmigo)){
        alert(`El nombre de ${nombreAmigo} esta duplicado`) //evitar duplicados
        limpiarCaja();
        return;
    }


    amigos.push(nombreAmigo);
    console.log(amigos);

    limpiarCaja();
    actualizarLista();
}



function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}



function actualizarLista() { // actualiza nuestra lista
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = ""; //limpia la lista

    for (let amigo of amigos) { // recorre la lista amigos
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    }
}

