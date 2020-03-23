import React, { Component } from "react";

const style = {
    AppThumbnail: {
        height: "200px",
        maxWidth: "100%"
    }
}
class ApplicationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            activeClass: "col-xl-4 col-lg-6"
        };
        this.activateHover = this.activateHover.bind(this);
        this.deactivateHover = this.deactivateHover.bind(this);
    }

    activateHover() {
        this.setState({
            isHovered: true,
            activeClass: "animated pulse col-xl-4 col-lg-6"
        });
    }

    deactivateHover() {
        this.setState({ isHovered: false, activeClass: "col-xl-4 col-lg-6" });
    }

    render() {

        //Define experience link
        let experienceLink = (this.props.data.deployedLink && this.props.data.supportStatus) !== 'discontinued' ? this.props.data.deployedLink : null;

        //Define indicator icons
        let featuredIndicator = this.props.data.isFeatured ? (<i title='Featured' className="float-right fas fa-star fa-lg text-warning p-1"></i>) : ("");
        let collaborationIndicator = this.props.data.isCollaboration ? (<i title='Collaboration' className="float-right fas fa-users fa-lg text-secondary p-1"></i>) : ("");

        return (
            <div
            className={this.state.activeClass}
            onMouseEnter={this.activateHover}
            onMouseLeave={this.deactivateHover}
            >
                <div className="card shadow mb-3">

                    {/* Header */}
                    <div className="card-header text-left">
                        <h5 className="float-left">
                            {this.props && this.props.data ? this.props.data.title : null}
                        </h5>
                        {featuredIndicator}
                        {collaborationIndicator}
                    </div>

                    {/* Body */}
                    <a 
                        target="_blank" 
                        href={experienceLink} 
                        className='d-flex justify-content-center bg-light'>
                            <img src={this.props && this.props.data ? this.props.data.imagePath : null} style={style.AppThumbnail} />
                    </a>

                    {/* Footer */}
                    <div className="card-footer text-right">
                        <a target="_blank" href={this.props && this.props.data ? experienceLink : null}>
                            <small>Experience</small>
                        </a>
                        <span className='pl-2 pr-2'>{experienceLink ? '|' : ''}</span>
                        <a target="_blank" href={this.props && this.props.data ? this.props.data.githubLink : null}>
                            <small>View Source</small>
                        </a>
                    </div>

                </div>
            </div>
        )  
    }

}

export default ApplicationCard;
