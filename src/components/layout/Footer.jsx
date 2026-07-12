import { Send, Phone, Globe } from "lucide-react";

const footerLinks = [
  { label: "Sejarah", href: "#sejarah" },
  { label: "Budaya & Tradisi", href: "#budaya" },
  { label: "Kuliner", href: "#kuliner" },
  { label: "Destinasi Wisata", href: "#destinasi" },
  { label: "Teknologi", href: "#teknologi" },
  { label: "Peta", href: "#peta" },
  { label: "Kontak", href: "#kontak" },
];

function Footer() {
  return (
    <footer className="border-t border-gray-200/40 bg-[#F9F6F0] text-[#1A1A1A] font-sans">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-12 items-start">
          
          {/* Brand - Mengambil 5 Kolom */}
          <div className="sm:col-span-5 space-y-3">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A]">
              Jelajah<span className="text-[#C58940]">Bekasi.</span>
            </h3>
            <p className="text-sm text-gray-650 leading-relaxed font-normal max-w-sm">
              Menjelajahi jejak sejarah, ragam budaya, kuliner khas, dan potensi besar Kota Bekasi lewat portal informasi digital terintegrasi.
            </p>
          </div>

          {/* Navigasi - Mengambil 3 Kolom */}
          <nav aria-label="Navigasi footer" className="sm:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              Jelajahi
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#1A1A1A] hover:text-[#C58940] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak / Sosial - Mengambil 4 Kolom */}
          <div className="sm:col-span-4">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-400">
              Hubungi Kami
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-[#1A1A1A]">           
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#C58940]" aria-hidden="true" />
                <span>0812-xxxx-xxx</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Send className="size-4 text-[#C58940]" aria-hidden="true" />
                <a href="#" className="hover:text-[#C58940] transition-colors">
                  @jelajahbekasi.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="size-4 text-[#C58940]" aria-hidden="true" />
                <span>jelajahbekasi.id</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Garis Pembatas Bawah & Hak Cipta */}
        <div className="mt-14 border-t border-gray-300/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-normal">
          <div>
            © {new Date().getFullYear()} JelajahBekasi. Hak Cipta Dilindungi.
          </div>
          <div className="text-center sm:text-right font-mono text-[10px] tracking-wider uppercase">
            Dibuat untuk Kompetisi Website Media Cloud Indonesia
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;