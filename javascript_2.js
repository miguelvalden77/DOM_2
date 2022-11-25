// Lo que se ha hecho aquí es darle a una constante el valor del .getElementById, para que localice al 
// elemento en cuestión, de esta manera todo estará guardado en una constante
const title = document.getElementById("title")
//title.addEventListener("EventName", eventHandler) Este segundo parámetro es la función

// Este ejemplo comentado es un ejemplo de evento con click y una función anónima que incluye una 
// arrow function donde se autoejecuta un alert
/**
 * title.addEventListener('click', () => {
    alert(`Hola bebé`)
})
 */

// Lo que se hace aquí es lo mismo que en el ejemplo comentado pero esta vex no se le da como segundo
// parámetro una función, sino que se le da una constante que guarda una arrow function. Es importante
// saber que si aparece sola sin paréntesis no se ejecuta hasta que no se se haga el click, pero si los
// lleva se autoejecuta 
const saludo1 = () => alert(`Hola bebé`)
title.addEventListener("click", saludo1)

//document.querySelector("button").addEventListener('click', saludo) En este se hace lo mismo que arriba
const button = document.querySelector("button")
const saludo2 = text => alert(text)
button.addEventListener("click", () =>{
    saludo2("has hecho click")
} )

// Con esto lo que se hace es en primer lugar darle a title2 el valor del h2, después añadirle un evento
// en el que cuando se haga clik se ejecute una arrow function, que tiene como parámetro el lugar donde 
// se ha hecho click, después se ejecuta el console.log donde se indica que se muestre en lo que se ha
// hecho click, si se le añade .textContent se muestra el contenido
const title2 = document.querySelector("h2")
title2.addEventListener("click", e => {
    console.log(e.target.textContent)
})


// En este caso lo que pasa es que a title3 se le da el valor del elemento h3, después se declara una 
// constante saludo3 que tiene como valor una arrow function que tiene como parámetro text1 y ejecuta
// un alert donde incluya el text1. Posteriormente se le añade un evento a title3, donde cuando se haga
// click se ejecuta una arrow function que tiene el parámetro e y que ejecuta la constante saludo3, que
// devuelve ejecuta un alert en el que se imprime el contenido de aquello en lo que si hace click
const title3 = document.querySelector("h3")
const saludo3 = text1 => alert(text1)
title3.addEventListener("click", e => {
    saludo2(e.target.textContent)
})

// Este ejemplo es idéntico al anterior, pero se ha optimizado el código en la arrow function incluyendo
// allí el .target.textContent, Además se le ha añadido el evento dblclick que es un doble click
const title4 = document.querySelector("h4")
const saludo4 = x => alert(x.target.textContent)
title4.addEventListener("dblclick", z => {
    saludo4(z)
})

// Este ejemplo tiene el evento mouseenter, que se ejecuta cuando el ratón entra en el espacio de alguno de los elementos, también está mouseleave, que es para cuando sse sale de la zona
const title5 = document.querySelector("h5")
const saludo5 = p => alert(p.target.textContent)
title5.addEventListener("mouseenter", q => {
    saludo5(q)
})

//
const title6 = document.querySelector("h6")
title6.addEventListener("contextmenu", e => {
    console.log(e.pageX, e.pageY)
    e.preventDefault()
})


