"use client";

import Image from "next/image";
import GradientText from "@/components/GradientText";
import { motion } from "framer-motion";
import CardSwap, { Card } from "@/components/CardSwap";
import Link from "next/link";
import GlowButton from "@/components/GlowButton";
import { useEffect, useState } from "react";

const listProjects = [
  {
    title: "Learnify-Tutoring Management Platform",
    desc: "AI-powered tutoring and student engagement platform. Seperate dashboard for students, tutors,guardians and admin with role based access.",
    href: "https://learnify-red.vercel.app",
    images: [
      "/Screenshot_8-10-2025_204224_localhost.jpeg",
      "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_184021_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_183858_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_183943_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_184036_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_184123_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_184148_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_184222_learnify-red.vercel.app.jpeg",
      "/learnify/Screenshot_7-9-2025_184241_learnify-red.vercel.app.jpeg"

    ],
    tags: ["Next.js", "Tailwind", "Supabase","Framer-motion","React"],
  },
  {
    title: "Family dental Clinic",
    desc: "Clinic website with receptionist and doctor booking workflows. Receptionists can make appointments for existing or new patients and generate invoices whereas doctors can view their appointments and earning histories.",
    href: "#",
    images: [
     "/Screenshot_8-10-2025_204224_localhost.jpeg",
     "/dental/Screenshot_8-10-2025_1997_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19742_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19753_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19816_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19829_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19841_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19921_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_19958_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_191014_family-dental-clinic-theta.vercel.app.jpeg",
     "/dental/Screenshot_8-10-2025_191028_family-dental-clinic-theta.vercel.app.jpeg"
    ],
    tags: ["React", "Framer Motion","Tailwind","Supabase"],
  },
  {
    title: "Urban-Eye : City Collaborative Dashboard",
    desc: "Collaborative city dashboard with role based access for city officials and citizens. Citizens highlight issues and city officials can view and resolve them.",
    href: "#",
    images: [
      "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
      "/urban/Screenshot_14-10-2025_10398_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_103524_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_103823_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_103845_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_103920_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_103928_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_104035_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_104047_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_104054_localhost.jpeg",
      "/urban/Screenshot_14-10-2025_104114_localhost.jpeg",
  


    ],
    tags: ["Next.js", "Tailwind", "Supabase","Framer-motion","React"],
  },
];

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const setFromMql = (mq: MediaQueryList | MediaQueryListEvent) =>
      setIsMobile('matches' in mq ? mq.matches : (mq as MediaQueryList).matches);
    // init
    setFromMql(mql);
    const listener = (e: MediaQueryListEvent) => setFromMql(e);
    mql.addEventListener ? mql.addEventListener("change", listener) : mql.addListener(listener);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", listener) : mql.removeListener(listener);
    };
  }, []);

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
        const stack =
          proj.images.length >= 3
            ? proj.images
            : Array.from({ length: 3 }, (_, i) => proj.images[i % proj.images.length]);
        const visible = stack;
        return (
          <motion.div
            key={`section-${proj.title}-${idx}`}
            className={`relative rounded-[24px] border border-white/10 bg-[rgba(6,0,16,0.5)] backdrop-blur p-4 md:p-6 lg:p-10 overflow-hidden ${idx === 0 ? "" : "mt-8 md:mt-10"}`}
            initial={idx === 0 ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 30 }}
            animate={idx === 0 ? { opacity: 1, y: 0 } : undefined}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(closest-side,rgba(64,255,170,0.25),rgba(64,121,255,0.15),rgba(0,0,0,0))] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[320px] lg:min-h-[360px]">
              {/* Description - Left on desktop, Top on mobile */}
              <div className="order-1 lg:order-1 relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{proj.title}</h2>
                <p className="text-white/90 mb-4 max-w-2xl text-sm md:text-base font-medium">{proj.desc}</p>
                <div className="flex items-center gap-2 text-xs mb-5 flex-wrap">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg border border-white/20 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-orange-400/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                    >
                      <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent font-bold text-sm">
                        {t}
                      </span>
                    </span>
                  ))}
                </div>
                {proj.href && (
                  <div className="mt-3 w-full flex justify-center md:justify-start md:inline-flex md:w-auto relative z-20">
                    <GlowButton asChild className="px-4 py-2">
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="cursor-target inline-block mx-auto md:mx-0 w-full sm:w-auto text-center"
                      >
                        Visit Site →
                      </a>
                    </GlowButton>
                  </div>
                )}
              </div>

              {/* CardStack - Right on desktop, centered below on mobile */}
              <div className="relative z-0 min-h-[280px] lg:min-h-[360px] order-2 lg:order-2 flex flex-col items-center lg:flex-row lg:justify-end justify-center">
                {/* CardStack - now appears above description on mobile, right on desktop */}
                <div
                  style={{ height: isMobile ? 240 : 260, width: isMobile ? 320 : undefined, position: "relative" }}
                  className="isolate w-full max-w-[360px] lg:h-[360px] lg:max-w-[350px] flex justify-center items-center lg:relative lg:-top-4 lg:-left-10 scale-[0.8] sm:scale-[0.9] lg:scale-100 overflow-hidden lg:overflow-visible rounded-xl"
                >
                  <CardSwap width={isMobile ? 320 : 380} height={isMobile ? 220 : 280} cardDistance={isMobile ? 22 : 26} verticalDistance={isMobile ? 28 : 34} delay={4000} pauseOnHover={false} skewAmount={isMobile ? 1 : 2}>
                    {visible.map((src, i) => (
                      <Card
                        key={i}
                        className="shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden border-white/10 bg-black"
                      >
                        <Image
                          src={src}
                          alt={`${proj.title} ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 80vw, 420px"
                          className="object-contain lg:object-cover object-top"
                        />
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
