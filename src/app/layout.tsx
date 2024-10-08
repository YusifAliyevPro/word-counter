import type { Metadata } from "next";
import { Poppins, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const source_sans_3 = Source_Code_Pro({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Word-Counter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${source_sans_3.className} ${poppins.variable} min-h-svh`}
      >
        <div className="fixed flex w-full flex-row justify-end">
          <p className="p-4 pr-7 font-poppins text-lg text-white">
            👌 Made by{" "}
            <a
              href="https://yusifaliyevpro.com"
              target="_blank"
              className="cursor-pointer hover:text-blue-200"
            >
              YusifAliyevPro
            </a>
          </p>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
