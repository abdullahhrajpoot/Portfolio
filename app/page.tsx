"use client"
import Link from "next/link";
import GlowButton from "@/components/GlowButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/MotionWrappers";
import GradientText from "@/components/GradientText";
import DecryptedText from "@/components/DecryptedText";
import RotatingText from "@/components/RotatingText";
import StarBorder from "@/components/StarBorder";
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiStripe, SiVercel, SiGithub, SiFramer } from "react-icons/si";

export default function Home() {
  return (
    <>
    <section className="px-4 md:px-8 lg:px-12 pt-[64px] pb-10 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full items-center">
        {/* Left: Intro text with effects */}
        <div className="order-2 md:order-1">
          <div className="mb-6">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Hi, I’m Abdullah Hassan
                <span className="block">Software Engineer & Web Developer</span>
              </h1>
            </GradientText>
          </div>

          {/* <motion.div 
            className="mb-4 flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={2}
              showBorder={false}
              className="inline-block"
            >
              <span className="px-3 py-1 rounded-full border border-white/10 backdrop-blur text-sm font-medium text-white-500">I make websites using</span>
            </GradientText>
            <RotatingText
              texts={["React", "Next.js", "Framer Motion", "Supabase", "shadcn/ui"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300/90 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg inline-flex shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div> */}

          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <DecryptedText
              text="I ship fast, modern web apps—Next.js + React + Supabase—with clean UX and real product impact."
              animateOn="hover"
              revealDirection="center"
              className="text-base md:text-lg"
              parentClassName="block"
              encryptedClassName="opacity-60"
              speed={50}
            />
            {/* <Reveal>
              <p className="mt-3 text-white/80 text-sm md:text-base">
                Auth, dashboards, real‑time data, payments, and delightful UI. From idea → live product.
              </p>
            </Reveal> */}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="cursor-target">
              <GlowButton>View My Work</GlowButton>
            </Link>
            <Link href="/contact" className="cursor-target">
              <GlowButton className="bg-gradient-to-r from-white to-white text-black shadow-[0_8px_30px_rgba(255,255,255,0.25)]">Hire Me</GlowButton>
            </Link>
          </div>

          
        </div>
        
        {/* Right: Portfolio image rounded and aligned */}
        <div className="order-1 md:order-2 w-full">
          <div className="relative group w-full max-w-[340px] md:max-w-[380px] lg:max-w-[400px] mx-auto md:ml-auto md:mr-0 -mt-26">
            {/* Animated gradient blob behind */}
            <div className="absolute -inset-8 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"
                 style={{ background: "radial-gradient(closest-side, rgba(64,255,170,0.35), rgba(64,121,255,0.2), rgba(0,0,0,0))" }} />
            {/* Gradient ring */}
            <div className="p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-orange-400">
              <div className="relative rounded-full overflow-hidden bg-black/20 backdrop-blur-sm">
                <Image
                  src="/generation-20852383-21dd-437f-8282-000054b733f1.png"
                  alt="Portrait"
                  width={800}
                  height={900}
                  className="block w-full h-full object-cover rounded-full aspect-square object-[50%_30%] scale-[1.0] group-hover:scale-[1.03] transition-transform duration-700"
                  priority
                />
                {/* subtle light sheen */}
                <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="mt-10">
            <div style={{ height: "150px", position: "relative", overflow: "hidden" }}>
              <LogoLoop
                logos={[
                  { node: <SiReact />, title: "React", href: "https://react.dev" },
                  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
                  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
                  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
                  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
                  {node: <SiStripe />, title: "Stripe", href: "https://stripe.com" },
                  {node: <SiFramer />, title: "Framer", href: "https://framer.com" },
                  {node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
                  {node: <SiGithub />, title: "GitHub", href: "https://github.com" },
                  
              
                ]}
                speed={100}
                direction="left"
                logoHeight={50}
                gap={36}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology partners"
              />
            </div>
          </div>

 

    {/* Featured Work */}
    <section className="px-4 md:px-8 lg:px-12 pt-16">
      <GradientText
        colors={["#f9c80e", "#f86624", "#f9c80e"]}

        animationSpeed={2.5}
        showBorder={false}
        className="block text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">Featured Work</h2>
      </GradientText>
      {(() => {
        const featuredProjects = [
          {
            title: "Learnify",
            description: "AI-powered tutoring and student engagement platform.",
            tags: ["Next.js", "Tailwind", "Supabase"],
            href: "https://learnify-red.vercel.app",
            image: "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
          },
          {
            title: "Family Dental Clinic",
            description: "Family Dental Clinic website with booking system for receptionists and doctors.",
            tags: ["Next.js", "Tailwind", "Supabase"],
            href: "https://family-dental-clinic-theta.vercel.app",
            image: "/Screenshot_8-10-2025_204224_localhost.jpeg",
          },
          {
            title: "Urban-Eye : City Collaborative Dashboard",
            description: "Collaborative city dashboard with role based access for city officials and citizens.",
            tags: ["React", "Framer Motion", "MongoDB","Node.js","Tailwind"],
            href: "#",
            image: "/urban/Screenshot_14-10-2025_103524_localhost.jpeg",
          },
          {
            title: "Origani",
            description: "A premium modern web application and platform.",
            tags: ["Next.js", "Tailwind", "Framer Motion"],
            href: "https://origani.vercel.app",
            image: "/orignai/Screenshot_22-2-2026_191447_origani.vercel.app.jpeg",
          },
          {
            title: "G12 AI",
            description: "An advanced customizable AI-driven platform.",
            tags: ["Next.js", "Tailwind", "React"],
            href: "https://g12ai.vercel.app",
            image: "/g12/Screenshot_22-2-2026_193226_g12ai.vercel.app.jpeg",
          },
          {
            title: "Logic Builder",
            description: "An interactive logic building and visualization tool.",
            tags: ["React", "Framer Motion", "Tailwind"],
            href: "https://logic-builderr.vercel.app",
            image: "/logicbuilder/Screenshot_22-2-2026_192554_logic-builderr.vercel.app.jpeg",
          },
        ];
        const cardVariants = {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
        };
        return (
          <div className="space-y-10 overflow-x-clip">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.35 }}
                variants={cardVariants}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`
                  group relative overflow-hidden rounded-3xl border border-white/10
                  shadow-[0_12px_32px_0_rgba(40,50,70,0.22)]
                  flex flex-col lg:flex-row items-stretch bg-gradient-to-br
                  from-[#1c2033]/80 via-[#181327]/70 to-[#0c0e16]/90
                  backdrop-blur-lg
                  hover:shadow-[0_18px_60px_0_rgba(34,211,238,0.16)]
                  transition-all duration-500
                  p-0
                `}
              >
                {/* Subtle accent background shape */}
                <div
                  aria-hidden
                  className="absolute -bottom-28 -right-24 w-64 h-64 bg-gradient-radial from-cyan-400/15 to-fuchsia-500/0 blur-2xl pointer-events-none"
                />
                {/* Border Glow on hover */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-3xl border-2 border-transparent group-hover:border-cyan-300/40 group-hover:shadow-[0_0_50px_10px_rgba(34,211,238,0.06)] transition-all duration-500" />

                {/* Left: Content */}
                <div
                  className={`
                    flex-1 px-6 py-8 flex flex-col justify-center
                    min-h-[220px]
                    relative
                    z-10
                  `}
                >
                  <div className="flex items-center justify-between mb-2 gap-3">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 bg-clip-text text-transparent group-hover:text-white transition-colors duration-400">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mb-5 mt-2 text-white/90 text-[15px] md:text-base font-medium leading-relaxed">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full border border-white/20 bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/15 to-orange-300/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] text-xs font-semibold text-cyan-200 tracking-wide whitespace-nowrap"
                      >
                        <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-orange-200 bg-clip-text text-transparent font-bold">{tag}</span>
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-yellow-300 text-black shadow-[0_5px_32px_rgba(34,211,238,0.20)] opacity-95 hover:opacity-100 transition active:scale-95 cursor-target group-hover:shadow-md hover:scale-[1.05] mt-auto"
                  >
                    Visit Site
                    <svg width="20" height="20" fill="none" aria-hidden className="ml-1 -mr-1"><path d="M5 10h10m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>

                {/* Right: Image with animated frame - now tilted to the left, and stays straight on mobile */}
                <motion.div
                  className={`
                    relative flex-shrink-0 min-h-[220px] w-full md:w-[370px] lg:w-[380px]
                    overflow-hidden group/image rounded-r-3xl transition-shadow duration-500
                    order-first lg:order-last
                    max-w-full
                  `}
                  initial={{
                    x: 60,
                    opacity: 0.85,
                    rotate: -8,
                    scale: 0.99
                  }}
                  whileHover={{
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    scale: 1.03,
                    boxShadow: '0px 6px 40px 6px rgba(244,195,32,0.10)'
                  }}
                  whileTap={{
                    scale: 0.97
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  style={{
                    zIndex: 10,
                    borderTopRightRadius: '1.5rem',
                    borderBottomRightRadius: '1.5rem'
                  }}
                  animate={
                    typeof window !== 'undefined' && window.innerWidth < 1024 
                      ? { x: 0, opacity: 1, rotate: 0, scale: 1 }
                      : undefined
                  }
                >
                  <span className="absolute z-[2] top-4 left-4 inline-flex px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-400/80 via-fuchsia-400/70 to-yellow-400/80 text-xs font-bold text-[#181327] shadow shadow-cyan-200/10 select-none pointer-events-none backdrop-blur-sm">
                    FEATURED
                  </span>
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={400}
                    height={280}
                    className="object-cover object-top w-full h-full rounded-r-3xl transition-transform duration-500 group-hover/image:scale-[1.06] select-none pointer-events-none"
                    style={{
                      maxWidth: "100%"
                    }}
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 pointer-events-none z-1" />
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 pointer-events-none rounded-r-3xl border-2 border-transparent group-hover/image:border-yellow-400/35 transition-all duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        );
      })()}
    </section>

    {/* Testimonials - Unique, balanced, lively */}
    <section className="px-4 md:px-8 lg:px-12 pt-16">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={2.5}
        showBorder={false}
        className="block text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 relative inline-block">
          <span className="relative z-10 text-white">What My Clients Say</span>
          <span className="absolute left-1/2 -bottom-3 w-16 h-4 bg-gradient-to-r from-orange-400 via-fuchsia-500 to-cyan-400 opacity-50 blur-md rounded-full -translate-x-1/2" aria-hidden />
        </h2>
      </GradientText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
        {/* Presentation edge effect */}
        <div className="hidden md:block absolute top-0 left-[48%] h-full w-1 pointer-events-none bg-gradient-to-b from-cyan-400/10 to-pink-400/0 rounded-full blur-lg" />
        {[
          {
            name: "Muneeb Shahzad",
            role: "Startup Founder",
            company: "Stealth Project",
            text: "Abdullah took our vision, simplified things, and built a product that exceeded every expectation. Effortless communication, on-point suggestions—the SaaS MVP went live weeks earlier than planned. Rare level of ownership and polish.",
            stars: 5,
            avatar: "/muneeb.jpg",
            mainAccent: "from-cyan-400/40 to-fuchsia-300/25",
            sticker: "🌟",
            side: "left"
          },
          {
            name: "Saba Tariq",
            role: "Senior Web Designer",
            company: "Freelance",
            text: "Working alongside Abdullah means you’ll always ship something superior—his eye for UI, edge-case testing, and reliable launches are rare to find. The feedback loop is a blessing, he cares deeply about making everything more human and useful.",
            stars: 5,
            avatar: "/saba.jpg",
            mainAccent: "from-fuchsia-500/30 to-orange-400/20",
            sticker: "💫",
            side: "right"
          }
        ].map((t,i) => (
          <motion.div
            key={t.name}
            className={`
              relative group
              rounded-2xl
              p-[2px]
              bg-gradient-to-br ${t.mainAccent}
              shadow-[0_2px_28px_0_rgba(34,211,238,0.18)]
              hover:scale-[1.02] hover:shadow-[0_8px_42px_rgba(172,90,255,0.13)]
              transition-all duration-300
              flex flex-col justify-between
              min-h-[320px]
              ${i === 0 ? "md:mr-2" : "md:ml-2"}
            `}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.68, delay: i * 0.10, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl bg-black/60 border border-white/10 p-8 backdrop-blur flex flex-col h-full relative overflow-visible">
              {/* Animated floating star sticker */}
              <span
                aria-hidden
                className={`
                  absolute -top-7 ${t.side === "left" ? "left-10" : "right-10"}
                  text-4xl animate-bounce z-10
                  select-none pointer-events-none
                `}
                style={{
                  filter: "drop-shadow(0 2px 18px rgba(244,128,255,0.23))"
                }}
              >{t.sticker}</span>
              {/* Star rating visually emphasized */}
              <div className="mb-3 flex justify-center gap-1 transition-transform scale-[1.08]">
                {Array.from({length: t.stars}).map((_, s) => (
                  <span key={s} className="text-yellow-400 text-xl drop-shadow-sm">★</span>
                ))}
              </div>
              <div className="text-white/90 text-lg leading-relaxed mb-5 text-center font-[450]">
                <q>{t.text}</q>
              </div>
              {/* Profile Bar */}
              <div className="flex items-center justify-center gap-3 mt-auto pt-2">
                <span className={`w-11 h-11 rounded-full bg-gradient-to-r ${t.mainAccent} border-2 border-white/20 shadow-inner overflow-hidden flex items-center justify-center`}>
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="w-11 h-11 object-cover rounded-full"
                    loading="lazy"
                  />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-white/90">{t.name}</span>
                  <span className="text-xs text-white/60">{t.role} <span className="mx-1 text-pink-400/70">•</span> {t.company}</span>
                </div>
              </div>
              {/* Subtle animated background decor */}
              <span
                aria-hidden
                className={`absolute z-0 w-40 h-40 rounded-full ${i === 0 ? "-left-14 -bottom-10" : "-right-14 -top-12"} pointer-events-none
                  bg-gradient-to-br ${t.mainAccent} opacity-30 blur-2xl animate-pulse
                `}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Get To Know Me */}
    <section className="px-4 md:px-8 lg:px-12 pt-16 relative isolate">
      {/* Animated floating blobs as ultra subtle deco */}
      <span aria-hidden className="pointer-events-none absolute blur-3xl opacity-50 w-64 h-64 left-[-60px] top-[-80px] bg-gradient-to-br from-[#ff8e53]/60 to-[#ffb26b]/50 rounded-full z-0 animate-spin-slow" />
      <span aria-hidden className="pointer-events-none absolute blur-3xl opacity-40 w-60 h-60 right-[-38px] bottom-[-72px] bg-gradient-to-tr from-[#40ffaa]/50 via-[#ffb26b]/30 to-[#ff7b54]/40 rounded-full z-0 animate-pulse-slow" />

      <GradientText
        colors={["#ff7b54", "#ffb26b", "#40ffaa", "#ff7b54"]}
        animationSpeed={2.9}
        showBorder={false}
        className="block text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-10">
          Get To Know <span className="bg-gradient-to-r from-[#4cfedb] via-[#ffb26b] to-[#ff7b54] bg-clip-text text-transparent">Me</span>
        </h2>
      </GradientText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 relative z-10">
        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.61, ease: [0.22,1,0.36,1], delay: 0.05 }}
          className="flex items-stretch justify-center"
        >
          <Link href="/about" className="group relative max-w-full w-full rounded-2xl px-0 py-0 bg-gradient-to-br from-white/10 via-[#410bff1a]/40 to-[#ff6b6b10] border border-white/10 shadow-[0_8px_44px_rgba(255,120,110,0.13)] overflow-hidden hover:scale-[1.025] transition-transform duration-300 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <div className="relative p-7 pb-8 flex flex-col items-center overflow-hidden min-h-[188px]">
              {/* Decorative sticker accent */}
              <span className="absolute -top-6 left-8 text-4xl z-10 drop-shadow-md rotate-12 select-none pointer-events-none animate-bounce-slow motion-reduce:animate-none" aria-hidden>
                🤝
              </span>
              {/* Animated border halo */}
              <span aria-hidden className="absolute right-[-35px] bottom-[-30px] h-40 w-40 bg-gradient-to-tr from-[#ff7b54a1] to-[#ffb26b83] rounded-full opacity-40 blur-3xl animate-in-out" />
              {/* Main Icon */}
              <span className="relative z-20 bg-gradient-to-br from-[#ffb26b] to-[#ff7b54] text-white border-2 border-white/40 shadow-lg w-14 h-14 flex items-center justify-center rounded-xl mb-2 text-4xl group-hover:scale-110 transition-transform">
                <SiNextdotjs />
              </span>
              <div className="relative text-center mt-2">
                <div className="font-semibold text-lg md:text-xl tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <span className="bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                    About Me
                  </span>
                </div>
                <div className="text-white/80 text-sm mt-1 font-medium max-w-xs mx-auto whitespace-pre-line">
                  Dive into my story, philosophy, and journey
                </div>
              </div>
              {/* Star flare accent */}
              <span
                aria-hidden
                className="absolute top-7 left-0 text-yellow-300/70 text-2xl animate-spin pointer-events-none select-none"
                style={{ filter: "drop-shadow(0 2px 12px #ffe686b0)" }}
              >★</span>
            </div>
            {/* Electric border/aura effect */}
            <span 
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-[#ffb26b] rounded-2xl z-10 transition-all duration-300"
              style={{
                boxShadow:
                  "0 0 32px 1vw #ffb26b40, 0 1.5px 22px 0 #ff7b5495"
              }}
            />
          </Link>
        </motion.div>
        {/* Tech Stack Card */}
        <motion.div
          initial={{ opacity: 0, y: 44, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.61, ease: [0.22,1,0.36,1], delay: 0.11 }}
          className="flex items-stretch justify-center"
        >
          <Link href="/about" className="group relative max-w-full w-full rounded-2xl px-0 py-0 bg-gradient-to-bl from-[#40ffaa10] via-white/5 to-[#ffb26b15] border border-white/10 shadow-[0_8px_50px_rgba(64,255,170,0.10)] overflow-hidden hover:scale-[1.025] transition-transform duration-300 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300">
            <div className="relative p-7 pb-8 flex flex-col items-center min-h-[188px] overflow-hidden">
              {/* Decorative sticker accent */}
              <span className="absolute -top-6 right-8 text-4xl z-10 drop-shadow-sm -rotate-12 animate-bounce-slow motion-reduce:animate-none select-none pointer-events-none" aria-hidden>
                🛠️
              </span>
              {/* Animated border halo */}
              <span aria-hidden className="absolute left-[-35px] bottom-[-30px] h-40 w-40 bg-gradient-to-tr from-[#40ffaae4] to-[#ffb26b68] rounded-full opacity-35 blur-3xl animate-in-out" />
              {/* Main Icon */}
              <span className="relative z-20 bg-gradient-to-tr from-[#40ffaa] to-[#67e8f9] text-black border-2 border-white/40 shadow-lg w-14 h-14 flex items-center justify-center rounded-xl mb-2 text-4xl group-hover:scale-110 transition-transform">
                <SiReact />
              </span>
              <div className="relative text-center mt-2">
                <div className="font-semibold text-lg md:text-xl tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  <span className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                </div>
                <div className="text-white/80 text-sm mt-1 font-medium max-w-xs mx-auto whitespace-pre-line">
                  Explore the tools, languages, and frameworks I use to build magical things
                </div>
              </div>
              {/* Star sparkle accent */}
              <span
                aria-hidden
                className="absolute bottom-6 right-5 text-cyan-300/70 text-2xl animate-spin pointer-events-none select-none"
                style={{ filter: "drop-shadow(0 2px 9px #40ffaae4)" }}
              >★</span>
            </div>
            {/* Electric border/aura effect */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-[#40ffaa] rounded-2xl z-10 transition-all duration-300"
              style={{
                boxShadow: "0 0 32px 1vw #40ffaa25, 0 1.5px 22px 0 #1ee7b797"
              }}
            />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Let's work together */}
    <section className="px-4 md:px-8 lg:px-12 pt-16 pb-20">
      <GradientText colors={["#ff7b00", "#a259ff", "#ff7b00"]}
 animationSpeed={2.5} showBorder={false} className="block text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">Let’s work together</h2>
      </GradientText>
      <motion.div
        className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400/30 via-fuchsia-500/20 to-orange-400/30"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
      >
        <div className="rounded-2xl bg-black/50 border border-white/10 p-6 md:p-8 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="text-white/90 max-w-2xl text-sm md:text-base">Want to discuss an opportunity to create something great? I’m ready when you are.</div>
            <Link href="/contact" className="cursor-target">
              <span className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
                Get in touch
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>


    </>
  );
}
