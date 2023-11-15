"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Next13ProgressBar
          height="2px"
          color="#8b5cf6"
          options={{ showSpinner: false }}
          showOnShallow
        />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
