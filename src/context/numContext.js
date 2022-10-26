import React, { useState } from "react"
import db from "../services/Firebase"
import numContext from "./context"
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore"

export default function FirebaseContext(props) {
    //crear objeto que hereda los props
    const { children } = props
    const [nums, setNums] = useState([]);
    const [text, setText] = useState("")



    const idIncremental = async () => {
        let count = -1;
        const snap = await getDocs(collection(db, "nums"))
        snap.forEach((i) => {
            if (parseInt(i.id) > count) {
                count = parseInt(i.id)
            }
        })
        return count + 1
    }

    const getNums = async () => {
        const snap = await getDocs(collection(db, "nums"))
        const lstNums = [];
        snap.forEach((i) => {
            lstNums.push({ ...i.data(), id: i.id })
        })
        setNums(lstNums);
    }


    const isPrime = (num) => {
        let count = 0;
        let lstDivisores = []
        let comentary = ""
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count += 1;
                lstDivisores.push(i)
            }
        }
        lstDivisores.forEach((i) => {
            console.log(i)
            comentary += i.toString()
        })

        setText(comentary)
        return count === 2;
    }


    const addNum = async (num) => {

        await setDoc(doc(db, "nums", (await idIncremental()).toString()), {
            numero: num,
            isPrime: isPrime(parseInt(num)).toString(),
            comentario: text
        })

    }

    const updateNum = async (id, num) => {
        await updateDoc(doc(db, "nums", id), {
            numero: num
        })
    }

    const deleteNum = async (id) => {
        await deleteDoc(doc(db, "nums", id))
    }

    return (<numContext.Provider value={{ lstNums: nums, getNums, addNum, updateNum, deleteNum }}>{children}</numContext.Provider>)


}

