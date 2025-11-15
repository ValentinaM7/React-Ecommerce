
import { initializeApp } from "firebase/app";
import { collection, getDocs, doc, getDoc, getFirestore, query, where, addDoc} from "firebase/firestore";
import harryPotterCharacters from "./data";

// TODO: Add SDKs for Firebase products that you want to use


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: import.meta.env.VITE_FS_AUTH,
  projectId: import.meta.env.VITE_FS_APPID,
  storageBucket: import.meta.env.VITE_FS_BUCKET,
  messagingSenderId: "809502367596",
  appId: import.meta.env.VITE_FS_APPID,
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// recreamos getData

async function getData(){
    const charactersRef = collection(db, "characters")
    const productsSnapshot = await getDocs(charactersRef)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map (item => {
        return{...item.data(), id: item.id}
    })
    return dataDocs;
}

//getCharacterByID
export async function getCharacterById(idParam){
    const docRef = doc(db, "characters", idParam)
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    const idDoc = docSnapshot.id;
    return {...docData, id: idDoc};
}

//getCharactersbyHouse
export async function getCharactersByHouse(houseParam){
    const charactersRef = collection(db, "characters")

    const q = query(charactersRef, where("category", "==", houseParam))
    const productsSnapshot = await getDocs(q)
    const docs = productsSnapshot.docs;
    const dataDocs = docs.map (item => {
        return{...item.data(), id: item.id}
    })
    return dataDocs;
}

export async function createBuyOrder(orderData){
    const ordersRef = collection(db, "orders")
    const newDoc = await addDoc(ordersRef, orderData)
    return newDoc;
}

export async function exportCharacters(){
    const charactersRef = collection(db, "characters")
    for (let item of harryPotterCharacters) {
        delete item.id
        const newDoc = await addDoc (charactersRef, item)
        console.log ("doc creado", newDoc.id)
    }
}

export default getData;