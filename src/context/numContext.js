import React, { useState } from "react"
import  db  from "../services/Firebase"
import numContext from "./context"
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc } from "firebase/firestore"

export default function FirebaseContext(props) {
    //crear objeto que hereda los props
    const { children } = props
    const [nums, setNums] = useState([]);

    
    const idIncremental = async () =>{
        let count = -1;
        const snap = await getDocs(collection(db,"nums"))
        snap.forEach((i)=>{
            if(parseInt(i.id)>count){
                count=parseInt(i.id)
            }
        })
        return count+1
    }

    const getNums = async () => {
        const snap = await getDocs(collection(db, "nums"))
        const lstNums = [];
        snap.forEach((i) => {
            lstNums.push({ ...i.data(), id: i.id })
        })
        setNums(lstNums);
    }

    function isPrime(num) {
        const lstDivisores = [];
        for (let i = 2; i = num; i++) {
            if (num % i === 0) {
                lstDivisores.push(i);
                //console.log(lstDivisores);
                return false;
            }
            if (num % i !== 0) {
                return true;
            }
        }
    }

    const addNum = async (num) => {
        await setDoc(doc(db, "nums",(await idIncremental()).toString()), {
            numero: num,
            isPrime: isPrime(parseInt(num)).toString(),
            //comentario: "es divisible por ", lstDivisores
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

