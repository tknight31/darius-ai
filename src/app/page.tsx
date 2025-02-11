"use client";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Gradients from "./components/common/Gradients";

export default function Home() {
  return (
    <div className="gradient-bg">
      <Gradients />
      <div className="relative z-2 bg-black/60">
        <div className="grid grid-rows-[100px_1fr_50px] bg-black-100 min-h-screen mx-auto max-w-[1000px] gap-8 sm:p-8">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
