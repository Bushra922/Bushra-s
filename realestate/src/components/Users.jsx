import { useEffect, useState } from 'react';

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const API_URL = 'http://localhost:5050/users';

    const getUsers = async () => {
    try {
    const response = await fetch(API_URL);
    const data = await response.json();
    setUsers(data);
    } catch (err) {
    console.error(err);
    }
    };

useEffect(() => {
    getUsers();
    }, []);

return (
    <>
    <div>User List</div>
    {users.length ? (
        users.map((user) => (
        <div key={user._id}>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Address: {user.address}</p>
        </div>
        ))
    ) : (
        <h2>No users to display yet</h2>
    )}
    </>
    );
}
