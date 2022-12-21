import React from 'react'
import { useState } from 'react'

export const Bouton = () => {
    const [etat, setEtat] = useState(false)
    const [buttonText, setButtonText] = useState("Envoyer")
    const changeText = (text) =>setButtonText(text);
    const handleChange = (e) => {
        // eslint-disable-next-line no-undef
        setFile(e.target.files[0])
      }
      function change(){
        setEtat(true)
      }
    // const {text} = this.state
    return (
        <button  onClick={change} type="submit" onChange={handleChange}  
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {etat?<p>Chargement...</p>:<p>Envoyer</p>}
        </button>
    );
};