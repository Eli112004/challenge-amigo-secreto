//Challenge: Amigo Secreto

let amigos = [];

function agregarAmigo() {
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
    //actualizarLista();
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}



