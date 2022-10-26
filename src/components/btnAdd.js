import { useState } from "react"
import { useContext } from "react";
import context from "../context/context";
export default function BtnAdd() {

    const { addNum, getNums } = useContext(context)

    const [input, setInput] = useState({
        num: ""
    });

    const handleChange = ({ target: { name, value } }) => setInput({ ...input, [name]: value })

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            await addNum(input.num)
            getNums()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="form-signin w-50 m-auto" onSubmit={handleAdd}>
                <input className="form-control my-1" name="num" onChange={handleChange} placeholder="Numero"></input>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </>

    )
};