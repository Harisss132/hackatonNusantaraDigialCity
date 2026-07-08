import { Send, Phone, Globe } from "lucide-react";

const footerLinks = [
  { label: "Sejarah", href: "#sejarah" },
  { label: "Budaya & Tradisi", href: "#budaya" },
  { label: "Kuliner", href: "#kuliner" },
  { label: "Destinasi Wisata", href: "#destinasi" },
  { label: "Teknologi", href: "#teknologi" },
  { label: "Peta", href: "#peta" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary">
              Nusantara Digital City — Bekasi
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Menjelajahi sejarah, budaya, dan potensi Kota Bekasi lewat portal digital.
            </p>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Jelajahi</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontak / Sosial */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Hubungi Kami</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="size-4" aria-hidden="true" />
                {/* TODO: ganti nomor asli */}
                <span>0811-xxxx-xxx</span>
              </li>
              <li className="flex items-center gap-2">
                <Send className="size-4" aria-hidden="true" />
                {/* TODO: ganti akun IG asli */}
                <a href="#" className="hover:text-foreground">@akuninstagram</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="size-4" aria-hidden="true" />
                {/* TODO: ganti domain final */}
                <span>bekasidigitalcity.my.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nusantara Digital City — Bekasi. Dibuat untuk Kompetisi Website Media Cloud Indonesia.
        </div>
      </div>
    </footer>
  );
}

export default Footer;