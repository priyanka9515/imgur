import React, { Component } from 'react';
import  logo from '../logo.svg'
import '../App.css'
// const images = [{"name":'ds'},{"name":'fdsf'}]
//  const companyList = [
//     { "name": "Nasa", "image": "https://imgur.com/RTFOOHR" },
// //     {"name": "Nasa", "image": "https://imgur.com/RTFOOHR"},
//    {"name": "Nasa", "Image": "https://imgur.com/RTFOOHR"}  ]




class Body extends Component {
    state = {  }
    render() { 
        return (  
    
    <div className = "Container">
    <li>{<img src={logo}   />} fghfh</li>
    <li>{<img src={logo}  />}gghjhgkghkhg</li>
    </div>
    
    
                
           
        );
    }
}
 
export default Body;


{/* <div className="companies">
      {companyList.map(co => <div>{co.name}</div>)}
    </div>  */}
       