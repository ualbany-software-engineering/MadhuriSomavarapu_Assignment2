import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from './ProfilePic.png'


const Information = () => {
   
   const [name,setName] = useState();
   const [bio,setBio]  = useState();
   return (
    <div>

      <div className='heading'>
         <center><h1 style={{paddingTop:'5px',paddingBottom:'5px',backgroundColor:"rgb(230, 234, 237)"}}>Customer Information</h1></center>
      </div>
     <div className='body'>

      

      <div className='display'>
         <div>
             <img src={Image} alt="No Image"  className="rounded-circle"></img>
         </div>
         <div className='info'>
            <div className='title'>
               <h1>{name}</h1>
            </div>
            <div className='description'>
               <p>{bio}</p> 
            </div>
         </div>
      </div>
   
      
      <hr style={{height:'5px',borderWidth:'0',backgroundColor:'black'}}></hr>

      <div className="form-group">
           <label style={{margin:'4px'}}>Name</label>
           <input type="text" style={{width:"500px"}} className="form-control" id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}></input>
           <label style={{margin:'4px'}}>Biography</label>
           <textarea className="form-control" id="bio" rows="5" placeholder='Tell something about yourself :)' onChange={(e)=>setBio(e.target.value)}></textarea>
      </div>

      <div style={{marginLeft:"20px", marginTop:'5px'}}>
        <Link to='/news'>Get News</Link>
      </div>

     </div>
     </div>

  )
}

export default Information
