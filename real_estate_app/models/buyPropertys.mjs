import mongoose from 'mongoose';

const buyPropertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    readyToBuy: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['Available', 'Pending', 'Sold'],
        default: 'Available'
    }
});

const BuyProperty = mongoose.model('BuyProperty', buyPropertySchema);

export default BuyProperty;

