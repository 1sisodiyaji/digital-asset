"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "@/components/ImageGallery";
import { IProduct } from "@/models/Product";
import { apiClient } from "@/lib/api-client";
import Hero from "@/components/Hero";
import { useSession } from "next-auth/react";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiClient.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      {email ? (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">Digital Assets</h1>
          <ImageGallery products={products} />
        </div>
      ) : (
        <>
          <Hero />
          <Process />
          <Features />
          <Pricing />
          <FAQ />
        </>
      )}
    </main>
  );
}
