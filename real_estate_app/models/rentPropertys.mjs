import mongoose from 'mongoose';

const rentPropertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rentPrice: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    size: {
        type: Number,
        required: true // Assuming size is in square feet
    },
    petFriendly: {
        type: Boolean,
        default: false
    },
    readyToRent: {
        type: Boolean,
        default: false
    }
});

const RentProperty = mongoose.model('RentProperty', rentPropertySchema);

export default RentProperty;
