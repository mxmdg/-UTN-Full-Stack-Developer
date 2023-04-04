const yearsAndYears = (from,to)=> {
    let years = []
    for (let i = from; i < to; i++){
        years.push({text: i})
    };
    return years
}

let Seg_Auto = [{
        inputName: 'Nombre',
        type: 'Text'
    },
    {
        inputName: 'Apellido',
        type: 'Text'
    },
    {
        inputName: 'Email',
        type: 'email',
    },
    {
        inputName: 'Telefono',
        type: 'tel',
    },
    {
        inputName: 'Marca',
        type: 'text',
    },
    {
        inputName: 'Modelo',
        type: 'text',
    },
    {
        inputName: 'Patente',
        type: 'text',
    },
    {
        inputName: 'Año Fabricacion',
        type: 'Select', options: (yearsAndYears(1990,2023))
    },
    {
        inputName: 'Cobertura',
        type: 'Select',
        options: [
            {text: "Todo Riesgo", value: 2000},
            {text: "Terceros Completo", value: 1500},
            {text: "Resp. Civil", value: 1000}]
    },
    {
        inputName: 'Opcionales',
        type: 'Select',
        options: [
            {text: "Granizo", value: "checkbox"},
            {text: "Cristales laterales", value: "checkbox"},
            {text: "Acarreo", value: "checkbox"}]
    }
]



export default Seg_Auto