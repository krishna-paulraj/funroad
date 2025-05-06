"use client";

import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
import {
  Bookmark,
  ChartSpline,
  Home,
  LogOut,
  MenuIcon,
  Search,
  Settings,
  Store,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const mainRoutes = [
  {
    name: "Home",
    slug: "dashboard",
    icon: Home,
  },
  {
    name: "Products",
    slug: "products",
    icon: Store,
  },
  {
    name: "Analytics",
    slug: "analytics",
    icon: ChartSpline,
  },
];

const personalRoutes = [
  {
    name: "Discover",
    slug: "/",
    icon: Search,
  },
  {
    name: "Library",
    slug: "library",
    icon: Bookmark,
  },
];

const settingsRoutes = [
  {
    name: "Settings",
    slug: "settings",
    icon: Settings,
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const { signOut } = useClerk();

  const onClick = (slug: string) => {
    router.push(slug);
  };

  return (
    <div>
      <div className="hidden md:flex fixed top-0 left-0 h-screen w-48 flex-col flex-1 overflow-hidden  border-r bg-white">
        <Link
          href="/"
          className="flex items-center justify-center py-6 border-b bg-pink-400"
        >
          <span
            className={cn("text-2xl font-bold text-black", poppins.className)}
          >
            funroad
          </span>
        </Link>

        <div>
          {mainRoutes.map((route) => (
            <div
              key={route.slug}
              className="h-10 p-4 border-b flex justify-start items-center text-sm font-semibold gap-2 cursor-pointer hover:bg-pink-400"
              onClick={() => onClick(route.slug)}
            >
              <route.icon className="h-5 w-5" />
              {route.name}
            </div>
          ))}

          <div className="h-10 border-b"></div>

          {personalRoutes.map((route) => (
            <div
              key={route.slug}
              className="h-10 p-4 border-b flex justify-start items-center text-sm font-semibold gap-2 cursor-pointer hover:bg-pink-400"
              onClick={() => onClick(route.slug)}
            >
              <route.icon className="h-5 w-5" />
              {route.name}
            </div>
          ))}

          <div className="h-10 border-b"></div>

          {settingsRoutes.map((route) => (
            <div
              key={route.slug}
              className="h-10 p-4 border-b flex justify-start items-center text-sm font-semibold gap-2 cursor-pointer hover:bg-pink-400"
              onClick={() => onClick(route.slug)}
            >
              <route.icon className="h-5 w-5" />
              {route.name}
            </div>
          ))}

          <div
            className="h-10 p-4 border-b flex justify-start items-center text-sm font-semibold gap-2 cursor-pointer hover:bg-pink-400"
            onClick={() => signOut()}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </div>

          <div>
            <Image
              src={"personsitting.svg"}
              height={500}
              width={700}
              alt="cover"
              className="bg-cover mt-10"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden absolute top-0 right-0 m-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
