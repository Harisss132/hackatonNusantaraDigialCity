import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { budayaData } from "../../data/budaya";

function BudayaSection() {
  return (
    <section id="budaya" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Budaya Bekasi</h2>
      <p className="mb-8 text-muted-foreground">
        Perpaduan budaya Betawi dan Sunda yang hidup dalam kesenian, kerajinan, dan tradisi masyarakat Bekasi.
      </p>

      <Tabs defaultValue={budayaData[0].id}>
        <TabsList className="flex-wrap">
          {budayaData.map((kategori) => (
            <TabsTrigger key={kategori.id} value={kategori.id}>
              {kategori.kategori}
            </TabsTrigger>
          ))}
        </TabsList>

        {budayaData.map((kategori) => (
          <TabsContent key={kategori.id} value={kategori.id} className="mt-6">
            <Card className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                {kategori.gambar && (
                  <figure>
                    <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-muted">
                      <img
                        src={kategori.gambar.src}
                        alt={kategori.gambar.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-1 text-xs text-muted-foreground">
                      Sumber: {kategori.gambar.sumber} ({kategori.gambar.lisensi})
                    </figcaption>
                  </figure>
                )}
                <div className={!kategori.gambar ? "md:col-span-2" : ""}>
                  <p className="mb-1 text-sm font-medium text-primary">{kategori.kategori}</p>
                  <h3 className="mb-2 text-lg font-semibold">{kategori.judul}</h3>
                  <p className="mb-4 text-foreground">{kategori.ringkasan}</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {kategori.poin.map((poin, i) => (
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
        <Button size="lg" render={<Link to="/budaya" />}>
          Baca Budaya Lengkap
        </Button>
      </div>
    </section>
  );
}

export default BudayaSection;