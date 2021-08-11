import React from 'react';
import PropTypes from 'prop-types';


const Navbar = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

//Default Props
Navbar.defaultProps = {
    title: "Default App"
}

export default Navbar;