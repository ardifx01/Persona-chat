import Link from "next/link";
import React from "react";
import UserButton from "./UserButton";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 
      bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <Link href="/dashboard">
        <h1 className="text-2xl font-bold font-serif text-white">
          PersonaChat
        </h1>
      </Link>
      <div>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
