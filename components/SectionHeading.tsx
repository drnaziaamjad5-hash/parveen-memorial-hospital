type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  tone = "dark",
  className = "",
}: Props) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <div data-reveal className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-teal-300" : ""}`}>
          <span aria-hidden="true" className={`h-px w-6 ${light ? "bg-teal-300" : "bg-teal-600"}`} />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mt-3 text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-brand-100" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}
