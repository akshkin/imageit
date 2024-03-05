import React from "react";
import { Sidebar } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Sidebar />
      <div>
        <div>{children}</div>
      </div>
    </main>
  );
}

export default Layout;
