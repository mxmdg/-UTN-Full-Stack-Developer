let Register = [
    {
        inputName: 'Nombre',
        type: 'Text'
    },
    {
        inputName: 'Apellido',
        type: 'Text'},
    {
        inputName: 'Email',
        type: 'email',
    },
    {
        inputName: 'Telefono',
        type: 'tel',
    },
    {
        inputName: 'Tipo de comercio',
        type: 'Select',
        options: [{text:"Productor", value: "Productor"},
                  {text:"Mayorista", value: "Mayorista"},
                  {text:"Minorista", value: "Minorista"},
                  {text:"Revendedor", value: "Revendedor"},
                  {text:"Almacén", value: "Almacén"},]
    },
    {
        inputName: 'Contraseña',
        type: 'password',
    },
    {
        inputName: 'Confirmar Contraseña',
        type: 'password',
    }
]

export default Register