import { Link } from "react-router-dom";
import { useFilter } from "../../hooks/useFilter";
import { destinasiData, kategoriDestinasi } from "../../data/destinasi";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

function DestinasiWisataSection() {
  const { activeFilter, setActiveFilter, filteredItems } = useFilter(
    destinasiData,
    "kategori"
  );

  return (
    <section id="destinasi" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Destinasi Wisata Bekasi</h2>
      <p className="mb-8 text-muted-foreground">
        Dari wisata sejarah, alam, taman kota, hingga wahana rekreasi keluarga — Bekasi lebih beragam dari yang dibayangkan.
      </p>

      {/* Filter kategori */}
      <div className="mb-8 flex flex-wrap gap-2">
        {kategoriDestinasi.map((kat) => (
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

      {/* Grid kartu destinasi */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden p-0">
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
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
            <div className="p-4">
              <h3 className="font-semibold">{item.nama}</h3>
              {item.lokasi && (
                <p className="mt-0.5 text-xs text-muted-foreground">{item.lokasi}</p>
              )}
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                {item.deskripsi}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button size="lg" render={<Link to="/destinasi" />}>
          Lihat Semua Destinasi Lengkap
        </Button>
      </div>
    </section>
  );
}

export default DestinasiWisataSection;