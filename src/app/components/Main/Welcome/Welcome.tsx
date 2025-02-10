import React from "react";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-3 text-center align-center justify-center">
      <Image
        className="mx-auto mix-blend-lighten w-[240px] mb-4"
        src="/photo.png"
        alt="ask darius"
        width={285}
        height={349}
      />
      <h1 className="text-5xl">I feel... everything.</h1>
      <p>Ask me anything.. What’s on your mind?</p>
    </div>
  );
};

export default Welcome;
