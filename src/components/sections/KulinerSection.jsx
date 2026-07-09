import { useFilter } from "@/hooks/useFilter";
import { kulinerData, kategoriKuliner } from "../../data/kuliner";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

function KulinerSection() {
  const { activeFilter, setActiveFilter, filteredItems } = useFilter(
    kulinerData,
    "kategori"
  );

  return (
    <section id="kuliner" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Kuliner Khas Bekasi</h2>
      <p className="mb-8 text-muted-foreground">
        Perpaduan cita rasa Betawi, Sunda, dan Jawa dalam hidangan, jajanan, dan warung legendaris Bekasi.
      </p>

      {/* Filter kategori */}
      <div className="mb-8 flex flex-wrap gap-2">
        {kategoriKuliner.map((kat) => (
          <button
            key={kat.value}
            onClick={() => setActiveFilter(kat.value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === kat.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:bg-muted"
            }`}
          >
            {kat.label}
          </button>
        ))}
      </div>

      {/* Grid kartu kuliner */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden p-0">
            <div className="aspect-square w-full overflow-hidden bg-muted">
              {item.gambar ? (
                <img
                  src={item.gambar.src}
                  alt={item.gambar.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                  Foto belum tersedia
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold leading-tight">{item.nama}</h3>
              {(item.lokasi || item.sejak) && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.lokasi && item.lokasi}
                  {item.lokasi && item.sejak && " · "}
                  {item.sejak && `Sejak ${item.sejak}`}
                </p>
              )}
              <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">
                {item.deskripsi}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default KulinerSection;