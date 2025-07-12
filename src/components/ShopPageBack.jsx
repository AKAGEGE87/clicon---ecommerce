import Link from "next/link";
import React from "react";

export default function ShopPageBack() {
  return (
    <div className="text-red-700">
      <Link href={"./"}>Back</Link>
    </div>
  );
}
