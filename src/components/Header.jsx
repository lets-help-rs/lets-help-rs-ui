import React from "react";

import logo from "/helpRS-logo.png";

import { CiWarning } from "react-icons/ci";
import QRCode from "react-qr-code";

const Header = () => {
  const disclaimer =
    "A plataforma Let's Help RS não se responsabiliza por qualquer dano ou inconveniente que possa ocorrer nos pontos de coleta listados. Utilize os serviços por sua conta e risco.";

  const openDonation = () => {
    window.open(`${import.meta.env.VITE_DONATE_QRCODE}`, "_blank");
  };

  return (
    <div className="h-[6rem] bg-gradient-to-r from-green-rs  via-red-rs to-yellow-rs flex items-center  text-white justify-around font-custom">
      <div className="flex items-end h-full">
        <img
          src={logo}
          className="h-12 w-12 lg:w-16 lg:h-16"
          id="header-logo"
        />
      </div>
      <div className="w-1/2 lg:w-1/3 flex items-center space-x-2">
        <CiWarning size={100} />
        <p className="text-white text-smallest xl:text-sm lg:text-smaller font-semibold text-center">
          {disclaimer}
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row md:items-center h-full justify-center md:gap-x-4"
        id="qr-code-section"
      >
        <div className="md:flex md:flex-col hidden">
          <span className="self-center">Chave pix: </span>
          <span onClick={openDonation} className="cursor-pointer">
            {import.meta.env.VITE_PIX_KEY}
          </span>
        </div>
        <QRCode
          value={import.meta.env.VITE_DONATE_QRCODE}
          className="h-16 w-16 lg:w-20 lg:h-20 cursor-pointer"
          onClick={openDonation}
        />
      </div>
    </div>
  );
};

export default Header;
