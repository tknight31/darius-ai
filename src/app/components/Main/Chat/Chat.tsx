import React, { useRef, useEffect } from "react";
import { useChat } from "ai/react";

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
      <div className="pb-4">
        {messages.map((m, i) => {
          return (
            <div key={m.id}>
              <p>{m.content}</p>
              {i < messages.length - 1 && <hr />}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full" ref={chatContainerRef}>
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
        <button className="bg-white/20 p-2 rounded-full glass" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
