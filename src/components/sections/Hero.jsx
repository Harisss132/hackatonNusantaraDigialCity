import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] md:min-h-[85vh] items-center justify-center overflow-hidden bg-[#F9F6F0] px-6 py-12 text-[#1A1A1A] md:px-8"
    >
      {/* 1. MOBILE ONLY BACKGROUND: Gambar stadion menjadi full background hanya di layar mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/hero/stadionHero.jpeg')" }}
      />
      
      {/* 2. MOBILE ONLY OVERLAY: Lapisan gelap agar teks putih di mobile mudah dibaca */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70 md:hidden" />

      {/* Dekorasi Latar Belakang Halus (Hanya muncul di Desktop) */}
      <div className="hidden md:block absolute -top-40 -left-40 w-96 h-96 bg-[#C58940]/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto w-full grid items-center gap-10 md:grid-cols-12 max-w-6xl text-left z-10">
        
        {/* Sisi Kiri: Konten Teks */}
        {/* Kelas text-white md:text-[#1A1A1A] mengubah warna teks secara otomatis sesuai ukuran layar */}
        <div className="space-y-5 md:col-span-7 w-full text-white md:text-[#1A1A1A]">
          <span className="inline-block bg-[#E5BA73]/30 text-[#E5BA73] md:text-[#C58940] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm md:backdrop-blur-none">
            📍 Nusantara Digital City
          </span>
          
          <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
            Menjelajahi Sisi Lain <br />
            <span className="text-[#E5BA73] md:text-[#C58940] italic">Kota & Kabupaten Bekasi.</span>
          </h1>
          
          <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-gray-600 md:text-lg">
            Dari jejak Kerajaan Tarumanagara hingga kota modern penyangga
            Jakarta — kenali Bekasi lebih dekat melalui sudut pandang yang berbeda.
          </p>
          
          <div className="flex flex-row items-center gap-3 pt-2">
            <Button 
              size="lg" 
              className="bg-[#E5BA73] text-[#1A1A1A] md:bg-[#1A1A1A] md:text-white hover:bg-[#C58940] md:hover:bg-[#C58940] transition-colors rounded-xl px-5 h-12 shadow-md text-sm font-medium"
              asChild
            >
              <Link to="/#sejarah">Mulai Jelajahi</Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 md:border-gray-350 md:bg-white md:text-[#1A1A1A] md:hover:bg-gray-50 rounded-xl px-5 h-12 text-sm font-medium backdrop-blur-sm md:backdrop-blur-none"
              asChild
            >
              <Link to="/#peta">Lihat Peta</Link>
            </Button>
          </div>
        </div>

        {/* Sisi Kanan: Visual Frame Foto (Otomatis disembunyikan di Mobile) */}
        {/* md:flex memastikan komponen ini hanya muncul dan aktif di layar desktop */}
        <div className="hidden md:flex relative justify-center md:col-span-5 md:justify-end w-full">
          <div className="relative w-full max-w-75 aspect-3/4 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 group">
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10"></div>
            <img 
              src="/images/hero/stadionHero.jpeg" 
              alt="Stadion Patriot Candrabhaga Bekasi" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className="text-xs font-medium uppercase tracking-wider text-black">Ikon Kota</p>
              <h3 className="text-base font-bold">Stadion Patriot Candrabhaga</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;