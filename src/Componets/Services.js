import React from 'react'
import constdata from '../Shared/consdata'

function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <div className="service container ">
  <div className="">
    <img  src={constdata.ser4} className="card-img-top" alt="..."/>
   
  </div>
  <div className="">
    <img src={constdata.ser1} className="card-img-top" alt="..."/>
    
  </div>
  <div className="">
    <img src={constdata.ser3} className="card-img-top" alt="..."/>
   
  </div>
</div>
    </div>
  )
}

export default Services
