import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
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
    <section id="kontak" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-2 text-2xl font-bold md:text-3xl">Hubungi Kami</h2>
      <p className="mb-8 text-muted-foreground">
        Punya pertanyaan, masukan, atau ingin berkolaborasi? Kirimkan pesan lewat form di bawah ini.
      </p>

      <Card className="mx-auto max-w-lg p-6">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <CheckCircle2 className="size-12 text-primary" />
            <p className="font-semibold">Pesan berhasil terkirim!</p>
            <p className="text-sm text-muted-foreground">
              Terima kasih, kami akan segera merespons pesan kamu.
            </p>
            <Button variant="outline" onClick={() => setStatus("idle")}>
              Kirim Pesan Lain
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                placeholder="Nama kamu"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                placeholder="email@contoh.com"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                placeholder="Tulis pesan kamu di sini..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Gagal mengirim pesan. Silakan coba lagi.
              </p>
            )}

            <Button type="submit" size="lg" disabled={status === "loading"}>
              {status === "loading" && <Loader2 className="size-4 animate-spin" />}
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </Button>
          </form>
        )}
      </Card>
    </section>
  );
}

export default KontakSection;