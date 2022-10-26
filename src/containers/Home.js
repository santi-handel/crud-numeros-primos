import React from 'react'
import Tabla from '../components/Table'
import BtnAdd from '../components/btnAdd'


export function Home() {
  return (
    <>
    <div>
        <Tabla></Tabla>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='columb '> 
        <BtnAdd></BtnAdd>
        </div> 
      </div>
    </div>
    </>
  )
}

export default Home