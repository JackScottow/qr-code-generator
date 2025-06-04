import React, { useState } from "react";
import QrCode from "react-qr-code";
import * as htmlToImage from "html-to-image";

const QRCodeGenerator: React.FC = () => {
  const [qrCodeValue, setQRCodeValue] = useState<string>("www.jackscottow.com");

  const handleDownload = () => {
    htmlToImage.toJpeg(document.getElementById("qr-code")!).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${qrCodeValue}_qr.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="border-amber-200 border rounded-md flex flex-col lg:flex-row text-center bg-white text-amber-900 p-4 max-w-full">
      <div className="border my-auto min-w-0 flex-shrink-0 w-full lg:w-80 bg-white" id="qr-code">
        <QrCode value={qrCodeValue} className="p-2 mx-auto max-w-full" />
        <div className="p-2 max-w-full overflow-hidden">
          <p className="text-center text-xs break-all text-ellipsis overflow-hidden whitespace-nowrap">{qrCodeValue.length > 50 ? `${qrCodeValue.substring(0, 50)}...` : qrCodeValue}</p>
        </div>
      </div>

      <div className="flex flex-col text-left lg:pl-4 justify-evenly lg:justify-center min-w-0 flex-1">
        <div className="flex flex-col my-2">
          <label htmlFor="content">Content:</label>
          <textarea name="content" value={qrCodeValue} onChange={(e) => setQRCodeValue(e.target.value)} placeholder={qrCodeValue} className="text-left p-2 border border-amber-200 rounded resize-y min-h-[60px] max-h-[200px] break-words" rows={3} />
        </div>
        <button className="bg-transparent hover:bg-amber-900 text-amber-900 font-semibold hover:text-amber-200 py-2 my-2 px-4 border border-amber-900 hover:border-transparent rounded" onClick={() => handleDownload()}>
          Download
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
