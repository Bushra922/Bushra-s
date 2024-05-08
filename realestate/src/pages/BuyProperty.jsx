import React from 'react';

const BuyProperty = ({ property }) => {
    const handleBuyProperty = () => {
        // Add logic to handle property purchase
        console.log("Property purchased!");
    };

    return (
        <div>
            <h2>{property.propertyName}</h2>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
            <p>Status: {property.status}</p>
            <button onClick={handleBuyProperty} disabled={!property.readyToBuy || property.status !== 'Available'}>
                {property.status === 'Available' ? 'Buy Now' : 'Sold Out'}
            </button>
        </div>
    );
};

export default BuyProperty;
