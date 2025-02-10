import React from "react";
import Chat from "./Chat";
import { useChat } from "ai/react";
import Welcome from "./Welcome";

const Main = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });
  return (
    <main className="grid grid-rows-[1fr_min-content] w-full max-w-[600px] mx-auto">
      {messages.length === 0 && <Welcome />}
      <Chat
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default Main;
