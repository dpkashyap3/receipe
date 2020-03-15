import React,{useState,useEffect} from 'react'
import axios from "axios"
import Grid from "./Grid"
function Main() {
    
    const [receipe, setreceipe] = useState([])
    const [search, setsearch] = useState('')
    const [query, setquery] = useState('indian')
    const APP_ID="0c00bfcb"
    const APP_KEY="c6815bb882443e29124c912b038a1e52" 
    
    const getdata=(e)=>{
        e.preventDefault();
        setsearch(e.target.value)
    }
   
    const searchfire=(e)=>{
        e.preventDefault();
        setquery(search)
    }



    useEffect(() => {
      axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response=>{
        setreceipe(response.data.hits)
      })
      .catch(error=>{
        console.log(error)
      })
    }, [query])


    return (
        <div>
       
        <div className="container">
        <h1 className="display-2 text-white ">The Top Food Receipes</h1>
        <hr/>
        <div className="row">
        <div className="col col-lg-4 col-md-6 col-sm-12">
        <input className="form-control form-control-lg" type="text" onChange={getdata} placeholder="Search By Ingredient"/>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12">
        <button className="btn btn-lg btn-warning" onClick={searchfire}>Go....</button>
        </div>
        </div>
        </div>
        <Grid receipe={receipe}/>
        </div>
    )
}

export default Main
