import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>
        <div>{children}</div>
      </div>
    </main>
  );
}

export default Layout;
