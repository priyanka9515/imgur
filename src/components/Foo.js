import React, { Component } from 'react';
import Button from './Button';
import '../App.css'


class Footer extends Component {
    render() { 
        return (
            <div className = "footer">
                <Button color='rgb(61, 61, 61)' content='About' />
                <Button color='rgb(61, 61, 61)' content='Press' />
               <Button color='rgb(61, 61, 61)' content='Blog' />
               <Button color='rgb(61, 61, 61)' content='Privacy' />               
               <Button color='rgb(61, 61, 61)' content='Terms' />
               <Button color='rgb(61, 61, 61)' content='Advertise' />
               <Button color='rgb(61, 61, 61)' content='Rules' />
                <Button color='rgb(61, 61, 61)' content='Help' />
                 <Button color='rgb(61, 61, 61)' content='Careers' />
               <Button color='rgb(61, 61, 61)' content='store' /> 
            </div>
          );
    }
}
 
export default Footer;



