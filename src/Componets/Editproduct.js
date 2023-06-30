import React, { Component } from 'react'

export class Editproduct extends Component {
  render() {
    return (
      <div>
         <h2 className='u2'>You can edit your product </h2>
      </div>
    )
  }
}

export default Editproduct




// import React, { useEffect, useState } from 'react'
// import '../Componets/Sportapp.css'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';

// const Editproduct = () => {
//   const { id } = useParams;

//   const [product, setproduct] = useState({
//     ProductName: "",
//     ProductWeight: "",
//     ProductType: "" ,
//     ProdctPrice: "",
//     MobileNumber:""
//   })

//   useEffect = (() => {
//     axios.get(`http://localhost:8888/products/${id}`).then((res) => {

//       setproduct(res.data)

//     })

//   }, [])

//    const changeinput =(event)=>{
//     setproduct({...product,[event.target.name]:event.target.value})

//    }

//     const editdata =(event)=>{
//       event.preventDefault();
//       axios.put(`http://localhost:8888/products/${id}`,product).then(()=>{
//         window.alert("product updated")
//       })
//     }


//   const {ProductName,ProductWeight,ProductType,ProdctPrice,MobileNumber}=product
//   return (
//     <div>
//       <h2 className='u2'>You can edit your product </h2>
//       <form action="" className='container' onSubmit={editdata} style={{ width: "350px", backgroundColor: "orange" }} >
//         <div>
//           <label className='form-lable fs-5' htmlFor="">Enter product ProductName:</label>
//           <input type="text" name='ProductName' className='form-control' onChange={changeinput}  value={ProductName} />
//         </div>

//         <div>
//           <label className='form-lable fs-5' htmlFor="">Enter product weight:</label>
//           <input type="text" name='ProductWeight' className='form-control' onChange={changeinput}  value={ProductWeight}/>
//         </div>

//         <div>
//           <label className='form-lable fs-5' htmlFor="">Enter ProductType:</label>
//           <input type="text" name='ProductType' className='form-control' onChange={changeinput}  value={ProductType} />
//         </div>

//         <div>
//           <label className='form-lable fs-5' htmlFor="">Enter product price:</label>
//           <input type="text" name='ProdctPrice' className='form-control' onChange={changeinput}  value={ProdctPrice}/>
//         </div>


//         <div>
//           <label className='form-lable fs-5' htmlFor="">Enter your MobileNumber:</label>
//           <input type="text" name='MobileNumber' className='form-control' onChange={changeinput}  value={MobileNumber}/>
//         </div>
//         <button type='submit' className='btn btn-primary mt-2'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Editproduct
