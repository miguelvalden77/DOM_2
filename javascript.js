
// Con esto hemos guaradado en una constante la referencia mediante ID de un elemento, para después
// darle un background azul
const TITLE = document.getElementById("title")
TITLE.style.background = "blue"

// En este caso lo que se ha hecho es seleccionar con un selector de CSS (querySelector) para hacer
// lo mismo que en el anterior ejemplo, pero esta vez solo se está imprimiendo por pantalla la 
// constante
const LAST_LI = document.querySelector("li:last-child")
console.log(LAST_LI)


// La diferencia entre los dos es que el primero devuelve una lista de nodos y el segundo una 
// colección de elementos. Ninguno devuelve un array. El getElementsbyTagName()lo que hace es conseguir
// los elementos por su etiqueta
const NODE_LIST = document.querySelectorAll("li")
console.log(NODE_LIST)

for(let li of NODE_LIST){
    console.log("LI", li.textContent)
}

const ELEMENT_LIST = document.getElementsByTagName("li")
console.log(ELEMENT_LIST)

// Esto es lo que hay que hacer para que nos devuelva un array, los dos métodos son posibles, pero 
// es mejor utilizar siempre el segundo. Siendo estos arrays ya podemos utilizar los métodos.
const ARR_LIST_1 = [...NODE_LIST]
const ARR_LIST_2 = Array.from(ELEMENT_LIST)

console.log(ARR_LIST_1)
console.log(ARR_LIST_2)


// Lo que se hace con esto es recorrer con .map todos los elementos del array que guarda la constante 
// recibir un parámetro por cada elemento y si se cumple la condición, en la que se incluye el 
// .textContent para buscar en el contenido del elemento, el método .trim() para homogeneizar en caso 
// de que haya espacios (los suprime) y por último un método que pasa todos los caracteres a mayúsculas
// Si es igual al string elegido con .remove se borra del string
ARR_LIST_1.forEach(ele =>{
    if(ele.textContent.toUpperCase() === "MODEL"){
        ele.remove()
    }
})

// También se puede hacer de la siguiente manera. De esta forma no hace falta convertir los elementos
// en un array, de la otra manera sí
for(let li of NODE_LIST){
    if(li.textContent.includes("bj")){
        li.remove()
    }
}

// Con esto se consigue el atributo
const TITLE1 = document.getElementById("title")
console.log(TITLE1.getAttribute("id"))

//Con esto se pone un atributo al elemento seleccionado, pero solo a efectos del DOM, en el HTML 
// sigue igual, el primer parámetro es el atributo y el segundo es el valor
const TITLE_3 = document.querySelector("#titulo-3")
TITLE_3.setAttribute("class", "green")
console.log(TITLE_3)

// Hay que hacer continuamente validaciones en el DOM para segurarnos de que existe el elemento 

// con este método también se hace lo mismo que en el ejemplo anterior
const LI_FIRST = document.querySelector("li")
LI_FIRST.id = "pepe"
LI_FIRST.className = "HOLA"
console.log(LI_FIRST)

// con .add() se añade una clase más a las ya existentes, con .remove() para eliminar algo, en cambio,
// .toggle() le añade la clase si no la tenía y si la tenía la elimina
const TEXT = document.getElementById("texto")

TEXT.addEventListener("click", ()=>{
    TEXT.classList.add("lila")
})

TEXT.addEventListener("dblclick", ()=>{
    TEXT.classList.remove("lila")
})

// Con .textContent se ve el contenido, de la misma manera que con .innerHTML, la diferencia es que
// que con este último se muestran también los elementos HTML que hay dentro del elemento en cuestión
// .outherHTML se muestra todo el elemento junto con su contenido en forma de string
console.log(TEXT.textContent)
console.log(TEXT.innerHTML)
console.log(TEXT.outerHTML)

// Se puede modificar el interior de los elementos. Con el primero solo se incluye texto solamente 
// Con el segundo se pueden incluir elementos HTML además de texto. Es recomendable utilizar el 
// template string en ambos casos por si hubiese que incluir variables en el futuro
TEXT.textContent = "Acabo de borrar el texto"
console.log(TEXT.textContent)

TEXT.innerHTML = "Hola, que <b>tal estáis</b>?"
console.log(TEXT.innerHTML)


//Con .createElement se crea un elemento HTML, cuyo tipo hay que poner en tipo string entre los 
// paréntesis como parámetro. Si se quiere texto hay que añadirlo con el .textContent u otros que 
// se han aprendido anteriormente. Por último con .appendChild se crea el elemento, porque si solo 
// hacemos lo anterior se guardará en memoria. Hay que darle además del document el .body para que 
// se dibuje dentro del body, del que será el último hijo.

const TITLE_4 = document.createElement("h4")
TITLE_4.textContent = "Titulo h4"

const BODY = document.getElementById("body")
BODY.appendChild(TITLE_4)

const PROF_CONTAINER = document.getElementById("prof-name")
PROF_CONTAINER.textContent = "Miguel Ángel"

// En cambio, esto que hemos hecho es crear primero una constante PROF y crear un elemento p, al 
// que le añadimos el contenido del elemento p. Después añadimos un id con .classList.add, Después
// se crea la constante PROF_CONSTAINER que consigue el elemento por id. Por último se añade una 
// condicional en la que si la constante PROF y la constante PROF_CONTAINER más el método 
// .querySelector("span") son true, es decir, que existen, se ejecuta el código, que consiste en 
// añadir a la segunda constante el contenido de la primera constante, mediante .appendchild()

const BUTTON = document.getElementById("button")
const INPUT = document.getElementById("input-alumno")
const NAME = document.getElementById("alumno")

BUTTON.addEventListener("click", ()=>{
    const nombre_alumno = INPUT.value

    if(nombre_alumno.length < 8){
        NAME.textContent = "El nombre es muy corto"
        return
    }

    NAME.textContent = nombre_alumno
})



