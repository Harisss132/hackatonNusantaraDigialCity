import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { teknologiData } from "@/data/teknologi"; 

function TeknologiSection() {
  return (
    <section 
      id="budaya" 
      className="scroll-mt-20 bg-[#F9F6F0] text-[#1A1A1A] px-6 py-20 md:px-8 font-sans border-t border-gray-200/40"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Header Section dengan Gaya Editorial Minimalis */}
        <div className="mb-14 text-center md:text-left max-w-2xl">
          <span className="inline-block bg-[#E5BA73]/30 text-[#C58940] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            🏭 Modern Bekasi
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-5xl text-[#1A1A1A]">
            Teknologi & <br />
            <span className="text-[#C58940] italic">Potensi Bekasi</span>
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed md:text-base">
        Dari kawasan industri terbesar se-Asia Tenggara hingga transformasi smart city — Bekasi menuju masa depan digital.
          </p>
        </div>

        {/* Grid Editorial - Selaras dengan Gaya Portal Shopping Brugge */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teknologiData.map((kategori) => (
            <Card 
              key={kategori.id} 
              className="flex flex-col bg-transparent border-0 shadow-none rounded-none overflow-hidden group/card"
            >
              {/* Bagian Visual Frame Foto (Tanpa Border Card Kaku) */}
              {kategori.gambar && (
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-gray-200 border border-white shadow-md mb-5">
                  <img
                    src={kategori.gambar.src}
                    alt={kategori.gambar.alt}
                    className="w-full h-full object-cover grayscale-15 group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Label Sumber Gambar Minimalis */}
                  <div className="absolute bottom-2 left-3 bg-black/40 backdrop-blur-sm text-[10px] text-white/90 px-2 py-0.5 rounded-md">
                    Sumber: {kategori.gambar.sumber}
                  </div>
                </div>
              )}

              {/* Bagian Informasi Teks */}
              <div className="flex-1 flex flex-col mx-3 space-y-2">
                {/* Meta Kategori di Atas Judul */}
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C58940]">
                  {kategori.kategori}
                </span>
                
                {/* Judul Ragam Budaya */}
                <h3 className="font-serif text-xl font-bold tracking-tight text-[#1A1A1A] group-hover/card:text-[#C58940] transition-colors duration-300">
                  {kategori.judul}
                </h3>
                
                {/* Ringkasan Singkat Kebudayaan */}
                <p className="text-sm leading-relaxed text-gray-500 line-clamp-4 flex-1">
                  {kategori.ringkasan}
                </p>

                {/* Indikator Tautan Eksplorasi Minimalis */}
                <div className="pt-2">
                  <Link 
                    to="/budaya" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#C58940] transition-colors"
                  >
                    Pelajari Tradisi →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tombol Aksi Akhir ke Halaman Detail Budaya */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-[#1A1A1A] text-white hover:bg-[#C58940] transition-colors rounded-xl px-8 h-12 shadow-md shadow-black/5"
            render={<Link to="/budaya" />}
          >
            Lihat Budaya Lengkap
          </Button>
        </div>

      </div>
    </section>
  );
}

export default TeknologiSection;