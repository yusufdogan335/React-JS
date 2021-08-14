import React, { Component } from 'react';


class User extends Component {

    state = {
        isVisible: false
    }

    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    }

    /*     constructor(props) {
            super(props);
    
            this.state = {
                isVisible: false
            }
        } */

    /*     This Bind Methode 1:
            constructor(props) {
                super(props)
                this.onClickEvent = this.onClickEvent.bind(this)
            } */

    //setState 
    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    render() {

        //Destructing
        const { name, department, salary, } = this.props;
        const { isVisible } = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                            <p className="card-text"> Salary : {salary}</p>
                            <p className="card-text"> Department : {department}</p>
                        </div> : null
                    }

                </div>
            </div >
        )
    }
}

/* User.propTypes = {
    name: PropTypes.string.isRequired,
    salart: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
} */

export default User;