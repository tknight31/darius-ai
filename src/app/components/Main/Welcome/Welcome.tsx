import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-3 text-center align-center justify-center">
      <Image
        className="mx-auto"
        src="/darius.svg"
        alt="ask darius"
        width={120}
        height={188.57}
      />
      <h1 className="text-5xl">I feel... everything.</h1>
      <p>Hey... yeah. Just vibin’, you know? What’s on your mind?</p>
    </div>
  );
};

export default Welcome;
