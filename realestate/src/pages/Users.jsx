import React from 'react';

const User = ({ user }) => {
    const handleDeleteUser = () => {
        // Add logic to handle user deletion
        console.log("User deleted!");
    };

    return (
        <div>
            <h1>User Details</h1>
            <div className="user-details">
                <h2>{user.fullName}</h2>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <p>Address: {user.address}</p>
                <button onClick={handleDeleteUser}>Delete User</button>
            </div>
        </div>
    );
};

export default User;
