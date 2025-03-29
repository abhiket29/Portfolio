import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { countryCodes } from "../constants";

const ContactForm = () => {
  const recaptchaRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const captchaRef = useRef(null);

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation Functions
  const validateName = (name) => /^[A-Za-z\s]{3,50}$/.test(name);
  const validateEmail = (email) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone) => /^[0-9]{7,15}$/.test(phone);

  // Function to scroll to element and focus it
  const scrollToAndFocus = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });

      // Add a slight delay before focusing to ensure smooth scrolling completes
      setTimeout(() => {
        ref.current.focus();

        // Add and then remove a highlight class for visual feedback
        ref.current.classList.add("ring-4", "ring-red-500");
        setTimeout(() => {
          ref.current.classList.remove("ring-4", "ring-red-500");
        }, 1500);
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields first and provide targeted feedback
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      scrollToAndFocus(nameRef);
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      scrollToAndFocus(emailRef);
      return;
    }

    if (!formData.contactNumber.trim()) {
      toast.error("Please enter your phone number");
      scrollToAndFocus(phoneRef);
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      scrollToAndFocus(messageRef);
      return;
    }

    // Then validate format of filled fields
    if (!validateName(formData.name)) {
      toast.error(
        "Invalid name! Use only letters and spaces (3-50 characters)"
      );
      scrollToAndFocus(nameRef);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email format! Example: user@example.com");
      scrollToAndFocus(emailRef);
      return;
    }

    if (!validatePhone(formData.contactNumber)) {
      toast.error("Invalid phone number! Must be 7-15 digits");
      scrollToAndFocus(phoneRef);
      return;
    }

    // Verify reCAPTCHA
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      toast.error("Please verify you're not a robot");
      scrollToAndFocus(captchaRef);
      return;
    }

    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/sendSigmaEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptcha: recaptchaValue }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          contactNumber: "",
          message: "",
        });
        recaptchaRef.current.reset();
      } else {
        // setStatus("Failed to send message.");
        toast.error("Failed to send message.");
      }
    } catch (error) {
      // setStatus("An error occurred. Try again.");
      toast.error("An error occurred. Try again.");
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-5 md:px-[3.5rem] md:py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
        >
          Let&apos;s{" "}
          <span className="text-blue-400 inline-block hover:scale-110 transition-transform duration-300">
            Connect
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/20">
          <div className="p-6 md:p-8">
            <div className="md:flex md:gap-8 items-center mb-8">
              <div className="md:w-2/5 mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-center gap-2 justify-center md:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Have a project in mind?
                  </p>
                  <p className="flex items-center gap-2 justify-center md:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                    Want to collaborate?
                  </p>
                  <p className="flex items-center gap-2 justify-center md:justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Drop a message!
                  </p>
                </div>
              </div>

              <div className="md:w-3/5">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-300 ml-1 flex items-center"
                    >
                      Your Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="name"
                      ref={nameRef}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-300 ml-1 flex items-center"
                    >
                      Your Email <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="email"
                      ref={emailRef}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="contactNumber"
                      className="text-sm text-gray-300 ml-1 flex items-center"
                    >
                      Your Contact Number{" "}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="flex md:gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="px-1 md:px-3 py-3 bg-gray-700 text-white border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-24 md:w-28 transition-all duration-300"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>

                      <input
                        id="contactNumber"
                        ref={phoneRef}
                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="flex-1 px-1 md:px-4 py-3 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="text-sm text-gray-300 ml-1 flex items-center"
                    >
                      Your Message <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      id="message"
                      ref={messageRef}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 h-32 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center my-4" ref={captchaRef}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LfMaf0qAAAAAP7mSa1HnDOna1gU2BBHhz7v_Bzc"
                      theme="dark"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                  {status && (
                    <div
                      className={`text-center p-2 rounded ${
                        status.includes("success")
                          ? "bg-green-500/20 text-green-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {status}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactForm;
