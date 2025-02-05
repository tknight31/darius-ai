import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-5 items-center justify-between flex border-b border-white/30">
      <Image src="/logo.svg" alt="logo" width={140} height={54.35} />
      <button className="bg-white/20 rounded-full px-3 py-1 text-2xl">i</button>
    </header>
  );
};

export default Header;
