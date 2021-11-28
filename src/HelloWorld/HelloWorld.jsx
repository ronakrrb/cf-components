import React from "react";
import PropTypes from "prop-types";


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Hello World
            </div>
        )
    }
}

HelloWorld.propTypes = {
    /** Type of the Slideshow */
    theme: PropTypes.string,
};
  
HelloWorld.defaultProps = {
    theme: "light",
};

export default HelloWorld;
