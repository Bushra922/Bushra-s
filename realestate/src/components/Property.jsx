import React, { useEffect, useState } from 'react';

const PropertyListings = () => {
    const [propertyListings, setPropertyListings] = useState([]);
    const API_URL = 'http://localhost:5050/property-listings';

    const getPropertyListings = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPropertyListings(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPropertyListings();
    }, []);

    return (
        <div>
            <h1>Property Listings</h1>
            {propertyListings.length ? (
                propertyListings.map((property) => (
                    <div key={property._id}>
                        <h2>{property.propertyName}</h2>
                        <p>Description: {property.description}</p>
                        <p>Location: {property.location}</p>
                        <p>Price: ${property.price}</p>
                        <p>Ready to list: {property.readyToList ? 'Yes' : 'No'}</p>
                    </div>
                ))
            ) : (
                <h2>No property listings to display yet</h2>
            )}
        </div>
    );
};

export default PropertyListings;
