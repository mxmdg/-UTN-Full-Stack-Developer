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
    constructor() {
        this.botonera = this.armarBotonera();
        this.operacion = "";
    }

    v1 = () => document.getElementById("dispValor1");
    v2 = () => document.getElementById("dispValor2");
    CA = () => document.getElementById("btn_CA");
    C = () => document.getElementById("btn_C");
    igual = () => document.getElementById("btn_\=");
    
    armarCalculadora = ()=> {
        const cuerpo = (this.cuerpo());
        cuerpo.appendChild(this.display());
        cuerpo.appendChild(this.armarBotonera());
        document.addEventListener("DOMContentLoaded", (e)=>{
            try {
                this.escucharEventos();
                console.log("escuchando eventos")
            } catch (e) {
                console.log("No se escucha ningun evento porque " + e)
            }
        })
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
        let teclado = document.createElement("div")
        teclado.classList.add("tecladito")                      
        for (let i = 0; i < arr.length; i++) {
            const btn = document.createElement("div");
            btn.innerHTML = `${arr[i]}`;
            btn.classList.add(claseDeBoton);
            btn.id = `btn_${arr[i]}`;
            teclado.appendChild(btn)
        }
        return teclado
    }

    // const botonera = document.createElement("div");
    // botonera.classList.add("casioCalculator")

    createNumArr (from,to) {
        let arr = ["."]
        for (let i = from; i < to; i++){
            try {
               arr.push(i);
            } catch (err) {
                console.log(err);
            }
        };
       return arr
    };

    armarBotonera(){
        let botonera = document.createDocumentFragment();
        let numeros = this.createNumArr(0,10);
        let operaciones = ["+","-","*","/","=","C","CA"];
        let numBtn = this.crearBotones(numeros,"numBtn");
        let opBtn = this.crearBotones(operaciones,"opBtn");
        botonera.appendChild(numBtn);
        botonera.appendChild(opBtn);
        return botonera
    }
    
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

    borrarTodo () {
        this.v1().innerHTML = "";
        this.v2().innerHTML = "";
        this.operacion = "";
    }

    borrar () {
        this.v1().innerHTML = this.v1().innerHTML.slice(0, (this.v1().innerHTML.length -1) ); 
    }

    ingresarValores (btn) {
        if (this.v1().innerHTML == "" && this.v2().innerHTML == "" && this.operacion == "") {
            this.v1().innerHTML += btn.textContent;
        } else if (this.v1().innerHTML !== "" && this.v2().innerHTML == "" && this.operacion !== "") {
            this.v1().innerHTML = "";
            this.v1().innerHTML += btn.textContent;
        }

    }
    
    operar () {
        this.v2().innerHTML = this.v1().innerHTML;
        this.v1().innerHTML = "";
        console.log("Operar: ingresar otro valor")
    }

    calcular (a,b,operacion) {
        let c = operacion(a,b);
        return c
    }

    resolver () {
        switch (this.operacion) {
            case "+":
              // código a ejecutar si el operador es "+"
              this.mostrarResultado(this.calcular(Number(this.v2().textContent), Number(this.v1().textContent), this.sumar))
              break;
            case "-":
              // código a ejecutar si el operador es "-"
              this.mostrarResultado(this.calcular(this.v2().textContent, this.v1().textContent, this.restar))
              break;
            case "*":
              // código a ejecutar si el operador es "*"
             this.mostrarResultado(this.calcular(this.v2().textContent, this.v1().textContent, this.multiplicar))
              break;
            case "/":
              // código a ejecutar si el operador es "/"
              this.mostrarResultado(this.calcular(this.v2().textContent, this.v1().textContent, this.dividir))
              break;
            default:
              // código a ejecutar si el operador no es ninguno de los cuatro operadores básicos
              this.v1().innerHTML = "ERROR"
              break;
          }
    }
    
    mostrarResultado (res) {
        this.v1().innerHTML = res;
        this.v2().innerHTML = "";
        this.operacion = "";
    }



    escucharEventos() {
        let numBtn = document.getElementsByClassName("numBtn");
        let opBtn = document.getElementsByClassName("opBtn");
        console.log(opBtn)
        for (let btn of numBtn) {
            btn.addEventListener("click",(e)=>{
                e.preventDefault();
                this.ingresarValores(btn)
                
            })
            
        }

        document.addEventListener("keydown",(e)=>{  
            console.log(e.key)
            if (e.key == e.target.textContent) {
                e.preventDefault();
                this.ingresarValores(btn)
            } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
                this.operar()
                this.operacion = e.key
            } else if (e.key == "Enter") {
                this.resolver();
            }
        })

        this.CA().addEventListener("click",(e)=>{
            e.preventDefault();
            this.borrarTodo();
        });

        for (let i = 0; i < opBtn.length; i++) {
            opBtn[i].addEventListener("click",(e)=>{
                if (opBtn[i].textContent == "+" || opBtn[i].textContent == "-" || opBtn[i].textContent == "*" || opBtn[i].textContent == "/") {
                    (this.v2.innerHTML !== "")?this.operacion = (e.target.textContent):this.operar();
                    this.operacion = (e.target.textContent)
                    this.operar()
                }
                console.log(this.operacion)
                
            })
        }
       this.C().addEventListener("click",(e)=>{
            e.preventDefault();
            this.borrar();
        })
        this.igual().addEventListener("click", (e)=>{
            this.resolver();
            console.log(this.operacion)
        })
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

const test = document.getElementById("testArea");

test.appendChild(miCalculadora.armarCalculadora());