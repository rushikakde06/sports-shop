
import { useState } from 'react'
import '../Componets/Sportapp.css'
import axios from 'axios'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Feedbackadd from './Feedbackadd'
import constdata from '../Shared/consdata'

const Feedback2 = () => {

    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetData()

    }, [])

    const fetData = () => {
        axios.get("http://localhost:8888/feedback").then((res) => {
            setreviews(res.data)
            // console.log(res.data)


        })
    }
const deleteRecord =(id)=>{
    axios.delete(`${"http://localhost:8888/feedback"}/${id}`).then(()=>{
        window.alert("Deleted succesfully")
    })

}


    return (
        <div>
            <h2 className='u2'>Plz add your feedback </h2>
            {/* <Link to="/addfeedback">add data</Link> */}
            <Feedbackadd/>
               <dl className='dl'>
                  {reviews.map((data,index)=>{
                    return <dt key={index} className='  dt' style={{textAlign:"center"}}>{data.yourName}
                    <dl className='bdel1'>{data.review}
                    <button type='button' className='bdel' onClick={(id) => deleteRecord(data.id)} ><img className='del'  src={constdata.del} alt="del" /></button>
                    </dl>
                    < hr />
                    </dt>
                  }
                  )}
               </dl>
        </div>
    )
}

export default Feedback2
