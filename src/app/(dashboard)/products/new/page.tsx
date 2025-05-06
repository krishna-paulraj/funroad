"use client";

import dynamic from "next/dynamic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SelectCategory } from "../_components/select-category";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const BlockNoteViewComponent = dynamic(
  () => import("../_components/block-note-view"),
  { ssr: false },
);

const productSchema = z.object({
  userId: z.string(),
  title: z.string(),
  price: z.coerce.number().min(0, "Price must be non-negative"),
  categoryId: z.string().min(24, "Select a valid category"),
  subCategoryId: z.string().min(24, "Select a valid sub-category"),
  description: z.string().optional(),
  content: z.any().optional(),
  contentDescription: z.any().optional(),
  coverImage: z.string().optional().nullable(),
  thumbnail: z.string().optional().nullable(),
});

type ProductFormData = z.infer<typeof productSchema>;

const Page = () => {
  const trpc = useTRPC();
  const { user } = useUser();

  const [content, setContent] = useState<object | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      userId: user?.username ?? undefined,
      categoryId: "681259f728a1f445d73c5721",
      subCategoryId: "68125a3828a1f445d73c5728",
    },
  });

  const createProduct = useMutation(
    trpc.products.createProduct.mutationOptions({
      onSuccess: () => {
        alert("✅ Product created successfully");
      },
      onError: (err) => {
        console.error(err);
        alert("❌ Failed to create product");
      },
    }),
  );

  const onSubmit = (data: ProductFormData) => {
    createProduct.mutate(data);
  };

  useEffect(() => {
    if (content) {
      setValue("contentDescription", content);
    }
  }, [content, setValue]);

  return (
    <div>
      <div className="h-20 border-b p-6 flex justify-between">
        <h1 className="text-xl md:text-3xl">New Product</h1>
        <Button
          className="mr-15 md:mr-0 bg-pink-400"
          onClick={handleSubmit(onSubmit)}
        >
          Create
        </Button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 flex flex-col gap-2"
      >
        <h1>Title</h1>
        <Input
          {...register("title")}
          className="w-80"
          placeholder="Power of Subconscious Mind"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <h1 className="mt-2">Description</h1>
        <div className="h-80 w-[700px] bg-white border shadow-shadow overflow-auto">
          <BlockNoteViewComponent setContent={setContent} />
        </div>

        <h1 className="mt-2">Price</h1>
        <Input {...register("price")} className="w-80" type="number" min="0" />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

        <h1 className="mt-2">Select Category</h1>
        <SelectCategory />
        {/* You need to wire categoryId and subCategoryId inside SelectCategory */}
      </form>
    </div>
  );
};

export default Page;
