import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  // const location = useLocation();  

  const handleBackClick = () => {
    navigate("/");
  };

  const handleGoogleClick = () => {
    window.location.href = "https://www.google.com";  
  };

  return (
    <footer className="bg-gray-600 p-4 text-white w-full mt-5">
      <div className="container mx-auto text-center px-4">
        <div className="mt-6 space-x-96">
          <button
            onClick={handleGoogleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Google
          </button>
          <button
            onClick={handleBackClick}
            className="bg-gray-900 text-white px-4 py-2 rounded-md"
          >
            Back
          </button>
        </div>
        <div>
          {/* <p className="text-white mt-4">{location.pathname}</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
