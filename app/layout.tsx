import GlobalNav from "@components/GlobalNav";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className={inter.className}>
        <Theme accentColor="cyan">
          <header className="bg-gray-600">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <GlobalNav />
            </div>
          </header>
          <div className="min-h-screen bg-gray-100">
            <div className="mx-auto max-w-7xl px-2 sm:px-8 flex flex-col py-2 bg-gray-50 min-h-screen">
              {children}
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
