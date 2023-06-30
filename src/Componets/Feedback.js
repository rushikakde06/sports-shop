import React, { Component } from 'react'
import '../Componets/Sportapp.css'
import axios from 'axios';
import constdata from '../Shared/consdata';

class Feedback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feedbacks: [],
            yourName: "",
            review: ""

        }
    }
    componentDidMount() {
        this.fetData();
    }

    fetData = () => {
        axios.get("http://localhost:8888/feedback").then((res) => {
            console.log(res)
            this.setState({ feedbacks: res.data })

        })
    }

    changeinputfeeback = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    }
    Feedbackdata = (event) => {
        event.preventDefault();
     let newFeedback = {
            yourName:this.state.yourName,
            review:this.state.review
        }
        axios.post("http://localhost:8888/feedback",newFeedback).then(() => {
            window.alert("Review added succesfuly");
            this.fetData();
            
        })  
    }
    deleteRecord = (id) => {
        if (window.confirm(`Are you sure to delete Recore daata :${id}`)) {

            let url = `${"http://localhost:8888/feedback"}/${id}`
            axios.delete(url).then(() => {
                window.alert("Record delete succesfully");
                this.fetData()
            })

        }
    }
    
    render() {
        const { feedbacks, yourName, review } = this.state;
        return (
            <>
                <h2 className='u2'>Plz add your feedback </h2>

                <div className="feedbackform">

                    <div className='container ufeedback' style={{ width: "350px" }}>

                        <form onSubmit={this.Feedbackdata}>
                            <div className="mb-3 ">
                                <label for="exampleFormControlInput1" className="form-label">Enter your name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" name='yourName' value={yourName}  onChange={this.changeinputfeeback}  />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Write your review</label>
                                <textarea className="form-control" type="text" id="exampleFormControlTextarea1" rows="3" placeholder='review'   name='review' value={review} onChange={this.changeinputfeeback} ></textarea>

                                <button type='submit' className='btn btn-primary my-3'>Submit review</button>
                            </div>
                        </form>

                    </div>
                </div>

                {
                
                    <dl className='dl'>
                        {
                            feedbacks.map((data,index)=>{
                                return <dt key={index} className='  dt' style={{textAlign:"center"}}>{data.yourName}
                                <dl className='bdel1'>{data.review}
                                <button type='button' className='bdel' onClick={() => this.deleteRecord(data.id)} ><img className='del'  src={constdata.del} alt="del" /></button>
                                
                                </dl>
                                < hr />
                                </dt>
                            })
                        }
                    </dl>
                }
            </>
        )
    }
}

export default Feedback
