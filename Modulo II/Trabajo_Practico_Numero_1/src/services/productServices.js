import firebase from '../config/firebase';

export const createProduct = async (payload)=> {
    try {
        const document = await firebase.firestore().collection('productos')
        .add({
            Nombre: payload.Nombre,
            Descripcion: payload.Descripcion,
            Precio: payload.Precio,
            Unidad: payload.Unidad,
            SKU: payload.SKU,
            Stock: payload.Stock,
            Ruta: payload.Ruta
        })
        console.log(document)
        console.log('Producto almacenado exitosamente')
    } catch (e) {
        console.log(e)
    }
}

export const getProducts = async ()=> {
    try {
        return await firebase.firestore().collection('productos')
        .get()
    } catch (e) {
        console.log(e)
    }
}

export const getProductByID = async (id)=> {
    try {
        return await firebase.firestore().doc(`productos/${id}`)
        .get()
        
    } catch (e) {
        console.log(e)
    }
}

export const updateProduct = async (id,payload)=> {
    try {
        return await firebase.firestore().doc(`productos/${id}`)
        .set(payload)
    } catch (e) {
        console.log(e)
    }  
}

export const deleteProduct = async (id)=> {
    console.log('Eliminar producto')
}
