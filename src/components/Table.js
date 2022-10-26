import { useContext,useEffect } from "react"
import DataTable from "react-data-table-component"
import context from "../context/context"

export default function Tabla() {

    const{getNums,lstNums} = useContext(context)


    useEffect(() => {
        getNums()
        //eslint-disable-next-line
    }, [])
    //se puede usar color o backgroundColor
    const styledRow = [{when:i=>i.isPrime==="true",style:{color:"green"}},{when:i=>i.isPrime==="false",style:{color:"red"}}]

    const column = [{
        name:"ID",
        selector:i => i.id,
        sortable:true
    },
    {
        name:"Numero",
        selector:i => i.numero,
        sortable:true
    },
    {
        name:"Primo",
        selector:i => i.isPrime,
        sortable:true
    },
    {
        name:"Comentario",
        selector:i => i.comentario,
        sortable:true
    }    


]

    return(
        <>
            <DataTable conditionalRowStyles={styledRow} className="table-responsive border border-dark"
            columns={column} data={lstNums} title="Numeros" pagination fixedHeader fixedHeaderScrollHeight="200px"
            />

        </>
        
    )
};
