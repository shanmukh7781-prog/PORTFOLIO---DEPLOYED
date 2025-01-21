import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

interface Book {
  title: string;
  author: string;
  category: string;
  description: string;
  images: string[];
  amazonLink: string;
}

const books: Book[] = [
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    description: "Rules for focused success in a distracted world",
    amazonLink: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
    images: [
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    category: "Technology",
    description: "Your journey to mastery in software development",
    amazonLink: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    images: [
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Technology",
    description: "A handbook of agile software craftsmanship",
    amazonLink: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    images: [
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    description: "Tiny changes, remarkable results",
    amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    description: "Timeless lessons on wealth, greed, and happiness",
    amazonLink: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Relentless",
    author: "Tim S. Grover",
    category: "Sports & Mindset",
    description: "From good to great to unstoppable",
    amazonLink: "https://www.amazon.com/Relentless-Good-Great-Unstoppable-Grover/dp/1476714207",
    images: [
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business & Technology",
    description: "Notes on startups, or how to build the future",
    amazonLink: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    images: [
      "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    category: "Mindfulness",
    description: "Train your mind for peace and purpose every day",
    amazonLink: "https://www.amazon.com/Think-Like-Monk-Train-Purpose/dp/1982134488",
    images: [
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    category: "Strategy",
    description: "Ancient wisdom for modern success",
    amazonLink: "https://www.amazon.com/Art-War-Sun-Tzu/dp/1599869772",
    images: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    category: "Technology & Business",
    description: "When new technologies cause great firms to fail",
    amazonLink: "https://www.amazon.com/Innovators-Dilemma-Technologies-Management-Innovation/dp/1633691780",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    category: "Psychology",
    description: "The new psychology of success",
    amazonLink: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
    images: [
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business & Technology",
    description: "How constant innovation creates radically successful businesses",
    amazonLink: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export default function Books() {
  const [imageIndices, setImageIndices] = useState<{ [key: string]: number }>(
    books.reduce((acc, book) => ({ ...acc, [book.title]: 0 }), {})
  );
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev };
        books.forEach(book => {
          newIndices[book.title] = (prev[book.title] + 1) % book.images.length;
        });
        return newIndices;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const categories = Array.from(new Set(books.map(book => book.category)));
  const filteredBooks = selectedCategory 
    ? books.filter(book => book.category === selectedCategory)
    : books;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Books I Recommend</h2>
          <p className="text-gray-600 text-lg">A curated collection that shaped my perspective</p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${!selectedCategory ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300
                ${hoveredBook === book.title ? 'scale-102' : 'scale-100'}`}
              onMouseEnter={() => setHoveredBook(book.title)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="relative h-40 sm:h-48 bg-gray-200 overflow-hidden">
                <motion.img
                  key={imageIndices[book.title]}
                  src={book.images[imageIndices[book.title]]}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300
                  ${hoveredBook === book.title ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-cyan-50 text-cyan-600 rounded-full">
                    {book.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-2 italic">by {book.author}</p>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{book.description}</p>
                
                <motion.a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-800 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={18} />
                  <span className="text-sm font-medium">Read More</span>
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
