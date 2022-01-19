import React  from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";


export default function Register(){
  const Navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          name: '',
          email:"",
          password:"",
          address:""
        },
        onSubmit:async values => {
          try {
            await fetch("https://hackathon2-backend-equipment.herokuapp.com/register",{
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
        <div className="row bg-warning mt-2">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 mt-5">
                <h3>Registration Form</h3>
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Name</label>
       <input
         className="form-control form-control"
         id="name"
         name="name"
         type="text"
         placeholder="Name"
         onChange={formik.handleChange}
         value={formik.values.name}
         required
       /><br></br>
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
       <label htmlFor="email">Residential Address</label>
       <input
         className="form-control form-control"
         id="address"
         name="address"
         type="text"
         placeholder="Address"
         onChange={formik.handleChange}
         value={formik.values.address}
         required
       /><br></br>
 
       <button className="btn btn-primary" type="submit">Submit</button>
     </form>
    <br>
    </br>
    <br></br>
                
            </div>
            <div className="col-lg-3"></div>
        </div>
        </>
    )
}