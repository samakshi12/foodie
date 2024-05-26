import React from 'react'
import Img1 from '../images/food1.jpg';
export default function Content() {
  return (
    <div>
    <div className="card mt-3"  style={{"width": "18rem", "maxHeight":"360px"}}>
    <img src={Img1} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Food Name</h5>
      <p className="card-text">Description</p>
      <div className='container w-100'>
      <select className='m-2 h-100  bg-success'>
       {Array.from(Array(10), (e,i)=> {
        return(
            <option key={(i+1)} value={(i+1)}> {i+1} </option>
        )
       })}
      </select>
     
     <select className='m-2 h-100  bg-success'>
       <option value="half">Half</option>
       <option value="full">Full</option>
      </select>
    
      <div className='d-inline h-100'>
        Total price
      </div>
     

      </div>

      
      <div>
      <button type="button" className="btn btn-outline-success m-2 h-100 d-inline ">Add to cart</button>

      </div>
   
    </div>
  </div>
  </div>
  )
}
