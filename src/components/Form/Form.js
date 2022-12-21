import React, { useState } from "react";
import { Bouton } from "../Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form(){
  let navigate = useNavigate()
  const lien = <a href={'cgu'}>Consulter les en cliquant ici</a>
  const [file, setFile] = useState(null)
  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  const displaySubmit = () =>{
    setisCheck(true);
    if(isCheck === true){
      setisCheck(false)
    }
    console.log(isCheck)
  }
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

