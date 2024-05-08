import React, { useState, useEffect } from 'react';

export default function BuyPropertyListing() {
    const [properties, setProperties] = useState([]);
    const [editingProperty, setEditingProperty] = useState(null); 
    const API_URL = 'http://localhost:5050/buy-properties/seed';

    useEffect(() => {
        console.log("Fetching properties...");
        getProperties();
    }, []);

    const getProperties = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log("Fetched properties:", data);
            setProperties(data);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteProperty = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete property');
            }
            setProperties(properties.filter(property => property._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    const handleEdit = (propertyId) => {
        setEditingProperty(propertyId);
    };

    return (
        <>
            <div>Buy Properties</div>
            {properties.length ? (
                properties.map((property) => (
                    <div key={property._id}>
                        <h2>{property.propertyName}</h2>
                        <p>Location: {property.location}</p>
                        <p>Price: ${property.price}</p>
                        <p>Status: {property.status}</p>
                        <button onClick={() => deleteProperty(property._id)}>Delete</button>
                        <button onClick={() => handleEdit(property._id)}>Edit</button>
                    </div>
                ))
            ) : (
                <h2>No properties to display yet</h2>
            )}
        </>
    );
}
