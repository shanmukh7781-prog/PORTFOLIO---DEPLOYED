import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Award className="text-blue-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-semibold mb-4">View My Certifications</h3>
            <p className="text-gray-600 mb-6">
              Check out my professional certifications and badges on LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/shanmukh-k-a361b1253"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Certifications <ExternalLink className="ml-2" size={20} />
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Tip: Once on my profile, click on "Show credentials" to view all certifications
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}