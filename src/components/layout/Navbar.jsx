import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
  { label: "Budaya", href: "/#budaya" },
  { label: "Kuliner", href: "/#kuliner" },
  { label: "Destinasi", href: "/#destinasi" },
  { label: "Teknologi", href: "/#teknologi" },
  { label: "Peta", href: "/#peta" },
  { label: "Kontak", href: "/#kontak" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Efek transisi background saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menutup sheet mobile otomatis jika layar di-resize ke desktop
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-[#F9F6F0]/80 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-sm"
          : "bg-[#F9F6F0] py-5" // Menggunakan warna yang sama dengan Hero saat di atas
      }`}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="truncate font-serif text-xl font-bold tracking-tight text-[#1A1A1A]"
        >
          Jelajah<span className="text-[#C58940]">Bekasi.</span>
        </Link>

        {/* Desktop Navbar */}
        <nav aria-label="Navigasi-utama" className="hidden md:block">
          <ul className="flex items-center gap-11">
            {navLinks.map((link) => {
              const isActive = location.pathname + location.hash === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-250 group py-1 ${
                      isActive
                        ? "text-[#C58940]"
                        : "text-gray-600 hover:text-[#1A1A1A]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#C58940] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : ""
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        {/* <div className="hidden md:block">
          <Button 
            size="sm" 
            className="bg-[#1A1A1A] text-white hover:bg-[#C58940] transition-colors rounded-lg px-4 h-9"
            asChild
          >
            <Link to="/#kontribusi">Ikut Berkontribusi</Link>
          </Button>
        </div> */}

        {/* Mobile Navbar Button & Drawer */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#1A1A1A] hover:bg-transparent focus-visible:ring-0"
                aria-label="Buka Menu Navigasi"
              >
                {/* Menggunakan Icon Menu dari Lucide */}
                <Menu className="h-6 w-6 stroke-2" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-75 bg-[#F9F6F0] border-l border-gray-200/60 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Bagian Atas Drawer: Logo & Tombol Close Custom */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-200/40">
                  <span className="font-serif text-xl font-bold tracking-tight text-[#1A1A1A]">
                    Jelajah<span className="text-[#C58940]">Bekasi.</span>
                  </span>

                  {/* Mengganti tombol close bawaan Shadcn dengan Icon X Lucide agar lebih menyatu */}
                  {/* <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-200/50 rounded-lg"
                    >
                      <X className="h-5 w-5 stroke-2" />
                    </Button>
                  </SheetClose> */}
                </div>

                <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>

                {/* Menu Navigasi di dalam Drawer */}
                <nav aria-label="Navigasi Mobile" className="mt-6">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <a
                            href={link.href}
                            className="text-base font-medium text-gray-700 hover:text-[#C58940] hover:bg-[#C58940]/5 block w-full px-3 py-2.5 rounded-xl transition-all duration-200"
                          >
                            {link.label}
                          </a>
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Bagian Bawah Drawer: CTA Tambahan untuk Mobile */}
              {/* <div className="pt-4 border-t border-gray-200/40">
                <SheetClose asChild>
                  <Button className="w-full bg-[#1A1A1A] hover:bg-[#C58940] text-white rounded-xl h-11 text-sm font-medium transition-colors shadow-sm">
                    <Link to="/#kontribusi">Ikut Berkontribusi</Link>
                  </Button>
                </SheetClose>
              </div> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
