let Seg_Vida = [{
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
        inputName: 'Fecha de Nacimiento',
        type: 'Date',
    },
    {inputName: 'Cobertura',
    type: 'Select',
    options: [{text: "Platinum", value: 2000},
              {text: "Golden", value: 1500},
              {text: "Silver", value: 1000},
              {text: "Wood", value: 150}
            ]
    }
]

export default Seg_Vida