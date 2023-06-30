import axios from 'axios'
import * as constant from './contsant'



// get data
export function getAllProduct(){

    return (dispatch)=>{  
       axios.get("http://localhost:8888/products").then(response => dispatch(getProductsuccess(response.data)))
       .catch(error => dispatch(getProducterror(error.response.data)) )
   
    }
   
   }

export function getProductsuccess(payload){
    return { type: constant.GET_PRODUCT_SUCCESS ,payload}
}

export function getProducterror(payload){
    return { type: constant.GET_PRODUCT_ERROR ,payload}
}

// post data

export function addAllProduct(data){

    return (dispatch)=>{  
       axios.post("http://localhost:8888/products", data).then(response => dispatch(addProductsuccess(data)))
       .catch(error => dispatch(addProducterror(error.response.data)) )
   
    }
   
   }

export function addProductsuccess(payload){
    return { type: constant.ADD_PRODUCT_SUCCESS ,payload}
}

export function addProducterror(payload){
    return { type: constant.ADD_PRODUCT_ERROR ,payload}
}


// update data
export function updateAllProduct(data){

    return (dispatch)=>{  
       axios.put(`http://localhost:8888/products/${data.id}`, data)
       .then(response => dispatch(updateProductsuccess(data)))
       .catch(error => dispatch(updateProducterror(error.response.data)) )
    }
   }
export function updateProductsuccess(payload){
    return { type: constant.UPDATE_PRODUCT_SUCCESS ,payload}
}
export function updateProducterror(payload){
    return { type: constant.UPDATE_PRODUCT_ERROR ,payload}
}
// delete product
export function deleteAllProduct(id){

    return (dispatch)=>{  
       axios.delete(`http://localhost:8888/products/${id}`)
       .then(response => dispatch(deleteProductsuccess(id)))
       .catch(error => dispatch(deleteProducterror(error.response.data)) )
   
    }
   }

export function deleteProductsuccess(payload){
    return { type: constant.DELETE_PRODUCT_SUCCESS ,payload}
}

export function deleteProducterror(payload){
    return { type: constant.DELETE_PRODUCT_ERROR ,payload}
}

// get single product

export function getsingleProduct(id){
    console.log(id)
    return {type: constant.GET_SINGLE_PRODUCT, payload:id}
}

