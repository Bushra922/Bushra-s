import React, { useState } from 'react';

const BuyProperty = () => {
    const [propertyDetails, setPropertyDetails] = useState({
        propertyName: " Property",
        price: 100000, // Price in dollars
        location: " City",
        isSold: false
    });

    const handleBuyProperty = () => {
        // Add logic to handle property purchase////////////
        console.log("Property purchased!");
        //////////////
        setPropertyDetails({
            ...propertyDetails,
            isSold: true
        });
    };

    return (
        <div>
            <h1>{propertyDetails.propertyName}</h1>
            <p>Price: ${propertyDetails.price}</p>
            <p>Location: {propertyDetails.location}</p>
            <p>Status: {propertyDetails.isSold ? 'Sold' : 'Available'}</p>
            <button onClick={handleBuyProperty} disabled={propertyDetails.isSold}>
                {propertyDetails.isSold ? 'Sold Out' : 'Buy Now'}
            </button>
        </div>
    );
};

export default BuyProperty;
