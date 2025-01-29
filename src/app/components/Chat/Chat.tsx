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
      <div>
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
    <div ref={chatContainerRef}>
      {renderResponse()}
      <form onSubmit={handleSubmit}>
        <input
          name="input-field"
          type="text"
          placeholder="say something"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
