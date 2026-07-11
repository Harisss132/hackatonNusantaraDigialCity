import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { sejarahData } from "../../data/sejarah";

function SejarahSection() {
  return (
    <section id="sejarah" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Sejarah Kota Bekasi</h2>
      <p className="mb-8 text-muted-foreground">
        Jejak panjang dari kerajaan Hindu tertua hingga kota patriot dan penyangga ibu kota.
      </p>

      <Tabs defaultValue={sejarahData[0].id}>
        <TabsList className="w-full justify-start overflow-x-auto">
          {sejarahData.map((era) => (
            <TabsTrigger key={era.id} value={era.id} className="shrink-0">
              {era.periode}
            </TabsTrigger>
          ))}
        </TabsList>

        {sejarahData.map((era) => (
          <TabsContent key={era.id} value={era.id} className="mt-6">
            <Card className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                {era.gambar && (
                  <figure>
                    <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-muted">
                      <img
                        src={era.gambar.src}
                        alt={era.gambar.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-1 text-xs text-muted-foreground">
                      Sumber: {era.gambar.sumber} ({era.gambar.lisensi})
                    </figcaption>
                  </figure>
                )}
                <div className={!era.gambar ? "md:col-span-2" : ""}>
                  <p className="mb-1 text-sm font-medium text-primary">{era.periode}</p>
                  <p className="mb-4 text-foreground">{era.ringkasan}</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {era.poin.map((poin, i) => (
                      <li key={i}>{poin}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      <div className="mt-6 text-center">
        <Button size="lg" render={<Link to="/sejarah" />}>
          Baca Sejarah Lengkap
        </Button>
      </div>
    </section>
  );
}

export default SejarahSection;