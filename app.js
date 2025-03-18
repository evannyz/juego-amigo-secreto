const listaDeAmigos = [];

// Función para limpiar el valor de un input
function limpiarInput(input) {
    input.value = '';
}

// Función para validar el nombre del amigo
function validarNombreAmigo(nombreAmigo) {
    if (nombreAmigo === '') {
        return null;  // Retornamos null si el nombre está vacío
    } else {
        return nombreAmigo;  // Retornamos el nombre si es válido
    }
}

// Función para limpiar el contenido de un <ul>
function limpiarUl(ulElement) {
    ulElement.innerHTML = '';  // Limpiar el contenido previo de cualquier <ul>
}

// Función para actualizar la lista en la pantalla
function actualizarListaEnPantalla() {
    const ulAmigos = document.querySelector('#listaAmigos');
    limpiarUl(ulAmigos);  // Limpiamos antes de actualizar

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ulAmigos.appendChild(li);
    });
}


// Función para mostrar un mensaje en el <ul> de resultados
function mostrarResultadoEnUl(ulElement, mensaje) {
    limpiarUl(ulElement);  // Limpiamos el contenido previo de resultados
    const li = document.createElement('li');
    li.textContent = mensaje;
    ulElement.appendChild(li);
}

// Función para guardar un amigo en la lista
function guardarAmigoEnLista() {
    const inputAmigo = document.querySelector('#amigo');
    const nombreAmigo = inputAmigo.value;

    // Validamos el nombre antes de agregarlo
    const nombreValido = validarNombreAmigo(nombreAmigo);

    if (nombreValido === null) {
        alert('El campo nombre no puede estar vacío, por favor ingrese el nombre nuevamente');
    } else {
        listaDeAmigos.push(nombreValido);  // Agregamos al final de la lista el nombre válido
        limpiarInput(inputAmigo);  // Limpiamos el input
        actualizarListaEnPantalla();  // Actualizamos la lista en la página
    }
}

// Función que se llama al hacer clic en "Agregar Amigo"
function agregarAmigo() {
    guardarAmigoEnLista();
    console.log(listaDeAmigos);
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    // Verificar si la lista de amigos está vacía
    if (listaDeAmigos.length === 0) {
        const ulResultados = document.querySelector('#resultado');
        mostrarResultadoEnUl(ulResultados, "No hay amigos en la lista para sortear.");
        return;
    }

    // Generamos un índice aleatorio entre 0 y la longitud total de la lista - 1
    const indexAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Sacamos el amigo de la lista en ese índice
    const amigoEliminado = listaDeAmigos.splice(indexAleatorio, 1)[0];

    // Mostramos el resultado
    const ulResultados = document.querySelector('#resultado');
    mostrarResultadoEnUl(ulResultados, `El amigo sorteado es: ${amigoEliminado}`);

    console.log("Amigo sorteado y eliminado:", amigoEliminado);

    // Actualizamos la pantalla después de eliminar el amigo
    actualizarListaEnPantalla();
}
