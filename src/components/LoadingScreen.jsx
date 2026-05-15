import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.png"
            alt="Al Tabiaa Cooling Service"
            className="mb-6 h-24 w-auto object-contain md:h-28"
          />
          <motion.div
            className="loader-ring h-12 w-12"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          />
          <p className="mt-4 text-sm text-white/50">Loading premium experience...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
