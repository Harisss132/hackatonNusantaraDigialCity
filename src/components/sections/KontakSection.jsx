import { useState } from "react";
import { Button } from "../ui/button";
import { Loader2, CheckCircle2 } from "lucide-react";

const acces_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function KontakSection() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", acces_key);
    formData.append("subject", "Pesan Baru dari Nusantara Digital City - Bekasi");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section 
      id="kontak" 
      className="scroll-mt-20 bg-[#F9F6F0] text-[#1A1A1A] px-6 py-20 md:px-8 font-sans border-t border-gray-200/40"
    >
      <div className="mx-auto max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left max-w-2xl">
          <span className="inline-block bg-[#E5BA73]/30 text-[#C58940] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            ✉️ HUBUNGI KAMI
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl text-[#1A1A1A]">
            Mari Berdiskusi & <br />
            <span className="text-[#C58940] italic">Tetap Terhubung</span>
          </h2>
          <p className="mt-4 text-sm text-gray-650 leading-relaxed font-normal">
            Punya pertanyaan, masukan, atau ingin berkolaborasi? Kirimkan pesan lewat form di bawah ini.
          </p>
        </div>

        {/* Grid Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Kolom Kiri: Informasi Kontak Tambahan (5 Kolom) */}
          {/* <div className="md:col-span-5 space-y-6">
            <div className="bg-white border border-white rounded-2xl p-6 shadow-md space-y-6">
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Alamat Wilayah
                </h4>
                <p className="text-sm font-medium text-[#1A1A1A] leading-relaxed">
                  Gedung Pusat Informasi Pariwisata, <br />
                  Kec. Bekasi Selatan, Kota Bekasi, <br />
                  Jawa Barat 17141
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Surat Elektronik
                </h4>
                <a 
                  href="mailto:info@jelajahbekasi.id" 
                  className="text-sm font-medium text-[#C58940] hover:underline"
                >
                  info@jelajahbekasi.id
                </a>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                  Media Sosial Resmi
                </h4>
                <div className="flex gap-4 pt-1">
                  <a href="#" className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#C58940] transition-colors">Instagram</a>
                  <a href="#" className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#C58940] transition-colors">YouTube</a>
                  <a href="#" className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#C58940] transition-colors">X</a>
                </div>
              </div>

            </div>
          </div> */}

          {/* Kolom Kanan: Area Formulir Web3Forms (7 Kolom) */}
          <div className="md:col-span-12">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-12 text-center bg-white border border-white rounded-2xl p-6 shadow-md">
                <CheckCircle2 className="size-12 text-[#C58940]" />
                <p className="font-serif text-lg font-bold text-[#1A1A1A]">Pesan berhasil terkirim!</p>
                <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                  Terima kasih, kami akan segera merespons pesan kamu.
                </p>
                <Button 
                  className="mt-2 bg-[#1A1A1A] text-white hover:bg-[#C58940] transition-colors rounded-xl px-6 py-5 text-xs font-bold tracking-wide"
                  onClick={() => setStatus("idle")}
                >
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Input Nama */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Nama
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C58940] shadow-sm transition-colors"
                      placeholder="Nama kamu"
                    />
                  </div>

                  {/* Input Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C58940] shadow-sm transition-colors"
                      placeholder="email@contoh.com"
                    />
                  </div>

                </div>

                {/* Input Pesan */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#C58940] shadow-sm transition-colors resize-none"
                    placeholder="Tulis pesan kamu di sini..."
                  />
                </div>

                {/* Status Notifikasi Gagal Kirim */}
                {status === "error" && (
                  <p className="text-sm font-medium text-red-600">
                    Gagal mengirim pesan. Silakan coba lagi.
                  </p>
                )}

                {/* Tombol Aksi Submit Terintegrasi */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={status === "loading"}
                    className="w-full sm:w-auto bg-[#1A1A1A] text-white hover:bg-[#C58940] transition-colors rounded-xl px-8 py-6 text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
                  >
                    {status === "loading" && <Loader2 className="size-4 animate-spin" />}
                    {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                  </Button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default KontakSection;