"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./nav.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/services" },
  { label: "Operating Model", href: "/operating-model" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sytHeader">
      <div className="sytContainer">
        <div className="sytRow">
          <Link href="/" className="sytLogo">
            jetsky
          </Link>

          <nav className="sytNavDesktop">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="sytNavLink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="sytCtaDesktop">
            <Link href="/contact" className="sytCtaBtn">
              Start Discussion
            </Link>
          </div>

          <button
            className="sytMobileBtn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sytMobilePanel">
          <div className="sytMobileInner">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="sytMobileLink"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="sytMobileCta"
            >
              Start Discussion
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}