import { motion } from 'framer-motion';

export function Content() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <div className="max-w-4xl text-center z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bharat Singh Parihar
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Full Stack Developer & Creative Engineer
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="mailto:bharat3645@gmail.com"
            className="pointer-events-auto bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Get in touch
          </a>
          <a 
            href="#projects"
            className="pointer-events-auto border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </div>
  );
}