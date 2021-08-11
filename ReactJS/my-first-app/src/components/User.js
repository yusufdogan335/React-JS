import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    }

    render() {

        //Destructing
        const { name, department, salary } = this.props;

        return (
            <div>
                <ul>
                    <li>Name: {name}  </li>
                    <li>Department: {department}</li>
                    <li>Salary: {salary}</li>
                </ul>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    salart: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}




export default User;