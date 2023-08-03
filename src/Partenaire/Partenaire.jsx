import React from 'react'
import './Partenaire.css'

export default function Partenaire() {
  const Items=()=>{
    return(
      <>
      <div className="col">
        <div className=' text-center'> <img src="https://i.pinimg.com/474x/01/eb/1a/01eb1a00b7d3a4fdb63d09dcbebb1157.jpg" alt=""  className=' rounded-circle' width='100px' height='100px'/></div>
        <div className='  fw-bold text-center hell'>Expert en informatique et reseau</div>

      </div>
      </>
    )
  }
  return (
    <div className=' mt-3'>
        <div className=' p-lg-2 row '>
         <div className=' '>
        <div className=' d-flex gap-2 hello'>
        <Items/>
          <Items/>
          <Items/>
          <Items/>
        </div>
         </div>

        </div>
        </div>
        
   
  )
}
