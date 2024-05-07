import express from 'express';
const router = express.Router();
import BuyProperty from '../models/buyPropertys.mjs';

// Seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
        await BuyProperty.create([
            { 
                propertyName: 'Luxury Villa',
                location: 'Miami, FL',
                price: 1000000,
                readyToBuy: true,
                status: 'Available'
            },
            { 
                propertyName: 'Beachfront Condo',
                location: 'Malibu, CA',
                price: 2000000,
                readyToBuy: false,
                status: 'Available'
            },
            {
                propertyName: 'City Apartment',
                location: 'New York, NY',
                price: 1500000,
                readyToBuy: true,
                status: 'Available'
            }
        ]);
        res.status(200).redirect("/buy-properties");
    } catch (err) {
        res.status(400).json(err);
    }
});

// Index route - Display list of buy properties
router.get('/', async (req, res) => {
    try {
        const buyProperties = await BuyProperty.find({});
        res.status(200).json(buyProperties);
    } catch (err) {
        res.status(400).json(err);
    }
});

// New route - Render form to create a new buy property
router.get('/buy-properties/new', (req, res) => {
    // Render form or send appropriate response
});

// Delete route - Delete a buy property
router.delete('/buy-properties/:id', async (req, res) => {
    try {
        await BuyProperty.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update route - Update an existing buy property
router.put('/buy-properties/:id', async (req, res) => {
    try {
        const updatedProperty = await BuyProperty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedProperty);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create route - Create a new buy property
router.post('/buy-properties', async (req, res) => {
    try {
        const { propertyName, location, price, readyToBuy, status } = req.body;
        const createdProperty = await BuyProperty.create({
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

// Edit route - Render form to edit a buy property
router.get("/buy-properties/:id/edit", async (req, res) => {
    // Render form or send appropriate response
});

// Show route - Display details of a buy property
router.get('/buy-properties/:id', async (req, res) => {
    try {
        const property = await BuyProperty.findById(req.params.id);
        res.status(200).json(property);
    } catch (err) {
        res.status(400).json(err);
    }
});

export default router;
