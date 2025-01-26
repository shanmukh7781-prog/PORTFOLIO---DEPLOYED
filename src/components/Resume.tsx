import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Resume() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    setError(false);

    // Simulate a download process (you can replace this with actual logic if needed)
    const link = document.createElement('a');
    link.href = "https://drive.google.com/drive/folders/102P87sa97JIpwrnpnhT_Pkif_SWhiONH?usp=sharing";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Simulate a delay for the download process
    setTimeout(() => {
      setLoading(false);
      // You can add logic here to check if the download was successful
      // For now, we assume it always succeeds
    }, 2000);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>

        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-8">
            Download my resume to learn more about my qualifications and experience.
          </p>
          
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download my resume"
          >
            {loading ? (
              <span>Loading...</span> // Loading state
            ) : (
              <>
                <Download className="mr-2" size={20} />
                Download Resume
              </>
            )}
          </motion.button>

          {error && <p className="text-red-500 mt-2">Failed to download. Please try again.</p>}
        </motion.div>
      </div>
    </section>
  );
}
