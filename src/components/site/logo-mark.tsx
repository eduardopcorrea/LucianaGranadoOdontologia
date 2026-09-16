import { cn } from "@/lib/utils";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <path
        d="M24 40C24 40 6 28.5 6 16.8C6 10.8 10.6 6.5 16 6.5C19.4 6.5 22.3 8.2 24 10.8C25.7 8.2 28.6 6.5 32 6.5C37.4 6.5 42 10.8 42 16.8C42 28.5 24 40 24 40Z"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinejoin="round"
      />
      <path
        d="M24 15.5C21.5 15.5 19.5 17.3 19.5 20.1C19.5 22.6 20.7 24.3 21.3 26.6C21.6 27.7 22.6 28.5 24 28.5C25.4 28.5 26.4 27.7 26.7 26.6C27.3 24.3 28.5 22.6 28.5 20.1C28.5 17.3 26.5 15.5 24 15.5Z"
        fill="currentColor"
      />
      <circle cx="24" cy="20" r="1.6" fill="var(--background)" />
    </svg>
  );
}

export function LogoMark({
  className,
  iconClassName,
  tone = "light",
}: {
  className?: string;
  iconClassName?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoIcon
        className={cn(
          "h-8 w-8",
          tone === "light" ? "text-brand-deep" : "text-brand",
          iconClassName,
        )}
      />
      <span className="flex flex-col leading-[1.05]">
        <span
          className={cn(
            "font-heading text-[15px] font-bold tracking-tight",
            tone === "light" ? "text-foreground" : "text-white",
          )}
        >
          Luciana Granado
        </span>
        <span
          className={cn(
            "text-[10.5px] font-medium tracking-[0.14em] uppercase",
            tone === "light" ? "text-brand-deep" : "text-brand",
          )}
        >
          Odontologia Integrada
        </span>
      </span>
    </span>
  );
}
