import React,{useState} from 'react'
import Modal from "./Modal"
import "./Details.css"


function Details(props) {
    const [ismodal, setismodal] = useState(false)
    const [item, setitem] = useState()
    return (
       
        <div className="container">
        <div className="card cardContainer text-center mt-5">
        <div className="card-header">
        <h1 className="display-2">{props.location.info.data.label.toUpperCase()}</h1>
        <img className="cardImage" src={props.location.info.data.image} alt={props.location.info.data.label.toUpperCase()}/>
        </div>
        <div className="card-body">
        <h5 className="card-title display-4">....Ingredients....</h5>
        <hr/>
        <p className="card-text">

        <table className="table table-striped table-dark"> 
                <thead>
                <tr>
                <th scope="col">Weight</th>
                <th scope="col">Description</th>
                </tr>
                </thead>
                {
                    
                 props.location.info.data.ingredients.map((item,id)=>(
                <tbody key={id}>
                  <tr>
                    <td>{item.weight}</td>                    
                    <td>{item.text}</td>
                  </tr>
                </tbody>
              

            ))}
       </table>
        </p>
      
        <a href={props.location.info.data.url} class="btn btn-primary btn-lg mt-5 mr-5">Go To Original</a>
        <button onClick={()=>setismodal(true)} className="btn btn-primary btn-lg mt-5" >View Calories Breakdown</button>
        <Modal data={props.location.info.data} ismodal={ismodal} setismodal={setismodal} />
        </div>
      
        </div>
        </div>
    
       
)
                 
}

export default Details