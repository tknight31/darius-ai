import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Message } from "ai/react";

const Messages = ({ messages }: { messages: Message[] }) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // keep the chat in the viewport
  const scroll = () => {
    const { offsetHeight, scrollHeight, scrollTop } =
      chatContainerRef.current as HTMLDivElement;

    if (scrollHeight >= offsetHeight + scrollTop) {
      chatContainerRef.current?.scrollTo(0, scrollHeight + 200);
    }
  };

  useEffect(() => {
    scroll();
  }, [messages]);

  return (
    <div
      className="flex flex-col flex-1 gap-4 p-6 overflow-y-auto"
      ref={chatContainerRef}
    >
      {messages.map((m, i) => {
        const isUser = m.role === "user";
        const isLast = i === messages.length - 1;
        const isFirst = i === 0;
        return (
          <motion.div
            key={m.id}
            className={`flex flex-cols gap-2 ${isFirst && "mt-auto"}`}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 20,
              bounce: 0.1,
            }}
            layout
          >
            <Image
              className="rounded-full size-10 opacity-80"
              src={isUser ? "/user-avatar.png" : "/darius-avatar.jpg"}
              alt={isUser ? "user" : "darius"}
              width={80}
              height={80}
            />
            <div>
              <p className="text-white/70 text-xs mb-[2px]">
                {isUser ? "You" : "Darius"}
              </p>
              <p
                className={`p-2 ${
                  isUser ? "glass" : "dark-glass"
                } inline-block rounded-xl backdrop-blur-sm shadow-md ${
                  !isLast && "mb-4"
                }`}
              >
                <span
                  className={
                    isUser
                      ? "text-white"
                      : "bg-gradient-to-bl from-yellow-600 to-yellow-200 bg-clip-text text-transparent leading-normal"
                  }
                >
                  {m.content}
                </span>
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Messages;
