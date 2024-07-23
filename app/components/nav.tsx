"use client";

import Link from "next/link";
import { Suspense, useLayoutEffect, useState } from "react";

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

type NavItemProps = { href: string; name: string };

function NavItem({ href, name }: NavItemProps) {
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      {
        threshold: 1,
      }
    );

    const element = document.querySelector(href);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [href]);

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
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <Suspense>
          {NAV_ITEMS.map((route) => (
            <NavItem key={route.name} {...route} />
          ))}
        </Suspense>
      </ul>
    </nav>
  );
}
