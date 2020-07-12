import React from 'react';

import './App.css';
import {
    render
} from '@testing-library/react';


function App() {
    return ( 
        <div className = "App" >
        <div className = "form-wrapper">
        <h1> Welcome to Bmm Power </h1> 
        <form onSubmit={this.handleSubmit} noValidation>
          <div className ="firstaname">
            <label htmlFor ="firstName">First Name</label> 
            <input 
                  type="text"
                  className=""
                  placeholder="First Name" 
                  type="text" 
                  name="firstname" 
                  placeholder="First Name" 
                  type="text" 
                  name="firstname" 
                  noValidate
                  onChange={this.handleChange} 
                />
              </div>
              </form> 
              </div>
              </div>
          );
}


export default App;
