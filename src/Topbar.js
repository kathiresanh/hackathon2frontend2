import React from "react";
import { Link } from "react-router-dom";

export default function Topbar(){
    return(
        <>
      <div className="col-lg-12 bg-dark text-white" id="topbar" >
          <div className="row">
              <div className="col-sm-3 text-center"><h3>IONIX <br></br>Equipments</h3></div>
              <Link to="/" className="col-sm-1 mt-4"><button className="btn btn-dark btn-sm">Home</button></Link>
            <Link to="/product" className="col-sm-1 mt-4"><button className="btn btn-dark btn-sm">Product</button></Link> 
            <Link to="/service" className="col-sm-1 mt-4"><button className="btn btn-dark btn-sm">Services</button></Link>
            <Link to="/contact" className="col-sm-1 mt-4"><button className="btn btn-dark btn-sm">Contact</button></Link>
            <Link to="/cart" className="col-sm-1 mt-4"><button className="btn btn-primary btn-sm">View Cart</button></Link>
            <Link to="/login" className="col-sm-1 mt-4  ml-5"><button className="btn btn-primary btn-sm">Login</button></Link>
            <Link to="/register" className="col-sm-1 mt-4  ml-5"><button className="btn btn-primary btn-sm">Register</button></Link>
          </div>
      </div>


        </>
    )
}