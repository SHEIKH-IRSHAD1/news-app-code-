import React, { } from 'react'
// import React from 'react';
import {
   Link 
} from 'react-router-dom';
const navbar =(props)=> {

const handle=(event)=>{
  props.setcountry("in");
}






    // const [first, setfirst] = useState('')
    // const handle=(event)=>{
    //  this. setfirst(event.target.value);
  
    // }
    // console.log(first)
    


    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark text-light">
          <div className="container-fluid text-light">
 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                </li>
               
                <li>

                     <Link className="nav-link text-light" to="/entertainment">entertainment</Link></li>
  
                <li> <Link className="nav-link text-light"  to="/health">health</Link></li>
                <li> <Link className="nav-link text-light"  to="/science">science</Link></li>
                <li> <Link className="nav-link text-light"  to="/sports">sports</Link></li>
                <li> <Link className="nav-link text-light"  to="/technology">technology</Link></li>
                <li> <Link className="nav-link text-light"  to="/business">business</Link></li>
               
              </ul>

            </div>
            <select >
                  <option value="in" onClick={handle} >India</option>
                  <option value="us" onClick={handle}>United States</option>
                   {/* <option value="pk" onClick={this.handle}>Pakistan</option>  */}

            </select>
          </div>
        </nav>
      </div>
    )
  
}

export default navbar
