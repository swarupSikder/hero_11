import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log(users, 'from user 2');

    return (
        <div>
            <h2>This is Users2</h2>
        </div>
    );
};

export default Users2;