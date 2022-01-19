import React from "react";

export default function Service(){

    let services = [{ 
        name:"Medical Equipments",
        image:"1.jpg",
        data:"we Supply high quality medical devices on rental basis."
    },{ 
        name:"Construction Equipment",
        image:"2.jpg",
        data:"constructions machinary are availalable we are ready to supply the machinery based on needs"
    },{ 
        name:"photograpic devices",
        image:"3.jpg",
        data:"high quality camera service are available"
    },{ 
        name:"Hardwares items",
        image:"4.jpg",
        data:"we supply hardwares for variable works"
    }]
    return(
        <>
        <div className="row" id="service">
      {
          services.map((obj)=>{
              return <div class="card w-75 mt-5 bg-light">
              <div class="card-body">
                <h5 class="card-title">{obj.name}</h5>
                <p class="card-text">{obj.data}</p>
              
              </div>
            </div>
          })
      }
            
        </div>
        </>
    )
}