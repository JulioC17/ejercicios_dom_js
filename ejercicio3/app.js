// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const paises = document.createElement("ul")

for (const pais of countries){
    
    const lista = document.createElement("li")

    lista.innerHTML = pais

    document.body.appendChild(lista)

}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementoEliminado = document.querySelector(".fn-remove-me")
elementoEliminado.remove()


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divisor = document.querySelector('div[data-function="printHere"]')

const lista2 = document.createElement("ul")

for (const car of cars){
     
    const listaDeCarros = document.createElement("li")
    
    listaDeCarros.innerHTML = car
    
    divisor.appendChild(listaDeCarros)

}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countriess = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const pais of countriess){

    const divisor2 = document.createElement("div")
    const titulos = document.createElement("h4")
    const imagen = document.createElement("img")
    imagen.src = pais.imgUrl
    
    
    titulos.innerHTML = pais.title

    divisor2.appendChild(titulos)
    divisor2.appendChild(imagen)
    
    document.body.appendChild(divisor2)    

}
// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const css = document.createElement("link")
css.rel = "stylesheet"
css.href = "style.css"
document.head.appendChild(css)

// const boton = document.createElement("button")
// boton.innerText = "Borrar Ultima Imagen"
// document.body.appendChild(boton)


// boton.onclick = function (){

    
//     const divisor3 = document.querySelectorAll("div")
//     divisor3[divisor3.length - 1].remove()
//     alert ("eliminado")  

// }

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.


const divisor4 = document.querySelectorAll("div")

           for (const div4 of divisor4) {

           const boton1 = document.createElement("button")
           boton1.innerText = "Eliminame"
           div4.appendChild(boton1)
           
           boton1.onclick = function (){

                  div4.remove()
                  alert ("Elemento eliminado")  
        
        }
        
}
