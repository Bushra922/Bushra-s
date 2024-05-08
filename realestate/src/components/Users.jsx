import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
const [users, setUsers] = useState([]);
const [error, setError] = useState(null);

    useEffect(() => {
    getUsers();
    }, []);

const getUsers = async () => {
    try {
    const response = await axios.get('/users');
    if (response.status === 200) {
        if (Array.isArray(response.data)) {
        setUsers(response.data);
        } else {
        console.error('Invalid data format received:', response.data);
        setError('Failed to fetch user data. Invalid data format received.');
        }
    } else {
        console.error('Failed to fetch user data:', response.statusText);
        setError('Failed to fetch user data. Please try again later.');
    }
    } catch (error) {
    console.error('Error fetching users:', error);
    setError('Failed to fetch user data. Please try again later.');
    }
    };

return (
    <div>
    <h1>User Profiles</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {users.map((user) => (
        <div key={user._id}>
        <p>Name: {user.fullName}</p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Address: {user.address}</p>
        </div>
    ))}
    </div>
    );
};

export default Users;
