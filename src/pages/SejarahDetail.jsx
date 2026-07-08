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
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <Button
        variant="ghost"
        className="mb-6 px-0"
        render={<Link to="/#sejarah" />}
      >
        <ArrowLeft className="size-4" />
        Kembali ke Beranda
      </Button>

      <h1 className="text-3xl font-bold md:text-4xl">Sejarah Kota Bekasi</h1>
      <p className="mt-2 text-muted-foreground">
        Jejak panjang dari kerajaan Hindu tertua hingga kota patriot dan
        penyangga ibu kota.
      </p>

      <div className="mt-10 space-y-10">
        {sejarahData.map((era) => (
          <Card key={era.id} className="p-6 md:p-8">
            <p className="mb-1 text-sm font-medium text-primary">
              {era.periode}
            </p>
            <h2 className="mb-4 text-xl font-bold md:text-2xl">{era.judul}</h2>

            {era.gambar && (
              <figure className="mb-2">
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={era.gambar.src}
                    alt={era.gambar.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-1 text-xs text-muted-foreground">
                  Sumber:{" "}
                  <a
                    href={era.gambar.sumberUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    {era.gambar.sumber}
                  </a>{" "}
                  ({era.gambar.lisensi})
                </figcaption>
              </figure>
            )}

            {era.galeriTambahan && era.galeriTambahan.length > 0 && (
              <div className="relative mx-8 mb-6 mt-4 md:mx-12">
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {era.galeriTambahan.map((foto, i) => (
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
                            {foto.sumber}
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
              {era.detailLengkap.map((paragraf, i) => (
                <p key={i}>{paragraf}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* ...garis waktu... */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-bold md:text-2xl">
          Garis Waktu Ringkas
        </h2>
        <Card className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Periode</th>
                <th className="px-4 py-3 text-left font-semibold">
                  Peristiwa Kunci
                </th>
              </tr>
            </thead>
            <tbody>
              {garisWaktu.map((item, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-primary">
                    {item.periode}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {item.peristiwa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </main>
  );
}

export default SejarahDetail;
