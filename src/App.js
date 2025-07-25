import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contect from "./pages/Contact"
import SighupPage from "./pages/SighUpPage";
import Booking from "./pages/Booking";
import HotelList from "./pages/HotelList";
import FlightSearch from "./pages/Flight";
import Login from "./pages/Login";
import HotelDetails from "./pages/HotelDetails";
import { Toaster } from "react-hot-toast";

const App = () => {
    const [selectedHotel, setSelectedHotel] = useState(null);
  
  return (
    <Router>
      <Layout>
        <Routes>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/hotelList" element={<HotelList onSelectHotel={setSelectedHotel} />} />
              <Route path="/Flight" element={<FlightSearch />} />
              <Route  path="/contactUs" element={<Contect/>}/>
              <Route path="/booking" element={<Booking />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/sighup" element={<SighupPage />} />
            </>
        </Routes>

        {selectedHotel && <HotelDetails hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />}
        <Toaster position="top-right" reverseOrder={false} />
      </Layout>
    </Router>
  );
};

export default App;
