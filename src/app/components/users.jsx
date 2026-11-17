import React, { use } from 'react';

const Users = ({ usersPromise }) => {

  const users = use(usersPromise);

  return (
      <div>
        
        <h2>Users data coming soon: {users.length}</h2>
        {users.map((user) => (
          <div key={user.id}>
            <h3>User name: {user.name}</h3>
            <p>User email: {user.email}</p>
          </div>
        ))}
      </div>
  );
};

export default Users;