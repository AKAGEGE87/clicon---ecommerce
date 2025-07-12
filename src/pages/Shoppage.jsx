import Link from "next/link";
import React from "react";

export default function Shoppage() {
  return (
    <div>
      <div className="flex gap-4 text-green-600">
        <Link href={"../shoppage/compare"}>Compare</Link>
        <Link href={"../shoppage/productdetail"}>Product details</Link>
        <Link href={"../shoppage/shoppingcart"}>Shopping Cart</Link>
        <Link href={"../shoppage/trackorder"}>Trackorder</Link>
        <Link href={"../shoppage/wishlist"}>Wishlist</Link>
      </div>
      Shoppage
    </div>
  );
}
