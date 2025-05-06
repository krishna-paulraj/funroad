"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface NavbarItems {
  children: React.ReactNode;
  href: string;
}

interface Props {
  items: NavbarItems[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="transition-none pb-3">
        <SheetHeader>
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-2 items-center justify-center text-2xl font-bold">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="p-0 h-12">
              <Button
                variant={pathname === item.href ? "active" : "default"}
                className="bg-main w-2xs"
              >
                {item.children}
              </Button>
            </Link>
          ))}
          {!user ? (
            <>
              <Button
                asChild
                className="bg-pink-400 text-black w-2xs font-bold"
              >
                <Link href={"/sign-in"}>Login</Link>
              </Button>
              <Button
                asChild
                className="bg-pink-400 text-black w-2xs font-bold"
              >
                <Link href={"/sign-up"}>Start Selling</Link>
              </Button>
            </>
          ) : (
            <Button asChild className="bg-pink-400 text-black w-2xs font-bold">
              <Link href={"/dashboard"}>Dashboard</Link>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
