"use client";
import { Button } from "@/components/ui/button";
import { CategoryDropdown } from "./category-dropdown";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useParams } from "next/navigation";
import { ArrowDownNarrowWideIcon } from "lucide-react";

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string | null;
  subCategories: SubCategory[];
}

interface CategoriesProps {
  data: Category[];
  setBgColor: (color: string | null) => void;
}

export const Categories = ({ data, setBgColor }: CategoriesProps) => {
  const params = useParams();

  const categoryParam = params.category as string | undefined;
  const activeCategory = categoryParam || "all";

  return (
    <div className="space-y-3 flex gap-2">
      {data.map((category: Category) => (
        <CategoryDropdown
          isActive={category.slug === activeCategory}
          key={category.slug}
          category={category}
          setBgColor={setBgColor}
        />
      ))}

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={"reverse"}
            className="bg-transparent border-transparent rounded-full hover:border hover:border-main hover:bg-white"
          >
            View All <ArrowDownNarrowWideIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>All Categories</SheetTitle>
            <SheetDescription>todo</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col p-6">
            {data.map((category: Category) => (
              <h1 key={category.slug}>{category.name}</h1>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
