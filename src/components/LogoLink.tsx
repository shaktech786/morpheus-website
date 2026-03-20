"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LogoLink() {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Morpheus home"
      className="logo-header-wrap flex items-center gap-3 text-xl font-bold tracking-tight text-morpheus glow-green"
    >
      <Image
        src="/logo-transparent.png"
        alt="Morpheus logo"
        width={56}
        height={26}
        className="logo-header-intro"
      />
      <span>
        morpheus
        <span className="cursor-blink" aria-hidden="true" />
      </span>
    </Link>
  );
}
