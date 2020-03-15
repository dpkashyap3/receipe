import React,{useState,useEffect} from 'react'
import Modal from "react-modal"
import "./Details.css"

function ModalView({data,setismodal,ismodal}) {

 
    return (
        <div>
        <Modal isOpen={ismodal} ariaHideApp={false} className="Modal" overlayClassName="Overlay">
        <button onClick={()=>setismodal(false)} className="bg-transparent display-4 noborder text-dark mr-auto">X</button>
        <div className="container">
        <div className="row">
        <div className="col">
            <span className="display-4">{data.label}</span><br/><br/>
            <h2>Calories:{Math.ceil(data.calories)} kcal</h2>
            
            
            <div>
            <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Calories:{Math.ceil(data.calories)}kcal</th>
              </tr>
              <tr>
                <th scope="col">Weight:{Math.ceil(data.totalWeight)}gr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{data.totalNutrients.FAT.label}</th>
                <td>{data.totalNutrients.FAT.quantity}{data.totalNutrients.FAT.unit}</td>
                <td>{data.totalNutrients.FASAT.label}  {data.totalNutrients.FASAT.quantity}{data.totalNutrients.FASAT.unit} </td>
                <td>{data.totalNutrients.FAMS.label}  {data.totalNutrients.FAMS.quantity}{data.totalNutrients.FAMS.unit} </td>
                <td>{data.totalNutrients.FAPU.label}  {data.totalNutrients.FAPU.quantity}{data.totalNutrients.FAPU.unit} </td>
                <td>{data.totalNutrients.FATRN.label}  {data.totalNutrients.FATRN.quantity}{data.totalNutrients.FATRN.unit} </td>
              </tr>
              <tr>
                <th scope="row">{data.totalNutrients.CHOCDF.label}</th>
                <td>{data.totalNutrients.CHOCDF.quantity}{data.totalNutrients.CHOCDF.unit}</td>
                <td>{data.totalNutrients.SUGAR.label}  {data.totalNutrients.SUGAR.quantity}{data.totalNutrients.SUGAR.unit} </td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.PROCNT.label}</th>
              <td>{data.totalNutrients.PROCNT.quantity}{data.totalNutrients.PROCNT.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.CHOLE.label}</th>
              <td>{data.totalNutrients.CHOLE.quantity}{data.totalNutrients.CHOLE.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.NA.label}</th>
              <td>{data.totalNutrients.NA.quantity}{data.totalNutrients.NA.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.CA.label}</th>
              <td>{data.totalNutrients.CA.quantity}{data.totalNutrients.CA.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.MG.label}</th>
              <td>{data.totalNutrients.MG.quantity}{data.totalNutrients.MG.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.K.label}</th>
              <td>{data.totalNutrients.K.quantity}{data.totalNutrients.K.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.FE.label}</th>
              <td>{data.totalNutrients.FE.quantity}{data.totalNutrients.FE.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.ZN.label}</th>
              <td>{data.totalNutrients.ZN.quantity}{data.totalNutrients.ZN.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.P.label}</th>
              <td>{data.totalNutrients.P.quantity}{data.totalNutrients.P.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.VITA_RAE.label}</th>
              <td>{data.totalNutrients.VITA_RAE.quantity}{data.totalNutrients.VITA_RAE.unit}</td>
              </tr>
              <tr>
              <th scope="row">{data.totalNutrients.THIA.label}</th>
              <td>{data.totalNutrients.THIA.quantity}{data.totalNutrients.THIA.unit}</td>
              </tr>
            </tbody>
          </table>
            </div>
            

        </div>
        </div>
        </div>  
        </Modal>
        </div>
    )
}

export default ModalView
