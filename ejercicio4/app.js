// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const boton = document.createElement("button")
boton.id = "btnToClick"
boton.innerText = "Haz Click" 
document.body.appendChild(boton)

boton.onclick = function(){

      console.log("Estás haciendo click")
      
}


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focos = document.querySelectorAll("input")

for (const foco of focos){

      
      foco.addEventListener("focus", function(){
            console.log("escribe algo")
      })

      // 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

      foco.addEventListener("input", function(){

            console.log(foco.value)
      })
      
}

// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const listaPadre = document.createElement("ul")
document.body.appendChild(listaPadre)

for (const album of albums){

     const listaHija = document.createElement("li")
     listaHija.innerText = album
     listaPadre.appendChild(listaHija)
     
}



