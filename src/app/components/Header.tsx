import React from "react";
import Image from "next/image";
import IconButton from "./common/IconButton";
import InfoIcon from "./Icons/InfoIcon";

const Header = () => {
  return (
    <header className="p-5 items-center justify-between flex border-b border-white/30">
      <Image src="/logo.svg" alt="logo" width={140} height={54.35} />
      <IconButton icon={<InfoIcon />} />
    </header>
  );
};

export default Header;
