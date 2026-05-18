"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type Polaroid = {
  id: string;
  rotate: number;
  src: string;
  alt: string;
  caption: string;
};

const PHOTOS: Polaroid[] = [
  {
    id: "portrait",
    rotate: -8,
    src: "/Hero-still.png",
    alt: "Portrait of Shravani",
    caption: "Hello",
  },
  {
    id: "workspace",
    rotate: 6,
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80",
    alt: "Coding workspace setup",
    caption: "Workspace",
  },
  {
    id: "travel",
    rotate: -4,
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80",
    alt: "Travel moment",
    caption: "Travel",
  },
  {
    id: "sketching",
    rotate: 7,
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80",
    alt: "Sketching in a notebook",
    caption: "Sketching",
  },
  {
    id: "reading",
    rotate: -6,
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80",
    alt: "Reading a book",
    caption: "Reading",
  },
  {
    id: "designing",
    rotate: 5,
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80",
    alt: "Designing UI on screen",
    caption: "Designing",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      whileHover={{ scale: 1.06, rotate: photo.rotate * 0.4 }}
      style={{
        x: tx,
        y: ty,
        rotate: photo.rotate,
      }}
      className="group relative aspect-[3/4] w-[clamp(6rem,11vw,9rem)] shrink-0 cursor-pointer rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 shadow-lg dark:border-white/15 dark:bg-neutral-900"
    >
      <div className="relative h-[78%] w-full overflow-hidden rounded-xl bg-foreground/5">
        <img
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>
      <p className="mt-1.5 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-700 sm:text-[11px] dark:text-neutral-300">
        {photo.caption}
      </p>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-start justify-center gap-1 px-4 sm:gap-1.5 sm:px-8">
      {PHOTOS.map((photo, i) => (
        <PolaroidCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}
