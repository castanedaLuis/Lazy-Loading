
/*
Con el IntersectionObserver podemos decirle a JavaScript que observe un objeto
 cuando está dentro de la pantalla (o cuando sale de esta).
*/

import { registerImage } from './lazy.js'

const URL = 'https://randomfox.ca/images'
const MAX_VALUES = 122
const MIN_VAlUES = 1

const ramdom = () =>{
    return(
        Math.floor(
            Math.random() * (MAX_VALUES - MIN_VAlUES) + MIN_VAlUES
        )
    )
}

const createImageNode = () =>{
    const contenedorImage = document.createElement('div')
    contenedorImage.className = 'p-4'
    contenedorImage.className = "bg-gray-300";
    contenedorImage.style.width = "320px";
    contenedorImage.style.marginBottom = "20px";

    const img = document.createElement('img')
    img.className ='mx-auto'
    img.width = '320'
    img.dataset.src = `${URL}/${ramdom()}.jpg`

    contenedorImage.appendChild(img)

    return contenedorImage
}

const addImage = () => {
    console.log('Agregamos imagen ✅')
    const nuevaImage = createImageNode()
    contenedor.append(nuevaImage)//Le agregarmos la img al contenedor Images DOM
    registerImage(nuevaImage) // Le decimos que la empiece a escuchar el observador 
}

//Función para limpiar borrrar las imagenes agregadas
const cleanImage = () => {
    [...contenedor.childNodes].forEach((child) =>{
        child.remove()
    })
}

const contenedor = document.getElementById('images')
const boton = document.getElementById('botonAgregar')
const cleanBoton = document.getElementById('botonClean')

cleanBoton.addEventListener("click", cleanImage)
boton.addEventListener("click", addImage)

