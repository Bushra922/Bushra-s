import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MakeAppointment = () => {
const [selectedDate, setSelectedDate] = useState(new Date());
const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

const handleDateChange = (date) => {
    setSelectedDate(date);
    };

const handleAppointment = () => {
    setIsAppointmentBooked(true);
    console.log("Appointment booked for:", selectedDate);
    };

return (
    <div>
    <h1>Make Appointment</h1>
    <label>Select appointment date:</label>
    <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        minDate={new Date()}
    />
    {isAppointmentBooked ? (
        <p>Appointment booked for: {selectedDate.toString()}</p>
    ) : (
        <button onClick={handleAppointment}>Book Appointment</button>
    )}
    </div>
    );
};

export default MakeAppointment;
