// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Form({state,setState}) {
    let [title,setTitle] =useState("")
    let [content,setContent] =useState("")
  
   const handleSubmit=(event)=>{
    event.preventDefault()
    const obj ={title,content}

    setState([...state,obj])

    setContent("")
    setTitle("")
  

   }



    
  return (
    <div>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Content</label>
    <input type="text" className="form-control" value={content} onChange={(e)=>setContent(e.target.value)} />
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>

    </div>
  )
}

export default Form