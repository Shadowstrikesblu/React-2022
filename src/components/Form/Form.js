import React, { useState } from "react";
import "./Form.css"
import { Bouton } from "../Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Form(){
  const [file,setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isCheck, setisCheck] = useState(false)

  const {AffindaCredential, AffindaAPI} = require("@affinda/affinda");
  const fs = require("fs");
  const credential = new AffindaCredential(process.env.APP_KEY)
  const client = new AffindaAPI(credential)
  const readStream = fs.createReadStream(file);

  // const link = 'http://192.168.56.1:3000/api/affindas' 
  // let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    client.createInvoice({file: readStream}).then((result) => {
      console.log("Returned data:");
      console.dir(result)
  }).catch((err) => {
      console.log("An error occurred:");
      console.error(err);
  });
  }


  const displaySubmit = () =>{
    setisCheck(true); 
    if(isCheck === true){
      setisCheck(false)
    }
    console.log(isCheck)
  }

  const handleChange = (e) =>{
    setFile(e.target.files[0])
    // console.log(file)
  }
  return(
    <form encType="multipart/form-data" className="Form" onSubmit={handleSubmit} >
            <h2>Deposer votre CV</h2>
            <p>De préférence un cv format PDF</p>
            <input className="mt-4 mb-4" type="file" onChange={handleChange}/>
            {isCheck &&<Bouton/>}
            <input type="checkbox" onClick={()=>displaySubmit()}></input>
            <p>En cliquant sur cette case vous acceptez les conditions d'utilisation.<br></br><u style={{color:'blue'}}></u></p>
    </form>
  )
}
