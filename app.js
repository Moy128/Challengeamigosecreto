// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = []

// Función para agregar nombres al array
function agregarNombre() {
    let inputNombre = document.getElementById("nombreAmigo")
    let nombre = inputNombre.value.trim()
    
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.")
        return
    }
    
    // Actualizar el array de amigos
    nombresAmigos.push(nombre)
    
    // Limpiar el campo de entrada
    inputNombre.value = ""
    
    // Mostrar los nombres en la consola
    console.log("Nombres ingresados:", nombresAmigos)
    
    // Actualizar la lista de amigos en el DOM
    actualizarListaAmigos()
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos")
    
    // Limpiar la lista existente
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    
    // Crear un DocumentFragment para evitar múltiples reflows
    let fragment = document.createDocumentFragment()
    
    // Iterar sobre el arreglo y crear elementos de lista
    for (let amigo of nombresAmigos) {
        let li = document.createElement("li")
        li.textContent = amigo
        fragment.appendChild(li)
    }
    
    // Agregar el fragmento a la lista
    lista.appendChild(fragment)
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (nombresAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear.")
        return
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length)
    
    // Obtener el nombre sorteado
    let amigoSorteado = nombresAmigos[indiceAleatorio]
    
    // Mostrar el resultado
    let resultado = document.getElementById("resultadoSorteo")
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`
}

// Agregar un evento al botón para agregar nombres
document.getElementById("agregarNombreBtn").addEventListener("click", agregarNombre)

// Agregar un evento al botón para sortear un amigo
document.getElementById("sortearAmigoBtn").addEventListener("click", sortearAmigo)
