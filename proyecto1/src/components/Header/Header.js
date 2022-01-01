import React from "react";
import { Row, Col } from 'reactstrap';


const Header = ({title}) =>{

    return(
        <Row className="mt-5 mb-5">
            <Col md={12}>
            <h2 className="text-center">
            {title}</h2>
            </Col>
        </Row>
    );
};

export default Header;