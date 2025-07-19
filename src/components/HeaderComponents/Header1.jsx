import React from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaReddit,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";
import useLanguageStore from "@/store/languageStore";

export default function Header1() {
  const { setLang } = useLanguageStore();
  return (
    <div className="header1 flex justify-between bg-[#1B6392] text-[#ffffff] w-full">
      <h3>Welcome to Clicon online eCommerce store.</h3>
      <div className="flex gap-[24px] items-center">
        <div className="flex gap-[12px] items-center">
          <h2>Follow us:</h2>
          <div className="flex gap-[12px] items-center">
            <Link href={"https://twitter.com"} target="_blank">
              <FaTwitter />
            </Link>
            <Link href={"https://facebook.com"} target="_blank">
              <FaFacebook />
            </Link>
            <Link href={"https://pinterest.com"} target="_blank">
              <FaPinterest />
            </Link>
            <Link href={"https://reddit.com"} target="_blank">
              <FaReddit />
            </Link>
            <Link href={"https://youtube.com"} target="_blank">
              <FaYoutube />
            </Link>

            <Link href={"https://instagram.com"} target="_blank">
              <FaInstagram />
            </Link>
          </div>
        </div>
        <h2 className="text-gray-500">|</h2>
        <div className="flex gap-[6px]">
          <h3 onClick={() => setLang(0)}>Eng</h3>
          <h3 onClick={() => setLang(1)}>Geo</h3>
          <img src="/images/headerIMG/CaretDown.svg" alt="isari" />
        </div>
        <div className="flex gap-[6px]">
          {" "}
          <h3>USD</h3>
          <img src="/images/headerIMG/CaretDown.svg" alt="isari" />
        </div>
      </div>
    </div>
  );
}
