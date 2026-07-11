import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 text-center md:px-8"
    >
      {/* TODO: ganti dengan foto asli Kota Bekasi dari temanmu */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/stadionHero.jpeg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="max-w-2xl text-white">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80">
          Nusantara Digital City
        </p>
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Menjelajahi Kota Bekasi
        </h1>
        <p className="mt-4 text-base text-white/90 md:text-lg">
          {/* TODO: ganti tagline dari hasil riset temanmu */}
          Dari jejak Kerajaan Tarumanagara hingga kota modern penyangga
          Jakarta — kenali Bekasi lebih dekat.
        </p>
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="md:w-50" render={<Link href="/#sejarah" />}>
            Mulai Jelajahi
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white/10 md:w-50"
            render={<Link href="/#peta" />}
          >
            Lihat Peta
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;