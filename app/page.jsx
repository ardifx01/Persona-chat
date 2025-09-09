import Header from "@/components/section/Header";
import Hero from "@/components/section/Hero";
import { character } from "@/constant/character";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>    
    <Header />
    <section className="">
      <Hero />
    </section>
    </>
  );
};

export default Home;
