import React, { Component, useState } from 'react'
import './Navigation.css'
import {DarkMode, LightMode} from '@mui/icons-material'

export default function Navigation() {
  const Service=[{
    image:'https://i.pinimg.com/474x/e4/9b/4e/e49b4ed30b220c12f510a20a84d68e94.jpg',
    titre:'Reseau sociaux',
    description:'Gagnez plus en visibilié a travers votre existence sur le web.'
  }
]
  const [mode , setmode]=useState(false)
  const light= "backgroundColor:'#f0f2f5'"
  const dark=" backgroundColor:'red"
  
  const Services=()=>{
    return(
      <>
     <div className=' col-lg-3 col-sm mb-sm-2 ' >
     <div className='card'>
          <div className=' card-body d-grid hover'>
            <div className=' card-img  text-center '> <img src="https://i.pinimg.com/474x/e4/9b/4e/e49b4ed30b220c12f510a20a84d68e94.jpg" alt="" className=' rounded-1 w-50 text-center' /></div>
            <div className=' card-title fw-bold'>Reseau sociaux</div>
            <div className=' card-text'>Gagnez plus en visibilié a travers votre existence sur le web.</div>
            <a href="#" className=' card-link btn btn-primary'>En savoir plus.</a>
          </div>
          <div className=' card-footer p-1 bg-primary'></div>
        </div>
     </div>
      </>
    )
  }
  const getsyle=()=>{
    return{
      backgroundColor:'#f0f2f5'
    }
  }

  const Menu=({lien})=>{
    return(
      <>
      <li className=' nav-item'>
        <a href="#" className=' nav-link'>{ lien}</a>
      </li>
      </>
    )
  }
  return (
  <>
   <div style={{backgroundColor:'#f0f2f5'}} >
   <nav className=' container navbar navbar-expand-lg ' >
     <div className='container-fluid'>
      <a href="#" className=' navbar-brand deco '>Digital Academy</a>
      <button className=' navbar-toggler' data-bs-toggle="collapse" data-bs-target='#content'> <span className=' navbar-toggler-icon'></span> </button>
      
    
     <div className=' collapse navbar-collapse ' id='content'>
        <ul className=' navbar-nav ms-auto '>
         <Menu lien="Contact"/>
         <Menu lien="Service"/>
         <Menu lien="Equipe"/>
         <Menu lien="Formation"/>
         <li className='nav-item dropdown'>
          <a href="" className=' nav-link dropdown-toggle ' data-bs-toggle='dropdown' aria-expanded="false">Mode</a>
          <ul className=' dropdown-menu'>
          <li className=' dropdown-item'><div className=' d-flex gap-1'> <LightMode className=' yellow' /> Clair </div></li>
            <li className=' dropdown-item'><div className=' d-flex gap-1'> <DarkMode/> sombre</div></li>

          </ul>
         </li>
        </ul>
      </div>
    
      </div>
  
     </nav>
     <section className=' container  mt-3 row ' >
     <div className=' col p-lg-5 '>
     <div className=' h4 p-lg-3 '>Nous creons des solutions <b>Digitale</b> pour votre bussiness et entreprise.</div>
     <div>
      <div className='p-lg-3'>
      <a href='#services' className=' btn btn-primary'>Debuter a l'instant</a>

      </div>
     </div>
     </div>
      <div  className='col pt-2 '>
        <img src="https://i.pinimg.com/474x/59/ba/af/59baaf5dbc274179ac5ba28e889e3bf3.jpg" alt=""  className=' rounded-1'  />
      </div>

     </section>
      
    <section className=' p-lg-3 mt-2 container' id='services'>
      <div className=' p-3 boost fw-bold display-2 text-center'>Boost 237</div>
      <div className=' row'>
      <Services/>
      <Services/>
      <div className=' col-lg-3 col-sm ' >
     <div className='card'>
          <div className=' card-body d-grid   hov'>
            <div className=' card-img  text-center  '> <img src="https://i.pinimg.com/474x/e4/9b/4e/e49b4ed30b220c12f510a20a84d68e94.jpg" alt="" className=' rounded-1 w-50 text-center' /></div>
            <div className=' card-title fw-bold'>Reseau sociaux</div>
            <div className=' card-text'>Gagnez plus en visibilié a travers votre existence sur le web.</div>
            <a href="#" className=' card-link btn btn-primary'>En savoir plus.</a>
          </div>
          <div className=' card-footer p-1 bg-primary'></div>
        </div>
     </div>
      <Services/>
      </div>

    </section>
    
   </div>
  </>
  )
}
