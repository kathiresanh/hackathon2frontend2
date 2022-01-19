import React from "react";


export default function(){

    let handleclick = async(product)=>{
     try{
        await fetch("https://hackathon2-backend-equipment.herokuapp.com/createproduct",{
            method:"POST",
            body : await JSON.stringify(product),
            headers:{
                "Content-type": "application/json"
            }
        })
        alert("product added")
     }catch(error){
         console.log(error)
     }
    }
    let product = [{ 
        name:"MRI SCAN",
        image:"1.jpg",
        price:"100"
    },{ 
        name:"CT SCAN",
        image:"2.jpg",
        price:"100"
    },{ 
        name:"Dialyisis",
        image:"3.jpg",
        price:"50"
    },{ 
        name:"ventilator",
        image:"4.jpg",
        price:"150"
    },{ 
        name:"ECG",
        image:"5.jpg",
        price:"75"
    }]
return(
    <>
      <div className="row bg-warning">
        {
            product.map((obj)=>{
                return <div id="images" className="bg-light">
                    <h4>{obj.name}</h4>
                    <span>{`${obj.price}$/day`}</span>
                     <div><button className="btn btn-primary" onClick={()=>{handleclick(obj)}}>Add to cart</button></div>
                    <img src={`./images/${obj.image}`} id="data"/>
                
                    </div>
                
        
                
            })
        }

      </div>
    </>
)
}