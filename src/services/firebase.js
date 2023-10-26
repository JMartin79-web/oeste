import { initializeApp } from "firebase/app";

// Obtén todos los documentos de una colección
import {
    addDoc,
    getDocs, 
    collection, 
    getFirestore,
    orderBy,
    query 
} from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu5Zck5gwPRkSL7dN1TEdYQZ3G3amdK4c",
    authDomain: "oeste-8c1f7.firebaseapp.com",
    projectId: "oeste-8c1f7",
    storageBucket: "oeste-8c1f7.appspot.com",
    messagingSenderId: "91541336850",
    appId: "1:91541336850:web:601baf3fff3ced0c78b9cb"
};

// Initialize Firebase y conectarse al firestore(base de datos)
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);





// funcion para mandar datos

export async function pushRegister(data){

    try {
        let docRef = await addDoc(collection(db, "registros"), {
            date : data.date,
            sonido: data.sonido,
            video: data.video,
            plataforma: data.plataforma,
            aux: data.aux,
            mic3p1: data.mic3p1,
            mic3p2: data.mic3p2,
            mic4p1: data.mic4p1,
            mic4p2: data.mic4p2
        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }
    
}

// funcion para recibir datos
export async function getRegisters(){
    const collectionRef = collection(db, "registros")
    const q = query(collectionRef, orderBy("date", "desc"))
    let results = await getDocs(q)
    
    console.log("resultados: ", results)

    let datos = results.docs.map( (doc)=>{
        return ({ id: doc.id, ...doc.data()})
    })
    

    return datos
}