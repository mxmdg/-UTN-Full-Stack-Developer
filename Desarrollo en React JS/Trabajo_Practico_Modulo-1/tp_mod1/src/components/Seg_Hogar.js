let Seg_Hogar = [{
        inputName: 'Nombre',
        type: 'Text'
    },
    {
        inputName: 'Apellido',
        type: 'Text'
    },
    {
        inputName: 'Email',
        type: 'Text',
    },
    {
        inputName: 'Telefono',
        type: 'Number',
    },
    {
        inputName: 'Tipo de inmueble',
        type: 'Select',
        options: [{text:"Local Comercial", value: 10000},
                  {text:"Departamento", value: 13000},
                  {text:"PH", value: 17000},
                  {text:"Casa", value: 20000},
                  {text:"Casa Quinta", value: 30000},]
    },
    {
        inputName: 'Superficie (m2)',
        type: 'Number',
    },
    {
        inputName: 'Calle',
        type: 'text',
    },
    {
        inputName: 'Numero',
        type: 'Number',
    },
    {
        inputName: 'Codigo Postal',
        type: 'Number',
    },
    {
        inputName: 'Ciudad',
        type: 'text',
    },
    {
        inputName: 'Provincia',
        type: 'text',
    },
    {
        inputName: 'Cobertura',
        type: 'Select',
        options: [{text:"Premium", value: 10000},
                  {text:"High Risk", value: 5000},
                  {text:"Standar", value: 2000},
                  {text:"Basic", value: 1500},]
    },
]

export default Seg_Hogar