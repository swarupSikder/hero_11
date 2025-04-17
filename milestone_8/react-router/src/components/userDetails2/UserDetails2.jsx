import React, { use } from 'react';

const UserDetails2 = ({usersPromise}) => {
    const {name, username} = use(usersPromise);


    return (
        <div>
            <p><small>User Name: {username}</small></p>
            <p><small>Name: {name}</small></p>
        </div>
    );
};

export default UserDetails2;