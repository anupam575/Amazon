// components/Header.jsx
import React from 'react';
import '../style/header.css';
import { FaLocationDot, FaMagnifyingGlass, FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Header({ searchTerm, onSearch }) {
  return (
    <div className="navbar">
      <div className="nav-logo border">
        <div className="logo"></div>
      </div>

      <div className="nav-address border">
        <p className="add-first">Deliver to</p>
        <div className="add-icon">
          <FaLocationDot />
          <p className="add-second">India</p>
        </div>
      </div>

      <div className="nav-search">
        <select className="search-select">
          <option>All</option>
          <option>Mobile</option>
          <option>Laptop</option>
          <option>Fashion</option>
          <option>Electronics Deals</option>
        </select>
        <input
          placeholder="Search Amazon"
          className="search-input"
          value={searchTerm}
          onChange={onSearch}
        />
        <div className="search-icon">
          <FaMagnifyingGlass />
        </div>
      </div>

      {/* ✅ Hello, sign in -> goes to /register */}
      <div className="nav-signin">
        <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
          <p><span>Hello, sign in</span></p>
          <p className="nav-second">Account & Lists</p>
        </Link>
      </div>

      <div className="nav-return">
        <p><span>Returns</span></p>
        <p className="nav-second">& Orders</p>
      </div>

      <div className="nav-cart border">
        <Link to="/cart">
          <FaCartShopping />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
//value attribute को input element में सेट किया जाता है ताकि यह उस input field की value को नियंत्रित (controlled) किया जा सके।

//जब आप value={searchTerm} करते हैं, तो इसका मतलब है कि यह input field की value हमेशा React state searchTerm के बराबर होगी।

//searchTerm को state में सेट किया गया था (जैसा आपने पहले useState hook में किया था), तो जब भी searchTerm बदलता है, तो यह input field की value भी बदल जाएगी।
//यहां searchTerm React की state है, जो value के रूप में input field से जुड़ी है।

//onChange={onSearch}:
//onChange एक event handler है, जो तब trigger होता है जब user input field में कुछ भी change करता है (जैसे कोई शब्द टाइप करना)।

//onChange={onSearch} का मतलब है कि जब भी यूज़र input field में कुछ टाइप करेगा, तो onSearch function को कॉल किया जाएगा।

//आपका onSearch function, जो आपने पहले App.js में बनाया था, event.target.value को पकड़ता है और उसे searchTerm के रूप में सेट करता है। तो, जब user input देता है, React की state (searchTerm) को update किया जाता है, और फिर यह value attribute के कारण input field में दिखता है।

//value={searchTerm}: इस input field की value को React की state searchTerm से लिंक करता है। इसका मतलब है कि जो भी value आप state में रखेंगे, वही input field में दिखेगी।

//onChange={onSearch}: जब user input field में कुछ भी टाइप करेगा, तो यह onSearch function को call करेगा, जो state को अपडेट करेगा।
//searchTerm state से input की value bind की गई है।

//onChange के ज़रिए, जब भी user input करता है, handleSearch function को call किया जाता है, जो searchTerm को update करता है।

//इसका परिणाम यह होगा कि जब भी यूज़र input करेगा, searchTerm की value बदल जाएगी और input field में वही दिखाई देगा।