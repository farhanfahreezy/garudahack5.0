import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
import { ClientProvider } from "@/utils/trpc-provider";
import Provider from "./(utils)/provider";
import ToasterContext from "./context/ToasterContext";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parenthing",
  description: "Empowering Parents with Knowledge, Support, and Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ClientProvider>
          <Provider>
            <ToasterContext/>
              {children}
          </Provider>
        </ClientProvider>
      </body>
    </html>
  );
}
