import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 max-w-screen-2xl mx-auto z-30 bg-black-2/50 backdrop-blur-lg">
      <nav className="flex items-center justify-between md:px-8 px-6 md:py-6 py-4">
        <Link href="/">
          <h1 className="text-24 font-serif font-bold">PersonaChat</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/auth">
            <Button className="bg-violet-1 hover:bg-violet-2 text-16">
              Masuk
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
