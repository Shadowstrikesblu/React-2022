import React, { useState } from 'react'
import ItemSkill from '../../components/Job/itemskill'
export let exportdata 
// import { FormData } from './listJob';


export default function Tree({ datas }) {
  const { data } = datas;
  exportdata = data;
  console.log('data', data);
  // const [locations, setLocations] = useState(data.location || undefined);
  const [skills, setSkills] = useState(data.skills);
  const [inputSkill, setInputSkill] = useState('');
  const [workExperiences, setWorkExperiences] = useState(data.workExperience);
  const [inputExperience, setInputExperience] = useState('');
  const onRemoveSkill = (e) => {
    const newArray = skills.filter((ele) => ele.name !== e.currentTarget.dataset.remove);
    setSkills(newArray);
  }
  const onRemoveExperience = (e) => {
    e.preventDefault();
    // useEffect(()=>{secondappel();},[])
    const newArray = workExperiences.filter((ele) => ele.jobTitle !== e.currentTarget.dataset.remove);
    setWorkExperiences(newArray);
    
  }

  return (
    <div className="flex flex-col text-gray-700">
      <div className="flex justify-between items-center p-2 bg-white shadow-sm rounded-md">
        <div className="h-12 w-12 rounded-full bg-transparent">
          <svg className='h-full w-full' viewBox="0 0 256 256">
            <path d="M128 32a96 96 0 0 0-64.2 167.4A72 72 0 0 1 128 160a40 40 0 1 1 40-40a40 40 0 0 1-40 40a72 72 0 0 1 64.2 39.4A96 96 0 0 0 128 32z" opacity=".2" fill="currentColor"></path><path d="M232 128a104 104 0 1 0-174.2 76.7l1.3 1.2a104 104 0 0 0 137.8 0l1.3-1.2A103.7 103.7 0 0 0 232 128zm-192 0a88 88 0 1 1 153.8 58.4a79.2 79.2 0 0 0-36.1-28.7a48 48 0 1 0-59.4 0a79.2 79.2 0 0 0-36.1 28.7A87.6 87.6 0 0 1 40 128zm56-8a32 32 0 1 1 32 32a32.1 32.1 0 0 1-32-32zm-21.9 77.5a64 64 0 0 1 107.8 0a87.8 87.8 0 0 1-107.8 0z" fill="currentColor">
            </path>
          </svg>
        </div>
        <div className="flex-1 px-2">
          <span className="text-base">Bonjour</span>
          <h4 className="text-lg font-bold capitalize">{data.name.raw}</h4>
        </div>
      </div>

      <div className=" mt-4 p-2 bg-white shadow-sm rounded-md">
        <div className="flex items-center">
          <div className="flex items-center ">
            <svg className='h-6 w-6' viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z" fill="currentColor"></path></svg>
            <span className="font-semibold">Lieux de travail</span>
          </div>
        </div>
      </div>

      <div className=" mt-4 p-2 bg-white shadow-sm rounded-md">
        <div className="flex items-center">
          <div className="flex items-center ">
            <svg className='h-6 w-6' viewBox="0 0 24 24"><path opacity=".3" d="M4 8h16v11H4z" fill="currentColor"></path><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" fill="currentColor">
            </path>
            </svg>
            <span className="font-semibold">Vos métiers</span>
          </div>
          <div className="ml-2">
            <span className="ml-auto p-2 h-5 w-5 bg-red-700 text-white text-xs flex justify-center items-center rounded-full">
              {data.workExperience && data.workExperience.length > 0 ? data.workExperience.length : 0}
            </span>
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          {workExperiences && workExperiences.length > 0
            ? workExperiences.map((work, index) => {
              if (work.jobTitle !== "") {
                return <button onClick={onRemoveExperience} data-remove={work.jobTitle} className="flex items-center mb-2 w-full overflow-hidden" key={index}>
                  <svg className='h-6 w-6 pr-2' viewBox="0 0 24 24"><path d="M8 18h3v-3H2v-2h20v2h-9v3h3l-4 4l-4-4m4-16L8 6h3v3H2v2h20V9h-9V6h3l-4-4z" fill="currentColor"></path></svg>
                  <span className='px-2 py-3 inline-block w-full p-2 border-2 rounded-md'>{work.jobTitle}</span>
                  <svg className='h-6 w-6 ml-1' viewBox="0 0 24 24"><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8z" fill="currentColor"></path></svg>
                </button>
              }
            }) : null}
        </div>
        <div className="mt-2">
          <form
            className="flex flex-wrap"
            onSubmit={(e) => {
              e.preventDefault()
              setWorkExperiences([...workExperiences, { jobTitle: inputExperience }])
              setInputExperience("")
            }}>
            <input
              id="metier"
              className="p-2 font-light w-full border"
              placeholder="saisir un métier"
              name="jobTitle"
              value={inputExperience}
              onChange={(e) => { setInputExperience(e.target.value) }}
            />
          </form>
        </div>
      </div>

      <div className=" mt-4 p-2 bg-white shadow-sm rounded-md">
        <div className="flex items-center">
          <div className="flex items-center ">
            <svg className='h-6 w-6' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z">
              </path>
            </svg>
            <span className="font-semibold">Vos compétences</span>
          </div>
          <div className="ml-2">
            <span className="ml-auto p-2 h-5 w-5 bg-red-700 text-white text-xs flex justify-center items-center rounded-full">
              {skills && skills.length > 0 ? skills.length : 0}
            </span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap">
          {skills && skills.length > 0
            ? skills.map((skill, index) => {
              if (skill.name !== "") {
                return <ItemSkill key={index} label={skill.name} onPress={onRemoveSkill} />
              }
            }) : null}
        </div>
        <div className="mt-2">
          <form onSubmit={(e) => {
            e.preventDefault();
            // setSkills([...skills, { name: e.target.elements.skill.value }]);
            setSkills([...skills, { name: inputSkill }]);
            setInputSkill("");
          }} className="flex flex-wrap">
            <input
              id="competences"
              className="p-2 font-light w-full border"
              placeholder="ajouter une competence"
              name='skill'
              value={inputSkill}
              onChange={(e) => { setInputSkill(e.target.value) }}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
