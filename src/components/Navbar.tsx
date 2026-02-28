import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Why Us", href: "#why" },
  { label: "Equipment", href: "#equipment" },
  { label: "Who It's For", href: "#who" },
  { label: "Membership", href: "#membership" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-lg text-primary-foreground font-semibold">
          Milk &amp; <span className="italic text-honey-light">Honey</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/70 hover:text-honey-light font-body text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#membership"
            className="px-5 py-2 bg-gradient-honey text-primary-foreground font-body text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-primary-foreground/70 hover:text-honey-light font-body text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#membership"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-gradient-honey text-primary-foreground font-body text-sm font-semibold rounded-lg text-center"
              >
                Apply for Membership
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
