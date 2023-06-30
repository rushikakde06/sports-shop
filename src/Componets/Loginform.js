import axios from 'axios';
// import { wind } from 'fontawesome';
import React, { Component } from 'react'
import { withRouter } from '../utils/router';

export class Loginform extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        user:[],
        email:"",
        password:""
         
      }
    }

    changehandle =(e)=>{
       
        const {name,value}=e.target;
        this.setState({ [name]: value });

    }
   
    submitform =()=>{

        axios.get("http://localhost:8888/user").then((res) => {
            const isuser =res.data.some( d => d.email === this.state.email && d.password === this.state.password)

            if(isuser){
                sessionStorage.setItem("isLogin" , "true");
                // window.alert("login successfully")
                // window.alert(JSON.stringify(isuser));
                this.props.router.navigate('/gallery');
            }

            else {
                window.alert("Not correct password")
            }
        
    });
}
    render() {
        const  {email,password}=this.state
        return (
            <div>
               
                <form action=""  className='container' style={{width:"350px" ,backgroundColor:'orange', border:'2px solid red'}}>
                    <label htmlFor="">Enter your name</label> <br />
                   <input type="enail"  name='email'  placeholder='email'  onChange={(e) => this.changehandle(e)} value={email} /> <br />

                   <label htmlFor="">Enter your password</label> <br />
                   <input type="password"  name='password'  placeholder='password' onChange={(e) => this.changehandle(e)}  value={password} />  <br />

                   <button type='button' onClick={this.submitform} className='btn btn-primary my-2'>Submit form</button>

                </form>
            </div>
        )
    }
}

export default withRouter(Loginform) 