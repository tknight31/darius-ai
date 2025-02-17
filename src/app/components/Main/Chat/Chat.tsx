import React from "react";
import { Message } from "ai/react";
import SendArrowIcon from "@/app/components/Icons/SendArrowIcon";
import IconButton from "@/app/components/common/IconButton";
import Messages from "./Messages";

type ChatProps = {
  messages: Message[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Chat = ({
  messages,
  input,
  handleInputChange,
  handleSubmit,
}: ChatProps) => {
  return (
    <div className="w-full h-full flex flex-col max-h-[calc(100vh-100px-50px-8rem)] px-6 overflow-hidden">
      <Messages messages={messages} />
      <form
        className="grid grid-cols-[1fr_min-content] gap-2 justify-between bg-white/30 w-full p-3 rounded-full glass"
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
