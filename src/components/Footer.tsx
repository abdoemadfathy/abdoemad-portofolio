import { profile } from "@/data/portfolioData";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}. {profile.role}, {profile.location}.
      </p>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="self-start transition-colors hover:text-foreground">
        Back to top
      </button>
    </div>
  </footer>
);

export default Footer;
