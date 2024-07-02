"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

function NavItem({ href, name, isActive }) {
  return (
    <Link
      key={href}
      href={href}
      className={`group flex items-center py-3 ${isActive ? "active" : ""}`}
    >
      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
        {name}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [hash, setHash] = useState(NAV_ITEMS[0].href);
  const params = useSearchParams();

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {NAV_ITEMS.map((route) => (
          <NavItem key={route.name} {...route} isActive={route.href === hash} />
        ))}
      </ul>
    </nav>
  );
}
