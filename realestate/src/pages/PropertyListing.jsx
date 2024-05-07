import React from 'react';

const PropertyListing = () => {
  // Mock data for property listings
const properties = [
    { id: 1, title: "Beautiful House with Garden", price: "$500,000", location: "City Center" },
    { id: 2, title: "Luxury Apartment with Ocean View", price: "$700,000", location: "Beachfront" },
    { id: 3, title: "Cozy Cottage in the Woods", price: "$300,000", location: "Forest Area" }
    ];

return (
    <div>
    <h1>Properties for Sale/Rent</h1>
    <ul>
        {properties.map(property => (
        <li key={property.id}>
            <h3>{property.title}</h3>
            <p>Price: {property.price}</p>
            <p>Location: {property.location}</p>
            {/* Add more details or a link to view property details */}
        </li>
        ))}
    </ul>
    </div>
    );
};

export default PropertyListing;