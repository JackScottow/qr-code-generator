import React, { useState } from "react";
import QrCode from "react-qr-code";

const QRCodeGenerator: React.FC = () => {
  const [qrCodeValue, setQRCodeValue] = useState<string>("www.google.com");

  return (
    <div className="border-slate-200 border rounded flex text-center">
      {qrCodeValue && (
        <div className="border-r-2 border-slate-200">
          <h3>QR Code</h3>
          <QrCode value={qrCodeValue} />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <h1>QR Code Generator</h1>
        <input type="text" value={qrCodeValue} onChange={(e) => setQRCodeValue(e.target.value)} placeholder={qrCodeValue} className="text-black text-center" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
