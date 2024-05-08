import React from "react";

import logo from "/helpRS-logo.png";
import qrCode from "/qrCode.png";

import { CiWarning } from "react-icons/ci";

const Header = () => {
  const disclaimer =
    "A plataforma Let`s Help RS não se responsabiliza por qualquer dano ou inconveniente que possa ocorrer nos pontos de coleta listados. Utilize os serviços por sua conta e risco.";

  const openDonation = () => {
    window.open(
      "https://www.vakinha.com.br/vaquinha/a-maior-campanha-solidaria-do-rs/",
      "_blank"
    );
  };

  return (
    <div className="h-[6rem] bg-gradient-to-r from-green-rs via-red-rs to-yellow-rs flex items-center  text-white justify-around">
      <div className="flex items-end h-full">
        <img src={logo} className="h-12 w-12 lg:w-16 lg:h-16" />
      </div>
      <div className="w-1/2 lg:w-1/3 flex items-center space-x-2">
        <CiWarning size={100} />
        <p className="text-gray-100 text-[10px] lg:text-base md:text-[14px] font-semibold">
          {disclaimer}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center h-full justify-center md:gap-x-4">
        <p className="hidden md:block">Chave pix: <span onClick={openDonation} className="cursor-pointer">enchentes@vakinha.com.br</span></p>
        <img
          src={qrCode}
          className="h-16 w-16 lg:w-20 lg:h-20 cursor-pointer"
          onClick={openDonation}
        />
      </div>
    </div>
  );
};

export default Header;
