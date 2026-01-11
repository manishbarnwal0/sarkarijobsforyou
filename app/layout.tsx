import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarkari Jobs For You",
  description: "Latest Government Jobs, Admit Cards, Results and Updates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}