import Link from "next/link";
import React from "react";

export default function ShopPageBack() {
  return (
    <div className="text-red-700">
      <Link href={"./"}>
        <button className="w-[150px] bg-amber-600 h-[30px] rounded-3xl">
          Back
        </button>
      </Link>
    </div>
  );
}
