// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import db from "./db/conn.mjs"

// Import models
import BuyProperty from './models/buyPropertys.mjs';
import RentProperty from './models/rentPropertys.mjs';
import PropertyListing from './models/propertyListings.mjs';
import User from './models/users.mjs';

// Import routes
import buyPropertyRoutes from './controllers/BuyProperty.mjs';
import propertyListingRoutes from './controllers/PropertyListing.mjs';
import userRoutes from './controllers/user.mjs';
import rentPropertyRoutes from './controllers/RentProperty.mjs';




// Initialize express app
const app = express();
const PORT = process.env.PORT || 5050;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Define routes
app.use("/buy-properties", buyPropertyRoutes);
app.use("/property-listings", propertyListingRoutes);
app.use("/rent-properties", rentPropertyRoutes);
app.use("/users", userRoutes);



// Root route
app.get('/', (req, res) => {
    res.send(
        `<div> This is the root route for Buy Properties, Rent Properties, Property Listings, and Users. <br/>
        <a href='/buy-properties'>Buy Properties</a><br/>
        <a href='/rent-properties'>Rent Properties</a><br/>
        <a href='/property-listings'>Property Listings</a><br/>
        <a href='/users'>Users</a></div>`
    );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
