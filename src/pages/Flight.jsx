import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const FlightSearchPage = () => {
  const [data, setData] = useState({
    city: "",
    arrivalCity: "",
    date: "",
    number: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/flight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok) {
        setData({
          city: "",
          arrivalCity: "",
          date: "",
          number: "",
        });
        toast.success("Flight Registered Successfully!", { position: "bottom-right" });
      } else {
        toast.error(result.msg || "Failed", { position: "bottom-right" });
      }
    } catch (error) {
      console.error("Fetch Error:", error.message);
      toast.error("Something went wrong!", { position: "bottom-right" });
    }
  };


  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/premium-vector/world-map-travel-summer-holidays-airplanes-concept-vacations-enjoying_1023797-1120.jpg?w=826"
              alt="Airplane"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-[#14183E] mt-5 text-3xl md:text-4xl font-bold text-center mb-6">
              Search Flights
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="city"
                  placeholder="Departure City"
                  value={data.city}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full focus:ring-2 focus:ring-[#fdbd33] outline-none"
                  required
                />
                <input
                  type="text"
                  name="arrivalCity"
                  placeholder="Arrival City"
                  value={data.arrivalCity}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full focus:ring-2 focus:ring-[#fdbd33] outline-none"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full focus:ring-2 focus:ring-[#fdbd33] outline-none"
                  required
                />
                <input
                  type="number"
                  min="1"
                  name="number"
                  placeholder="Number"
                  value={data.number}
                  onChange={handleChange}
                  className="border p-2 rounded-md w-full focus:ring-2 focus:ring-[#fdbd33] outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-[#fdbd33] text-white py-3 rounded-md hover:bg-yellow-500 transition duration-300"
              >
                Search Flights
              </button>
            </form>
          </div>
        </div>


      </div>
      <div className="bg-gray-100 py-16  px-6 mt-16 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mt-12 animate-on-scroll">
          <div className="text-center md:text-left">
            <p className="font-poppins font-semibold text-4xl">Jaddoo.</p>
            <p className="w-full md:w-64 text-[#5E6282] mt-7 font-normal">
              Book your trip in minutes and get full control for much longer.
            </p>
          </div>


          <div>
            <p className="font-bold text-2xl">Company</p>
            <div className="mt-7 space-y-2">
              <p className="text-slate-600 font-bold font-poppins cursor-pointer hover:text-orange-500 transition-colors">
                <Link to="/hotelList">
                  Hotel
                </Link>
              </p>
              <p className="text-slate-600 font-bold font-poppins cursor-pointer hover:text-orange-500 transition-colors">

                <Link to="/flight">
                  Flights
                </Link>
              </p>
              <p className="text-slate-600 font-bold font-poppins cursor-pointer hover:text-orange-500 transition-colors">
                <Link to="/booking">
                  Bookings
                </Link>
              </p>
            </div>
          </div>


          <div>
            <p className="font-bold text-2xl">Contact</p>
            <div className="mt-7 space-y-2">
              <p className="text-slate-600 font-bold font-poppins cursor-pointer hover:text-orange-500 transition-colors">
                <Link to="/sighup">
                  Sign up
                </Link>
              </p>
              <p className="text-slate-600 font-bold font-poppins cursor-pointer hover:text-orange-500 transition-colors">
                <Link to="/login">
                  Login
                </Link>
              </p>
              <p className="text-slate-600 font-bold font-poppins cursor-pointer hover:text-orange-500 transition-colors">
                <Link to="/contactUs">
                  ContactUs
                </Link>

              </p>
            </div>
          </div>


          <div>
            <p className="font-bold text-2xl">Support</p>
            <div className="mt-7 space-y-2">
              <p className="text-slate-600 font-bold font-poppins  hover:text-orange-500 transition-colors flex justify-center w-36  ">
                <img src="https://cdn-icons-png.flaticon.com/128/10542/10542947.png" alt="" className="w-5 h-5 mr-2 " />+123-456-7890

              </p>
              <p className="text-slate-600 font-bold font-poppins  hover:text-orange-500 transition-colors flex justify-center w-36  ">
                <img src="https://cdn-icons-png.flaticon.com/128/1944/1944502.png" alt="" className="w-5 h-5 mr-2 " />+123-456-7890

              </p>
              <p className="text-slate-600 font-bold font-poppins  hover:text-orange-500 transition-colors flex justify-center w-36  ">
                <img src="https://cdn-icons-png.flaticon.com/128/546/546394.png" alt="" className="w-5 h-5 mr-1 " /> xyz@gmail.com

              </p>
            </div>
          </div>


          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-5 ml-4">
              <a href="https://www.facebook.com/groups/travelingtheworlds/"
                target="_blank"
                rel="noopener noreferrer"
              >


                <img
                  className="hover:translate-y-[-5px] transition-transform duration-300 rounded-full cursor-pointer h-9 w-10"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="Social Icon 1"
                />
              </a>
              <a
                href="https://www.instagram.com/bestintravel/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-[-5px] transition-transform duration-300 rounded-full cursor-pointer h-10 w-10"
                  src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
                  alt="Instagram"
                />
              </a>

              <a
                href="https://x.com/traweltheworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="hover:translate-y-[-5px] transition-transform duration-300 rounded-full cursor-pointer h-10 w-10"
                  src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png"
                  alt="Social Icon 3"
                />
              </a>
            </div>
            <p className="mt-4 text-slate-600 font-bold font-poppins text-center mr-4">Discover our app</p>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-4">
              <img src="/Image/Google Play.png" alt="Google Play" />
              <img src="/Image/Play Store.png" alt="Play Store" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center border-t pt-6">
          <p className="text-slate-600 font-serif font-bold">
            All rights reserved @jadoo.com
          </p>
        </div>
      </div>


    </>
  );
};

export default FlightSearchPage;
