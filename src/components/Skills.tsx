import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Django", "Java", "Python","Flask"]
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MySQL", "PostgreSQL", "MongoDB","Postman"]
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: ["Git", "Docker", "AWS", "Cybersecurity"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-all duration-300"
            >
              <div className="text-4xl mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <motion.ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center space-x-2"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-gray-700">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}