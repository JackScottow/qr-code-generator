"use client";

import React from "react";
import QRCodeGenerator from "./components/qrcodegenerator";
import Header from "./components/header";
import "./globals.css";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-amber-900 flex flex-col place-items-center justify-center">
      <Header />
      <QRCodeGenerator />
    </div>
  );
};

export default Home;
