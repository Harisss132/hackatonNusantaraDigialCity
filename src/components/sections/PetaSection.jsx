import React from "react";

function PetaSection() {
  return (
    <section id="peta" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Peta Kota Bekasi</h2>
      <p className="mb-8 text-muted-foreground">
        Temukan lokasi Kota Bekasi dan jelajahi kawasannya secara langsung lewat peta interaktif.
      </p>

      <div className="overflow-hidden rounded-lg border border-border">
        <iframe
          title="Peta Kota Bekasi"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d202889.6954148884!2d106.92650961560062!3d-6.283116025869382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBekasi%20tourism%20attractions!5e0!3m2!1sid!2sid!4v1783694513231!5m2!1sid!2sid"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default PetaSection;