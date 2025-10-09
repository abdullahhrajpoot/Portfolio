import GradientText from "@/components/GradientText";
import DecryptedText from "@/components/DecryptedText";
import LogoLoop from "@/components/LogoLoop";
import StarBorder from "@/components/StarBorder";
import ElectricBorder from "@/components/ElectricBorder";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiFramer, SiGithub, SiVercel, SiStripe } from "react-icons/si";

export default function AboutPage() {
  return (
    <section className="px-4 md:px-8 lg:px-12 pt-16 pb-20 space-y-12">
      {/* Title */}
      <div className="text-center">
        <GradientText colors={["#40ffaa","#4079ff","#40ffaa"]} animationSpeed={4}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">About Me</h1>
        </GradientText>
        <div className="mt-4 max-w-3xl mx-auto text-center">
          <GradientText colors={["#ff7b00", "#a259ff", "#ff7b00"]}
 animationSpeed={4} className="text-white/90">
            <DecryptedText
              text={"Hey, I’m Abdullah Hassan, a Software Engineering undergrad at COMSATS University who’s passionate about building modern, scalable web applications that blend clean design with solid backend logic.\n\nI specialize in React, Next.js, Tailwind CSS, Supabase, and Framer Motion — crafting digital products that don’t just look good but feel good to use.\n\nWhat drives me is turning ideas into real, functional products — whether that’s a student dashboard, a rental marketplace, or a collaborative web platform. I love solving real-world problems, optimizing workflows, and building tools that actually help people."}
              animateOn="view"
              revealDirection="center"
              className="text-base md:text-lg whitespace-pre-line"
              parentClassName="block text-center"
              encryptedClassName="opacity-60"
              speed={35}
            />
          </GradientText>
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
      <div className="space-y-6 max-w-3xl mx-auto">
        <GradientText colors={["#40ffaa","#4079ff","#40ffaa"]} animationSpeed={4}>
          <h2 className="text-2xl md:text-3xl font-bold">Journey</h2>
        </GradientText>
        <div className="relative border-l border-white/10 pl-6 space-y-6">
          {[
            {
              title: "BS Software Engineering – COMSATS University, Pakistan",
              period: "2022 – Present",
              body:
                "Currently pursuing my degree with a focus on full-stack web development, database systems, and software design principles. Explored hands-on development through academic projects and hackathons, focusing on MERN and Next.js ecosystems.",
            },
            {
              title: "Learnify (EdTech Platform)",
              period: "2025",
              body:
                "A custom-built learning portal with Next.js + Supabase + Tailwind. Features auth, RLS, real-time updates, and role-based dashboards.",
            },
            {
              title: "UrbanEye (Web-e-thon Hackathon)",
              period: "2025",
              body:
                "Smart City Collaborative Dashboard. Focused on frontend architecture, UI/UX consistency, and real-time data visualization. Recognized for UI quality.",
            },
            {
              title: "Campus Collaborative Dashboard (Concept)",
              period: "2025",
              body:
                "Inter-department communication and project tracking across universities. Built with Next.js + Supabase + Framer Motion.",
            },
            {
              title: "Local Rental Marketplace MVP (in progress)",
              period: "2024",
              body:
                "Urdu-friendly rental marketplace. Listings, media uploads, search/filter, realtime chat. Planned Stripe/local payments.",
            },
            // {
            //   title: "Personal Portfolio Site",
            //   period: "2023",
            //   body:
            //     "Responsive site in Next.js with smooth animations using Framer Motion.",
            // },
            {
              title: "Achievements & Highlights",
              period: "—",
              body:
                "Internship offer in Next.js; Hackathon finalist at COMSATS Web-e-thon; Freelancing (Upwork/Fiverr); Active mentor and learner; Building an ethical tech roadmap.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-white" />
              <StarBorder as="div" className="">
                <div className="rounded-xl p-4 bg-white/5">
                  <div className="text-sm text-white/70">{item.period}</div>
                  <div className="font-semibold text-lg mt-1">{item.title}</div>
                  <div className="text-white/80 mt-1 text-sm">{item.body}</div>
                </div>
              </StarBorder>
            </div>
          ))}
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
