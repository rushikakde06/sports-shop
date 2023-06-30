// import { createSelector } from "reselect";
// import {initialstate as initialProductstate} from '../reducers/Productreducer'


// const selectproducts = state => state.productStore || initialProductstate;

//  export const selectAllProduct = createSelector(

//     selectproducts,
//    (productState) =>{

//     const {allproduct}=productState

//     return allproduct;
//    }
// )

// const selectproducts  = state =>{
//     return state ? state:initialProductstate;
// };

// export const getAllProduct =createSelector(
//     selectproducts,
//     state=>{
//         const {allproduct}= state;
//         // console.log(allproduct)
//         return allproduct;
//     }
   
// );