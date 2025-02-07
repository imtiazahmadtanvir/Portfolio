import { motion } from "framer-motion";

const ContactInformation = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="px-8 lg:w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Information
        </motion.h2>

        <div className="text-gray-300 mb-8">
          <p>If you would like to get in touch, feel free to contact me directly through any of the following options:</p>
        </div>

        <div className="text-left space-y-6">
          {/* Email */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-lg font-semibold mr-3">Email:</span>
            <a
              href="mailto:your-email@example.com"
              className="text-green-500 hover:text-green-300"
            >
              imtiaztanveer07@gmail.com
            </a>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-lg font-semibold mr-3">Phone:</span>
            <a
              href="tel:+88801888225687"
              className="text-green-500 hover:text-green-300"
            >
01888225687            </a>
          </motion.div>

          {/* WhatsApp Number */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-lg font-semibold mr-3">WhatsApp:</span>
            <a
              href="https://wa.me/1234567890"
              className=" text-green-500 hover:text-green-300"
            >01888225687            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
