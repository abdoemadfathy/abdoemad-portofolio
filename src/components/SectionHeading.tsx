interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, description, align = "left" }: Props) => (
  <div className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <span className="section-eyebrow">
      <span className="h-px w-6 bg-primary" />
      {eyebrow}
    </span>
    <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>}
  </div>
);

export default SectionHeading;
