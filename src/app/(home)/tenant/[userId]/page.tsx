"use client";
import { Card } from "@/components/ui/card";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();

  const userId = params?.userId as string;

  const trpc = useTRPC();

  const productQuery = trpc.products.getByUsername.queryOptions({
    userId,
  });

  const { data: products } = useQuery(productQuery);

  return (
    <div>
      <div className="p-6">
        <h1>
          {products?.length} Products from @{userId}
        </h1>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
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
              <p className="underline">@{product.userId}</p>
            </div>
            <div className="border-t"></div>
            <p className="my-2 px-2">&#8377;{product.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Page;
