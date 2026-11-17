import React, { Suspense } from 'react';
import Users from '../components/users';

const fetchUsers = async () => {
    const data = await fetch('http://localhost:5000/users');
    return data.json();
};

export default function UsersPage() {

    const usersPromise = fetchUsers();

    return (
        <div>
            <h2>Users data coming soon: </h2> 
            <Suspense fallback={<h2>Loading...</h2>}>
                <Users usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
}