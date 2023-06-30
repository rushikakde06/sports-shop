import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import '../Componets/Sportapp.css'
import { Link, Outlet } from 'react-router-dom'
// import { createStructuredSelector } from 'reselect'
// import { selectAllProduct } from '../Selecters/ProductSelecter'
import *  as productActions from '../Action/Product_action'
import { connect } from 'react-redux'

export class Productdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [],
            id: "",
            ProductName: "",
            ProductWeight: "",
            ProductType: "",
            ProdctPrice: "",
            MobileNumber: ""
        }
    }
    componentDidUpdate(prevprops) {
        // this.props.initProductRequest()
        if(prevprops.singleProduct !== this.props.singleProduct){

            const {id ,ProductName,ProductWeight,ProductType,ProdctPrice,MobileNumber}= this.props.singleProduct;
            this.setState({
                id ,ProductName,ProductWeight,ProductType,ProdctPrice,MobileNumber
            },()=>console.log(this.state))
        }
      }
    componentDidMount() {
        // this.fetData();
        this.props.initProductRequest();
    }
  
    deletedata = (id) => {
       
        if (window.confirm("Are you sure to delete Recore daata" ,id)) {
            
       this.props.deleteProductRequest(id);
       window.alert("Record delete succesfully");
        }
    }
    getrecord = (id) => {
        this.props.initProductRequest(id)

        // let url = `${"http://localhost:8888/products"}/${id}`
        // axios.get(url).then((res) => {
         
        //     const { id, ProductName, ProductWeight, ProductType, ProdctPrice,MobileNumber } = res.data;
        //     this.setState({ id, ProductName, ProductWeight, ProductType, ProdctPrice,MobileNumber });

        // })
    }
    inputhandchange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    getRecord = (id) => {
        // window.alert(id)
        this.props.getSingleProductRequest(id)
    }
    updateproduct = (e) => {
       
        e.preventDefault();
        const { id ,ProductName,ProductWeight,ProductType,ProdctPrice,MobileNumber } = this.state;
        const updatedProduct = {
          id: id,
          ProductName:ProductName,
          ProductWeight:ProductWeight,
          ProductType:ProductType,
          ProdctPrice:ProdctPrice,
          MobileNumber:MobileNumber
        
        };
        
        this.props.updateProductRequest(updatedProduct)
    }

    
    render() {
        console.log(this.props.allproduct)

        const { id, ProductName, ProductWeight, ProductType, ProdctPrice,MobileNumber } = this.state
        return (
            <div>
                <h2 className='h2'>Sell your  old  product</h2>
                <Table className='container table' striped bordered hover>
                    <thead>
                        <tr>
                            <th>ProductName</th>
                            <th>ProductWeight</th>
                            <th>ProductType</th>
                            <th>ProdctPrice</th>
                            <th>MobileNumber</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* this.props.allproduct && this.props.allproduct.length > 0 && this.props.allproduct. */}
                        { this.props.allproduct.map((data, index) => {
                                return <tr key={index}>

                                    <td>{data.ProductName}</td>
                                    <td>{data.ProductWeight}</td>
                                    <td>{data.ProductType}</td>
                                    <td>{data.ProdctPrice}</td>
                                    <td>{data.MobileNumber}</td>
                                    <td>
                                        {/* <Link to={`/edit/${data.id}`} className='btn btn-outline-success btn-sm mx-3'>
                                            <i className="fa fa-pencil-square" aria-hidden="true"></i>
                                            Edit</Link> */}

                                        <button type='button' className='btn btn-outline-success btn-sm mx-3'onClick={() => this.getRecord(data.id)} >
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            Edit</button>

                                        <button className='btn btn-danger' onClick={() => this.deletedata(data.id)}><i className="fa fa-trash-o mx-1" aria-hidden="true"></i>Delete</button>

                                        {/* <button className='btn btn-danger' onClick={this.deletedata}><i className="fa fa-trash-o mx-1" aria-hidden="true"></i>Delete</button> */}


                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>

                {Object.keys(this.props.singleProduct).length > 0 && (<>
                    <h2 className="u2" id='editsection'>Edit product data</h2>
              
                    <form action="" className='container' onSubmit={this.updateproduct} style={{ width: "350px", backgroundColor: "orange" }} >
                    <div>
                        <label className='form-lable fs-5' htmlFor="">Enter product ProductName:</label>
                        <input type="text" name='ProductName' className='form-control' onChange={(e)=>this.inputhandchange(e)} value={ProductName} />
                    </div>

                    <div>
                        <label className='form-lable fs-5' htmlFor="">Enter product weight:</label>
                        <input type="text" name='ProductWeight' className='form-control' onChange={(e)=>this.inputhandchange(e)} value={ProductWeight} />
                    </div>

                    <div>
                        <label className='form-lable fs-5' htmlFor="">Enter ProductType:</label>
                        <input type="text" name='ProductType' className='form-control' onChange={(e)=>this.inputhandchange(e)} value={ProductType} />
                    </div>

                    <div>
                        <label className='form-lable fs-5' htmlFor="">Enter product price:</label>
                        <input type="text" name='ProdctPrice' className='form-control' onChange={(e)=>this.inputhandchange(e)} value={ProdctPrice} />
                    </div>
            <div>
                        <label className='form-lable fs-5' htmlFor="">Enter your MobileNumber:</label>
                        <input type="text" name='MobileNumber' className='form-control' onChange={(e)=>this.inputhandchange(e)} value={MobileNumber} />
                    </div>
                    <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                </form>
                </>)}

                <Link className='btn btn-primary  my-4 mx-1' to="/addproduct">Add your old product</Link>
                <Outlet />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allproduct: state.productStore.allproduct ,
    singleProduct:state.productStore.product

})

const mapDispatchToprops = (dispatch) => ({
    initProductRequest: () => dispatch(
        productActions.getAllProduct() 
  
    ),

    deleteProductRequest: (id) => dispatch(
        productActions.deleteAllProduct(id) 
  
    ),
    getSingleProductRequest:(id)=> dispatch(
        productActions.getsingleProduct(id)
    ),
    updateProductRequest: (id) =>dispatch(
        productActions.updateAllProduct(id)
    )
})

// var mapDispatchToprops = (dispatch) => ({
//     deleteProductRequest: (id) => dispatch(
//         productActions.getAllProduct(id)
//     )
// })



export default connect(mapStateToProps, mapDispatchToprops)(Productdetail)






// import React, { Component } from 'react'
// import { Table } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import img1 from '../Assets/Images/Emi.webp'
// import { createStructuredSelector } from 'reselect'
// import { connect } from 'react-redux'

// import { getAllProducts } from '../selectors/ProductSelectors'

// import * as productAction from '../action/ProductAction'


// export class DashBoard extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             products: [],
//             pId: "",
//             pName: "",
//             pType: "",
//             pPrice: "",
//             id:""

//         }
//     }
//     componentDidUpdate(prevProps) {

//         // if (prevProps.allProducts !== this.props.allProducts) {
//         //     // Fetch data when allProducts prop changes
//         //     this.props.initProductRequest();
//         // }

//         if (prevProps.singleProduct !== this.props.singleProduct) {
//             // Fetch data when allProducts prop changes
//             // this.props.initProductRequest();
//             // console.log(this.props.singleProduct)
//             const { id, pId, pName, pPrice, pType } = this.props.singleProduct;
//             this.setState({
//                id, pId, pName, pPrice, pType
//             },() => console.log(this.state))
//         }
//     }
//     componentDidMount() {
//         // this.fetchData()
//         this.props.initProductRequest()
//         console.log(this.props.singleProduct)
//     }

//     deleteItem = (id, pName) => {

//         if (window.confirm(`Are you sure? you want to remove product:${pName} `)) {
//             this.props.deleteProductRequest(id);
//             window.alert("Product Deleted successfully")
//         }


//     }
//     //Edit operation
//     getRecord = (id) => {
//         // window.alert(id)
//         this.props.getSingleProductRequest(id)
//         // let url = `${"http://localhost:8888/employee"}/${id}`;
//         // axios.get(url).then((res) => {
//         //     //    console.log(res.data);

//         // })

//     }
//     ValueChange = (e) => {
//         const { name, value } = e.target;
//         this.setState({ [name]: value },() => console.log(this.state));

//     }

//     updateEmp = (e) => {
//         e.preventDefault();
//         const {id,  pId, pName, pPrice, pType } = this.state;
//         const updatedProduct = {
//           id: id,
//           pId: pId,
//           pName:pName,
//           pPrice:pPrice,
//           pType: pType
//         };
        
//         this.props.updateProductRequest(updatedProduct)
//     }



//     render() {
//         const { id, pId, pName, pPrice, pType } = this.state
//         // 

//         console.log(this.props.allProducts)

//         // const { products } = this.state

//         let total = 0
//         for (let i of this.props.allProducts) {
//             total += i.pPrice
//         }
//         console.log("total:", total);

//         return (

//             <div>


//                 {/* <div className='float:end'>
//                 <Link to="/add" className='btn btn-primary mb-2'>
//                 <i class="fa fa-plus" aria-hidden="true"></i>Add
//                   </Link>
//                 </div>
//                */}
//                 <img src={img1} alt='emi' height={300} width={'100%'} />
//                 <Table striped bordered hover variant="dark">

//                     <thead>
//                         <tr>
//                             <th>PRODUCT-ID</th>
//                             <th>PRODUCT-NAME</th>
//                             <th>PRODUCT-TYPE</th>
//                             <th>PRODUCT-PRICE</th>
//                             <th>ACTION</th>
//                         </tr>

//                     </thead>
//                     <tbody>
//                         {
//                             this.props.allProducts.map((PRO, index) => {
//                                 return <tr key={index}>
//                                     <td>{PRO.pId}</td>
//                                     <td>{PRO.pName}</td>
//                                     <td>{PRO.pType}</td>
//                                     <td>{PRO.pPrice}</td>
//                                     <td>
//                                         <button type='button' className='btn btn-outline-success btn-sm' onClick={() => this.getRecord(PRO.id)} >
//                                             <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>|

//                                         <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => this.deleteItem(PRO.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>

//                                     </td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
//                 </Table>
//                 <Table style={{ backgroundColor: "black", height: "80px", color: "White", fontSize: 20 }}>

//                     <tr>
//                         <td className='float-end'><strong className='text-white'>Total Amount:</strong>{total}₹</td>

//                     </tr>
//                     <Link to='/order' className='btn btn-warning'>Place Order</Link>
//                 </Table>
//                 {Object.keys(this.props.singleProduct).length > 0 && (<>
//                     <h2 id="editsection">Edit product data</h2>
//                     <form style={{ backgroundColor: "white" }} onSubmit={this.updateEmp}>
//                     <label className='form-label'>Enter PID</label>
//                         <input type='text' name='id' value={id} onChange={(e) => this.ValueChange(e)} className='form-control  text-center'></input>

//                         <label className='form-label'>Enter PID</label>
//                         <input type='text' name='pId' value={pId} onChange={(e) => this.ValueChange(e)} className='form-control  text-center'></input>

//                         <label className='form-label'>Enter P-NAME</label>
//                         <input type='text' name='pName' value={pName} onChange={(e) => this.ValueChange(e)} className='form-control text-center'></input>

//                         <label className='form-label'>Enter P-PRICE</label>
//                         <input type='text' name='pPrice' value={pPrice} onChange={(e) => this.ValueChange(e)} className='form-control text-center' />

//                         <label className='form-label'>Select Product type </label><br></br>
//                         <input type="radio" name="pType" id="r1" onChange={(e) => this.ValueChange(e)} value="Male" checked={this.state.pType === "Male"} />Male
//                         <input type="radio" name="pType" id="r1" onChange={(e) => this.ValueChange(e)} value="Female"
//                         checked={this.state.pType === "Female"} />Female <br></br>
//                         <input type="radio" name="pType" id="r1" onChange={(e) => this.ValueChange(e)} value="Unisex"
//                         checked={this.state.pType === "Unisex"} />Unisex <br></br>

//                         <button type='submit' className='btn btn-danger'>Edit</button>
//                     </form>
//                 </>)}


//             </div>

//         )

//     }

// }
// // const mapStateToProps = createStructuredSelector({
// //     allProducts: getAllProducts

// // })
// const mapStateToProps = (state) => ({
//     allProducts: state.productStore.allProducts,
//     singleProduct: state.productStore.product

// })
// const mapDispatchToProps = (dispatch) => ({
//     initProductRequest: () => dispatch(productAction.getAllproducts()),
//     deleteProductRequest: (id) => dispatch(productAction.deleteProduct(id)),
//     getSingleProductRequest: (id) => dispatch(productAction.getSingleProduct(id)),
//     updateProductRequest: (id) => dispatch(productAction.updateProduct(id))

// })
// export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)

