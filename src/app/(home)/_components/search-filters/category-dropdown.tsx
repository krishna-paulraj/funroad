"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Category } from "./categories";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigatorHovered?: boolean;
  setBgColor: (color: string | null) => void;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigatorHovered,
  setBgColor,
}: Props) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const categoryParam = category.slug;

  const onClick = () => {
    setBgColor(category.color);
    router.push(`/${categoryParam}`);
  };

  const onClickSubCategory = (subCategory: string) => {
    setBgColor(category.color);
    router.push(`/${categoryParam}/${subCategory}`);
  };

  const onMouseEnter = () => {
    if (category.subCategories.length > 0) {
      setIsOpen(true);
    }
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            onClick={onClick}
            variant={"reverse"}
            className={cn(
              "h-10 px-4 bg-transparent border-transparent rounded-full hover:border-main",
              (isOpen || (isActive && !isNavigatorHovered)) &&
                "bg-white border-main translate-x-reverseBoxShadowX translate-y-reverseBoxShadowY shadow-shadow",
            )}
          >
            {category.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          style={{ backgroundColor: category.color || "#fff" }}
          className="mt-1"
        >
          <DropdownMenuLabel>{category.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {category.subCategories.map((item) => (
              <DropdownMenuItem
                key={item.slug}
                onClick={() => onClickSubCategory(item.slug)}
              >
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
