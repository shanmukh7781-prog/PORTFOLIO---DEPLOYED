import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <motion.section 
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Technology representation" 
                className="rounded-lg shadow-xl w-full transition-all duration-300 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg group-hover:from-black/40 transition-all duration-300"></div>
            </motion.div>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity representation" 
                className="rounded-lg shadow-xl w-full transition-all duration-300 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg group-hover:from-black/40 transition-all duration-300"></div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                As a passionate <span className="text-blue-600 font-semibold">Cyber Security Analyst</span> and <span className="text-cyan-600 font-semibold">Full Stack Developer</span>, I specialize in building secure and scalable applications while ensuring robust security measures. My expertise spans across various domains of cyber security, including penetration testing, vulnerability assessment, and ethical hacking.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                With a strong foundation in <span className="text-blue-600 font-semibold">Electronics and Communication Engineering</span>, I bring a unique perspective to problem-solving and system security. I'm particularly interested in the intersection of hardware security and software development.
              </motion.p>
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Currently focused on advancing my knowledge in emerging cyber security threats and countermeasures, while developing innovative solutions that prioritize both functionality and security.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}