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
import { teknologiData } from "../data/teknologi";

function TeknologiDetail() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <Button
        variant="ghost"
        className="mb-6 px-0"
        render={<Link to="/#teknologi" />}
      >
        <ArrowLeft className="size-4" />
        Kembali ke Beranda
      </Button>

      <h1 className="text-3xl font-bold md:text-4xl">Teknologi & Potensi Modern Bekasi</h1>
      <p className="mt-2 text-muted-foreground">
        Dari kawasan industri terbesar se-Asia Tenggara hingga transformasi smart city — Bekasi menuju masa depan digital.
      </p>

      <div className="mt-10 space-y-10">
        {teknologiData.map((kategori) => (
          <Card key={kategori.id} className="p-6 md:p-8">
            <p className="mb-1 text-sm font-medium text-primary">
              {kategori.kategori}
            </p>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">
              {kategori.judul}
            </h2>

            {kategori.gambar && (
              <figure className="mb-2">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={kategori.gambar.src}
                    alt={kategori.gambar.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-1 text-xs text-muted-foreground">
                  Sumber:{" "}
                  <a
                    href={kategori.gambar.sumberUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    {kategori.gambar.sumber}
                  </a>{" "}
                  ({kategori.gambar.lisensi})
                </figcaption>
              </figure>
            )}

            {kategori.galeriTambahan && kategori.galeriTambahan.length > 0 && (
              <div className="relative mx-auto mb-6 mt-4 max-w-xs sm:max-w-sm">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {kategori.galeriTambahan.map((foto, i) => (
                      <CarouselItem key={i} className="basis-full">
                        <figure>
                          <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
                            <img
                              src={foto.src}
                              alt={foto.alt}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <figcaption className="mt-1 text-xs text-muted-foreground">
                            <a
                              href={foto.sumberUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground"
                            >
                              {foto.sumber}
                            </a>
                          </figcaption>
                        </figure>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-3" />
                  <CarouselNext className="-right-3" />
                </Carousel>
              </div>
            )}

            <div className="space-y-4 text-foreground">
              {kategori.detailLengkap.map((paragraf, i) => (
                <p key={i}>{paragraf}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default TeknologiDetail;