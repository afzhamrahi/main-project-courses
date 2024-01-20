import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function SidBar() {
    return (
        <Container>
            <div style={{width:100 ,height:700, float:"right", border:"1px solid red"} }>
                <Link to="/Category" style={{width:"100%"}}>Category</Link>
                <br />
                <Link to="#" style={{width:"100%"}}># Tag</Link>
                <br />
                <Link to="#" style={{width:"100%"}}>Products</Link>
                <br />
                <Link to="#" style={{width:"100%"}}>Orders</Link>
            </div>


        </Container>
    );
}

export default SidBar;