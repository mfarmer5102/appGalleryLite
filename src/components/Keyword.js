import React, { Component } from "react";

// var activeKeywordStyle = "badge badge-info m-1 text-left";
// var inactiveKeywordStyle = "badge badge-light m-1 text-left";
var badgeStyle = "badge text-left";
var keywordDivStyle = {
    cursor: "pointer",
    display: "block"
}

class Keyword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    //   activeClass: inactiveKeywordStyle
    };
  }

  toggleKeyword = () => {
    if (this.state.isClicked) {
      this.setState({ isClicked: false});
      this.props.passKeywordNameToParent(this.props.keywordName);
    } else {
      this.setState({ isClicked: true});
      this.props.passKeywordNameToParent(this.props.keywordName);
    }
  };

  render() {
        var checkIcon = this.state.isClicked ? "far fa-check-square" : "far fa-square";
        return (
            <div style={keywordDivStyle} onClick={this.toggleKeyword}>
                <span><i class={checkIcon}></i></span>
                <span className={badgeStyle}>
                    {this.props.keywordName || "Tech"}
                </span>
            </div>
        );
  }
}

export default Keyword;
