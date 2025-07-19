import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './confirmbooking.css';

const ConfirmBooking = () => {
    const location = useLocation();
    const { bookedTables, date, timeFrom, timeTo } = location.state || {};

    const [selectedPayment, setSelectedPayment] = useState("");
    const [showQR, setShowQR] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
        setShowQR(false);
    };

    const handlePayment = () => {
        if (selectedPayment === "Google Pay") {
            window.location.href = "https://pay.google.com";
        } else if (selectedPayment === "QR Code Scanner") {
            setShowQR(true);
        } else {
            alert("Please select a payment method.");
        }
    };

    const handleQRPaymentSuccess = async () => {
        const userId = 2; // Replace with dynamic user ID if available
        const username = "JohnDoe"; // Replace with dynamic username

        console.log("Sending booking data:", {
            userId,
            username,
            bookedTables,
            date,
            timeFrom,
            timeTo
        });

        try {
            const response = await fetch('http://localhost:5000/api/confirm-booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    username,
                    bookedTables,
                    date,
                    timeFrom,
                    timeTo
                })
            });

            if (response.ok) {
                alert('Payment successful and booking confirmed!');
                setPaymentSuccess(true);
            } else {
                const errorText = await response.text();
                alert(`Booking failed: ${errorText}`);
            }
        } catch (err) {
            console.error('Error confirming booking:', err);
        }
    };

    return (
        <div>
            <h2>Confirm Your Booking</h2>
            <p>Tables: {bookedTables?.map(t => t + 1).join(', ')}</p>
            <p>Date: {date}</p>
            <p>From: {timeFrom} To: {timeTo}</p>

            <div>
                <h3>Select Payment Method</h3>
                <label>
                    <input type="radio" name="payment" value="Google Pay" onChange={handlePaymentChange} />
                    Google Pay
                </label>
                <label>
                    <input type="radio" name="payment" value="QR Code Scanner" onChange={handlePaymentChange} />
                    QR Code
                </label>
                <button onClick={handlePayment}>Pay Now</button>
            </div>

            {showQR && (
                <div className="qr-code">
                    <h3>Scan QR to Pay</h3>
                    <img src="gpayqr.jpg" alt="QR Code"/>
                    {!paymentSuccess && <button onClick={handleQRPaymentSuccess}>I Have Paid</button>}
                </div>
            )}
        </div>
    );
};

export default ConfirmBooking;
