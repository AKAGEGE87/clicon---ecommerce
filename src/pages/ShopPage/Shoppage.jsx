"use client";
import Link from "next/link";
import React from "react";
import products from "@/libs/products_30.json";

export default function Shoppage() {
  return (
    <div>
      <div className="flex gap-4 text-green-600 p-[25px] bg-blue-800 justify-center w-full">
        <Link href={"../shoppage/compare"}>Compare</Link>
        <Link href={"../shoppage/productdetail"}>Product details</Link>
        <Link href={"../shoppage/shoppingcart"}>Shopping Cart</Link>
        <Link href={"../shoppage/trackorder"}>Trackorder</Link>
        <Link href={"../shoppage/wishlist"}>Wishlist</Link>
      </div>
      <div className="grid grid-cols-3 gap-[105px]  ">
        {" "}
        {products.map((i, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center text-[22px] font-bold text-[#321654]"
          >
            <Link href={`/shoppage/${i.id}`}>{i.title}</Link>
            <img
              src="/images/macbook1.jpg"
              alt="image macbook"
              className="w-[420px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
