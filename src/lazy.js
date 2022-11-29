/**
 Funcionalidad del Lazy y el interseccion observer

*/

const isIntersecting = (entry) =>{
    return entry.isIntersecting // isIntersecting Regresa --> true (si esta dentro de la pantalla) sino false
}

const cargarImagen = (entry) =>{
    console.log('Visualizamos imagen 😃')
    const div = entry.target // contenedor (IDV)
    const img = div.firstChild
    const url = img.dataset.src

    //Cargar la img
    img.src = url
    //LE decimos que deje de escuchar EVENTO
    observador.unobserve(div)
}

 const observador = new IntersectionObserver((allElements) =>{
    // allElements <-- son todos los elementos que el observador le esta poniendo atención
    allElements
        .filter(isIntersecting) // es visible en la pantalla
        .forEach(cargarImagen)

 })

export const registerImage = (imagen) =>{
    observador.observe(imagen)
}