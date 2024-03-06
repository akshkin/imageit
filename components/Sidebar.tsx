"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { navLinks } from "@/constants/constants";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="max-md:hidden h-screen w-1/4 border-r border-gray-100 shadow-md">
      <div className="p-4 h-[200]">
        <Link href="/">
          <Image src="logo.svg" width={120} height={50} alt="logo" />
        </Link>
      </div>
      <nav className="flex flex-col justify-between ">
        <SignedIn>
          <ul className="m-4">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`my-6 ${
                    isActive
                      ? "custom-background text-white p-2 -ml-2 rounded-xl"
                      : "text-gray-500 my-8 hover:text-pink-700"
                  } `}
                >
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="m-4 align-bottom">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`my-6 ${
                    isActive
                      ? "custom-background text-white p-2 -ml-2 rounded-xl"
                      : "text-gray-500 hover:text-pink-700"
                  } `}
                >
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
            <li>
              <UserButton />
            </li>
          </ul>
        </SignedIn>
        <SignedOut>
          <Button className="">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </SignedOut>
      </nav>
    </aside>
  );
}

export default Sidebar;
