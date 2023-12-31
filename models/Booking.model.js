import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    bus: {
        type: Schema.Types.ObjectId,
        ref: 'Bus',
        required: true,
    },
    passengerName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    SeatNumber: {
        type: Number,
        required: true,
        unique: true

    },
    to: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
}, { timestamps: true })


const Booking = model('Booking', bookingSchema)
export default Booking