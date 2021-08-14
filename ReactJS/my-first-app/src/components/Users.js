import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        const { users } = this.props;

        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <User
                                key={user.id}
                                name={user.name}
                                salary={user.salary}
                                departmant={user.departmant}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;