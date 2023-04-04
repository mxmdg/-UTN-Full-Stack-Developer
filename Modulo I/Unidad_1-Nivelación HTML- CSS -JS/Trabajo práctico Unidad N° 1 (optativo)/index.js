// Podria usarse un esquema para armar el formulario
const formSeguros = {
'Nombre': {type: String, required: false},
'Apellido': {type: String, required: true},
'DNI': {type: Number, required: true},
'Correo Electronico': {type: String, required: true},
'Telefono': {type: Number, required: false},
'Seguro': {type: {name: "Select"}, options: [{ 
                                            Seguro: "Basico" ,
                                            $: 500 
                                            }, { 
                                            Seguro: "Intermedio" ,
                                            $: 1000 
                                            }, { 
                                            Seguro: "Premium" ,
                                            $: 1500 
                                            }]},                                            
};
const formSegurosHogar = {
    'Nombre': {type: String, required: false},
    'Apellido': {type: String, required: true},
    'DNI': {type: Number, required: true},
    'Correo Electronico': {type: String, required: true},
    'Telefono': {type: Number, required: false},
    'Calle': {type: String, required: true},
    'Numero': {type: Number, required: false},
    'Ciudad': {type: String, required: true},
    'Propiedad': {type: {name: "Select"}, options: [{ 
                                                Vivienda: "Casa" 
                                                }, { 
                                                Vivienda: "Departamente" 
                                                }, { 
                                                Vivienda: "PH" 
                                                }]},
    'Seguro': {type: {name: "Select"}, options: [{ 
        Seguro: "Robo" ,
        $: 500 
        }, { 
        Seguro: "Robo e incendio" ,
        $: 1000 
        }, { 
        Seguro: "Todo Riesgo" ,
        $: 1500 
        }]},                                              
    };


const yearsAndYears = (from,to)=> {
    let years = []
    for (let i = from; i < to; i++){
        years.push({Fabricacion: i})
    };
    return years
}

    const formSegurosAuto = {
        'Marca': {type: String, required: false},
        'Modelo': {type: String, required: true},
        'Patente': {type: String, required: true},
        'Año': {type: {name: "Select"}, options: yearsAndYears(1990,2023)},
        'Correo Electronico': {type: String, required: true},
        'Telefono': {type: Number, required: false},
        'Seguro': {type: {name: "Select"}, options: [{ 
            Seguro: "Responsabilidad Civil" ,
            $: 500 
            }, { 
            Seguro: "Terceros completo" ,
            $: 1000 
            }, { 
            Seguro: "Todo Riesgo" ,
            $: 1500 
            }]},                                              
        };
                      
function crearDocFrag(contenedor,etiqueta,contenido,id) {
    let container
    try {
        container = document.querySelector(contenedor);
    } catch(e) {
        container = contenedor;
        console.log("El parametro no se puede seleccionar con query selector")
    }
    
    let textContainer = document.createElement(etiqueta);
    textContainer.innerHTML = contenido;
    try {
        container.appendChild(textContainer);
    } catch(e) {
        console.log(container)
        console.log(textContainer)
        console.log(e)
    }
    
    if (id !== undefined) {
        container.lastElementChild.setAttribute("id", id)
    };
};

function createSelector(arr) { 
    console.log(arr)
    const select = document.createElement("select");
    crearDocFrag(select,"option","Elija una opción");
    try{
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            let props = Object.entries(element);
            let opt =  document.createElement("option");
            opt.setAttribute("id",`id_${props[0][0]}_${props[0][1]}`);
            opt.text = `${props[0][1]}`;
            opt.value = (props[1])?`${props[1][0]} ${props[1][1]}`:`${props[0][0]} ${props[0][1]}`;
            select.appendChild(opt);
            select.setAttribute("name", props[0][0])  
            }
        select.addEventListener('change', (e) => {
            const selection = e.target.value;
            select.setAttribute("name", Object.getOwnPropertyNames(arr[select.selectedIndex - 1])[0] + " " + Object.values(arr[select.selectedIndex - 1])[0] )
            console.log(selection, Object.values(arr[select.selectedIndex - 1]))
            console.log(e.target.selectedIndex)
            console.log(e.target.value)
        })
        return select;

    } catch (e) {
        alert('No se puede crear un selector con estos datos. Se necesita el siguiente modelo de datos { opcion1 : valor1 , opcion2 : valor2')
        console.log(e)
    }
    
};

function createButton (contID,btnTxt,id,doSomeThing) {
    const container = document.getElementById(contID);
    const btn = document.createElement("button");
    btn.innerHTML = btnTxt;
    btn.setAttribute('id',id);
    container.appendChild(btn);
    document.getElementById(id).addEventListener('click', (e)=> {
                                                            e.preventDefault(), 
                                                            doSomeThing(e);
                                                        });
}

function removeGrandGrandParent(e) {
    const elemento = e.target
    console.log(e.target)
    let abu = elemento.parentElement.parentElement.parentElement.parentElement;
    console.log(abu)
    let padre = elemento.parentElement.parentElement.parentElement;
    console.log(padre)
    abu.removeChild(padre);

};

function removeGrandParent(e) {
    const elemento = e.target
    console.log(e.target)
    let abu = elemento.parentElement.parentElement;
    console.log(abu)
    let padre = elemento.parentElement;
    console.log(padre)
    abu.removeChild(padre);

};

const cancel = (e) => {
    removeGrandParent(e);
    const cont = document.getElementById("newClient");
    cont.classList.add("hidden");
    cont.children.remove();
}

const confirm = (e)=> {    
    removeGrandGrandParent(e);
    const cont = document.getElementById("newClient")
    cont.lastElementChild.remove();
    cont.classList.add("hidden")
}

function getData(f) {
    console.log(f)
    const myFormData = new FormData(f);
    console.log(myFormData.keys)
    const data = []
    for (var p of myFormData) {
        let name = p[0];
        let value = p[1];
        
        data.push({ name , value })
    }
    console.log(data)
    return data
    
};

function renderSentData(f) {
    const nodal = document.createElement("div")
    nodal.classList.add("nodal")
    const data = getData(f);
    const contenidos = document.createDocumentFragment()
    for (element of data) {
        let name = element.name;
        let value = element.value;
        crearDocFrag(contenidos,"div",`<p>${name}: <b>${value}</b></p>`)
    }
    const div = document.createElement("div")
    div.setAttribute("class","confirmData")
    div.setAttribute("id", "confirmData")
    div.innerHTML = `<h3>Confirmar Informacion</h3>`
    div.appendChild(contenidos)
    nodal.appendChild(div)
    document.querySelector(".body").appendChild(nodal)
    crearDocFrag(".confirmData","div",``,"buttons")
    createButton("buttons","Confirmar","confirmData_btn",confirm)
    createButton("buttons","Cancelar","cancelData_btn",removeGrandGrandParent)
    
}

// Esta funcion crea formularios, recibe tres parametros:
// - contID: el ID del contenedor donde vamos a crear el formulario.
// - data: Array de objetos cuyas propiedades son el dato solicitado, tipo (string, number o select) y requerido (boolean).
// - fn: funcion que se ejecuta al enviar el formulario.

function createForm (contID, data, fn) {
    const formContainer = document.getElementById(contID);
    let props = Object.getOwnPropertyNames(data);
    let req = [];
    let typ = [];
    for (let p of props) {
        req.push(data[p].required);
        typ.push(data[p].type.name);
    };

    const form = document.createElement("form");
    form.setAttribute("id", contID + "_form");

    try {
        for (let i = 0 ; i < props.length ; i++) {
            if (typ[i] == "Select") {
                let div = document.createElement("div");
                div.innerHTML = `<label>${props[i]}</label>`;
                let selector = createSelector(data[props[i]].options);
                div.appendChild(selector);
                form.appendChild(div);
            } else {
                let tn = `<label for="id_${props[i]}">${props[i]}</label>
                <input type="${typ[i]}" placeholder="${props[i]}" required="${req[i]}" id="id_${props[i]}" name="${props[i]}">`
                crearDocFrag(form,"DIV",tn)
            }
                             
        };
    } catch (e) {
        alert('El selector no se ha podido crear. Envienos la informacion para mejorar nuestro servicio')
        crearDocFrag(form,"textarea",e)
    }
  
    crearDocFrag(form,"button","Enviar","submitBTN");
    crearDocFrag(form,"button","Cancelar","cancelBTN");
    formContainer.appendChild(form);

    document.getElementById("submitBTN").setAttribute("type","submit");
    document.getElementById("cancelBTN").setAttribute("type","Button");

    document.getElementById("cancelBTN").addEventListener("click", (e => {
        e.stopPropagation()
        removeGrandParent(e);
        const cont = document.getElementById("newClient")
        cont.classList.add("hidden");
    }))

    document.getElementById(contID + "_form").addEventListener("submit", (e)=> {
        e.preventDefault();
        if (formValidator()) {
            console.log(formValidator())
            fn(e.target);
        }
       
       // e.target.reset()
    })
};

function formValidator (){
    let mailRe = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/gi;
    let pat = /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$|[a-zA-Z]{3}[0-9]{3}$/gi
    let error
    const inputs = document.getElementsByTagName("input");
    const selects = document.getElementsByTagName("select")
    for (input of inputs) {
        if (input.type == "text") {
            if (input.name == "Correo Electronico" && mailRe.test(input.value) == false) {
                console.log(input.value)
                error = "Ingrese una direccion de correo valida";
                input.focus();
            }
            else if (input.name == "Patente" && pat.test(input.value) == false) {
                console.log(input.value)
                error = "Ingrese un numero de Patente valido";
                input.focus();
            }
            else if (input.value.length <= 1 || input.value.length > 50) {
                error = (`Compruebe los datos en el campo ${input.name}`);
                input.focus()
            }
        } else if (input.type == "number") {
            switch (input.name) {
                case 'DNI':
                    if (input.value.length !== 8) {
                        error = 'Ingrese numero de DNI válido';
                        input.focus();
                    }
                    break;
                case 'Telefono':
                    if (input.value.length !== 10) {
                        error = 'Ingrese numero de Telefono válido';
                        input.focus();
                    }
                    break;
                case 'Año':
                    if (input.value.length !== 4) {
                        error = 'Ingrese 4 digitos para el año';
                        input.focus();
                    }
                    break;
            }
            
        } 
            
    }
    for (let sel of selects) {
        if (sel.value == "Elija una opción") {
            error = "Seleccione un elemento de la lista";
            sel.focus();
        }
    }
    if (error == undefined) {
        return true;
    } else {
        alert(error);
    }
}

function createFormV2 (contID, data, fn) {
    const formContainer = document.getElementById(contID);
    let props = Object.getOwnPropertyNames(data);
    let req = [];
    let typ = [];
    for (let p of props) {
        req.push(data[p].required);
        typ.push(data[p].type.name);
    };

    const form = document.createElement("form");
    form.setAttribute("id", contID + "_form");

    try {
        for (let i = 0 ; i < props.length ; i++) {
            if (typ[i] == "Select") {
                let div = document.createElement("div");
                let divError = document.createElement("div");
                divError.classList.add("divError");
                divError.setAttribute("id",`error_${props[i]}`)
                div.innerHTML = `<label>${props[i]}</label>`;
                let selector = createSelector(data[props[i]].options);
                div.appendChild(selector);
                div.appendChild(divError);
                form.appendChild(div);
            } else {
                let tn = `<label for="id_${props[i]}">${props[i]}</label>
                            <input type="${typ[i]}" placeholder="${props[i]}" required="${req[i]}" id="id_${props[i]}" name="${props[i]}">
                            <div class="divError" id="error_${props[i]}"></div>`
                crearDocFrag(form,"DIV",tn)
            }
                             
        };
    } catch (e) {
        alert('El selector no se ha podido crear. Envienos la informacion para mejorar nuestro servicio')
        crearDocFrag(form,"textarea",e)
    }
  
    crearDocFrag(form,"button","Enviar","submitBTN");
    crearDocFrag(form,"button","Cancelar","cancelBTN");
    formContainer.appendChild(form);

    document.getElementById("submitBTN").setAttribute("type","submit");
    document.getElementById("cancelBTN").setAttribute("type","Button");

    document.getElementById("cancelBTN").addEventListener("click", (e => {
        e.stopPropagation()
        removeGrandParent(e);
        const cont = document.getElementById("newClient")
        cont.classList.add("hidden");
    }))

    document.getElementById(contID + "_form").addEventListener("submit", (e)=> {
        e.preventDefault();
        if (formValidatorV2()) {
            console.log(formValidatorV2())
            fn(e.target);
        }
       
       // e.target.reset()
    })
};

function formValidatorV2 (){
    let mailRe = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/gi;
    let pat = /^[a-zA-Z]{2}[0-9]{3}[a-zA-Z]{2}$|[a-zA-Z]{3}[0-9]{3}$/gi
    let error = {id: "" , message: "" }
    const inputs = document.getElementsByTagName("input");
    const selects = document.getElementsByTagName("select")
    for (input of inputs) {
        if (input.type == "text") {
            if (input.name == "Correo Electronico" && mailRe.test(input.value) == false) {
                console.log(input.value)
                error.message = "Ingrese una direccion de correo valida";
                error.id = "error_" + input.name;
                input.focus();
            }
            else if (input.name == "Patente" && pat.test(input.value) == false) {
                console.log(input.value)
                error.message = "Ingrese un numero de Patente valido";
                error.id = "error_" + input.name;
                input.focus();
            }
            else if (input.value.length <= 1 || input.value.length > 50) {
                error.message = (`Compruebe los datos en el campo ${input.name}`);
                error.id = "error_" + input.name;
                input.focus()
            }
        } else if (input.type == "number") {
            switch (input.name) {
                case 'DNI':
                    if (input.value.length !== 8) {
                        error.message = 'Ingrese numero de DNI válido';
                        error.id = "error_" + input.name;
                        input.focus();
                    }
                    break;
                case 'Telefono':
                    if (input.value.length !== 10) {
                        error.message = 'Ingrese numero de Telefono válido';
                        error.id = "error_" + input.name;
                        input.focus();
                    }
                    break;
                case 'Año':
                    if (input.value.length !== 4) {
                        error.message = 'Ingrese 4 digitos para el año';
                        error.id = "error_" + input.name;
                        input.focus();
                    }
                    break;
            }
            
        } 
            
    }
    for (let sel of selects) {
        if (sel.value == "Elija una opción") {
            error.message = "Seleccione un elemento de la lista";
            error.id = "error_" + sel.name;
            console.log(error)
            sel.focus();
        }
    }
    if (error.message == "" && error.id == "") {
        return true;
    } else {
        let errMessage = document.getElementById(error.id);
        errMessage.innerHTML = `<p>${error.message}</p>`;
       /*  errMessage.previousElementSibling.addEventListener("change",(e)=>{
            e.preventDefault();
            errMessage.innerHTML = "";
        }) */
    }
}

window.addEventListener('load', (e) => {
    e.preventDefault()
    const segVida = document.getElementById("segVida");
    const segAuto = document.getElementById("segAuto");
    const segHogar = document.getElementById("segHogar");
    segVida.addEventListener('click', (e)=> {
        e.preventDefault();
        let formContainer = document.getElementById("newClient")
        if (formContainer.classList.contains("hidden")) {
            createForm("newClient",formSeguros,renderSentData);
            formContainer.classList.remove("hidden")
        } else [
            alert("Complete el formulario")
        ]
        
    })
    segAuto.addEventListener('click', (e)=> {
        e.preventDefault();
        let formContainer = document.getElementById("newClient")
        if (formContainer.classList.contains("hidden")) {
            createForm("newClient",formSegurosAuto,renderSentData);
            formContainer.classList.remove("hidden")
        } else [
            alert("Complete el formulario")
        ]
        
    })
    segHogar.addEventListener('click', (e)=> {
        e.preventDefault();
        let formContainer = document.getElementById("newClient")
        if (formContainer.classList.contains("hidden")) {
            createForm("newClient",formSegurosHogar,renderSentData);
            formContainer.classList.remove("hidden")
        } else [
            alert("Complete el formulario")
        ]
        
    })

    const mandarSaludo = ()=>alert("Hola Puto")

    let opciones = [{Opcion1 : "Valor1"},{Opcion2 : "Valor2" , opcion3: "Valor3"}]

    createForm("#navBar",opciones,mandarSaludo)

    
})

