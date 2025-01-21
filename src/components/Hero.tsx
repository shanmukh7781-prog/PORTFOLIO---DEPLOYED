import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [personalityQuoteIndex, setPersonalityQuoteIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const roles = [
    "E&C Engineer",
    "Full Stack Developer",
    "Cyber Security Analyst"
  ];

  const inspirationalQuotes = [
    "Crafting Digital Solutions with Precision",
    "Securing Tomorrow's Technology Today",
    "Where Innovation Meets Security",
    "Building Robust & Scalable Systems",
    "Transforming Ideas into Reality",
    "Ethical Hacking for a Safer Future",
    "Engineering Excellence in Every Line"
  ];

  const personalityQuotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In a world of change, the learners shall inherit the earth.", author: "Eric Hoffer" },
    { quote: "Every great developer you know got there by solving problems they were unqualified to solve.", author: "Patrick McKenzie" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" }
  ];

  const name = "Shanmukh K";

  useEffect(() => {
    // Reduce animation frequency on mobile
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 8000); // Increased interval

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPersonalityQuoteIndex((prev) => (prev + 1) % personalityQuotes.length);
    }, 10000); // Increased interval

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // Increased interval

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
        >
          {name}
        </motion.h1>

        <div className="relative h-[30px] sm:h-[40px] mb-8 overflow-hidden">
          <motion.div
            animate={{ y: currentRoleIndex * -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full"
          >
            {roles.map((role, index) => (
              <div
                key={index}
                className="h-[30px] sm:h-[40px] flex items-center justify-center text-lg sm:text-xl md:text-2xl font-medium text-white/90"
              >
                {role}
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={quoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-lg italic text-cyan-400 mb-8"
          >
            "{inspirationalQuotes[quoteIndex]}"
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-cyan-400 transition-colors p-2 hover:bg-white/10 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={personalityQuoteIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto px-4"
          >
            <p className="text-lg md:text-xl text-gray-300 italic mb-2 leading-relaxed">
              "{personalityQuotes[personalityQuoteIndex].quote}"
            </p>
            <p className="text-sm md:text-base text-cyan-400 font-medium">
              - {personalityQuotes[personalityQuoteIndex].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {showScrollIndicator && (
        <motion.div 
          className="absolute bottom-8"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown 
            size={32} 
            className="text-cyan-400 animate-bounce"
          />
        </motion.div>
      )}
    </section>
  );
}