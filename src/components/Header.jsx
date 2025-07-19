"use client";
import React from "react";
import Link from "next/link";
import Header1 from "./HeaderComponents/Header1";
import Header2 from "./HeaderComponents/Header2";

import useLanguageStore from "@/store/languageStore";

export default function Header() {
  const { lang } = useLanguageStore();
  return (
    <div className="w-[1920px]">
      <Header1 />
      <Header2 />
      <div className="bg-[#1B6392] w-[100%] py-[16px] px-[30px] text-center flex gap-4 text-[#13a01a] font-bold">
        {lang.mineMenu.map((i, index) => (
          <Link href={i.link} key={index} className="text-[20px]">
            {i.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
