"use client";

import { usePathname } from "next/navigation";
import PillNav from "./PillNav";
import ahLogo from "@/public/ah.svg";

const navItems = [
  { label: "Home", href: "/", ariaLabel: "Home" },
  { label: "About", href: "/about", ariaLabel: "About Abdullah" },
  { label: "Projects", href: "/projects", ariaLabel: "Projects" },
  { label: "Contact", href: "/contact", ariaLabel: "Contact" },
];

export default function NavWrapper() {
  const pathname = usePathname();

  return (
    <PillNav
      logo={ahLogo.src}
      logoAlt="[ah] Logo"
      items={navItems}
      activeHref={pathname}
      baseColor="#fff"
      pillColor="transparent"
      pillTextColor="#fff"
      ease="power3.out"
    />
  );
}

