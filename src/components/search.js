import React, { Component } from 'react';
// import Icon from 'antd/es/icon';


class Search extends Component {
    
    render() { 
        return ( 
            <div>
                <input className='search' placeholder='search here'  style={{border:'1px solid black', width:'500px',height:'30px',}}/>
                {/* <Icon style = {{type:'search',marginleft:'-20px'}} />     */}
            </div>
         );
    }
}
 
export default Search;