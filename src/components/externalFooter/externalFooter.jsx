import React from "react";
import "./externalFooter.module.css";

function ExternalFooter() {
  return (
    <footer className="container">
        <form className='container flex-column' action="">
          <div className="row pt-3">
            <span className="col text-center">Sign Up for Weekly Updates!</span>
          </div>
          <div className="row pt-3">
            <div className='col-2'></div>
            <input className="col-8 p-2 pl-3" type="text" placeholder="email@email.com" />
            <div className='col-2'></div>
          </div>
          <div className="row pt-3">
            <div className='col-3'></div>
            <button className="col-6 p-2" type="button">Subscribe</button>
            <div className='col-3'></div>
          </div>
          <div className="row pt-3">
            <p className="col text-center h-100">Copyright &#169; Divino Ristorante. All Rights Reserved.</p>
          </div>
        </form>
    </footer>
  );
}

export default ExternalFooter;
