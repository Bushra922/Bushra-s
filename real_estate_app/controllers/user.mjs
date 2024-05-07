import express from 'express';
const router = express.Router();
import User from '../models/users.mjs'; // Changed from 'PropertyListing'

// Seed route
router.get("/seed", async (req, res) => {
    console.log("in seed");
    try {
        await User.create([
            { 
                username: 'Emily Davis',
                email: 'Emily@rr.com',
                fullName: 'Emily Davis',
                phoneNumber: '5555555555',
                address: '789 Elm Street'
            },
            { 
                username: 'Olivia Wilson',
                email: 'alice@gmail.com',
                fullName: 'Olivia Wilson',
                phoneNumber: '1234567890',
                address: '123 Main Street'
            },
            { 
                username: 'Bob Johnson',
                email: 'bob@yahoo.com',
                fullName: 'Bob Johnson',
                phoneNumber: '9876543210',
                address: '456 Park Avenue'
            }
        ]);
        res.status(200).redirect("/users");
    } catch (err) {
        res.status(400).json(err);
    }
});

// Index route - Display list of users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err);
    }
});

// New route - Render form to create a new user
router.get('/users/new', (req, res) => {
    // Render form or send appropriate response
});

// Delete route - Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update route - Update an existing user
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Create route - Create a new user
router.post('/users', async (req, res) => {
    try {
        const { username, email, fullName, phoneNumber, address } = req.body;
        const createdUser = await User.create({
            username,
            email,
            fullName,
            phoneNumber,
            address
        });
        res.status(200).json(createdUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Edit route - Render form to edit a user
router.get("/users/:id/edit", async (req, res) => {
    // Render form or send appropriate response
});

// Show route - Display details of a user
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json(err);
    }
});

export default router;
