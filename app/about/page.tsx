"use client";
import GradientText from "@/components/GradientText";
import DecryptedText from "@/components/DecryptedText";
import LogoLoop from "@/components/LogoLoop";
import StarBorder from "@/components/StarBorder";
import ElectricBorder from "@/components/ElectricBorder";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, HoverLift } from "@/components/MotionWrappers";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiFramer, SiGithub, SiVercel, SiStripe } from "react-icons/si";

export default function AboutPage() {
  return (
    <section className="px-4 md:px-8 lg:px-12 pt-16 pb-20 space-y-12">
      {/* Title */}
      <div className="text-center">
        <GradientText colors={["#40ffaa","#4079ff","#40ffaa"]} animationSpeed={4}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">About Me</h1>
        </GradientText>
        <div className="mt-6 max-w-5xl mx-auto">
          <div className="relative rounded-[24px] border border-white/10 bg-[rgba(6,0,16,0.5)] backdrop-blur p-6 md:p-8 overflow-hidden">
            <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(closest-side,rgba(64,255,170,0.25),rgba(64,121,255,0.15),rgba(0,0,0,0))] pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <GradientText colors={["#ff7b00", "#a259ff", "#ff7b00"]} animationSpeed={4} className="block text-left">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">Who I Am</h2>
                </GradientText>
                <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} className="text-white/90">
                  <Reveal>
                    <p className="text-base md:text-lg text-white/90">
                      Hey, I’m Abdullah Hassan — a Software Engineering undergrad at COMSATS and a full‑stack developer who turns real problems into real products.
                    </p>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="text-sm md:text-base text-white/75 mt-3">
                      I specialize in Next.js, Supabase, and Tailwind, building end‑to‑end apps with auth, role‑based dashboards, real‑time data, payments, and clean UX that actually feels good to use.
                    </p>
                  </Reveal>
                </GradientText>
                <div className="mt-5">
                  <GradientText colors={["#40ffaa","#4079ff","#40ffaa"]} animationSpeed={4}>
                    <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">Why Me</h3>
                  </GradientText>
                  <Reveal>
                    <p className="text-white/85 mt-2 text-sm md:text-base">
                      I build products end‑to‑end: strategy, architecture, shipping. Fast. From auth and role‑based dashboards to real‑time data, payments, and smooth UI, I ship working software—usually in weeks, not months.
                    </p>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="text-white/70 mt-3 text-sm md:text-base">
                      Recent work includes a multi‑portal tutoring platform, a clinic scheduling + invoice portal, an Urdu‑friendly rental marketplace, and collaborative dashboards for hackathons.
                    </p>
                  </Reveal>
                  <Reveal delay={0.16}>
                    <p className="text-white/70 mt-3 text-sm md:text-base">
                      I care about clean UX, maintainable systems, and momentum. Bring the idea—I’ll design it, build it, and put it in people’s hands.
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className="w-full flex justify-center lg:justify-end">
                <span className="relative inline-block p-[2px] rounded-2xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-orange-400 shadow-[0_10px_40px_rgba(34,211,238,0.18)]">
                  <span className="block rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm w-[220px] h-[220px]">
                    <Image
                      src="/generation-20852383-21dd-437f-8282-000054b733f1.png"
                      alt="Abdullah Hassan"
                      width={440}
                      height={440}
                      className="w-full h-full object-cover object-[50%_30%]"
                      priority
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-5xl mx-auto">
        <GradientText colors={["#46ffaa","#4209ff","#40ffaa"]} animationSpeed={4}>
          <h2 className="text-2xl md:text-3xl font-bold">Tech stack I use daily</h2>
        </GradientText>
        <div className="mt-6 rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]" style={{ position: "relative" }}>
          <div style={{ height: "140px", position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={[
              { node: <span className="inline-flex items-center gap-2"><SiReact /><span className="text-sm">React</span></span>, href: "https://react.dev" },
              { node: <span className="inline-flex items-center gap-2"><SiNextdotjs /><span className="text-sm">Next.js</span></span>, href: "https://nextjs.org" },
              { node: <span className="inline-flex items-center gap-2"><SiTypescript /><span className="text-sm">TypeScript</span></span>, href: "https://www.typescriptlang.org" },
              { node: <span className="inline-flex items-center gap-2"><SiTailwindcss /><span className="text-sm">Tailwind</span></span>, href: "https://tailwindcss.com" },
              { node: <span className="inline-flex items-center gap-2"><SiSupabase /><span className="text-sm">Supabase</span></span>, href: "https://supabase.com" },
              { node: <span className="inline-flex items-center gap-2"><SiFramer /><span className="text-sm">Framer</span></span>, href: "https://www.framer.com/motion/" },
              { node: <span className="inline-flex items-center gap-2"><SiGithub /><span className="text-sm">GitHub</span></span>, href: "https://github.com" },
              { node: <span className="inline-flex items-center gap-2"><SiVercel /><span className="text-sm">Vercel</span></span>, href: "https://vercel.com" },
              { node: <span className="inline-flex items-center gap-2"><SiStripe /><span className="text-sm">Stripe</span></span>, href: "https://stripe.com" },
            ]}
            speed={90}
            direction="left"
            logoHeight={46}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Daily tech stack"
          />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6 max-w-5xl mx-auto">
        <GradientText colors={["#40ffaa","#4079ff","#40ffaa"]} animationSpeed={4}>
          <h2 className="text-2xl md:text-3xl font-bold">Journey</h2>
        </GradientText>
        <div className="relative">
          {/* Center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400/30 via-white/10 to-fuchsia-400/30" />

          <div className="relative space-y-10">
            {[
              {
                title: "BS Software Engineering – COMSATS University, Pakistan",
                period: "2024 – Present",
                body:
                  "Currently pursuing my degree with a focus on full-stack web development, database systems, and software design principles. Explored hands-on development through academic projects and hackathons, focusing on React and Next.js ecosystems.",
              },
              {
                title: "Learnify (EdTech Platform)",
                period: "2025",
                body:
                  "A custom-built learning portal with Next.js + Supabase + Tailwind. Features auth, RLS, real-time updates, and role-based dashboards. Features a custom AI chatbot with Deepseek API.",
              },
              {
                title: "Family Dental Clinic",
                period: "2025",
                body:
                  "Clinic website with receptionist and doctor booking workflows. Receptionists can make appointments for existing or new patients and generate invoices whereas doctors can view their appointments and earning histories.",
              },
              {
                title: "UrbanEye (Web-e-thon Hackathon)",
                period: "2025",
                body:
                  "Smart City Collaborative Dashboard. Focused on frontend architecture, UI/UX consistency, and real-time data visualization. Recognized for UI quality.",
              },
              {
                title: "Local Rental Marketplace MVP (in progress)",
                period: "2024",
                body:
                  "Urdu-friendly rental marketplace. Listings, media uploads, search/filter, realtime chat. Planned Stripe/local payments.",
              },
              {
                title: "Achievements & Highlights",
                period: "Present",
                body:
                  "Internship offer in Next.js; Hackathon finalist at COMSATS Web-e-thon; Freelancing (Upwork/Fiverr); Active mentor and learner; Building an ethical tech roadmap.",
              },
            ].map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {/* Center node */}
                  <span
                    aria-hidden
                    className="absolute left-1/2 -translate-x-1/2 top-5 h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 ring-4 ring-black/40 shadow-[0_0_0_2px_rgba(255,255,255,0.08),0_10px_30px_rgba(255,179,64,0.35)]"
                  />

                  {/* Left column card or spacer */}
                  {isLeft ? (
                    <div className="lg:pr-10">
                      <StarBorder as="div">
                        <div className="rounded-2xl p-5 md:p-6 bg-white/5 border border-white/10 backdrop-blur">
                          <div className="text-sm text-yellow-300/90 font-semibold tracking-wide">{item.period}</div>
                          <div className="font-bold text-xl mt-1">{item.title}</div>
                          <div className="text-white/80 mt-2 text-sm leading-relaxed">{item.body}</div>
                        </div>
                      </StarBorder>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}

                  {/* Right column card or spacer */}
                  {!isLeft ? (
                    <div className="lg:pl-10 lg:col-start-2">
                      <StarBorder as="div">
                        <div className="rounded-2xl p-5 md:p-6 bg-white/5 border border-white/10 backdrop-blur">
                          <div className="text-sm text-yellow-300/90 font-semibold tracking-wide">{item.period}</div>
                          <div className="font-bold text-xl mt-1">{item.title}</div>
                          <div className="text-white/80 mt-2 text-sm leading-relaxed">{item.body}</div>
                        </div>
                      </StarBorder>
                    </div>
                  ) : (
                    <div className="hidden lg:block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="pt-6 text-center">
          <Link href="/projects" className="cursor-target">
            <span className="relative inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
              Wanna see more? Dive into my projects →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
