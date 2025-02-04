import React from "react";
import Chat from "./Chat";

const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 bg-red-100 items-center sm:items-start">
      <Chat />
    </main>
  );
};

export default Main;
