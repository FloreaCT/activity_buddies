import { getDocs, collection } from "firebase/firestore"; 
import { getDb } from "./firebase.jsx"

const collection_name = "activities"

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = []

    doc_refs.forEach(activity => {
        res.push({
            id: activity.id, 
            ...activity.data()
        })
    })

    return res
}