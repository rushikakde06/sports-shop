import React, { Component } from 'react'
import axios from 'axios'
import '../Componets/Sportapp.css'
import { Form ,Button } from 'react-bootstrap'
import * as productAction from '../Action/Product_action'
import {  connect } from 'react-redux'
// import { withRouter } from '../utils/router'

export class Addproduct extends Component {
    constructor(props) {
      super(props)
    
    this.state = {
    ProductName: "",
    ProductWeight: "",
    ProductType: "" ,
    ProdctPrice: "",
    MobileNumber:""

      }
    }

    changeinput=(event)=>{
        const {name,value}=event.target;
        this.setState({ [name]: value });
    }
    submitdata =(event)=>{
        event.preventDefault();
        // axios.post("http://localhost:8888/products",this.state).then(()=>{
        //     window.alert("product data added succesfuly")
        // })

        this.props.addproductRequest(this.state);
        window.alert("product data added succesfuly")

        // this.router.navigate("/product")
    }
    
    render() {
        const { ProductName, ProductWeight,ProductType,ProdctPrice,MobileNumber}=this.state
        return (
            <div  className='form'>
                <h2 className='h2'>Add your product product</h2>
                <Form className='container  form-control fs-4' style={{width:"500px"}}  onSubmit={this.submitdata}  >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter yout product name</Form.Label>
        <Form.Control type="text" placeholder="Product name" name='ProductName' value={ProductName}  onChange={this.changeinput}  required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your product weight</Form.Label>
        <Form.Control type="text" placeholder="Product weight" name='ProductWeight' value={ProductWeight}   onChange={this.changeinput} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your product type</Form.Label>
        <Form.Control type="text" placeholder="Product type"  name='ProductType'  value={ProductType}  onChange={this.changeinput} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your product price</Form.Label>
        <Form.Control type="text" placeholder="Product price"  name='ProdctPrice' value={ProdctPrice}   onChange={this.changeinput } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your mobile number</Form.Label>
        <Form.Control type="tel" placeholder="Mobile number"  name='MobileNumber' value={MobileNumber}  onChange={this.changeinput}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit data
      </Button>
    </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  allproduct: state.productStore.allproduct
})

const mapDispatchToprops = (dispatch) => ({
  addproductRequest: (data) => dispatch(
    productAction.addAllProduct(data)
  )
})


export default  connect(mapStateToProps,mapDispatchToprops) (Addproduct)
