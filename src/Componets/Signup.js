import React, { useState } from 'react'
import '../Componets/Sportapp.css'
import axios from 'axios'

function Signup() {
  const [sign ,setsign] = useState({yourName:"", email:"",password:""})
  

const changeinputfeeback =(event)=>{
    setsign({...sign,[event.target.name]:event.target.value})

}

const Signdaata =(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8888/user",sign).then(()=>{
        window.alert("sign up succesfully")
    })

}
  const {yourName,email,password}=sign
  return (
    <>
          <div className=" sign">

<div className='container ufeedback' style={{ width: "350px" ,margin:"auto" }}>

    <form  onSubmit={Signdaata}>
        <div className="mb-3 " >
            <label for="exampleFormControlInput1" className="form-label fs-3">Enter your name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" name='yourName' value={yourName}  onChange={changeinputfeeback} required />

            <label for="exampleFormControlInput1" className="form-label fs-3">Enter your email</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="email" name='email' value={email}  onChange={changeinputfeeback} required />


            <label for="exampleFormControlInput1" className="form-label fs-3">Enter your password</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="password" name='password' value={password}  onChange={changeinputfeeback} required />
        </div>
        <div className="mb-3">
           

            <button type='submit' className='btn btn-primary my-3'>Sign up</button>
        </div>
    </form>

</div>
</div>
    </>
  )
}

export default Signup
