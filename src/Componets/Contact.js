import axios from 'axios'

import React, { Component } from 'react'
import { Form ,Button } from 'react-bootstrap'

export class Contact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        // contactdetai:[],
        // id:null,
        Name:"",
        Email:"",
        City:"",
        Messge:""
         
      }
    }
  //   componentDidMount() {
  //     this.fetData();
  // }

  // fetData = () => {
  //     axios.get("http://localhost:8888/contact").then((res) => {
  //         console.log(res)
  //         this.setState({ contactdetai: res.data })

  //     })
  // }

     
    Chnageinput = (event) => {
      const { name, value, } = event.target;
      this.setState({ [name]: value });

    }
    Aboutdata = (event) => {
      event.preventDefault();
   axios.post("http://localhost:8888/contact",this.state).then((res)=>{
    window.alert("Send  data")
    console.log(res)

   })
     
  }

    
    render() {
      const {Name,Email, City,Messge}=this.state
        return (

         
            <div className=' feedback'>

             
                  <h2 className='u1'>Let's Contact us </h2>
                <Form  className='feedbackform1  container' onSubmit={this.Aboutdata} style={{width:"400px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='u3' > Enter your name</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" name='Name'  value={Name} onChange={this.Chnageinput} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='u3' > Enter your email</Form.Label>
        <Form.Control type="email" placeholder="email"  name='Email' value={Email} onChange={this.Chnageinput} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='u3' > Enter your city</Form.Label>
        <Form.Control type="type" placeholder="city name" name='City' value={City} onChange={this.Chnageinput} required/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='u3'>Enter your messge</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter your message' name='Messge' value={Messge} onChange={this.Chnageinput} required/>
      </Form.Group>
      <Button type='submit' className='btn btn-primary mb-3 fs-5'>Submit contact</Button>
    </Form>
                
            </div>
        )
    }
}

export default Contact
