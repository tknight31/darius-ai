"use client";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[100px_1fr_50px] bg-black-100 min-h-screen mx-auto max-w-[1000px] gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
