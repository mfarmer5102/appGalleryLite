import React, { Component } from "react";

import Banner from "./Banner/Banner";
import NavbarContent from "./NavbarContent/NavbarContent";

const style = {
    Navbar: {
        padding: "0px",
        overflow: "scroll",
        maxHeight: "100vh"
    }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {

    return (
        <div className='col-md-3 bg-light text-dark shadow' style={style.Navbar}> 
            <Banner/>
            <NavbarContent
                allKeywords={this.props.allKeywords}
                updateSelectedKeywords={this.props.updateSelectedKeywords}
                updateSelectedFlags={this.props.updateSelectedFlags}
                clearAllFilters={this.props.clearAllFilters}
                selectedKeywords={this.props.selectedKeywords}
                selectedFlags={this.props.selectedFlags}
            />
        </div>
    )
    
  }
}

export default Navbar;
