"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";
import { motion } from "framer-motion";
import CardSwap, { Card } from "@/components/CardSwap";
import Link from "next/link";

const listProjects = [
  {
    title: "Family Dental Clinic",
    desc: "Clinic website with receptionist and doctor booking workflows.",
    href: "https://family-dental-clinic-theta.vercel.app",
    images: [
      "/Screenshot_8-10-2025_204224_localhost.jpeg",
      "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/generation-20852383-21dd-437f-8282-000054b733f1.png",
    ],
    tags: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "Cache Logic",
    desc: "IT services site highlighting AI/ML, automation, cybersecurity, and consulting.",
    href: "#",
    images: [
      "/generation-20852383-21dd-437f-8282-000054b733f1.png",
      "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/generation-20852383-21dd-437f-8282-000054b733f1.png",
    ],
    tags: ["React", "Framer Motion"],
  },
  {
    title: "Citi Hospital",
    desc: "Healthcare website with appointment flows and responsive UI.",
    href: "#",
    images: [
      "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/generation-20852383-21dd-437f-8282-000054b733f1.png",
    ],
    tags: ["Next.js", "Tailwind", "Supabase"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="px-4 md:px-8 lg:px-12 pt-[84px] pb-20">
      {/* Header */}
      <div className="mb-10">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={2.2}
          showBorder={false}
          className="block"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Work</h1>
        </GradientText>
        
      </div>

      {listProjects.map((proj, idx) => {
        const stack = proj.images.length >= 3 ? proj.images : Array.from({ length: 3 }, (_, i) => proj.images[i % proj.images.length]);
        return (
          <motion.div 
            key={`section-${proj.title}-${idx}`} 
            className={`relative rounded-[24px] border border-white/10 bg-[rgba(6,0,16,0.5)] backdrop-blur p-4 md:p-6 lg:p-10 overflow-hidden ${idx === 0 ? '' : 'mt-8 md:mt-10'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(closest-side,rgba(64,255,170,0.25),rgba(64,121,255,0.15),rgba(0,0,0,0))] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[320px] lg:min-h-[360px]">
              {/* Description - Left on desktop, Top on mobile */}
              <div className="order-1 lg:order-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{proj.title}</h2>
                <p className="text-white/90 mb-4 max-w-2xl text-sm md:text-base font-medium">{proj.desc}</p>
                <div className="flex items-center gap-2 text-xs mb-5 flex-wrap">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg border border-white/20 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-orange-400/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                      <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent font-bold text-sm">{t}</span>
                    </span>
                  ))}
                </div>
                <Link href={proj.href} className="cursor-target inline-flex items-center gap-1 text-cyan-300 text-sm hover:text-cyan-200 transition-colors">
                  Visit Site <span aria-hidden>→</span>
                </Link>
              </div>
              
              {/* CardStack - Right corner on desktop, Center on mobile */}
              <div className="relative min-h-[280px] lg:min-h-[360px] order-2 lg:order-2 flex lg:justify-end justify-center">
                <div style={{ height: '280px', position: 'relative' }} className="lg:h-[360px] w-full max-w-[400px] lg:max-w-[350px]">
                  <CardSwap cardDistance={32} verticalDistance={40} delay={4200} pauseOnHover={false} skewAmount={2}>
                    {stack.map((src, i) => (
                      <Card key={i} className="shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden border-white/10 bg-black">
                        <Image src={src} alt={`${proj.title} ${i + 1}`} fill sizes="(max-width: 768px) 80vw, 420px" className="object-cover object-top" />
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

     
    </div>
  );
}


