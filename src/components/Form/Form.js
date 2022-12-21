import React, { useState } from "react";
<<<<<<< HEAD
=======
import "./Form.css"
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
import { Bouton } from "../Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

<<<<<<< HEAD
export default function Form(){
  let navigate = useNavigate()
  const lien = <a href={'cgu'}>Consulter les en cliquant ici</a>
  const [file, setFile] = useState(null)
  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  const displaySubmit = () =>{
    setisCheck(true);
=======

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
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
    if(isCheck === true){
      setisCheck(false)
    }
    console.log(isCheck)
  }
<<<<<<< HEAD
  const uploadFile = (e)=>{
    e.preventDefault();
    console.log("Upload")
    const API = 'https://api.affinda.com/v2/resumes/';

  const formData = new FormData()
  formData.append('file', file)
  console.log(formData, file)
  axios
    .post(API, formData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + '9faddb3eccc40868ef6495b01185bcc4685b1e16',

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
        // setLoading(false)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  
  

  }
  const [isCheck, setisCheck]= useState(false)
  return(
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex justify-center items-center">
      <form
        encType="multipart/form-data"
        onSubmit={uploadFile}
        className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full p-8 md:py-8 mt-8 md:mt-0 border rounded-lg"
      >
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Deposer votre CVss</h2>
        <p className="leading-relaxed mb-3 text-gray-600">De préférence un cv format PDF</p>
        <input className="mt-4 mb-4" type="file" onChange={handleChange} />
        {isCheck && <Bouton/>}
        <input type="checkbox"   onClick={()=>{displaySubmit()}}></input>
        <p>En cliquant sur cette case vous acceptez les conditions d'utilisation.<br></br><u style={{color:'blue'}}>{lien}</u></p>
      </form>
    </div>
  </section>
  )

}

=======

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
>>>>>>> 1f4e813939b4fbbefa24f5baa9b4ae2fa7ca758b
