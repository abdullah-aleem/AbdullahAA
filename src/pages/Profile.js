import React, { Component } from "react";
import Header from "../components/Header";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
        <div>
          <Header />
  
                 <div className="py-5 mx-3"> 
  
            My Profile
          </div>
        </div>
      );
  }
}