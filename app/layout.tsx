import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-imb-plex",
});

export const metadata: Metadata = {
  title: "ImageElevate",
  description: "AI-Powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
