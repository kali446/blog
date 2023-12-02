"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { GlobalProvider } from "@/context/global";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <GlobalProvider>{children}</GlobalProvider>
    </ThemeProvider>
  );
};

export default Providers;
