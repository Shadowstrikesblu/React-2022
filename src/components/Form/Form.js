import React, { useState } from "react";
import "./Form.css"
import { Bouton } from "../Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form(){
  const [file,setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isCheck, setisCheck] = useState(false)
  const link = 'http://192.168.56.1:3000/api/affindas'
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)
    console.log(formData, file)
    axios
      .post(link, formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res) {
          console.log('response', res.data.data)
          navigate('/matching', {
            replace: false,
            state: {
              data: res.data.data,
            },
          })
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
      })
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
