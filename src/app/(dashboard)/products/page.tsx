"use client";
import { Button } from "@/components/ui/button";
import CreateProductBanner from "../_components/create-product-banner";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <div className="h-20 border-b p-6 flex justify-between">
        <h1 className="text-xl md:text-3xl">Products</h1>
        <Button
          className="mr-15 md:mr-0 bg-pink-400"
          onClick={() => {
            router.push("/products/new");
          }}
        >
          New Product
        </Button>
      </div>
      <CreateProductBanner />
    </div>
  );
};

export default Page;
