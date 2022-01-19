import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";



export default function Contact(){
  const Navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
          name: '',
          email:"",
          queries:""
        },
        onSubmit: values => {
           alert("submitted sucessfully")
           Navigate("/")
        },
      });
    return(
        <>
                <div className="row">
        
            <div className="col-sm-4 mt-3 bg-light">
            <address>
CEO KATHIR.<br/> 
Visit us at:<br/>
IONIX EQUIPMENT,<br/>
Box 564, Marthandam<br/>
Nagercoil.<br/>
ph:8189970957.
</address>
            </div>
            <div className="col-sm-4">
                <h3>If any Queries drop your message here...</h3>
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
        
        <textarea id="queries" 
        name="queries" 
        rows="4" 
        cols="50"
        required
        placeholder="Enter your message here"
        onChange={formik.handleChange}
        value={formik.values.queries}>
          
 
       </textarea>
 
       <button className="btn btn-primary" type="submit">Submit</button>
     </form>
               
            </div>
            <div className="col-sm-4"></div>
           
        </div>
        </>
    )
}