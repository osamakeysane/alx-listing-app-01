import React, { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  // State for dates
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Calculate total nights and cost
  const totalNights =
    checkIn && checkOut
      ? (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
      : 0;

  const totalCost = totalNights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-10">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      {/* Check-in date */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2 rounded-md"
        />
      </div>

      {/* Check-out date */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2 rounded-md"
        />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>${isNaN(totalCost) ? 0 : totalCost.toFixed(2)}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
