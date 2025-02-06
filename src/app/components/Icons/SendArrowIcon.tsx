import React from "react";
import { cn } from "@/utils/cn";
import { IconProps } from "@/types";

const SendArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn("", className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3.03969C0 4.25546 3.74168 7.20217 3.74168 7.20217C3.74168 7.20217 0.624748 12.1579 1.10016 12.5474C1.57557 12.9368 6.67003 11.5201 6.67003 11.5201C6.67003 11.5201 8.48547 17.0922 9.20511 17.8156C9.92476 18.5391 20.5807 4.75354 19.9751 3.28877C19.3695 1.82401 0 1.82393 0 3.03969ZM4.04232 9.85679C3.52953 9.3791 5.77381 6.71404 5.77381 6.71404C5.77381 6.71404 15.7415 3.64778 15.9556 4.26336C16.1696 4.87895 4.55511 10.3345 4.04232 9.85679Z"
        fill="currentColor"
      />
    </svg>
  )
);

SendArrow.displayName = "SendArrow";
export default SendArrow;
