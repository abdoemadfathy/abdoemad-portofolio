import { Reveal } from "@/components/common/Reveal";
import { usePortfolio } from "@/i18n/LanguageProvider";
import { track } from "@/lib/analytics";

/**
 * Self-hosted intro video. It never autoplays and downloads nothing until the visitor presses play
 * (the poster is the only request), so it costs the page no bandwidth.
 */
const IntroVideo = () => {
  const { t } = usePortfolio();
  const v = t.about.video;
  return (
    <Reveal className="mt-10">
      <figure>
        <div dir="ltr" className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <video
            controls
            playsInline
            preload="none"
            poster="/media/intro-poster.webp"
            aria-label={v.label}
            onPlay={() => track("intro_video_play")}
            className="aspect-video w-full bg-black"
          >
            <source src="/media/intro.mp4" type="video/mp4" />
            {v.unsupported}
          </video>
        </div>
        <figcaption className="mt-3 text-sm text-muted-foreground">{v.caption}</figcaption>
      </figure>
    </Reveal>
  );
};

export default IntroVideo;
