import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import { sejarahData, garisWaktu } from "../data/sejarah";

function SejarahDetail() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:px-8 bg-[#F9F6F0] text-[#1A1A1A] font-sans min-h-screen">
      {/* Tombol Kembali */}
      <Button
        variant="ghost"
        className="mb-8 px-0 text-gray-600 hover:text-[#1A1A1A] hover:bg-transparent group"
        asChild
      >
        <Link to="/#sejarah" className="flex items-center gap-2">
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Beranda</span>
        </Link>
      </Button>

      {/* Header Halaman */}
      <header className="mb-14 border-b border-gray-300/40 pb-8">
        <span className="inline-block bg-[#E5BA73]/30 text-[#C58940] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
          📚 Arsip & Dokumenter
        </span>
        <h1 className="font-serif text-3xl font-bold md:text-5xl tracking-tight text-[#1A1A1A]">
          Naskah Lengkap <br />
          <span className="text-[#C58940] italic">Sejarah Kota Bekasi</span>
        </h1>
        <p className="mt-4 text-base text-gray-600 leading-relaxed md:text-lg max-w-2xl">
          Jejak panjang peradaban dari pusat lini masa kerajaan Hindu tertua hingga dinamika kota patriot penopang modernitas ibu kota.
        </p>
      </header>

      {/* Daftar Era Sejarah */}
      <div className="space-y-16">
        {sejarahData.map((era) => (
          <article key={era.id} className="relative group">
            <Card className="p-6 md:p-10 bg-[#F9F6F0] border border-gray-200/80 shadow-xl shadow-black/5 rounded-[1.75rem] overflow-hidden">
              <header className="mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C58940]">
                  {era.periode}
                </span>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A] md:text-3xl mt-1">
                  {era.judul}
                </h2>
              </header>

              {/* Gambar Utama Era */}
              {era.gambar && (
                <figure className="mb-6">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm border border-white">
                    <img
                      src={era.gambar.src}
                      alt={era.gambar.alt}
                      className="h-full w-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-2 text-[11px] text-gray-400">
                    Sumber:{" "}
                    <a
                      href={era.gambar.sumberUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#C58940] transition-colors"
                    >
                      {era.gambar.sumber}
                    </a>{" "}
                    ({era.gambar.lisensi})
                  </figcaption>
                </figure>
              )}

              {/* Teks Konten Utama */}
              <div className="space-y-4 font-sans text-sm md:text-base text-gray-700 leading-relaxed max-w-none prose prose-stone">
                {era.detailLengkap.map((paragraf, i) => (
                  <p key={i} className="first-letter:font-serif">
                    {paragraf}
                  </p>
                ))}
              </div>

              {/* Galeri Tambahan Menggunakan Carousel */}
              {era.galeriTambahan && era.galeriTambahan.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200/40">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Galeri Arsip Tambahan
                  </h3>
                  <div className="relative mx-auto max-w-sm px-4">
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                      <CarouselContent>
                        {era.galeriTambahan.map((foto, i) => (
                          <CarouselItem key={i} className="basis-full">
                            <figure>
                              <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-gray-200 border border-white shadow-md">
                                <img
                                  src={foto.src}
                                  alt={foto.alt}
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <figcaption className="mt-2 text-[11px] text-gray-400 text-center">
                                <a
                                  href={foto.sumberUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline hover:text-[#C58940]"
                                >
                                  {foto.sumber}
                                </a>
                              </figcaption>
                            </figure>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute -left-4 top-1/2 bg-white/90 border-gray-200 hover:bg-[#1A1A1A] hover:text-white text-gray-700 transition-colors" />
                      <CarouselNext className="absolute -right-4 top-1/2 bg-white/90 border-gray-200 hover:bg-[#1A1A1A] hover:text-white text-gray-700 transition-colors" />
                    </Carousel>
                  </div>
                </div>
              )}
            </Card>
          </article>
        ))}
      </div>

      {/* Bagian Garis Waktu Ringkas */}
      <section className="mt-20 pt-10 border-t border-gray-300/40">
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-bold md:text-3xl tracking-tight text-[#1A1A1A]">
            Garis Waktu Ringkas
          </h2>
          <p className="text-sm text-gray-500 mt-1">Rangkuman peristiwa penting dari masa ke masa.</p>
        </div>
        
        <Card className="p-4 md:p-6 bg-[#F9F6F0] border border-gray-200/80 shadow-lg shadow-black/5 rounded-2xl overflow-hidden">
          <div className="divide-y divide-gray-200/60">
            {garisWaktu.map((item, i) => (
              <div key={i} className="py-4 first:pt-0 last:pb-0 grid md:grid-cols-4 gap-2 md:gap-6 items-start">
                <div className="font-mono text-sm font-bold text-[#C58940] md:col-span-1">
                  {item.periode}
                </div>
                <div className="text-sm md:text-base text-gray-600 md:col-span-3 leading-relaxed">
                  {item.peristiwa}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}

export default SejarahDetail;