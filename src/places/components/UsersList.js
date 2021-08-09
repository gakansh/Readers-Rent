import React from 'react';
import './UsersItem';
import UsersItem from './UsersItem';
const UsersList = props => {

    if (props.items === 0) {
        return (<h1>
            <center> No User Found
            </center>         </h1>);
    }


    return (
        <ui>
            {
                props.items.map(user => {
                    return (<UsersItem
                        key={user.id}
                        id={user.id}
                        image={user.image}
                        name={user.name}
                        placeCount={user.places}
                    />);
                })
            }
        </ui>
    );
};

export default UsersList;