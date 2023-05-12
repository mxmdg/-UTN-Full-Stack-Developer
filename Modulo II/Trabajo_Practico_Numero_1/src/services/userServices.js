import firebase from '../config/firebase';

export const createUser = async (payload)=> {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        const document = await firebase.firestore().collection('users')
        .add({
            name: payload.nombre,
            lastname: payload.apellido,
            userId: response.user.uid
        })
        console.log(document)
        console.log('Usuario almacenado exitosamente')
    } catch (e) {
        console.log(e)
    }
}

export const login = async (email, password)=> {
    try {
        const res = firebase.auth().signInWithEmailAndPassword(email,password)
        console.log(res.userId) 
    } catch (e) {
        console.log(e)
    }
  
}
