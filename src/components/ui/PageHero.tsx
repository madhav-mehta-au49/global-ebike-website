import Image from "next/image";
import { Sun } from "@/components/animations/Sun";
import { Photons } from "@/components/animations/Photons";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export async function PageHero({
  badge,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  image,
}: {
  badge: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
}) {
  return (
    <section className="solar-dark-grid relative overflow-hidden bg-navy-900 py-16 md:py-20">
      <div className="absolute inset-0">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071440]/95 via-[#0B1F5C]/85 to-[#071440]/70" />
        {image && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F5C] via-transparent to-[#071440]/50" />
        )}
      </div>
      <Sun className="right-4 top-10 opacity-80" />
      <Photons count={8} />
      <CityEdge />

      <Container className="relative">
        <div className="max-w-3xl">
          <span className="chip mb-4 bg-gold-500/15 text-gold-300">
            <BoltIcon />
            {badge}
          </span>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base leading-relaxed text-sky-100/85 sm:text-lg">
              {subtitle}
            </p>
          )}
          {ctaLabel && ctaHref && (
            <div className="mt-7">
              <Button href={ctaHref}>{ctaLabel}</Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
    </svg>
  );
}

function CityEdge() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 inset-x-0 h-10 w-full opacity-20"
      viewBox="0 0 1440 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      {[
        [0, 24, 80],
        [90, 14, 60],
        [160, 20, 100],
        [280, 8, 80],
        [370, 18, 110],
        [500, 12, 90],
        [600, 22, 100],
        [710, 10, 70],
        [790, 16, 110],
        [920, 8, 90],
        [1020, 20, 100],
        [1140, 12, 80],
        [1230, 18, 100],
        [1340, 10, 100],
      ].map(([x, y, w]) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={w}
          height={40 - y}
          fill="rgba(255,255,255,0.4)"
        />
      ))}
    </svg>
  );
}
