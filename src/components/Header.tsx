import React from 'react';

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">My Ecommerce</div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/shop" className="hover:underline">Shop</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
