import { useFilter } from "@/hooks/useFilter";
import { destinasiData, kategoriDestinasi } from "@/data/destinasi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";

function DestinasiWisataSection() {
  const { activeFilter, setActiveFilter, filteredItems } = useFilter(
    destinasiData,
    "kategori"
  );

  return (
    <section
      id="destinasi"
      className="scroll-mt-20 bg-[#F9F6F0] text-[#1A1A1A] px-6 py-20 md:px-8 font-sans border-t border-gray-200/40"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-10 text-center md:text-left max-w-2xl">
          <span className="inline-block bg-[#E5BA73]/30 text-[#C58940] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            🏛️ Eksplorasi Wisata
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-5xl text-[#1A1A1A]">
            Destinasi Wisata Bekasi<br />
            <span className="text-[#C58940] italic">Khas Bekasi</span>
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed md:text-base">
            Dari wisata sejarah, alam, taman kota, hingga wahana rekreasi keluarga. Bekasi lebih beragam dari yang dibayangkan.
          </p>
        </div>
        
        {/* Filter Kategori Menu Utama Minimalis */}
        <div className="mb-14 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 border-b border-gray-300/40 pb-4">
          {kategoriDestinasi.map((kat) => (
            <button
              key={kat.value}
              onClick={() => setActiveFilter(kat.value)}
              className={`text-sm font-bold uppercase tracking-wider pb-2 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C58940] after:transition-all ${
                activeFilter === kat.value
                  ? "text-[#1A1A1A] after:w-full"
                  : "text-gray-400 hover:text-[#1A1A1A] after:w-0 hover:after:w-full"
              }`}
            >
              {kat.label}
            </button>
          ))}
        </div>

        {/* Cek Jika Data Hasil Filter Kosong */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-400 font-medium text-sm">
            Belum ada hidangan untuk kategori ini.
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            key={`${activeFilter}-${filteredItems.length}`}
            className="w-full"
          >
            <CarouselContent className="m-0 select-none">
              {filteredItems.map((item) => (
                <CarouselItem key={item.id} className="basis-full p-0">
                  <div className="bg-transparent border-none shadow-none rounded-none grid gap-8 md:grid-cols-12 items-center">
                    
                    {/* Kolom Informasi Teks Kiri (7 Kolom - Lebih Dominan) */}
                    <div className="mx-3 md:col-span-7 space-y-4 text-left">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C58940]">
                        {item.kategori || "Wisata Pilihan"}
                      </span>
                      
                      <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
                        {item.nama}
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-gray-650 font-normal">
                        {item.deskripsi}
                      </p>

                      {/* Detail Lisensi & Sumber Meta Data */}
                      {item.gambar && (
                        <div className="pt-2 border-t border-gray-300/40 text-[11px] text-gray-400 space-y-0.5">
                          <div>
                            Sumber:{" "}
                            {item.gambar.sumberUrl ? (
                              <a
                                href={item.gambar.sumberUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[#C58940] transition-colors"
                              >
                                {item.gambar.sumber}
                              </a>
                            ) : (
                              item.gambar.sumber
                            )}
                          </div>
                          {item.gambar.lisensi && (
                            <div>Lisensi: {item.gambar.lisensi}</div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Kolom Gambar Utama Kanan (5 Kolom - Lebih Kecil & Proporsional) */}
                    <div className="md:col-span-5 pointer-events-none">
                      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 border border-white shadow-md">
                        {item.gambar ? (
                          <img
                            src={item.gambar.src}
                            alt={item.gambar.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-gray-450 font-medium">
                            Foto Tidak Tersedia
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigasi Panah di Bawah (Selaras untuk Desktop & Mobile) */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 size-10 bg-white border border-gray-200 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors" />
              <CarouselNext className="static translate-y-0 size-10 bg-white border border-gray-200 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors" />
            </div>

          </Carousel>
        )}

      </div>
    </section>
  );
}

export default DestinasiWisataSection;