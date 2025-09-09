import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-br from-violet-600/10 via-transparent">
      <h1 className="md:text-32 text-24 font-bold text-center">
        Asisten karakter AI yang siap ngobrol <br /> nemenin, dan jawab rasa
        penasaranmu.
      </h1>
      <p className="text-center text-18 sm:text-16 text-gray-400 font-medium mt-4">
        Berbagai karakter AI siap nemenin kamu, bantu cari info, atau sekadar
        jadi teman ngobrol.
      </p>
    </div>
  );
};

export default Banner;
