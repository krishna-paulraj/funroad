"use client";
import { useTRPC } from "@/trpc/client";
import { SearchInput } from "./searchInput";
import { useQuery } from "@tanstack/react-query";
import { Categories } from "./categories";
import { useState } from "react";

export const Search = () => {
  const trpc = useTRPC();
  const categories = useQuery(trpc.categories.getMany.queryOptions());

  const [bgColor, setBgColor] = useState<string | null>("white");

  return (
    <div
      className="px-4 lg:px-12 pt-8 border-b flex flex-col gap-4 w-full"
      style={{ backgroundColor: bgColor ? bgColor : "white" }}
    >
      <SearchInput />
      <Categories data={categories.data ?? []} setBgColor={setBgColor} />
    </div>
  );
};
