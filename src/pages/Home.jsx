import React from "react";

import useScrollAnimation from "../useScrollAnimation";
import { Link, Links } from "react-router-dom";



const Home = () => {
  useScrollAnimation()
  return (

    <>
      <div class="relative overflow-hidden justify-center flex-col min-h-screen flex  px-10 pb-10 sm:mx-auto sm:px-22 ">

        <div className="md:flex justify-center mt-8 md:ml-6">

          <div className=" mt-8 md:mt-24 px-4 md:px-0">
            <p className="text-[#DF6951] font-bold  md:text-left animate-on-scroll">
              BEST DESTINATION AROUND THE WORLD
            </p>
            <p className="text-blue-950 mt-6 font-volkhov font-bold text-4xl md:text-7xl  md:text-left animate-on-scroll">
              Travel, enjoy <br /> and live a new <br /> and full life
            </p>
            <p className="font-medium mt-6 md:mt-9 space-y-6 py-3 text-base leading-7 text-[#5E6282] md:text-left animate-on-scroll">
              Built Wicket longer admire do barton vanity itself do in it.
              <br />
              Preferred to sportsmen it engrossed listening. Park gate <br />
              sell they west hard for the.
            </p>
            <div className="flex justify-center md:justify-start items-center mt-6 md:mt-14 space-x-6">
              <button className="w-36 h-12 rounded-md bg-[#F1A501] text-white font-medium cursor-pointer text-center animate-on-scroll hover:translate-y-[-3px] transition-transform">
                Find out more
              </button>
              <div className="flex items-center space-x-2 cursor-pointer animate-on-scroll hover:translate-y-[-3px] transition-transform">
                <img src="/Image/Play button.png" alt="Play Button" className="h-10 w-10" />
                <span className="text-[#5E6282] font-medium">Play Demo</span>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 h-auto mt-12 md:mt-0 flex justify-center items-center ">
            <img className="w-full" src="/Image/Decore (2).png" alt="Decor" />/
            <img
              className="absolute top-[43%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/4 z-40 mt-3 animate-slideIn "
              src="/Image/Traveller 1.png"
              alt="Traveller"
            />
            <img
              className="absolute top-[15%] left-[32%] transform -translate-x-1/2 -translate-y-1/2 animate-slideIn"
              src="/Image/Plan.png"
              alt="Plan"
            />
            <img
              className="absolute top-[22%] left-[86%] transform -translate-x-1/2 -translate-y-1/2 animate-slideIn"
              src="/Image/Plan.png"
              alt="Plan"
            />
          </div>
        </div>

        {/* -----------------------------------------||---------------------------------------------------- */}



        {/* --------------------------------------CATEGORY-------------------------------------------- */}


        <div className="md:flex justify-center items-center animate-on-scroll gap-12 md:gap-48 mt-32">
          <div className="text-center md:text-left md:ml-72">
            <p className="text-[#5E6282] flex text-center justify-center font-medium">CATEGORY</p>
            <h2 className="text-[#14183E] mt-5 font-inika text-3xl md:text-5xl font-bold">
              WE OFFER BEST SERVICES
            </h2>
          </div>

          <div className="mt-8">
            <img src="\Image\calender.png" alt="Calendar Icon" className="mx-auto md:mx-0" />
          </div>
        </div>


        <div className="md:flex justify-center  text-center mt-28 gap-16 h-auto md:h-96 md:ml-6 animate-on-scroll">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-28">


            <div className="h-52 w-48 flex flex-col items-center justify-center text-center">
              <img className="h-16" src="\Image\Chatari.png" alt="Chatari" />
              <p className="text-[#1E1D4C] font-medium text-lg md:text-xl mt-8">Calculated Weather</p>
              <p className="font-medium text-[#5E6282] text-sm md:text-base mt-1">
                Built Wicket longer <br /> admire do barton <br /> vanity itself do in it.
              </p>
            </div>

            <div className="relative">

              <div className="relative z-50 h-64 w-56 bg-white mb-10 flex flex-col items-center justify-center text-center rounded-[35px] shadow-xl">
                <img className="h-24" src="\Image\plan 2.png" alt="Plan" />
                <p className="text-[#1E1D4C] font-medium text-lg md:text-xl mt-4">Best Flight</p>
                <p className="font-medium text-[#5E6282] text-sm md:text-base mt-1">
                  Built Wicket longer <br /> admire do barton <br /> vanity itself do in it.
                </p>

                <img
                  className="absolute -z-10 top-[80%] right-[83%] bg-white"
                  src="\Image\Rectangle 157.png"
                  alt="Rectangle"
                />
              </div>
            </div>
          </div>


          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-28 mt-10 md:mt-0">
            <div className="h-52 w-48 flex flex-col items-center justify-center text-center">
              <img className="h-16" src="\Image\Mick.png" alt="Mick" />
              <p className="text-[#1E1D4C] font-medium text-lg md:text-xl mt-8">Engrossed Listening</p>
              <p className="font-medium text-[#5E6282] text-sm md:text-base mt-1">
                Engrossed listening. <br /> Park gate sell they <br /> west hard for the.
              </p>
            </div>
            <div className="h-52 w-48 flex flex-col items-center justify-center text-center">
              <img className="h-16" src="\Image\Setting.png" alt="Setting" />
              <p className="text-[#1E1D4C] font-medium text-lg md:text-xl mt-8">Calculated Weather</p>
              <p className="font-medium text-[#5E6282] text-sm md:text-base mt-1">
                Built Wicket longer <br /> admire do barton <br /> vanity itself do in it.
              </p>
            </div>
          </div>
        </div>


        {/* -----------------------------------------||---------------------------------------------------- */}


        {/* ---------------------------------------- TOP SELLING ------------------------------------------------- */}

        <div className="container mx-auto px-4 ">

          <div className="animate-on-scroll text-center">
            <div className=" text-[#5E6282] font-medium ">TOP SELLING</div>
            <div div className=" text-[#14183E] mt-4 font-inika text-5xl font-bold">TOP DESTINATION</div>
          </div>

          <div className="grid sm:grid-cols-2 justify-items-center lg:grid-cols-3 pt-16 animate-on-scroll">
            <div className=" max-w-sm  transform transition-transform duration-500 hover:scale-105 hover:brightness-90 ">
              <div className="h-86 w-60 mb-30 rounded-xl shadow-xl text-[#FFE6E3]">
                <img
                  src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Rome, Italy"
                  className="mb-6 h-60 w-64 rounded-xl"
                />

                <div className="text-center font-medium text-[#5E6282]">
                  Rome, Italy <span className="ml-9"> $5.42k</span>

                  <div className="ml-2 flex text-center p-3">
                    <div >
                      <img
                        className="my-3 hover:translate-y-[-2px] transition-transform duration-300"
                        src="\Image\navigation 1.png"
                        alt="Navigation Icon"
                      />
                    </div>
                    <div className="ml-2 mt-2">10 day trip</div>
                  </div>
                </div>
              </div>

            </div>

            <div className=" max-w-sm transform transition-transform duration-500 hover:scale-105 hover:brightness-90 ">
              <div className=" h-86  w-60 mb-30  rounded-xl  shadow-xl text-[#FFE6E3] "  >
                <img src="https://images.pexels.com/photos/372490/pexels-photo-372490.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
                  className=" mb-6 h-60 w-64 rounded-xl" />


                <div className=" text-center font-medium  text-[#5E6282]">
                  Landon,UK <span className="ml-9"> $4,2k</span>

                  <div className=" flex text-center p-3 ">
                    <div>
                      <img className=" ml-4 my-3 hover:translate-y-[-2px] transition-transform duration-300 " src="\Image\navigation 1.png" alt="" />
                    </div>
                    <div className="ml-2 mt-2 ">12 day trip</div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" -sm transform transition-transform duration-500 hover:scale-105 hover:brightness-90 ">
              <div className=" h-86  w-60 mb-30  rounded-xl  shadow-xl text-[#FFE6E3] "  >
                <img src="https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
                  className=" mb-6 h-60 w-64 rounded-xl" />


                <div className=" text-center font-medium  text-[#5E6282]">
                  Full Europe <span className="ml-9"> $10,2k</span>

                  <div className=" flex text-center p-3 ">
                    <div>
                      <img className=" ml-4 my-3 hover:translate-y-[-2px] transition-transform duration-300 " src="\Image\navigation 1.png" alt="" />
                    </div>
                    <div className="ml-2 mt-2 ">28 day trip</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* -----------------------------------------||---------------------------------------------------- */}

        {/* --------------------------------------------Booking-------------------------------------------------- */}

        <div className="animate-on-scroll">

          <div>
            <p className="flex justify-center text-[#5E6282] font-medium mt-24">Booking</p>
            <p className="flex justify-center text-[#14183E] mt-2 font-inika text-5xl font-bold">
              Booking Wave
            </p>
          </div>

          <div className="md:flex justify-center gap-52 mt-16 px-4 sm:px-8 md:px-16">
            <div>
              <p className="text-[#5E6282] font-medium mb-4">EASY AND FAST</p>
              <h2 className="text-[#14183E] font-volkhov  md:text-6xl font-bold">
                Book your next trip <br />
                in 3 easy steps
              </h2>

              <div className="flex items-center mt-12">
                <img src="/Image/Group 7.png" alt="Choose Destination Icon" />
                <div className="ml-5">
                  <p className="text-[#5E6282] font-bold">Choose Destination</p>
                  <p className="text-[#5E6282] font-poppins">
                    Find the perfect place that aligns with your interests and travel goals.
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-12">
                <img src="/Image/Group 12.png" alt="Make Payment Icon" />
                <div className="ml-5">
                  <p className="text-[#5E6282] font-bold">Make Payment</p>
                  <p className="text-[#5E6282] font-poppins">
                    Complete your booking securely and effortlessly online.
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-12">
                <img src="/Image/Group 11.png" alt="Reach Airport Icon" />
                <div className="ml-5">
                  <p className="text-[#5E6282] font-bold">Reach Airport on Selected Date</p>
                  <p className="text-[#5E6282] font-poppins">
                    Arrive at the airport on your chosen date for a smooth check-in and journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -z-10 right-0">
                <img src="/Image/Ellipse 8.png" alt="Ellipse Background" />
              </div>

              <div className="relative z-10 mt-12 md:mt-0 h-auto w-72 p-6 flex flex-col rounded-[25px] shadow-lg bg-white">
                <img src="/Image/Bookingimg.jpg" alt="Trip to Greece" className="w-60 mx-auto" />
                <p className="text-[#080809] mt-6 font-bold">Trip to Greece</p>
                <p className="text-[#5E6282] font-poppins mt-3">14-29 June | by Robbin Joseph</p>

                <div className="mt-3 flex gap-2">
                  <img
                    className="hover:translate-y-[-7px] transition-transform duration-300 cursor-pointer"
                    src="/Image/LEAF.png"
                    alt="Leaf Icon"
                  />
                  <img
                    className="hover:translate-y-[-7px] transition-transform duration-300 cursor-pointer"
                    src="/Image/map icon.png"
                    alt="Map Icon"
                  />
                  <img
                    className="hover:translate-y-[-7px] transition-transform duration-300 cursor-pointer"
                    src="/Image/send.png"
                    alt="Send Icon"
                  />
                </div>

                <div className="flex items-center gap-3 mt-12">
                  <img src="/Image/building 1.png" alt="Building Icon" />
                  <p className="text-[#5E6282] font-medium">24 people going</p>
                  <img
                    className="ml-auto hover:translate-y-[-7px] transition-transform cursor-pointer"
                    src="/Image/dil img.png"
                    alt="Like Icon"
                  />
                </div>
              </div>

              <div className="absolute top-[16rem] right-[-8rem] z-50 p-4 flex items-center gap-4 rounded-[25px] shadow-md bg-white w-64">
                <img src="/Image/Mini img.png" alt="Mini Trip Image" className="w-12 h-12" />
                <div>
                  <p className="text-[#5E6282] font-poppins">Ongoing</p>
                  <p className="font-bold mt-1">Trip to Rome</p>
                  <p className="mt-2">
                    <span className="text-[#8A79DF]">40%</span> Completed
                  </p>
                  <img className="mt-2" src="/Image/Group 3.png" alt="Progress Bar" />
                </div>

              </div>
              <Link to="booking">

                <img src="https://cdn-icons-png.flaticon.com/128/2268/2268536.png" alt="" className=" w-12 mt-12 " />
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------- AboutUS--------------------------------------------------- */}


        {/* -----------------------------------------||---------------------------------------------------- */}
        <div className=" md:flex justify-center gap-52 mt-36 animate-on-scroll">
          <div className=" mt-10">

            <p className="font-medium text-[#5E6282] "> TESTIMONIALS</p>
            <p className=" text-[#14183E] mt-5 font-volkhov text-5xl font-bold">What people Say <br />
              about Us.</p>

            <img className="  ml-2 mt-14" src="\Image\Group 61.png" alt="" />
          </div>


          <div className="relative h-96 flex justify-center items-center md:-mt-0 ">

            <img
              src="\Image\Image.png"
              alt=""
              className=" mb-72 hover:scale-105 hover:brightness-100"
            />
            <div className="absolute z-50 w-96 p-6 flex flex-col shadow-xl  bg-white rounded-lg">
              <p className="text-[#5E6282] font-poppins">
                “On the Windows talking painted pasture yet its
                express parties use. Sure last upon he same
                as knew next. Of believed or diverted no.”
              </p>
              <p className="mt-10 text-[#5E6282] font-bold">Harshal Yesikar</p>
              <p className="text-[#5E6282]">Indore,India</p>
            </div>

            <div className=" z-10 h-40 w-96 p-10 flex flex-col shadow-[0_0_2px_rgba(20,10,10,0.10)] bg-white rounded-lg mt-52 ">
              <p className="text-[#5E6282] font-volkhov">
              </p>
              <p className="mt-16 text-[#5E6282] font-bold">Praful Marathe</p>
              <p className="text-[#5E6282]"> Khetia,Pansemal</p>
            </div>

          </div>
        </div>


        <div className=" ml-5 p-32 flex flex-wrap  items-center gap-24 animate-on-scroll  ">
          <img className=" transform transition-transform duration-500 hover:scale-105 hover:brightness-90" src="\Image\image 27.png" alt="" />
          <img className=" transform transition-transform duration-500 hover:scale-105 hover:brightness-90" src="\Image\image 28.png" alt="" />
          <img className=" transform transition-transform duration-500 hover:scale-105 hover:brightness-90" src="\Image\image 29.png" alt="" />
          <img className=" transform transition-transform duration-500 hover:scale-105 hover:brightness-90" src="\Image\image 30.png" alt="" />
          <img className=" transform transition-transform duration-500 hover:scale-105 hover:brightness-90" src="\Image\image 31.png" alt="" />
        </div>

        {/* --------------------------------------------------------------------------------------bg-[#eeedf3]--------- */}

        <div className="mx-auto flex flex-col md:flex-row justify-center items-center h-auto md:min-h-[400px] w-[98%] md:w-[85%] rounded-tl-3xl shadow-lg animate-on-scroll">


          <div className="flex justify-center w-full md:w-1/2 h-64 md:h-[450px] rounded-tl-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://img.freepik.com/premium-vector/travel-concept-with-suitcase-sunglasses-hat-camera-blue-background-flying-plane-back_255343-81.jpg?semt=ais_hybrid"
              alt="Travel concept"
            />
          </div>

          <div className="text-center md:text-left w-full md:w-1/2 mt-6 md:mt-0 px-4 sm:px-6 md:px-12">

            <div className="px-2 sm:px-6 md:ml-11">
              <p className="text-lg sm:text-xl md:text-4xl font-poppins font-semibold leading-tight">
                Get special offers, and <br />
                <span className="md:ml-7">more from Traveler</span>
              </p>
              <p className="text-[#5E6282] text-sm sm:text-base md:text-lg leading-tight mt-3 sm:mt-5 md:ml-10">
                Subscribe to see secret deals and prices <br />
                <span className="sm:ml-4 md:ml-9">drop the moment you sign up!</span>
              </p>
            </div>


            <div className="flex justify-center ml-16 md:justify-start relative w-full sm:w-[350px] md:w-[420px] mt-6 sm:mt-10 md:mt-16 px-2 sm:px-6">
              <input
                className="w-full h-12 sm:h-14 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fdbd33] shadow-sm transition-all duration-200"
                type="email"
                placeholder="Your Email"
                aria-label="Enter your email"
              />
              <button
                className="absolute top-1/2 right-4 sm:right-6 md:right-8 -translate-y-1/2 w-24 sm:w-28 h-9 sm:h-10 bg-[#fdbd33] text-white font-medium rounded-full cursor-pointer text-center hover:bg-[#e6a800] hover:shadow-md transition-all duration-200 ease-in-out"
              >
                Subscribe
              </button>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------- */}
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

export default Home;
