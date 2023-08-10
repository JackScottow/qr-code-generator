"use client";

import React from "react";
import QRCodeGenerator from "./components/qrcodegenerator";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-slate-900 text-slate-200 flex flex-col place-items-center justify-center">
      <QRCodeGenerator />
    </div>
  );
};

export default Home;
