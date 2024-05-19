// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const muestrame = document.querySelector(".showme")
console.log(muestrame)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector("h1#pillado")
console.log(pillado)

// 1.3 Usa querySelector para mostrar por consola todos los p
const ps = document.querySelectorAll("p")
for(const p of ps){
    console.log(p)
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// 	la clase.pokemon

const pokemones = document.querySelectorAll(".pokemon")
for (const pokemon of pokemones){
    console.log(pokemon)
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const datas = document.querySelectorAll("[data-function=testMe]")
for (const data of datas){
    console.log(data)
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const hijos = document.querySelectorAll("[data-function=testMe]")
const hijo3 = hijos[2]
console.log(hijo3)