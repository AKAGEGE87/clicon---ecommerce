import React from "react";
import "./header.css";

export default function Header2() {
  return (
    <div className="header2 bg-[#1B6392] border-t border-t-gray-300 flex justify-between items-center">
      <div className="flex gap-[8px]">
        <img src="/images/headerIMG/Icon.svg" alt="icon" />
        <img src="/images/headerIMG/CLICON.svg" alt="CLICON" />
      </div>
      <input
        type="text"
        placeholder="Search for anuthing"
        className="bg-white py-[20px] px-[14px] w-[646px]"
      />
      <div className="flex gap-[24px] h-[24px]">
        <img src="/images/headerIMG/ShoppingCartSimple.svg" alt="cart" />
        <img src="/images/headerIMG/Heart.svg" alt="Heart" />
        <img src="/images/headerIMG/User.svg" alt="User" />
      </div>
    </div>
  );
}
