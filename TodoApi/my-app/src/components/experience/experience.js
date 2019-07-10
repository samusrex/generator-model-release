import React from 'react';
import {Row,Col,Card} from 'react-materialize';

const Experience = (props) => (

<Card>
<Row>

<Col s={5} m={2}>
    <image src={props.avatar} className="circle responsive-img" alt="avatar"></image>
    {props.name}
</Col>

<Col s={10} m={10}>

<p><b>{props.title} in <span className="grey darken-2 white-text">{props.company}</span></b></p>
<p>{props.description}</p>
    
</Col>
</Row>

</Card>

);

export default Experience;