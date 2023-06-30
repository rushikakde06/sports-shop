import React, { Component } from 'react'
import '../Componets/Sportapp.css'
import constdata from '../Shared/consdata'
export class Itemproduct extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t1} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span> </p>
        <button className='btn btn-primary mx-3'>add cart</button>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t11} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t13} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>





<div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i1} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i2} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i3} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>



<div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i4} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i5} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i6} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>



<div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i7} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span>  </p>
      
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t11} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t13} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>


<div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t1} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t11} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t13} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>



<div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i1} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i2} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.i3} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>



<div class="row row-cols-1 row-cols-md-3 g-4 cart">
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t1} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tennis ball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:50</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t11} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Football</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:700</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={constdata.t13} class="card-img-top1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Baketball</h5>
        <p class="card-text btn btn-primary">Price: <span className='btn btn-danger'>Rs:500</span> </p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>






                
            </div>
        )
    }
}

export default Itemproduct
