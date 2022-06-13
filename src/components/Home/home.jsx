import React from 'react'
import './home.css'
import Landing from '../UI/landing'
import data  from './data'

const Home =  ()=>{
    return (
        <div className="home">
           <div className="homeSecond">
               <div className="words">
                   <h1>Resto<span>Hub</span></h1>
                   <h2>Register your restaurant on RestoHub</h2>
                   <h3 className='btn1234'>for free and get nore revenue</h3>
                   <div className='gap-10'>
                  <a className='btn1' href="/login">Open your Restaurant</a>
                  <a className='btn2' href="/signup"> Register your Restaurant</a>
                   </div>
               </div>
           </div>
              <h1 className='how'>How it works</h1>
           <div className="reusable">
           {data.map(v=> <Landing img={v.img} width="100px" title={v.title} desc={v.desc} />)}
           </div>
        </div>
        
    )
}

export default Home