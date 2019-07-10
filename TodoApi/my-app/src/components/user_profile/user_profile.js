import React from 'react';
import {Row,Col,Card} from 'react-materialize';
import avatar from '../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col m={8} offset="s2 m2">

                <img src={avatar} className="circle responsive-img" alt=""></img>

            </Col>
        </Row>

        <Row>

        <h5 >Lorem Ipsum</h5>
        <p className="grey darken-2 white-text">Ruby Developer</p>
            
        </Row>

    </Card>


);

export default UserProfile;
