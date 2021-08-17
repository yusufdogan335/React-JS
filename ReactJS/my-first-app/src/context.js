import React, { Component } from 'react';


const UserContext = React.createContext();

// Reducer Func
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default:
            return state
    }
}


export class UserProvider extends Component {

    state = {
        users: [
            {
                id: 1,
                name: "Janice Martin",
                salary: "5000",
                department: "IT"
            },
            {
                id: 2,
                name: "Hadley Marrow",
                salary: "4000",
                department: "Marketing"
            },
            {
                id: 3,
                name: "John Doe",
                salary: "6500",
                department: "Engineering"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>

        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;



