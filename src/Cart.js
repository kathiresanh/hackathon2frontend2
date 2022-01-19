import React, { useEffect, useState } from "react";

export default function Cart(){
    const[cart,setcart]=useState([])
    const[total,settotal]= useState(0);
    const[unit,setunit] = useState(1);
  function handlechange(event){
      setunit(event.target.value)
  }

 console.log(cart)
   let handledelete =async (obj)=>{
       
    try{
         await fetch(`https://hackathon2-backend-equipment.herokuapp.com/deleteproduct/${obj._id}`,{
             method:"DELETE"
         })
         let cartitem = await fetch("https://hackathon2-backend-equipment.herokuapp.com/getproduct")
         let items = await cartitem.json();
         setcart(items)
         
        }
         
      catch(error){
          console.log(error)
      }
   }

    useEffect(async()=>{
              try{
                let cartitem = await fetch("https://hackathon2-backend-equipment.herokuapp.com/getproduct")
                let items = await cartitem.json();
                setcart(items)
              }catch(error){
                  console.log(error)
              }
    },[])
    return(
        <>
        {
            cart.map((obj,index)=>{
                return   <div class="card w-75 mt-5 bg-light">
                    <div className="row">
                        <div className="col-lg-10"></div>
<h2 className="col-lg-2 text-center ml-5"><button className="btn bg-danger" onClick={()=>{handledelete(obj)}}>X</button></h2>
                    </div>
                <div class="card-body">
                  <h5 class="card-title ">{obj.name}</h5>
                 <div><p class="card-text">{`${obj.price}$/day`}</p>
                 <span> From date <input type="datetime-local"></input> To date:<input type="datetime-local"></input></span><span>No.units:<input onChange={handlechange} type="number"></input></span><span><a href="https://rzp.io/l/cbGncjAe" target="_blank" className="btn btn-primary">pay</a></span></div> 
                 <div>Total:{obj.price*unit}</div>
               
                </div>
              </div>

                
            })
            
            
        }
    
        </>
    )
}