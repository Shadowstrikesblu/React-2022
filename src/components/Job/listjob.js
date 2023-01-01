import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import ItemJobs from '../Job/itemjob'
import { exportdata } from '../Tree/tree';
import loader from '../../assets/loader.gif'
import ReactPaginate from "react-paginate"
// import { format } from 'prettier';
// import { object } from 'prop-types';


export default function ListJob() {
  const [posts,setPosts]=useState([])
  const [loading,setLoading]=useState(false)
  const [PageNumber, setPageNumber] = useState(0)
  const usersPerPage = 10
  const pageVisited = PageNumber * usersPerPage
  let FormData = "[";

  let tmp;
  useEffect(()=>{appel();},[])
  // const Last = PageNumber * usersPerPage
  // const First = (Last - usersPerPage)
  // console.log("first",First)

  // const currentPosts = posts.slice(First,Last)
  const pageCount = Math.ceil(posts.length / usersPerPage)
  const changePage = ({selected}) =>{
    setPageNumber(selected);
  }

  const displayUsers = posts.slice(pageVisited,pageVisited + usersPerPage).map(
    user=>{
      return(
        <div className="mt-4 py-2 px-1 ">
      {
        <ItemJobs  post={user} />
      }
        </div>
      )
    }
  )
  function appel(){
    setLoading(true)
    axios.get("http://localhost:8090/api/matching/scrapp",{
        header:{"Access-Control-Allow-Origin" :"http://localhost:8090",
                "Content-Type":"application/x-www-form-urlencoded",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
        params: {data: FormData}
      })
      .then(res => {
        setPosts(res.data);
        setLoading(false)
        console.log('post =>',res.data)
      })
  }
  // if(exportdata.location === null){
    // for(let i  = 0;  i<exportdata.workExperience.length;i++){
    //   tmp = "{job:"+ exportdata.workExperience[i].jobTitle + ",location:Paris},";
    //   FormData = FormData.concat(tmp);
    //   // console.log('sdds',exportdata.workExperience[i])
  // }
  // }else{
  //   for(let i  = 0;  i<exportdata.workExperience.length;i++){
  //     // tmp = "{job:"+ exportdata.workExperience[i].jobTitle + ",location:"+exportdata.location.city+"},";
  //     tmp = "{job:dev ops }" + "{location:Paris},";
  //     FormData = FormData.concat(tmp);
  //     // console.log('sdds',exportdata.workExperience[i])
  //   // }
  // }
  // for(let i  = 0;  i<exportdata.workExperience.length;i++){
    // tmp = "{job:"+ exportdata.workExperience[0].jobTitle + ",location:"+exportdata.location.formatted+"},";
    tmp = "{job:"+ exportdata.workExperience[0].jobTitle + ",location:"+exportdata.location.formatted[0]+"},";
    FormData = FormData.concat(tmp);
      console.log("Form",FormData)
      // console.log('sdds',exportdata.workExperience[i])
    // }

  

  FormData = FormData.slice(0,-1)
  FormData = FormData.concat("]")
  FormData = FormData.replace("/"," ")
  // FormData = Array.from(FormData)
  console.log("type : "+ typeof(FormData))
  console.log(FormData)


  return (
    <div className="col-span-2">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Offres de travail disponibles.</div>
        <button  className="flex px-2 py-1 border border-red-500 rounded-lg text-red-500 hover:text-white hover:bg-red-500 transition ease-in-out">
          recharger
        </button>
      </div>

      <div className="mt-4 py-2 px-1 ">
      {/* {
          loading?<img style={{width: '30%',margin:'auto'}} src={loader} alt="loader"/>
        :currentPosts.length > 0 ? currentPosts.map((post,index)=><ItemJobs key={index.toString()} post={post} />):<p></p>
        } */}
        {loading?<img style={{width: '30%',margin:'auto'}} src={loader} alt="loader"/>:<p></p>}
        {displayUsers}
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"PaginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"disabledBttn"}
        activeClassName={"activeBttn"}
        className="relative z-5 inline-flex rounded-md shadow-sm items-stretch  left-80   px-2 py-2 rounded-l-md border space-x-4  border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"/>
      </div>

    </div>
  )
}
