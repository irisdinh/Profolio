import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const Header = () => {
    const styleHeader = {
        fontSize: 20,
        display: "inline",
        float: "left"
    }
    return (
        <div> 
            <Navbar>
                <Navbar.Brand style={styleHeader}>Iris's Profolio</Navbar.Brand>
            </Navbar>  
        </div>
    )
}
export default Header