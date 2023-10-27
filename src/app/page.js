"use client"
// 1. Import Area
import { useEffect, useState } from "react";


// 2. Define Area
function Home() {
  // 2.1 Hooks Area
  let [subjects,setSubject]= useState([{name:"A"},{name:'B'},{name:'C'},{name:'D'}]);
  // useEffect(cbfn,[])
  useEffect(()=>{
    // let URL = process.env.STRAPI_URL
    // console.log('hello'+URL);
    fetch(`http://localhost:1337/api/subjects`, {'Content-Type':'application/json'}).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.data);
      console.log(data.data.map((cv,ind,arr)=>{return {name:cv.attributes.name}}));
      setSubject(data.data.map((cv,ind,arr)=>{return {name:cv.attributes.name}}));
      
    }).catch((err)=>{
      
    }).finally(()=>{

    })
  },[]);

  // 2.2 Defination Area

  // 2.3 Retrun Statment
  return (
    <>
      
      <div className='container mt-5'>
      {/* <h2>OVOSERVE WEB SERVICES PRIVATE LIMITED </h2> */}
        <div className="card text-center" style={{width: '100%'}}>
          <div className='card-header fs-2 fw-bolder'>Welcome To <span className="quiz">QUIZ</span></div>
          <div className='card-body text-start'>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder">Subject</label>
                <select className='form-control'>
                  {
                    subjects.length > 0 && 
                    subjects.map((cv,ind,arr)=>{
                      return <option key={ind}>{cv.name}</option>
                    })
                  }
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label fw-bolder text-success">Subject2</label>
                <select className='form-control'>
                  {
                    subjects.length > 0 && 
                    subjects.map((cv,ind,arr)=>{
                      return <option key={ind}>{cv.name}</option>
                    })
                  }
                </select>
              </div>
            </form>
          </div>
          <div className='card-footer'>
            <button className='btn btn-primary'>Start Quiz</button>
          </div>
        </div>
      </div>
    </>
  )
}
// 3. Export Area
// 3.1 default export
export default Home;
// 3.1 named export
