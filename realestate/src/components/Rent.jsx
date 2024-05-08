import { useEffect, useState } from 'react';

export default function RentProperties() {
    const [rentProperties, setRentProperties] = useState([]);
    const API_URL = 'http://localhost:5050/rent-properties';

    const getRentProperties = async () => {
    try {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRentProperties(data);
    } catch (err) {
    console.error(err);
    }
    };

useEffect(() => {
    getRentProperties();
    }, []);

return (
    <>
    <div>Rent Properties</div>
    {rentProperties.length ? (
        rentProperties.map((property) => (
        <div key={property._id}>
            <h2>{property.propertyName}</h2>
            <p>Location: {property.location}</p>
            <p>Rent Price: ${property.rentPrice}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Size: {property.size} sqft</p>
            <p>Pet Friendly: {property.petFriendly ? 'Yes' : 'No'}</p>
            <p>Ready to Rent: {property.readyToRent ? 'Yes' : 'No'}</p>
        </div>
        ))
    ) : (
        <h2>No rent properties to display yet</h2>
    )}
    </>
);
}
