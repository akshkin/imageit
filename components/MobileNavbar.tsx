"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

function MobileNavbar() {
  const pathname = usePathname();
  return (
    <header className="md:hidden w-full flex justify-between items-center p-2 border-b border-gray-100 shadow-md">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="logo.svg" alt="logo" width={150} height={50} />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
            />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <>
                <Link href="/" className="flex items-center gap-2 md:py-2">
                  <Image src="logo.svg" alt="logo" width={150} height={50} />
                </Link>
                <ul className="mx-4">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        key={link.route}
                        className={`my-6  ${
                          isActive
                            ? "custom-background text-white p-2 -ml-2 rounded-xl"
                            : "text-gray-500 my-8 hover:text-pink-700"
                        } `}
                      >
                        <Link href={link.route}>{link.label}</Link>
                      </li>
                    );
                  })}
                  <li>
                    <SignedOut>
                      <Button className="">
                        <Link href="/sign-in">Sign in</Link>
                      </Button>
                    </SignedOut>
                  </li>
                </ul>
              </>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default MobileNavbar;
