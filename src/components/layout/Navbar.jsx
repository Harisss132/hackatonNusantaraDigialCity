import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "../ui/sheet";

const navLinks = [
  { label: "Sejarah", href: "/#sejarah" },
  { label: "Budaya & Tradisi", href: "/#budaya" },
  { label: "Kuliner", href: "/#kuliner" },
  { label: "Destinasi Wisata", href: "/#destinasi" },
  { label: "Teknologi", href: "/#teknologi" },
  { label: "Peta", href: "/#peta" },
  { label: "Kontak", href: "/#kontak" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <Link
          to="/"
          className="truncate text-base font-bold text-primary sm:max-w-none sm:text-lg"
        >
          <span className="sm:hidden">Bekasi Digital City</span>
          <span className="hidden sm:inline">
            Nusantara Digital City — Bekasi
          </span>
        </Link>
        <nav aria-label="Navigasi-utama" className="hidden md:block">
          <ul className="flex item-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Navbar */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label="Buka Menu Navigasi"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <nav aria-label="Navigasi Mobile" className="mt-10 px-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose
                        render={
                          <a
                            href={link.href}
                            className="text-base font-medium text-foreground"
                          />
                        }
                      >
                        {link.label}
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
