// eslint-disable-next-line no-unused-vars
import React from "react";
// import Group 72 from "../assets/Group 72.svg";
import { useState } from "react";
import { countryCodes } from "../constants";
import Footer from "./Footer";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    countryCode: "ind", // Default country code (India)
    countryDialCode: "+91", // Default dial code (India)
    contactNumber: "",
    name: "",
    email: "",
    message: "",
    serviceType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.contactNumber ||
      !formData.message ||
      !formData.serviceType
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setStatus("");
    setIsSending(true);

    const dataToSend = {
      ...formData,
    };

    try {
      const response = await fetch("/api2/sendSigmaEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({
          countryCode: "", // Default country code (India)
          countryDialCode: "", // Default dial code (India)
          contactNumber: "",
          name: "",
          email: "",
          message: "",
          serviceType: "",
        });
        // setIsYesChecked("");
        // setIsNoChecked("");
        // setIsPrivacyChecked("");
        toast.success("Email sent successfully!");
      } else {
        setStatus(`Failed to send email: ${data.message}`);
        toast.error(`Failed to send email: ${data.message}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === e.target.value
    );

    if (selectedCountry) {
      setFormData((prevData) => ({
        ...prevData,
        countryCode: selectedCountry.code,
        countryDialCode: selectedCountry.dialCode,
      }));
    }
  };

  return (
    <div>
      <div className="border-b border-neutral-900 pb-4 px-4 md:px-[8rem]">
        {/* Contact Us Section */}
        <div
          id="contact-section"
          className="lg:pt-[8rem] md:pt-[3.5rem] relative flex flex-col items-center justify-center sm:py-0 md:py-16 px-4 md:px-8 lg:px-20"
        >
          {/* "Let's Talk!" Image */}
          <img
            src="{Group 72.svg}"
            alt="Let's Talk!"
            className="md:absolute md:top-[-1rem] lg:top-[1rem] md:left-[4rem] lg:left-[8rem] w-100 md:w-[28rem] lg:w-[40rem] sm:mb-[-1rem] transform rotate-[-1deg]"
          />

          {/* Contact Form Container */}
          <div className="max-w-7xl w-full bg-[#502189] rounded-2xl p-6 md:p-10 lg:p-14 flex flex-col md:flex-row gap-10 shadow-lg">
            {/* Left Text Section */}
            <div className="flex-1 flex items-center justify-center text-white font-bold text-3xl md:text-6xl text-start md:font-[] tracking-wider lg:leading-normal">
              <div>
                <p>Your Move,</p>
                <p>Reach Out!</p>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="flex-1">
              <form className="space-y-5 " onSubmit={handleSubmit}>
                {/* Name Field */}
                <input
                  type="text"
                  required
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />

                {/* Email Field */}
                <input
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />

                {/* Contact Number Field */}
                <div className="relative w-full bg-[#502189]">
                  <div className="flex items-center rounded-lg px-3 h-12 bg-[#502189]">
                    <span className="flex items-center gap-2 border-r border-gray-300 pr-2 ">
                      <select
                        value={formData.countryCode}
                        onChange={handleCountryChange}
                        className="bg-transparent text-white bg-[#502189] focus:outline-none"
                      >
                        {countryCodes.map((country) => (
                          <option
                            className=" text-black bg-[#502189]"
                            key={country.code}
                            value={country.code}
                          >
                            {country.code.toUpperCase()} {country.dialCode}
                          </option>
                        ))}
                      </select>
                    </span>

                    <input
                      type="tel"
                      required
                      placeholder="Contact"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          contactNumber: e.target.value,
                        }))
                      }
                      className="w-full h-full px-3 placeholder-white text-white focus:outline-none bg-[#502189]"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  className="input-field h-32 text-white"
                ></textarea>
                {status && <p className="text-sm text-gray-700">{status}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 text-white font-medium text-lg rounded-lg bg-blue-900 hover:bg-blue-700 transition"
                >
                  {isSending ? (
                    <div className="flex justify-center items-center">
                      <ClipLoader
                        color="#ffffff"
                        loading={isSending}
                        size={24}
                      />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Tailwind Styles */}
          <style jsx>{`
            .input-field {
              width: 100%;
              padding: 12px;
              border-radius: 6px;
              border: none;
              background: rgba(255, 255, 255, 0.2);
              color: white;
              outline: none;
            }

            .input-field::placeholder {
              color: rgba(255, 255, 255, 0.8);
            }

            .radio-btn {
              width: 18px;
              height: 18px;
              accent-color: white;
            }
          `}</style>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
