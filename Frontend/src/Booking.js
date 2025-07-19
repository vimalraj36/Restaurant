import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const [bookedTables, setBookedTables] = useState([]);
    const [date, setDate] = useState('');
    const [timeFrom, setTimeFrom] = useState('');
    const [timeTo, setTimeTo] = useState('');
    const navigate = useNavigate();

    const handleTableClick = (index) => {
        setBookedTables((prevBookedTables) =>
            prevBookedTables.includes(index)
                ? prevBookedTables.filter((table) => table !== index)
                : [...prevBookedTables, index]
        );
    };

    const handleBooking = () => {
        if (!date || !timeFrom || !timeTo) {
            alert('Please select date, time from and time to.');
            return;
        }

        if (bookedTables.length > 0) {
            navigate("/confirm-booking", {
                state: {
                    bookedTables,
                    date,
                    timeFrom,
                    timeTo
                }
            });
        } else {
            alert("Please select at least one table before booking!");
        }
    };

    return (
        <div className="bookings" id="Booking">
            <h2 className="names">Advanced Bookings</h2>

            <div className="manage">
                <div>
                    <h3>Choose Your Time!</h3>
                    <div className="duration">
                        <div className="date">
                            <h4>Date</h4><br />
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                            <h5>Note:<br />Open: 10:00 AM<br />Close: 10:00 PM</h5>
                        </div>
                        <div className="time">
                            <h4>Time</h4><br />
                            <div className="time-input">
                                <h6>From:</h6>
                                <input type="time" value={timeFrom} onChange={(e) => setTimeFrom(e.target.value)} />
                                <h6>To:</h6>
                                <input type="time" value={timeTo} onChange={(e) => setTimeTo(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Reserve a Table!</h3>
                    <div className="booking-card">
                        <div className="tables">
                            {[...Array(4)].map((_, tableIndex) => {
                                const isBooked = bookedTables.includes(tableIndex);

                                return (
                                    <div className="table-container" key={tableIndex}>
                                        <div className="chairs-row">
                                            {[...Array(2)].map((_, i) => (
                                                <img key={i} className="chair" src="chair.png" alt="Chair"
                                                    style={{ filter: isBooked ? "brightness(0.7)" : "none" }} />
                                            ))}
                                        </div>

                                        <button className="table-button"
                                            onClick={() => handleTableClick(tableIndex)}
                                            style={{ border: isBooked ? "3px solid green" : "none" }}>
                                            <img className="table" src="table.png" alt={`Table ${tableIndex + 1}`} />
                                        </button>

                                        <div className="chairs-row">
                                            {[...Array(2)].map((_, i) => (
                                                <img key={i} className="chair" src="chairInv.png" alt="Chair"
                                                    style={{ filter: isBooked ? "brightness(0.7)" : "none" }} />
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <button className="book" onClick={handleBooking}>
                Book Now
            </button>
        </div>
    );
};

export default Booking;
