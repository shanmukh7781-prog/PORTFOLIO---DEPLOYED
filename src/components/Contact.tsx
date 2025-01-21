import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">Bhimavaram, West Godavari</p>
                    <p className="text-gray-600">Andhra Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:shanmukhkommisetty2004.08@gmail.com" className="text-gray-600 hover:text-cyan-600 transition">
                      shanmukhkommisetty2004.08@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+919390461622" className="text-gray-600 hover:text-cyan-600 transition">
                      +91 939 046 1622
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Lazy load map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full h-[300px]">
                {!isMapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-gray-500">Loading map...</div>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61136.41367833677!2d81.49760641744386!3d16.544883099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e8b%3A0x4eed21243d2dcfed!2sBhimavaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1705837326130!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;