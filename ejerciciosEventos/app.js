let notas = [
    { id: 1, titulo: '1ra Nota ', texto: 'Texto de la 1ra nota ', realizada: false },
    { id: 2, titulo: '2da Nota', texto: 'Texto de la 2da nota ', realizada: true }
];

let idGlobal = 2;

let contenedorNotas = document.getElementById('contenedorNotas');
let tituloInput = document.getElementById('titulo');
let textoInput = document.getElementById('texto');
let buscarTextoInput = document.getElementById('buscarTexto');
let filtroRealizadasInput = document.getElementById('filtroRealizadas');

function pintarNotas(notas) {
    contenedorNotas.innerHTML = '';
    if (notas.length === 0) {
        contenedorNotas.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
    } else {
        notas.forEach(nota => {
            const divNota = document.createElement('div');
            divNota.className = 'nota';
            divNota.innerHTML = `
                <h3>${nota.titulo}</h3>
                <p>${nota.texto}</p>
                <label>
                    <input type="checkbox" ${nota.realizada ? 'checked' : ''} onclick="marcarRealizada(${nota.id})"> Realizada
                </label>
                <button onclick="borrarNota(${nota.id})">Borrar Nota</button>
            `;
            contenedorNotas.appendChild(divNota);
        });
    }
}

function agregarNota(titulo, texto) {
    idGlobal++;
    notas.push({ id: idGlobal, titulo, texto, realizada: false });
}

function guardarNota() {
    let titulo = tituloInput.value.trim();
    let texto = textoInput.value.trim();
    if (titulo === '' || texto === '') {
        alert('Título y texto no pueden estar vacíos');
        return;
    }
    agregarNota(titulo, texto);
    limpiarCampos();
    aplicarFiltros();
}

function limpiarCampos() {
    tituloInput.value = '';
    textoInput.value = '';
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    aplicarFiltros();
}

function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        aplicarFiltros();
    }
}

function aplicarFiltros() {
    let notasFiltradas = notas;

    const textoBusqueda = buscarTextoInput.value.toLowerCase();
    if (textoBusqueda) {
        notasFiltradas = notasFiltradas.filter(nota =>
            nota.titulo.toLowerCase().includes(textoBusqueda) ||
            nota.texto.toLowerCase().includes(textoBusqueda)
        );
    }

    if (filtroRealizadasInput.checked) {
        notasFiltradas = notasFiltradas.filter(nota => nota.realizada);
    }

    pintarNotas(notasFiltradas);
}


aplicarFiltros();
