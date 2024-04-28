import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);

    // Calculate total count of items in the cart
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);

    // Create a map to count the number of occurrences of each item
    const itemCountMap = {};
    items.forEach((item) => {
        itemCountMap[item.id] = (itemCountMap[item.id] || 0) + item.quantity;
    });

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'black',
                color: 'white',
                height: '80px',
                width: '100%',
            }}
        >
            <span className="logo">GROCERY SHOPPING APP</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">
                    Cart items: {totalCount} ({items.length} types)
                </span>
            </div>
        </div>
    );
};

export default Navbar;
