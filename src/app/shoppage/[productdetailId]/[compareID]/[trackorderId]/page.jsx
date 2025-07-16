import ShopPageBack from "@/components/ShopPageBack";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      Trach order
      <Link href={"./trackorder/trackorderdetail"} className="text-blue-700">
        Details
      </Link>
      <ShopPageBack />
    </div>
  );
}
