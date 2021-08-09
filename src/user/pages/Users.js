import React from 'react';
import UsersList from '../../places/components/UsersList';
const Users = () => {
    const USERS = [{ id: 'u1', name: 'john', image: "https://media.istockphoto.com/photos/sniper-rifle-isolated-picture-id1019614582", places: 3 }];
    return (<UsersList items={USERS} />);
};

export default Users;