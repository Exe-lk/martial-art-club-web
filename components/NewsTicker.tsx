"use client";

import { useTranslations } from "next-intl";

type NewsTickerProps = {
  text?: string;
  repeat?: number;
  durationSeconds?: number;
  className?: string;
};

export default function NewsTicker({
  text,
  repeat = 10,
  durationSeconds = 200,
  className = "",
}: NewsTickerProps) {
  const t = useTranslations("NewsTicker");
  const tSection = useTranslations("NewsTickerSection");
  const displayText = text ?? t("text");
  const items = Array.from({ length: repeat }, (_, i) => i);
  const rows = [0, 1];

  return (
    <section
      aria-label={tSection("ariaLabel")}
      className={`w-full bg-[#0B0B0B] ${className}`}
    >
      <div className="group relative w-full overflow-hidden">
        <div
          className="ticker-track flex w-max items-center"
          style={{ ["--ticker-duration" as never]: `${durationSeconds}s` }}
        >
          {rows.map((row) => (
            <div
              key={row}
              className="flex items-center whitespace-nowrap pr-10"
              aria-hidden={row === 1}
            >
              {items.map((i) => (
                <span
                  key={`${row}-${i}`}
                  className="inline-flex items-center gap-3 px-3 py-[14.5px] text-[11px] font-black tracking-[0.22em] text-white uppercase sm:text-2xl"
                >
                  <span className="transition-colors group-hover:text-primary">
                    {displayText}
                  </span>
                  <span className="text-primary/95">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker var(--ticker-duration, 18s) linear infinite;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
