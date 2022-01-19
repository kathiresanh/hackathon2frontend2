import react from "react"
import { motion } from "framer-motion"


export default function Home(){
    let product =[{
        productname:"Construction Equipment",
        image:"https://media.istockphoto.com/photos/road-construction-machinery-on-the-construction-of-highway-picture-id887465766?k=20&m=887465766&s=612x612&w=0&h=S4S9-I8ortKQmkBQgtNE5JudoeOenpP82p12wgHht78="

    },
    {
      productname:"Medical Equipment",
      image:"https://www.solvay.com/sites/g/files/srpend221/files/styles/header/https/media.solvay.com/medias/domain1446/media691/105853-icsk55gsky.jpg?itok=yUPrgF8p"
    },
    {
      productname:"Studio Items",
      image:"https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFqVzhwSzBua0wuX0FDX1NMMTUwMF8uanBn.jpg"
    },
  {
    productname:"HardWare items",
    image:"https://www.businessinsider.in/thumb/msid-78510823,width-640,resizemode-4/Master.jpg"
  }]
   
    return(
        <div className='col-sm-12 bg-warning mt-2 text-center' id='mainpanel'>
 <div className="col-sm-12 text-center">
        <h3>Best Service, Right Time, Right People</h3>
        <p>we offering the machinery renting, So you no need to worry<br></br>
            about heavy machinery we deliver the highest quality device<br></br>
        </p>
       </div>
       <div>
       <div className="col-sm-12" id="product">
         {
           product.map((obj)=>{
            
             return  <div class="card" id="image" >
               <h5 class="card-title">{obj.productname}</h5>
             <img src={obj.image} class="card-img-top" alt="300*300"/>
             <div class="card-body">
               
               
             </div>
           </div>
           })
         }
  

         </div>


       </div>
        </div>

    )
}