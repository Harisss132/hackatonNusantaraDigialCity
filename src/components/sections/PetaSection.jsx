import React from "react";

function PetaSection() {
  return (
    <section 
      id="peta" 
      className="scroll-mt-20 bg-[#F9F6F0] text-[#1A1A1A] px-6 py-20 md:px-8 font-sans border-t border-gray-200/40"
    >
      <div className="mx-auto max-w-5xl">
        
        {/* Header Section: Mengikuti Bahasa Desain JelajahBekasi */}
        <div className="mb-10 text-center md:text-left max-w-2xl">
          <span className="inline-block bg-[#E5BA73]/30 text-[#C58940] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            📍 PANDUAN NAVIGASI
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl text-[#1A1A1A]">
            Peta Wilayah <br />
            <span className="text-[#C58940] italic">Kota Bekasi</span>
          </h2>
          <p className="mt-4 text-sm text-gray-650 leading-relaxed font-normal">
            Temukan titik lokasi strategis dan jelajahi sebaran kawasan sejarah, kuliner, serta destinasi menarik di Kota Bekasi secara langsung lewat peta interaktif.
          </p>
        </div>

        {/* Bingkai Peta Interaktif Premium (Mengikuti Bahasa Frame Foto Kuliner/Sejarah) */}
        <div className="w-full rounded-2xl overflow-hidden bg-gray-200 border border-white shadow-md transition-shadow duration-300 hover:shadow-lg">
          <iframe
            title="Peta Kota Bekasi"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d202889.6954148884!2d106.92650961560062!3d-6.283116025869382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBekasi%20tourism%20attractions!5e0!3m2!1sid!2sid!4v1783694513231!5m2!1sid!2sid"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale-20 contrast-110 hover:grayscale-0 transition-all duration-500 ease-out"
          />
        </div>

      </div>
    </section>
  );
}

export default PetaSection;