import React from 'react'
import Tabla from '../components/Table'
import BtnAdd from '../components/BtnAdd'
import BtnEdit from '../components/BtnEdit'
import BtnDelete from '../components/BtnDelete'


export function Home() {
  return (
    <>
    <div>
        <Tabla></Tabla>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col'> 
        <BtnAdd></BtnAdd>
        </div> 
        <div className='col'>
          <BtnEdit></BtnEdit>
        </div>
        <div className='col'>
        <BtnDelete></BtnDelete>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home