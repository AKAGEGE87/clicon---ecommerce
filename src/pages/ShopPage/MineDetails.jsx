"use client";
import React from "react";
import { useParams } from "next/navigation";
import products from "@/libs/products_30.json";
import "./detail.css";
import Image from "next/image";

export default function MineDetails() {
  const save = useParams();
  console.log(save);
  const product = products.find((i) => i.id === Number(save.productdetailId));
  return (
    <div>
      {product ? (
        <div>
          <h1 className="text-blue-700 text-[30px]">
            Title: <span className="text-green-800">{product.title}</span>
          </h1>
          <p>
            Slug: <span>{product.slug}</span>
          </p>
          <p>
            Price: <span>{product.price}</span>
          </p>
          <p>
            OldPrice: <span>{product.oldPrice}</span>
          </p>
          <p>
            DiscountPercent: <span>{product.discountPercent}</span>
          </p>
          <p>
            Rating: <span> {product.rating}</span>
          </p>
          <p>
            ReviewCount:<span>{product.reviewCount}</span>
          </p>
          <p>
            Brand: <span>{product.brand}</span>
          </p>
          <p>
            Availability: <span>{product.availability}</span>
          </p>
          <p>
            Category: <span> {product.category}</span>
          </p>
          <div className="text-blue-700 text-[25px]">
            Images:{" "}
            <div className="flex gap-3">
              {product.images.map((item, index) => (
                <Image
                  src={item}
                  alt=""
                  width={1000}
                  height={1000}
                  className={`w-[200px] ${index % 2 === 1 && "h-[300px] "}`}
                />
              ))}
            </div>
          </div>
          <p>
            Description: <span> {product.description}</span>
          </p>
          <p>
            Features: <span> {product.features}</span>{" "}
          </p>
        </div>
      ) : (
        "ეს პროდუქტი არ მოიძებნა"
      )}
    </div>
  );
}
