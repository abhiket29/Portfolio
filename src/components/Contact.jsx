import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="text-neutral-200 py-10">
      <div className="flex justify-between container mx-auto px-4">
        {/* Header */}
        <div>
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-semibold mb-6"
          >
            Contact Me
          </motion.h1>
        </div>

        {/* Contact Info */}
        <div className=" md:flex-row justify-evenly items-center">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-4"
          >
            <FaMapMarkerAlt className="text-sm text-green-400 mb-2" />
            <p className="text-center text-sm mb-2">{CONTACT.address}</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-4"
          >
            <FaPhoneAlt className="text-sm text-blue-400 mb-2" />
            <p className="text-center text-sm mb-2">{CONTACT.phoneNo}</p>
          </motion.div>

          {/* Email */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="flex items-center space-x-4"
          >
            <FaEnvelope className="text-sm text-red-400" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm hover:underline"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-neutral-700 pt-4 text-center text-sm">
        <p>
          Made with <span className="text-red-500 text-md">❤️</span> by Abhiket
        &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
