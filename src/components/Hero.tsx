import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [personalityQuoteIndex, setPersonalityQuoteIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const fullText = "E&C Engineer | Cyber Security Analyst | Full Stack Developer";

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
  const roles = ["E&C Engineer", "Cyber Security Analyst", "Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const socialLinks = [
    { name: "Github", url: "https://github.com/shanmukh7781-prog", icon: <Github size={24} /> },
    { name: "Linkedin", url: "https://www.linkedin.com/in/shanmukh-k-a361b1253", icon: <Linkedin size={24} /> },
    { name: "Mail", url: "mailto:shanmukhkommisetty2004.08@gmail.com", icon: <Mail size={24} /> },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    const personalityQuoteInterval = setInterval(() => {
      setPersonalityQuoteIndex((prev) => (prev + 1) % personalityQuotes.length);
    }, 5000);

    return () => clearInterval(personalityQuoteInterval);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
      style={{
        backgroundColor: '#0A1120',
        backgroundImage: `
          radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0),
          radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2px, transparent 0)
        `,
        backgroundSize: '100px 100px',
        color: 'white',
        animation: 'subtleFloat 20s ease-in-out infinite'
      }}
    >
      <style jsx>{`
        @keyframes subtleFloat {
          0%, 100% { background-position: 0px 0px; }
          50% { background-position: 20px 20px; }
        }
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-screen backdrop-blur-sm py-12 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-6 sm:space-y-8"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {name}
          </motion.h1>
          
          <div className="relative h-[30px] sm:h-[40px] mb-8 overflow-hidden">
            <motion.div
              animate={{ y: currentRoleIndex * -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full"
            >
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="h-[30px] sm:h-[40px] flex items-center justify-center text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text"
                >
                  {role}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-lg sm:text-xl italic bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-transparent bg-clip-text font-medium px-4 hover:scale-[1.02] transition-transform duration-300"
            >
              "{inspirationalQuotes[quoteIndex]}"
            </motion.p>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20 my-8"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 py-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-fuchsia-400 transition-all duration-300 p-3 hover:bg-white/5 rounded-full relative group"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'blur(8px)' }}
                  />
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20 my-8"></div>

            <motion.div
              key={personalityQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-center max-w-2xl mx-auto px-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <p className="text-lg md:text-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text italic mb-2 leading-relaxed font-medium">"{personalityQuotes[personalityQuoteIndex].quote}"</p>
              <p className="text-sm md:text-base bg-gradient-to-r from-sky-400 to-blue-400 text-transparent bg-clip-text font-medium">- {personalityQuotes[personalityQuoteIndex].author}</p>
            </motion.div>
          </div>
        </motion.div>
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
            className="text-fuchsia-400 animate-bounce"
          />
        </motion.div>
      )}
    </motion.div>
  );
}