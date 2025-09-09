import { character } from "@/constant/character";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardCharacter = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {character.map((char) => (
          <Link
            href={`/dashboard/${char.slug}`}
            key={char.id}
            className="group relative rounded-2xl bg-black-2 overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="aspect-square overflow-hidden relative">
              <Image
                src={char.avatar}
                alt={char.name}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black-1/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-24 font-bold">{char.name}</h3>
                <p className="text-gray-300 text-16 font-bold">{char.title}</p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <button className="w-full py-2 mt-2 rounded-lg bg-violet-1 text-white font-medium transition-colors hover:bg-violet-2">
                Ngobrol dengan {char.name}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardCharacter;
