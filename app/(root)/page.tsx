import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <UserButton afterSignOutUrl="/" />
      <div>
        <p>Home</p>
      </div>
    </div>
  );
}
