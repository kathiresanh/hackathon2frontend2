import React from "react";
import { useFormik } from 'formik';
import { Navigate, useNavigate } from "react-router-dom";

export default function Login(){
  
   const Navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
          email:"",
          password:"",
            },
        onSubmit: async values => {
          try {
            await fetch("https://hackathon2-backend-equipment.herokuapp.com/login",{
                method :"POST",
                body : await JSON.stringify(values),
                headers:{
                    "Content-type": "application/json"
                }
            })
           Navigate("/product")
        } catch (error) {
            console.log(error)
        }
        },
      });
    return(
        <>
          <div className="row bg-warning" id="login">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 mt-5 bg-secondary">
         
                <h3>Login Here</h3>
            <form onSubmit={formik.handleSubmit}>
            
   
       <label htmlFor="email">Email Address</label>
       <input
         className="form-control form-control"
         id="email"
         name="email"
         type="email"
         placeholder="Email"
         onChange={formik.handleChange}
         value={formik.values.email}
         required
       /><br></br>
       <label htmlFor="email">Password</label>
       <input
         className="form-control form-control"
         id="password"
         name="password"
         type="password"
         placeholder="Password"
         onChange={formik.handleChange}
         value={formik.values.number}
         required
       /><br></br>
       
       <br></br>
 
       <button className="btn btn-primary" type="submit">Submit</button>
     </form>
    <br>
    </br>
    <br></br>
    <br></br>
                
            
            <div className="col-sm-4"></div>
          </div>
          </div>
   
           </>
    )
}