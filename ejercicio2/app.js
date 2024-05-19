// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement("div")
document.body.appendChild(div)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div2 = document.createElement("div")
document.body.appendChild(div2)
let p = document.createElement("p")
div2.appendChild(p)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
let p2 = document.createElement("p")
p2.innerHTML = "Soy Dinámico"
document.body.appendChild(p2)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let titulo = document.querySelector("h2.fn-insert-here")
titulo.innerText = "Wubba Lubba dub dub"


// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul")
document.body.appendChild(lista)
let redes = document.createElement("li")
redes.innerText = apps
lista.appendChild(redes)



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminar = document.querySelectorAll(".fn-remove-me")

eliminar.forEach (function(element){
   element.remove();
})

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let parrafo = document.createElement("p")
let divMedio = document.querySelector("div")
parrafo.innerText = "Voy en medio!"
divMedio.insertAdjacentElement("afterend", parrafo)

// 2.9 Inserta un p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

let voy = document.querySelectorAll("div.fn-insert-here")

voy.forEach(function(element){
    
    let parrafoDiv = document.createElement("p")
   
    parrafoDiv.innerText = "Voy Dentro!"

    element.appendChild(parrafoDiv)

})




