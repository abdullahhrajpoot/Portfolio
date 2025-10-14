"use client";

import GradientText from "@/components/GradientText";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub, SiLinkedin, SiInstagram, SiX, SiMaildotru, SiDiscord } from "react-icons/si";
import { useRef, useState } from "react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    setSending(true);
    setStatus(null);
    try {
      // Optional EmailJS dynamic import (safe no-op if not configured)
      const emailjs = await import("@emailjs/browser").catch(() => null);
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (emailjs && serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, form, { publicKey });
        setStatus({ ok: true, msg: "Message sent! I’ll get back to you soon." });
        form.reset();
      } else {
        // Fallback to mailto
        const data = new FormData(form);
        const name = encodeURIComponent(String(data.get("name") || ""));
        const subject = encodeURIComponent(String(data.get("subject") || "Inquiry from portfolio"));
        const message = encodeURIComponent(String(data.get("message") || ""));
        const email = encodeURIComponent(String(data.get("email") || ""));
        window.location.href = `mailto:abdullahh.hassan07@gmail.com?subject=${subject}&body=${name}%0A${email}%0A%0A${message}`;
        setStatus({ ok: true, msg: "Opening your mail client…" });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  };

  const card = (href: string, label: string, icon: React.ReactNode) => (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="group rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 flex items-center gap-4 hover:bg-white/10 transition-colors"
      initial={{ opacity: 0.6, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-2xl md:text-3xl text-white/90">{icon}</span>
      <span className="font-semibold">{label}</span>
    </motion.a>
  );

  return (
    <div className="px-4 md:px-8 lg:px-12 pt-[84px] pb-20">
      <div className="mb-10 text-center">
        <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={2.2} showBorder={false} className="block">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Let’s Connect</h1>
        </GradientText>
        <p className="mt-2 text-white/70">Say hi, discuss a project, or just drop a note.</p>
      </div>

      {/* Quick contact methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {card("mailto:abdullahh.hassan07@gmail.com", "Email", <SiMaildotru />)}
        {card("www.linkedin.com/in/abdullah-hassan-66a043299", "LinkedIn", <SiLinkedin />)}
        {card("https://github.com/abdullahhrajpoot", "GitHub", <SiGithub />)}
        {card("https://www.instagram.com/abdullahh_rajpoot/", "Instagram", <SiInstagram />)}
        {card("https://x.com/async_abdullah", "X (Twitter)", <SiX />)}
        {card("https://discord.com/users/async_abdullah", "Discord", <SiDiscord />)}
      </div>

      {/* Big CTA card */}
      <motion.div
        className="relative rounded-[24px] border border-white/10 bg-[rgba(6,0,16,0.5)] backdrop-blur p-6 md:p-10 overflow-hidden mt-10 md:mt-12"
        initial={{ opacity: 0.6, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(closest-side,rgba(64,255,170,0.25),rgba(64,121,255,0.15),rgba(0,0,0,0))] pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Work with me</h2>
            <p className="text-white/80 max-w-xl mx-auto lg:mx-0">Freelance, collaboration, or long-term—open to exciting opportunities that push the web forward.</p>
            <div className="mt-6">
              <Link href="mailto:abdullahh.hassan07@gmail.com" className="cursor-target">
                <span className="relative inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
                  Email me
                </span>
              </Link>
            </div>
          </div>
          {/* Contact form */}
          <form ref={formRef} onSubmit={onSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-5 md:p-6 backdrop-blur space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input name="subject" className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="How can I help?" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" placeholder="Tell me about your project…" />
            </div>
            <div className="flex items-center gap-3">
              <button disabled={sending} className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-2xl font-semibold border border-white/15 bg-white/5 text-white backdrop-blur transition-transform duration-300 hover:scale-[1.02] disabled:opacity-50">
                {sending ? "Sending…" : "Send message"}
              </button>
              <a href="mailto:abdullahh.hassan07@gmail.com" className="text-sm text-cyan-300 hover:text-cyan-200">or email directly</a>
            </div>
            {status && (
              <p className={`text-sm ${status.ok ? "text-emerald-300" : "text-rose-300"}`}>{status.msg}</p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}


