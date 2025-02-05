import React from "react";
import Chat from "./Chat";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <main className="grid grid-rows-[1fr_min-content] mx-auto">
      <Welcome />
      <Chat />
    </main>
  );
};

export default Main;
