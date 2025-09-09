"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

const Auth = () => {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState("signIn");
  const router = useRouter();

  // Handler untuk autentikasi provider
  const handleProviderSignIn = async (provider) => {
    try {
      const result = await signIn(provider);
      if (result?.redirectUrl) {
        window.location.href = result.redirectUrl;
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/images/bg-auth.png"
          alt="background"
          fill
          className="size-full"
        />
      </div>

      <div className="flex-center glassmorphism-auth h-screen w-full px-4 lg:px-0">
        <div className="bg-glassmorphism p-4 rounded-xl space-y-2">
          <h1 className="text-20 font-bold text-center uppercase">
            Welcome to One AI
          </h1>
          <p className="text-16 text-center">Please login to continue</p>
          <div className="space-y-3">
            <Button
              onClick={() => void handleProviderSignIn("google")}
              className="bg-white hover:bg-violet-200 text-18 font-bold rounded-[10px] text-zinc-900 w-full"
            >
              <Image
                src="/icons/google.svg"
                alt="google"
                width={20}
                height={20}
              />
              Login with Google
            </Button>
            <Button
              onClick={() => void handleProviderSignIn("github")}
              className="bg-white hover:bg-violet-200 text-18 font-bold rounded-[10px] text-zinc-900 w-full"
            >
              <Image
                src="/icons/github.svg"
                alt="github"
                width={20}
                height={20}
              />
              Login with Github
            </Button>

            <form
              className="flex flex-col space-y-4"
              onSubmit={async (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                try {
                  const result = await signIn("password", formData);
                  if (result?.redirectUrl) {
                    window.location.href = result.redirectUrl;
                  } else {
                    router.push("/dashboard");
                  }
                } catch (error) {
                  console.error("Authentication failed:", error);
                }
              }}
            >
              <input
                name="name"
                placeholder="Full Name"
                type="text"
                required
                className="p-2 rounded-lg bg-glassmorphism-2 mt-4 outline-none"
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                required
                className="p-2 rounded-lg bg-glassmorphism-2 outline-none"
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                required
                className="p-2 rounded-lg bg-glassmorphism-2 outline-none"
              />
              <input name="flow" type="hidden" value={step} />
              <button type="submit" className="hover:text-violet-1">
                {step === "signIn" ? "Login" : "Daftar"}
              </button>
              <button
                type="button"
                className="hover:text-violet-1"
                onClick={() => {
                  setStep(step === "signIn" ? "signUp" : "signIn");
                }}
              >
                {step === "signIn" ? "Daftar sekarang" : "Login sekarang"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
