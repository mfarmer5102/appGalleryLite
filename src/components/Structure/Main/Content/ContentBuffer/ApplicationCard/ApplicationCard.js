import React, { Component } from "react";

let style = {
    AppThumbnail: {
        height: "200px",
        maxWidth: "100%"
    }
}
class ApplicationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div
            className={this.state.activeClass || 'col-xl-4 col-lg-6'}
            onMouseEnter={this.activateHover}
            onMouseLeave={this.deactivateHover}
            >
                <div className="card shadow mb-3">
                    <div className="card-header text-left">
                        <h5 className="float-left">
                            {this.props && this.props.data ? this.props.data.title : null}
                        </h5>
                        {/* {activelySupportedIndicator}
                        {featuredIndicator}
                        {collaborationIndicator} */}
                    </div>
                    <a 
                        target="_blank" 
                        // href={thumbnailLink} 
                        className='d-flex justify-content-center bg-light'>
                            <img src={this.props && this.props.data ? this.props.data.imagePath : null} style={style.AppThumbnail} />
                    </a>
                    <div className="card-footer text-right">
                        <a target="_blank" href={this.props && this.props.data ? this.props.data.githubLink : null}>
                        <small>View Source</small>
                        </a>
                        {/* {deployedLink} */}
                    </div>
                </div>
            </div>
        )  
    }

}

export default ApplicationCard;
