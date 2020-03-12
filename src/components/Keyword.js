import React, { Component } from "react";

var activeKeywordStyle = "badge badge-info m-1 d-block text-left";
var inactiveKeywordStyle = "badge badge-light m-1 d-block text-left";
var universalKeywordStyle = {
    cursor: "pointer"
}

class Keyword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      activeClass: inactiveKeywordStyle
    };
  }

  toggleKeyword = () => {
    if (this.state.isClicked) {
      this.setState({ isClicked: false, activeClass: inactiveKeywordStyle });
      this.props.passKeywordNameToParent(this.props.keywordName);
    } else {
      this.setState({ isClicked: true, activeClass: activeKeywordStyle });
      this.props.passKeywordNameToParent(this.props.keywordName);
    }
  };

  render() {
    return (
      <span 
        className={this.state.activeClass} 
        style={universalKeywordStyle}
        onClick={this.toggleKeyword}
        >
        {this.props.keywordName || "Tech"}
      </span>
    );
  }
}

export default Keyword;
