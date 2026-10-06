import type { ReactNode } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import { cn } from "@/lib/utils";

interface LandingWrapperProps {
  children: ReactNode;
  clean?: boolean;
  align?: "center" | "start";
}

const LandingWrapper = ({
  children,
  clean = false,
  align = "center",
}: LandingWrapperProps) => {
  return (
    <div className="flex min-h-dvh w-full flex-col px-4">
      {!clean && <NavBar />}
      <div
        className={cn(
          "flex w-full flex-1 flex-col items-center gap-6 pb-16 pt-32",
          align === "start" ? "justify-start" : "justify-center",
        )}
      >
        {children}
      </div>
      {!clean && <Footer />}
    </div>
  );
};

export default LandingWrapper;
