import { useEffect, useState } from "react";
import { avatarVariants } from "@/data/avatar";
import { usePrefersReducedMotion } from "./shared";

export function DoraAvatar({ interval = 3000 }: { interval?: number }) {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setI((current) => (current + 1) % avatarVariants.length), interval);
    return () => window.clearInterval(timer);
  }, [interval, reduced]);

  const current = avatarVariants[i] ?? avatarVariants[0];
  if (!current) return null;

  return (
    <div className="relative mx-auto aspect-square w-56 md:w-64" role="img" aria-label={`Dora mascot: ${current.label}`}>
      {avatarVariants.map((variant, index) => (
        <img
          key={variant.id}
          src={variant.src}
          alt=""
          aria-hidden="true"
          width={300}
          height={300}
          decoding="async"
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${index === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <p className="absolute -bottom-7 left-1/2 w-max -translate-x-1/2 rounded-full border bg-background px-3 py-1 text-xs font-bold shadow">One Dora. Every identity.</p>
    </div>
  );
}