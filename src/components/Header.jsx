import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#1B6392] w-[100%] py-[16px] px-[300px] text-center flex gap-4 text-[#13a01a] font-bold">
      <Link href={"../"}>საწყისი გვერდი</Link>
      <Link href={"../home"}>Home</Link>
      <Link href={"../shoppage"}>Shop Page</Link>
      <Link href={"../blog"}>Blog</Link>
      <Link href={"../dashboard"}>Dashboard</Link>
      <Link href={"../signin"}>Sign-in</Link>
      <Link href={"../faqs"}>Faq's</Link>
      <Link href={"../support"}>Support</Link>
      <Link href={"../about"}>About</Link>
    </div>
  );
}
