type SectionLoadFallbackProps = {
  minHeight?: string;
  className?: string;
};

/** Lightweight placeholder while a dynamically imported section chunk loads. */
export default function SectionLoadFallback({
  minHeight = "min-h-32",
  className = "",
}: SectionLoadFallbackProps) {
  return (
    <div
      className={["w-full animate-pulse rounded-sm bg-white/[0.04]", minHeight, className].join(
        " ",
      )}
      aria-hidden
    />
  );
}
