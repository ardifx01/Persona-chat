import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-violet-600/10 via-transparent">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="flex justify-center">
          <Link
            className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:bg-white/10"
            href="/"
          >
            <p className="me-2 text-white text-sm">Your AI Persona Awaits</p>
            <span className="group-hover:bg-white/10 py-1.5 px-2.5 flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
              <ArrowRightCircle size={16} />
            </span>
          </Link>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Ngobrol Seru Bareng Karakter AI.
          </h1>
        </div>
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-white/70">
            PersonaChat bikin karakter AI terasa lebih dekat. Setiap chat punya
            cerita, setiap jawaban punya warna. Dari ngobrol santai sampai
            mendalami peran, kamu bebas bereksplorasi dalam dunia percakapan
            yang fun, cerdas, dan penuh kejutan
          </p>
        </div>

        <div className="text-center">
          <Link
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-indigo-600 to-violet-2 shadow-lg shadow-transparent hover:shadow-indigo-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
            href="/dashboard"
            prefetch={true}
          >
            Mulai Ngobrol
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
