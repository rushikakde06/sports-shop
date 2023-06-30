import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'
import Carousels from './Carousels'
import Itemproduct from './Itemproduct'

export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div>
               <Carousels/>
               <Itemproduct/>
                {/* <Link to="/car"></Link> */}
                <Link to="/item"></Link>
                <Outlet/>
            </div>
        )
    }
}

export default Home
