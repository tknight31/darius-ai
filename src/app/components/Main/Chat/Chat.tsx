import React, { useRef, useEffect } from "react";
import { useChat } from "ai/react";
import Image from "next/image";
import SendArrowIcon from "@/app/components/Icons/SendArrowIcon";
import IconButton from "@/app/components/common/IconButton";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

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

  const renderResponse = () => {
    return (
      <div className="flex-1 p-6 pb-4 overflow-y-auto" ref={chatContainerRef}>
        {messages.map((m, i) => {
          const isUser = m.role === "user";
          const isLast = i === messages.length - 1;
          return (
            <div key={m.id} className="flex flex-cols gap-2 mb-4">
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
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col max-h-[calc(100vh-500px-50px-8rem)] overflow-hidden">
      {renderResponse()}
      <form
        className="grid grid-cols-[1fr_min-content] gap-2 justify-between bg-white/30 min-w-96 w-full p-3 rounded-full glass"
        onSubmit={handleSubmit}
      >
        <input
          className="transition bg-transparent rounded-full focus:outline-none w-full px-1 "
          name="input-field"
          type="text"
          placeholder="say something"
          value={input}
          onChange={handleInputChange}
        />
        <IconButton icon={<SendArrowIcon />} type="submit" />
      </form>
    </div>
  );
};

export default Chat;
