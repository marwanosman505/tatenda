import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Contact = ({ setIsContactVisible }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [isFadingOut, setIsFadingOut] = useState(false); // State to control fade-out effect
  const [isVisible, setIsVisible] = useState(false); // State to control fade-in effect

  useEffect(() => {
    // Trigger fade-in when component mounts
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsFadingOut(true); // Trigger fade-out effect
    setTimeout(() => setIsContactVisible(false), 500); // Hide component after fade-out
  };

  const handleClose = () => {
    setIsFadingOut(true); // Trigger fade-out effect
    setTimeout(() => setIsContactVisible(false), 500); // Hide component after fade-out
  };

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
        isVisible && !isFadingOut ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>

      {/* Contact Form or Success Message */}
      <div
        className="fixed mx-auto type-container w-[90%] py-10 max-w-[600px] z-[200] bg-white rounded-[15px] shadow-lg flex justify-center items-center"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Ensures the form is centered
        }}
      >
        {isFadingOut ? (
          // Success Message
          <div className="flex flex-col items-center gap-3">
            <FaCheckCircle className="text-[#FF6A00] text-[100px] animate-bounce" />
            <h2 className="text-[30px] font-semibold text-black">
              Message Sent!
            </h2>
          </div>
        ) : (
          // Contact Form
          <form onSubmit={handleSubmit} className="space-y-6 text-[30px] px-8 py-6 w-full">
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6A00] text-gray-800"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6A00] text-gray-800"
            />

            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6A00] text-gray-800"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF6A00] text-white py-3 rounded-lg font-semibold hover:bg-[#e05900] transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
