import axios from 'axios'
import React, { useState } from 'react'

const Feedbackadd = () => {
   const  [reviews, setreviews] =useState({
    yourName:"",
    review:""
   })

   const changeinputfeeback =(event)=>{
     setreviews({...reviews,[event.target.name]: event.target.value})
   }
const Feedbackdata =(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8888/feedback",reviews).then(()=>{
        window.alert("review added succesfully")
    })
}

     const {yourName, review}=reviews
  return (
    <>
       <div className="feedbackform">

<div className='container ufeedback' style={{ width: "350px" }}>

    <form onSubmit={Feedbackdata}>
        <div className="mb-3 ">
            <label for="exampleFormControlInput1" className="form-label">Enter your name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" name='yourName' value={yourName}  onChange={(event)=>changeinputfeeback(event)}  />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Write your review</label>
            <textarea className="form-control" type="text" id="exampleFormControlTextarea1" rows="3" placeholder='review'   name='review' value={review} onChange={(event)=>changeinputfeeback(event)} ></textarea>

            <button type='submit' className='btn btn-primary my-3'>Submit review</button>
        </div>
    </form>

</div>
</div>
    </>
  )
}

export default Feedbackadd
