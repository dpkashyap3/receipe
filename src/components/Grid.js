import React from 'react'
import "./Grid.css"
import {Link} from "react-router-dom"

function Grid({receipe}) {
   
   
    return (
            <div className="container">
          
            <div className="row">
            {
                receipe.map((item,id)=>(
                    <div key={id} className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                    <div className="card mb-5 grid" >
                    <div className="card-body cardbody">       
                    <img className="img-fluid" src={item.recipe.image} height="100%" width="100%" alt={item.recipe.label}/>
                     <h4 className="card-title">{item.recipe.label.toUpperCase()}</h4>
                     <Link to={{
                         pathname:"/details",
                         info:{
                             data:item.recipe
                         }}
                     }>
                     <button className="btn btn-lg btn-warning">Show Information</button>
                     </Link>
                    </div>
                    </div>
                    </div>
                ))
            }
            
           

            </div>
          
            
     </div>
       
    )
}

export default Grid
