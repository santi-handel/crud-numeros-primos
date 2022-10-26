import { useContext, useState } from "react";
import context from "../context/context";

export default function BtnEdit() {
    
    const {updateNum,getNums} = useContext(context)

    const [input, setInput] = useState({
        id:"",
        num:"",
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            await updateNum(input.id,input.num)
            getNums()
        } catch (error) {
            console.log(error)
    }
}

    return(
        <>
            <form className="form-signin w-50 m-auto" onSubmit={handleUpdate}>
                <input className="form-control my-1" name="id" onChange={handleChange} placeholder=" ID "></input>
                <input className="form-control my-1" name="num" onChange={handleChange} placeholder=" Valor "></input>
                <button type="submit" className="btn btn-primary"> Edit </button>
            </form>

        </>
    )
};