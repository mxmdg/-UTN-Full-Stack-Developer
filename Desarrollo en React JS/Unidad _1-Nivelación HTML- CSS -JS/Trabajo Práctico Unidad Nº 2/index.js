const twoDigits = (x) => {
    let z = new String(x);
    (z.length == 1)?(z = '0' + x):(z=new String(x));
    return z
}

const printTime = () => {
    const myWatch = document.querySelector("#clock")

    const thisMoment = new Date()

    let seconds = twoDigits(thisMoment.getSeconds())

    let minutes = twoDigits(thisMoment.getMinutes())

    let hours = twoDigits(thisMoment.getHours())

    const clockContent = `${hours}:${minutes}:${seconds}`

    myWatch.innerHTML = clockContent

    setTimeout("printTime()", 1000)
}

// const sumar = (a,b)=>{
//     let c = a + b;
//     console.log(`${a} + ${b} = ${c}`)
//     return c
// }

// const restar = (a,b)=>{
//     let c = a - b;
//     console.log(`${a} - ${b} = ${c}`)
//     return c
// }

// const multiplicar = (a,b)=>{
//     let c = a * b;
//     console.log(`${a} * ${b} = ${c}`)
//     return c
// }

// const dividir = (a,b)=>{
//     let c = (b == 0)?"Error: No se puede dividir por 0":a/b;
//     console.log(`${a} / ${b} = ${c}`)
//     return c
// }

// const calcular = (a,b,operacion)=>{
//     let c = operacion(a,b);
//     return c
// }

class calculadora {

    armarCalculadora = ()=> {
        const cuerpo = (this.cuerpo());
        cuerpo.appendChild(this.display());
        cuerpo.appendChild(this.createNumButton(0,10));
        return cuerpo
    }

    cuerpo = ()=> {
        const cuerpo = document.createElement("div");
        cuerpo.classList.add("calc")
        return cuerpo
    }

    display = ()=>{
        //const displayCont = document.createDocumentFragment();
        const display = document.createElement("div");
        display.id = "display";
        display.classList.add("pantallita")
        const dispValor1 = document.createElement("div");
        dispValor1.id = "dispValor1"
        const dispValor2 = document.createElement("div");
        dispValor2.id = "dispValor2"
        display.appendChild(dispValor1);
        display.appendChild(dispValor2);
        //displayCont.appendChild(display);
        return display
    }

    crearBotones (arr, claseDeBoton) {                         
        for (let i = 0; i < arr.length; i++) {
            const btn = document.createElement("div");
            btn.innerHTML = `${i}`;
            btn.classList.add("claseDeBoton");
            btn.id = `btn_${i}`;
        }
        
    }

    // const botonera = document.createElement("div");
    // botonera.classList.add("casioCalculator")

    createNumArr (from,to) {
      
        for (let i = 0; i < to; i++){
            let arr = []
            try {
               arr.push(i);
            } catch (err) {
                console.log(err);
            }
            return arr
        };
       
    };
    
    sumar (a,b) {
        let c = a + b;
        console.log(`${a} + ${b} = ${c}`)
        return c
    }
    
    restar (a,b) {
        let c = a - b;
        console.log(`${a} - ${b} = ${c}`)
        return c
    }
    
    multiplicar (a,b) {
        let c = a * b;
        console.log(`${a} * ${b} = ${c}`)
        return c
    }
    
    dividir (a,b) {
        let c = (b == 0)?"Error: No se puede dividir por 0":a/b;
        console.log(`${a} / ${b} = ${c}`)
        return c
    }

    clearAll () {

    }
    
    calcular (a,b,operacion) {
        let c = operacion(a,b);
        return c
    }
}

const miCalculadora = new calculadora();
const operaciones = Object.getOwnPropertyNames(miCalculadora);

window.addEventListener("DOMContentLoaded", (e)=> {
    e.preventDefault();
    let a = document.getElementById("valor1");
    let b = document.getElementById("valor2");
    let suma = document.getElementById("sumar");
    let resta = document.getElementById("restar");
    let multiplicacion = document.getElementById("multiplicar");
    let division = document.getElementById("dividir");
    let resultado = document.getElementById("resultado");

 
    
    suma.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.sumar(Number(a.value) , Number(b.value) );
    })

    resta.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.restar(Number(a.value) , Number(b.value) );
    })

    multiplicacion.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.multiplicar(Number(a.value) , Number(b.value) );
    })

    division.addEventListener("click", (e)=>{
        e.preventDefault();
        resultado.textContent = miCalculadora.dividir(Number(a.value) , Number(b.value) );
    }) 


})

function crearElementoClaseId (contenedor, etiqueta, contenido, clase, id) {
    let container
    try {
        container = document.querySelector(contenedor);
    } catch(e) {
        container = contenedor;
        console.log("El parametro no se puede seleccionar con query selector")
    }

    console.log(contenedor)
    
    let textContainer = document.createElement(etiqueta);
    textContainer.classList.add(clase)
    textContainer.innerHTML = contenido;
    container.appendChild(textContainer);
    if (id !== undefined) {
        container.lastElementChild.setAttribute("id", id)
    };
};


const createNumButton = (from,to)=> {
    let nums = []
    for (let i = from; i < to; i++){
        try {
            crearElementoClaseId("#casioCalcBody","div",`${i}`,"numBtn",`btn_${i}`);
        } catch (err) {
            console.log(err)
        }
      
    };
};

/* crearElementoClaseId("body","div",`<div><h4>CASIO 1558</h4></div>`,"calc","nuevaCalculadora")
crearElementoClaseId("#nuevaCalculadora","div",`<div class="pantallita"></div>`,"casioCalculator","casioCalcBody")
createNumButton(0,9); */


/* for (op of operaciones) {  
    switch (op){
        case "sumar": op = "+"
        break;
        case "restar": op = "-"
        break;
        case "multiplicar": op = "*"
        break;
        case "dividir": op = "/"
        break;
        case "clearAll": op = "CA"
        break;
        case "calcular": op = "="
        break;
    }
    crearElementoClaseId("#casioCalcBody","div",`${op}`,"opBtn",`btn_${op}`)
} */

/* crearElementoClaseId(".pantallita","div","750","display","displayValor1");

crearElementoClaseId(".pantallita","div","23","display","displayValor2"); */

const test = document.getElementById("testArea");

test.appendChild(miCalculadora.armarCalculadora());