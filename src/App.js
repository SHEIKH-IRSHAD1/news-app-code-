
// import logo from './logo.svg';
import './App.css';
import React, {  useState} from 'react'
import LoadingBar from 'react-top-loading-bar'
// import { PropTypes } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";


const  App =()=> {


const [prog, setprog] = useState(0);
const [cntry, setcntry] = useState("in")

const setprogress=(prog)=>{

setprog(prog)
  // console.log(prog);
}


const setcountry=(cntry)=>{
  
  setcntry(cntry);
  // console.log(cntry);
}
    return (
    <>
    
<Router>
   <NavBar  setcountry={setcountry} />
   <LoadingBar
        color='#f11946'
        progress={ prog}
      
      />
   {/* <h1>{cntry}</h1> */}
  <Switch>
    
   <Route path="/home"><News setprogress={setprogress} key="general"  pageSize={15} country={cntry} category="general"/> </Route>
   <Route exact path="/entertainment"><News setprogress={setprogress} key="entertainment"  pageSize={15} country={cntry} category="entertainment"/> </Route>
   <Route exact path="/sports"> <News setprogress={setprogress} key="sports"  pageSize={15}country={cntry}category="sports"/> </Route>
   <Route exact path="/science"> <News  setprogress={setprogress} key="science" pageSize={15}country={cntry}category="science"/> </Route>
   {/* <Route exact path="/general"> <News key="/general"  pageSize={15}country={cntry}category="general"/> </Route> */}
   <Route exact path="/technology"> <News setprogress={setprogress}  key="technology" pageSize={15}country={cntry}category="technology"/> </Route>
   <Route exact path="/health"> <News setprogress={setprogress}  key="health" pageSize={15}country={cntry}category="health"/> </Route>
   <Route exact path="/business"> <News setprogress={setprogress}  key="business" pageSize={15}country={cntry}category="business"/> </Route>
  </Switch>
</Router>

   </>

    )
  
}
export default App;
