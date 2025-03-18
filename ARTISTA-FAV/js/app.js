const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');
const abrirModal = document.getElementById("abrir-modal");
const cerrarModal = document.getElementById("cerrar-modal");
const modal = document.getElementById("modal-autor");
console.log(enlaces);

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    });
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value)
            cambioSeccion(seccion);
            
            if (e.target.tagName === 'A') {
                navegacion.classList.add('ocultar');
            }
        });
    });
}
function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy
}

// Abrir la ventana modal al hacer clic en la imagen del autor
abrirModal.addEventListener("click", () => {
    modal.style.display = "block";
});

// Cerrar la ventana modal al hacer clic en la "X"
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar la ventana modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});