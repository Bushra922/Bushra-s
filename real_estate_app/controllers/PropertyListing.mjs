import express from 'express';
const router = express.Router();
import PropertyListing from '../models/propertyListings.mjs'; // Changed from 'RentProperty'

// Seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
        await PropertyListing.create([ // Changed from 'RentProperty'
        { 
            propertyName: 'Luxury Villa',
            description: 'Beautiful House with Garden',
            location: 'Miami, FL',
            price: 1000000,
            readyToList: true
        },
        { 
            propertyName: 'Beachfront Condo',
            description: 'Luxury Apartment with Ocean View',
            location: 'Malibu, CA',
            price: 2000000,
            readyToList: false
        },
        {
            propertyName: 'City Apartment',
            description: 'Cozy Cottage in the Woods',
            location: 'New York, NY',
            price: 1500000,
            readyToList: true
        }
    ]);
        res.status(200).redirect("/property-listings"); // Changed from '/rent-properties'
    } catch (err) {
        res.status(400).json(err);
    }
});

// Index route - Display list of property listings
router.get('/', async (req, res) => {
    try {
        const propertyListings = await PropertyListing.find({});
        res.status(200).json(propertyListings); // Changed from 'RentProperty'
    } catch (err) {
        res.status(400).json(err);
    }
});

// New route - Render form to create a new property listing
router.get('/property-listings/new', (req, res) => {
    // Render form or send appropriate response
});

// Delete route - Delete a property listing
router.delete('/property-listings/:id', async (req, res) => {
    try {
        await PropertyListing.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update route - Update an existing property listing
router.put('/property-listings/:id', async (req, res) => {
    try {
        const updatedProperty = await PropertyListing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedProperty);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create route - Create a new property listing
router.post('/property-listings', async (req, res) => {
    try {
        const { propertyName, location, price, readyToBuy, status } = req.body;
        const createdProperty = await PropertyListing.create({
            propertyName,
            location,
            price,
            readyToBuy,
            status
        });
        res.status(200).json(createdProperty);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Edit route - Render form to edit a property listing
router.get("/property-listings/:id/edit", async (req, res) => {
    // Render form or send appropriate response
});

// Show route - Display details of a property listing
router.get('/property-listings/:id', async (req, res) => {
    try {
        const property = await PropertyListing.findById(req.params.id);
        res.status(200).json(property);
    } catch (err) {
        res.status(400).json(err);
    }
});

export default router;
