const elementos = [
    { tag: "div", texto: "¿Quieres saber de dónde soy? Que te apunte algún lugar;" },
    { tag: "div", texto:  "De tu propia tierra soy, con la misma entrega voy;"},
    { tag: "div", texto:  "De la misma luz del sol que te vió nacer..." },
    { tag: "p", texto:  "" },
    { tag: "div", texto: "¿También de qué raza soy? De qué origen o condición?"},
    { tag: "div", texto:  "De la raza humana soy, siento que a tu lado estoy;" },
    { tag: "div", texto:  "Un sólo destino que nos verá crecer..." },
    { tag: "p", texto:  "" },
    { tag: "div", texto:  "Quítate la venda de una vez, oh oh oh. Y empieza a mirar sin distinción;" },
    { tag: "div", texto:  "Esas diferencias que tú ves, oh oh oh. No las reconoce el corazón...;" },
    { tag: "p", texto:  "" },
    { tag: "div", texto:  "Mezcla de colores, mezcla de sabores;" },
    { tag: "div", texto:  "Todos somos uno, uno igual a todos, aquí o allá;" },
    { tag: "div", texto:  "Mezcla de ilusiones, llena corazones;" },
    { tag: "div", texto:  "Cadena de vida, una sola voz cantando a la paz...;" },
    { tag: "p", texto:  "" },
    { tag: "div", texto:  "E-e-e-e-e-oh. Quiero amor al respirar;" },
    { tag: "div", texto:  "E-e-e-e-e-oh. Y contigo comenzar...;" },

]

const container = document.querySelector(".container")
const div = document.createElement("div")

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    let createTag = document.createElement(tag)
    let createText = document.createTextNode(texto)
    
    createTag.appendChild(createText)
    div.appendChild(createTag)
}

container.appendChild(div)