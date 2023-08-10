import React, { useState } from "react";
import QrCode from "react-qr-code";
import * as htmlToImage from "html-to-image";

const QRCodeGenerator: React.FC = () => {
  const [qrCodeValue, setQRCodeValue] = useState<string>("www.google.com");
  const [qrCodeSize, setQrCodeSize] = useState<number>(256);

  const handleDownload = () => {
    htmlToImage.toJpeg(document.getElementById("qr-code")!).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${qrCodeValue}_qr.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <div className="border-slate-200 border rounded-md flex flex-col lg:flex-row text-center  bg-slate-200 text-slate-900 p-4">
      <div className="border bg-slate-200 my-auto " id="qr-code">
        <QrCode value={qrCodeValue} className="p-2 mx-auto bg-white" size={qrCodeSize} />
        <p className="text-center ">{qrCodeValue}</p>
      </div>

      <div className="flex flex-col text-left lg:pl-4 justify-evenly">
        <div className="flex flex-col my-2">
          <label htmlFor="content">Content:</label>
          <input type="text" name="content" value={qrCodeValue} onChange={(e) => setQRCodeValue(e.target.value)} placeholder={qrCodeValue} />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="size">Size:</label>
          <select name="size" className="text-center my-2" onChange={(e) => setQrCodeSize(Number(e.target.value))}>
            <option value="256">256px x 256px (Default)</option>
            <option value="128">128px x 128px</option>
          </select>
        </div>
        <button className="bg-transparent hover:bg-slate-900 text-slate-900 font-semibold hover:text-slate-200 py-2 my-2 px-4 border border-slate-900 hover:border-transparent rounded" onClick={() => handleDownload()}>
          Download
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
