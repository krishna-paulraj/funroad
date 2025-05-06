"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

interface Props {
  categorySlug: string;
  subCategorySlug: string;
}

export const ProductList = ({ categorySlug, subCategorySlug }: Props) => {
  const trpc = useTRPC();

  const router = useRouter();

  const productQuery = subCategorySlug
    ? trpc.products.getByCategoryAndSub.queryOptions({
        categorySlug,
        subCategorySlug,
      })
    : trpc.products.getByCategory.queryOptions({ categorySlug });

  const { data: products } = useQuery(productQuery);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {products?.map((product) => (
        <Card key={product.id}>
          <Image
            src={"/background.png"}
            alt="Background"
            width={800}
            height={600}
            className="bg-cover border-b"
          />
          <div className="p-2 h-24 flex flex-col gap-4">
            <p>{product.title}</p>
            <p
              className="underline"
              onClick={() => {
                router.push(`/tenant/${product.userId}`);
              }}
            >
              @{product.userId}
            </p>
          </div>
          <div className="border-t"></div>
          <div className="flex justify-between mx-2 py-2">
            <p className="my-2">&#8377;{product.price}</p>
            <Button>
              <Bookmark />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
