"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const popoins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={isActive ? "noShadow" : "neutral"}
      className="bg-white"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  const [isSidebarOpen, setIsSidbarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className={cn("text-5xl", popoins.className)}>funroad</span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {!isSignedIn ? (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="noShadow"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            asChild
            variant="noShadow"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
          >
            <Link href="/sign-up">Start Selling</Link>
          </Button>
        </div>
      ) : (
        <Button
          asChild
          variant="noShadow"
          className="hidden lg:flex border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-pink-400 text-black hover:bg-black hover:text-white transition-colors text-lg"
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      )}

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidbarOpen}
      />

      <div className="lg:hidden flex items-center justify-center pr-6">
        <Button onClick={() => setIsSidbarOpen(true)}>
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
