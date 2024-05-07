import React from 'react';

const RentProperty = () => {
const handleRentProperty = () => {
    // Add logic to handle property rental
    console.log("Property rented!");
};

return (
    <div>
    <h1>Rent Property</h1>
    <p>Explore our available rental properties and find your next home!</p>
    <div className="property-details">
        <h2>Property Details</h2>
        <ul>
        <li>Location: City, Neighborhood</li>
        <li>Price: $XXX/month</li>
        <li>Bedrooms: 2</li>
        <li>Bathrooms: 1</li>
        <li>Size: XXX sqft</li>
        <li>Pet-friendly: Yes</li>
        </ul>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum nunc sed mattis pulvinar.</p>
        <button onClick={handleRentProperty}>Rent Now</button>
    </div>
    </div>
    );
};

export default RentProperty;
