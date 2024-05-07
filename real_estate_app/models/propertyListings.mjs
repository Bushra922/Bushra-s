import mongoose from 'mongoose';

const propertyListingSchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    readyToList: {
        type: Boolean,
        default: false
    }
});

const PropertyListing = mongoose.model('PropertyListing', propertyListingSchema);

export default PropertyListing;

