"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
              text="I build interactive, modern web experiences using React, Next.js, and Supabase."
              animateOn="both"
              revealDirection="center"
              className="text-base md:text-lg"
              parentClassName="block"
              encryptedClassName="opacity-60"
              speed={50}
            />
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="cursor-target">
              <span className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
                View My Work
              </span>
            </Link>
            <Link href="/contact" className="cursor-target">
              <span className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold border border-white/15 bg-white/5 text-white backdrop-blur shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:bg-white/10">
                Hire Me
              </span>
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
            title: "DevBoard",
            description: "Analytics dashboard for engineering teams.",
            tags: ["React", "Framer Motion", "Supabase"],
            href: "#",
            image: "/Screenshot_7-9-2025_18387_learnify-red.vercel.app.jpeg",
          },
        ];
        const cardVariants = {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
        };
        return (
          <div className="space-y-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="group rounded-2xl bg-white/5 border border-white/10 p-5 md:p-7 flex flex-col md:flex-row items-start md:items-center gap-6"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
             >
                <div className="flex-1">
                  <div className="text-lg md:text-xl font-semibold mb-2">
                    {project.title}
                  </div>
                  <div className="text-white/90 text-sm md:text-base mb-4 font-medium">{project.description}</div>
                  <div className="flex items-center gap-2 text-xs mb-4 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg border border-white/20 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-orange-400/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                      >
                        <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-orange-300 bg-clip-text text-transparent font-bold text-sm">
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>
                  <a href={project.href} className="cursor-target inline-flex items-center gap-1 text-cyan-300 text-sm hover:text-cyan-200 transition-colors">
                    Visit Site <span aria-hidden>→</span>
                  </a>
                </div>
                <motion.div
                  className="w-full md:w-[360px] rounded-xl overflow-hidden bg-black/30 border border-white/10 relative"
                  initial={{ x: 50, opacity: 0.8, rotate: 8 }}
                  whileHover={{ x: 0, opacity: 1, rotate: 0, y: -3, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  style={{ 
                    transform: typeof window !== 'undefined' && window.innerWidth < 1024 
                      ? 'translateX(0) rotate(0) scale(1)' 
                      : undefined 
                  }}
                  animate={typeof window !== 'undefined' && window.innerWidth < 1024 
                    ? { x: 0, opacity: 1, rotate: 0, y: 0, scale: 1 }
                    : undefined
                  }
                >
                  <Image src={project.image} alt={`${project.title} preview`} width={360} height={360} className="w-full h-auto" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        );
      })()}
    </section>

    {/* Testimonials */}
    <section className="px-4 md:px-8 lg:px-12 pt-16">
      <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={2.5} showBorder={false} className="block text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">Testimonials</h2>
      </GradientText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2].map((i)=> (
          <motion.div
            key={i}
            className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/30 to-white/10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
          >
            <div className="rounded-2xl bg-black/50 border border-white/10 p-6 backdrop-blur">
              <div className="text-yellow-300 mb- text-center">★★★★★</div>
              <div className="text-white/90 text-sm md:text-base">Excellent communication and high quality work. Will collaborate again.</div>
              <div className="text-xs text-white/60 mt-3">Muneeb Shazad • Private</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Get To Know Me */}
    <section className="px-4 md:px-8 lg:px-12 pt-16">
      <GradientText colors={["#ff7b54", "#ffb26b", "#ff7b54"]}
 animationSpeed={2.5} showBorder={false} className="block text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">Get To Know Me</h2>
      </GradientText>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22,1,0.36,1] }}
        >
        <Link href="/about" className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
          <div className="relative">
          
           {/* // <img src={image.toString()} alt="About" className="w-24 h-24 rounded-xl" /> */}
            <span className="absolute -right-3 -bottom-3 text-3xl ml-3 " aria-hidden>
            <SiNextdotjs />
              
            </span>
          </div>
          <div>
            <div className="font-semibold ml-2">About Me</div>
            <div className="text-white/80 text-sm ml-2">Who I am and what I do</div>
          </div>
        </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22,1,0.36,1] }}
        >
        <Link href="/about" className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center gap-4 hover:bg-white/10 transition-colors">
        <div className="relative">
          
          {/* // <img src={image.toString()} alt="About" className="w-24 h-24 rounded-xl" /> */}
           <span className="absolute -right-3 -bottom-3 text-3xl ml-3 " aria-hidden>
           <SiReact />
             
           </span>
         </div>
          <div>
            <div className="font-semibold ml-3">Tech Stack</div>
            <div className="text-white/80 text-sm ml-3">The dev tools and stack I use</div>
          </div>
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
