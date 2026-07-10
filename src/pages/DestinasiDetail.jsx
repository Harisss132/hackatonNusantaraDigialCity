// src/pages/DestinasiDetail.jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { useFilter } from "../hooks/useFilter";
import { destinasiData, kategoriDestinasi } from "../data/destinasi";

function DestinasiDetail() {
  const { activeFilter, setActiveFilter, filteredItems } = useFilter(
    destinasiData,
    "kategori"
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <Button variant="ghost" className="mb-6 px-0" render={<Link to="/#destinasi" />}>
        <ArrowLeft className="size-4" />
        Kembali ke Beranda
      </Button>

      <h1 className="text-3xl font-bold md:text-4xl">Destinasi Wisata Bekasi</h1>
      <p className="mt-2 text-muted-foreground">
        Dari wisata sejarah, alam, taman kota, hingga wahana rekreasi keluarga — jelajahi {destinasiData.length} destinasi pilihan di Bekasi.
      </p>

      {/* Filter kategori — sama seperti di Home, supaya user tidak perlu belajar pola baru */}
      <div className="mt-8 mb-8 flex flex-wrap gap-2">
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

      {/* Grid kartu, lebih detail dari versi Home */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden p-0">
            <div className="aspect-4/3 w-full overflow-hidden bg-muted">
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
              <p className="mt-2 text-sm text-foreground">{item.deskripsi}</p>
              {item.detailTambahan && (
                <p className="mt-2 text-sm text-muted-foreground">{item.detailTambahan}</p>
              )}
              {item.gambar && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Sumber:{" "}
                  <a
                    href={item.gambar.sumberUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    {item.gambar.sumber}
                  </a>
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default DestinasiDetail;