"use client";
import Link from "next/link";
import React from "react";
import products from "@/libs/products_30.json";

export default function Shoppage() {
  return (
    <div>
      <div className="flex gap-4 text-green-600 p-[25px] bg-blue-800">
        <Link href={"../shoppage/compare"}>Compare</Link>
        <Link href={"../shoppage/productdetail"}>Product details</Link>
        <Link href={"../shoppage/shoppingcart"}>Shopping Cart</Link>
        <Link href={"../shoppage/trackorder"}>Trackorder</Link>
        <Link href={"../shoppage/wishlist"}>Wishlist</Link>
      </div>
      <div>
        {" "}
        {products.map((i, index) => (
          <div key={index}>
            <Link href={`/shoppage/${i.id}`}>{i.title}</Link>
          </div>
        ))}
      </div>
      Shoppage
    </div>
  );
}
