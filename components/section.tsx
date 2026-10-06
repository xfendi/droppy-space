import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section = ({
  icon,
  title,
  description,
  children,
  className,
}: SectionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 items-center justify-center text-center max-w-2xl",
        className,
      )}
    >
      <div className="flex flex-col gap-6 items-center justify-center">
        {icon}
        <h1 className="text-4xl lg:text-5xl font-bold font-rounded">
          {title}
        </h1>
        {description && (
          <p className="text-lg font-medium text-neutral-400 max-w-sm text-center">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default Section;
