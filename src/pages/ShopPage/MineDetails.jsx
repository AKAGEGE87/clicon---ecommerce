"use client";
import React from "react";
import { useParams } from "next/navigation";
import products from "@/libs/products_30.json";

export default function MineDetails() {
  const save = useParams();
  console.log(save);
  const product = products.find((i) => i.id === Number(save.productdetailId));
  return (
    <div>
      დეტალები
      <h1 className="text-blue-700">
        Title: <span className="text-green-800">{product.title}</span>
      </h1>
      <p>
        Slug: <span>{product.slug}</span>
      </p>
      <p>
        Price: <span>{product.price}</span>
      </p>
      <p>
        OldPrice: <span></span>
        {product.oldPrice}
      </p>
      <p>
        DiscountPercent: <span></span>
        {product.discountPercent}
      </p>
      <p>
        Rating: <span></span>
        {product.rating}
      </p>
      <p>
        ReviewCount:<span></span> {product.reviewCount}
      </p>
      <p>
        Brand: <span></span>
        {product.brand}
      </p>
      <p>
        Availability: <span></span>
        {product.availability}
      </p>
      <p>
        Category: <span></span>
        {product.category}
      </p>
      <p>
        Images: <span></span>
        {product.images}
      </p>
      <p>
        Description: <span></span>
        {product.description}
      </p>
      <p>
        Features: <span></span>
        {product.features}
      </p>
    </div>
  );
}
