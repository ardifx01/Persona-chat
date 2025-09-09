import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const jakSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const loraSerif = Lora({
  subsets: ["latin"],
  variable: "--font-lora-serif",
});

export const metadata = {
  title: "Persona Chat",
  description: "Persona Chat App with Groq AI and Convex DB by Muhamad Alwan",
};

export default function RootLayout({ children }) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body
          className={`${jakSans.variable} ${loraSerif.variable}  antialiased`}
        >
          <ConvexClientProvider>
            <main className="overflow-hidden">{children}</main>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
