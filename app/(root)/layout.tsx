import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full">
      <Sidebar />
      <MobileNavbar />
      <div>
        <div>{children}</div>
      </div>
    </main>
  );
}

export default Layout;
