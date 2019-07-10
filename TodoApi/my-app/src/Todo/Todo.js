import React from 'react';
import M from 'materialize-css';




export class TodoComponent extends React.Component {
 
  componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
    
    return (
        <p>Todo List</p>
      );


  }
}

