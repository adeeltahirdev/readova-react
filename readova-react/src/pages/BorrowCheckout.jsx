import React, { useState } from "react";
import CheckLayout from "../layouts/CheckLayout";

const BorrowCheckout = () => {
  const [days, setDays] = useState(7); // Default borrow duration

  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      pricePerDay: 30,
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      pricePerDay: 40,
      image: "https://via.placeholder.com/100",
    },
  ];

  const total = books.reduce((acc, book) => acc + book.pricePerDay * days, 0);

  return (
    <CheckLayout>
      <div className="checkout-container">
        <div className="checkout-left">
          <h2>Books You're Borrowing</h2>
          {books.map((book, index) => (
            <div key={index} className="book-detail">
              <img src={book.image} alt={book.title} className="book-image" />
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Borrowing for {days} days</p>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout-right">
          <h2>Order Summary</h2>
          <label>
            Days to Borrow:
            <input
              type="number"
              value={days}
              min={1}
              max={30}
              onChange={(e) => setDays(Number(e.target.value))}
              style={{ marginLeft: "10px", width: "60px" }}
            />
          </label>
          {books.map((book, index) => (
            <div key={index} className="summary-item">
              <p>
                <strong>{book.title}</strong>
              </p>
              <p>Author: {book.author}</p>
              <p>Price per day: Rs. {book.pricePerDay}</p>
              <p>Total: Rs. {book.pricePerDay * days}</p>
            </div>
          ))}
          <h3>Total: Rs. {total}</h3>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </CheckLayout>
  );
};

export default BorrowCheckout;
