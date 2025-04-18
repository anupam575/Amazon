// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Panel from './components/Panel';
import MobilePage from './components/MobilePage';
import LaptopPage from './components/LaptopPage';
import FashionPage from './components/FashionPage';
import ElectronicsDealsPage from './components/ElectronicsDealsPage';
import Home from "./components/Home";
import CartPage from './pages/CartPage';
import SuccessPage from './pages/SuccessPage';
import RegisterPage from './components/RegisterPage'; // ✅ Register page route
import RegistrationSuccessPage from './pages/RegistrationSuccessPage';  // Success Page (Updated)


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Router>
      <Header searchTerm={searchTerm} onSearch={handleSearch} />
      <Panel />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/mobile" element={<MobilePage searchTerm={searchTerm} />} />
        <Route path="/laptop" element={<LaptopPage searchTerm={searchTerm} />} />
        <Route path="/fashion" element={<FashionPage searchTerm={searchTerm} />} />
        <Route path="/electronics-deals" element={<ElectronicsDealsPage searchTerm={searchTerm} />} />
        <Route path="/cart" element={<CartPage />} />

        {/* ✅ New route */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registration-success" element={<RegistrationSuccessPage />} />  {/* Success Page */}

      </Routes>
    </Router>
  );
}

export default App;
//useState hook का इस्तेमाल किया गया है searchTerm को manage करने के लिए, जो search input से जुड़ा होता है।

//searchTerm: यह एक state है जो search box में टाइप किए गए शब्दों को रखता है।

//setSearchTerm: यह एक function है जो searchTerm की value को अपडेट करता है।

//handleSearch एक function है जो जब भी search box में कोई input होता है, तब इसे चलाता है।

//.target.value: यह उस input field की value को पकड़ता है, जिसे यूज़र ने डाला है।

//toLowerCase(): यह value को lowercase में बदलता है ताकि search case-insensitive हो।

//return के अंदर JSX है जो React को बताता है कि UI कैसे दिखेगा।

//<Router>: यह राउटिंग का कंटेनर है जो ऐप को राउटिंग के साथ wrap करता है।

//<Header searchTerm={searchTerm} onSearch={handleSearch} />: Header component को render करता है और searchTerm और handleSearch function को props के रूप में भेजता है। इसका मतलब है कि Header में search functionality होगी।

//<Panel />: यह Panel component को render करता है, जो शायद बैनर या कुछ अन्य static content हो सकता है।

//outes>: यह <Route> elements को समाहित करता है और प्रत्येक URL path को एक specific component के साथ जोड़ता है।

//<Route path="/" element={<Home />} />: यह जब URL / होगा, तो Home component render होगा।

//<Route path="/mobile" element={<MobilePage searchTerm={searchTerm} />} />: जब URL /mobile होगा, तो MobilePage component render होगा। इस route में searchTerm भी pass किया गया है ताकि search functionality हर page पर काम करे।

//और इसी तरह, बाकी सभी URLs को उनके respective components से जोड़ा गया है।
///स लाइन में App component को export किया गया है, ताकि इसे दूसरे फाइलों में import किया जा सके (आमतौर पर index.js में)।

//Summary:
//इस App.js फाइल में React Router का इस्तेमाल किया गया है ताकि अलग-अलग पेजों के बीच राउटिंग की जा सके।

//useState hook का उपयोग किया गया है ताकि searchTerm को स्टोर किया जा सके और उसे अन्य components में भेजा जा सके।

//आपने Header, Panel, और अन्य pages को import किया है, और Routes में URL paths के आधार पर respective components को display किया है।

//searchTerm और handleSearch को Header, MobilePage, LaptopPage, FashionPage, और अन्य components में भेजा गया है ताकि search functionality हर जगह काम कर सके।

