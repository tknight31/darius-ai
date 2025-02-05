import React from "react";
import Chat from "./Chat";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <main className="grid grid-rows-[1fr_min-content] w-full max-w-[600px] mx-auto">
      <Welcome />
      <Chat />
    </main>
  );
};

export default Main;
