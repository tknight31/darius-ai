import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col gap-3 text-center align-center justify-center"
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Image
          className="mx-auto mix-blend-lighten w-[240px] mb-4"
          src="/photo.png"
          alt="ask darius"
          width={285}
          height={349}
        />
        <motion.h1
          className="text-5xl"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          I feel... everything.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ask me anything.. What’s on your mind?
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Welcome;
