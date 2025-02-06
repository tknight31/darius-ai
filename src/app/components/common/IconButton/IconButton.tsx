import React from "react";
import { cn } from "@/utils/cn";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
};

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={cn("bg-white/20 p-2 rounded-full transition glass", className)}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
