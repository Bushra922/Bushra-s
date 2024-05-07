import express from 'express';
const router = express.Router();
import RentProperty from '../models/rentPropertys.mjs'; // 

// Seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
        await RentProperty.create([ // 
        { 
            propertyName: 'Beach House',
            location: 'Santa Monica, CA',
            rentPrice: 5000,
            bedrooms: 2,
            bathrooms: 1,
            size: 1500,
            petFriendly: true,
            readyToRent: true
        },
        { 
            propertyName: 'Downtown Loft',
            location: 'Chicago, IL',
            rentPrice: 3000,
            bedrooms: 1,
            bathrooms: 1,
            size: 1000,
            petFriendly: false,
            readyToRent: false
        },
        {
            propertyName: 'Mountain Cabin',
            location: 'Aspen, CO',
            rentPrice: 7000,
            bedrooms: 3,
            bathrooms: 2,
            size: 2000,
            petFriendly: true,
            readyToRent: true
        },
        
    ]);
        res.status(200).redirect("/rent-properties"); // 
    } catch (err) {
        res.status(400).json(err);
    }
});

// Index route - Display list of rent properties
router.get('/', async (req, res) => {
    try {
        const rentProperties = await RentProperty.find({});
        res.status(200).json(rentProperties); // 
    } catch (err) {
        res.status(400).json(err);
    }
});

// New route - Render form to create a new rent property
router.get('/rent-properties/new', (req, res) => {
    // Render form or send appropriate response
});

// Delete route - Delete a rent property
router.delete('/rent-properties/:id', async (req, res) => {
    try {
        await RentProperty.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update route - Update an existing rent property
router.put('/rent-properties/:id', async (req, res) => {
    try {
        const updatedProperty = await RentProperty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedProperty);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create route - Create a new rent property
router.post('/rent-properties', async (req, res) => {
    try {
        const { propertyName, location, price, readyToBuy, status } = req.body;
        const createdProperty = await RentProperty.create({
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

// Edit route - Render form to edit a rent property
router.get("/rent-properties/:id/edit", async (req, res) => {
    // Render form or send appropriate response
});

// Show route - Display details of a rent property
router.get('/rent-properties/:id', async (req, res) => {
    try {
        const property = await RentProperty.findById(req.params.id);
        res.status(200).json(property);
    } catch (err) {
        res.status(400).json(err);
    }
});

export default router;
