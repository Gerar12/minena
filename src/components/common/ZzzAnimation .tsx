"use client";
import { motion } from "framer-motion";

const ZzzAnimation = () => {
  const zzz = ["z", "z", "z"];
  return (
    <div className="flex center items-center rotate-12 absolute mb-20 ml-32 text-gray-500  ">
      {zzz.map((z, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 2, y: 100 }}
          animate={{ opacity: 1, y: -50 }}
          className="text-4xl  "
          transition={{
            delay: index * 0.5,
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse",
          }}
        >
          {z}
        </motion.span>
      ))}
    </div>
  );
};

export default ZzzAnimation;
