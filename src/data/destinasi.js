// src/data/destinasi.js

export const kategoriDestinasi = [
  { value: "semua", label: "Semua" },
  { value: "sejarah-religi", label: "Sejarah & Religi" },
  { value: "alam", label: "Wisata Alam" },
  { value: "taman-kota", label: "Taman Kota" },
  { value: "wahana-rekreasi", label: "Wahana Rekreasi" },
];

export const destinasiData = [
  // === WISATA SEJARAH & RELIGI ===
  {
    id: "gedung-juang-tambun",
    nama: "Gedung Juang Tambun",
    kategori: "sejarah-religi",
    lokasi: "Tambun",
    deskripsi:
      "Bangunan bergaya kolonial Belanda yang menyimpan koleksi sejarah perjuangan rakyat Bekasi, kini dikemas dengan diorama dan sajian digital interaktif.",
    detailTambahan:
      "Lebih dari sekadar museum statis, Gedung Juang Tambun kini menjadi ruang berkumpul komunitas seni dan budaya lokal — menjadikannya destinasi ziarah sejarah sekaligus ruang kreatif bagi generasi muda Bekasi yang ingin mengenal lebih dekat perjuangan para pendahulunya.",
    gambar: {
      src: "/images/destinasi/museum_gedung_juang.jpg",
      alt: "Museum Gedung Juang",
      sumber: "Dinas Parawisata Kabupaten Bekasi",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://dispar.bekasikab.go.id/wisata/detail_wisata/73",
    },
  },
  {
    id: "klenteng-hok-lay-kiong",
    nama: "Klenteng Hok Lay Kiong",
    kategori: "sejarah-religi",
    lokasi: "Margahayu Kota Bekasi",
    deskripsi:
      "Klenteng tertua di Bekasi, diperkirakan berusia lebih dari 300 tahun, jadi rujukan ibadah umat Konghucu sekaligus destinasi edukasi sejarah dan toleransi.",
    detailTambahan:
      "Keberadaan klenteng ini menjadi bukti hidup akulturasi budaya Tionghoa yang sudah berabad-abad menyatu dengan masyarakat Bekasi — bukan sekadar tempat ibadah, tapi juga saksi sejarah toleransi antaretnis yang terus terjaga hingga kini.",
    gambar: {
      src: "/images/destinasi/klenteng_hok_lay_kiong.jpg",
      alt: "Klenteng hok lay kiong",
      sumber: "Wihara",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.wihara.org/listings/hok-lay-kiong/264",
    },
  },
  {
    id: "saung-ranggon",
    nama: "Saung Ranggon",
    kategori: "sejarah-religi",
    lokasi: "Cikedogan, Cikarang Barat",
    deskripsi:
      "Rumah panggung tradisional peninggalan Waliyullah, diperkirakan dibangun sekitar abad ke-16, terbuat dari kayu jati tua di tengah kawasan pedesaan asri.",
    detailTambahan:
      "Struktur kayu jati yang masih kokoh berdiri hingga kini menjadikan Saung Ranggon salah satu warisan arsitektur tradisional tertua di Bekasi, sekaligus tempat ziarah yang menyimpan nilai spiritual bagi masyarakat setempat.",
    gambar: {
      src: "/images/destinasi/sung_ranggon.webp",
      alt: "Saung ranggon",
      sumber: "Popmama",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.popmama.com/life/health/tempat-wisata-alam-di-bekasi-00-sm58d-8xtg3n#8xtg3n-12",
    },
  },

  // === WISATA ALAM ===
  {
    id: "situ-cibeureum",
    nama: "Situ Cibeureum",
    kategori: "alam",
    lokasi: "Tambun Selatan",
    deskripsi:
      "Danau alami yang dikenal lewat legenda siluman buaya putih, bisa dijelajahi dengan rakitan atau perahu tradisional.",
    detailTambahan:
      "Selain menyusuri danau dengan rakit, pengunjung juga bisa menikmati suasana asri di sekitar danau yang masih jauh dari hiruk-pikuk kota — cocok untuk healing singkat sambil menyelami cerita legenda lokal yang diwariskan turun-temurun.",
    gambar: {
      src: "/images/destinasi/situ_cibereum.jpg",
      alt: "Situ cibeurem",
      sumber: "Dinas Parawisata Kabupatan Bekasi",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://dispar.bekasikab.go.id/wisata/detail_wisata/77",
    },
  },
  {
    id: "curug-parigi",
    nama: "Curug Parigi",
    kategori: "alam",
    deskripsi: "Air terjun lebar dengan jalur tracking hijau, populer untuk foto pre-wedding dan video klip.",
    lokasi: "Bantargebang Pangkalan 5",
    detailTambahan:
      "Jalur tracking hijau menuju curug ini juga jadi favorit untuk aktivitas ringan seperti trekking santai di akhir pekan, sekaligus lokasi favorit fotografer dan videografer lokal untuk sesi pemotretan.",
    gambar: {
      src: "/images/destinasi/curug_parigi.jpg",
      alt: "Curug parigi",
      sumber: "Detik Travel",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://travel.detik.com/domestic-destination/d-5591265/6-fakta-seputar-curug-parigi-di-bekasi",
    },
  },
  {
    id: "hutan-bambu-bekasi",
    nama: "Hutan Bambu Bekasi",
    kategori: "alam",
    lokasi: "Margahayu, Bekasi Timur",
    deskripsi:
      "Hidden gem yang menawarkan susur sungai dengan perahu kecil dan spot foto instagramable.",
    detailTambahan:
      "Rimbunnya pohon bambu di sepanjang aliran sungai menciptakan suasana teduh yang jarang ditemui di tengah kota — jadi salah satu destinasi yang membuktikan Bekasi masih punya sisi alami di balik citra kota industrinya.",
    gambar: {
      src: "/images/destinasi/hutan_bambu.jpg",
      alt: "Hutan bambu bekasi",
      sumber: "Women okezone",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://women.okezone.com/read/2018/11/06/406/1973966/jalan-jalan-ke-bekasi-wajib-kunjungi-hutan-bambu-yang-lagi-hits",
    },
  },
  {
    id: "hutan-mangrove-muara-gembong",
    nama: "Hutan Mangrove Muara Blacan & Pantai Muara Gembong",
    kategori: "alam",
    lokasi: "Muaragembong, Kabupaten Bekasi",
    deskripsi:
      "Kawasan pesisir utara Bekasi dengan hamparan bakau hijau, potensi melihat burung migran dan monyet ekor panjang, serta seafood segar dari nelayan lokal.",
    detailTambahan:
      "Kawasan ini jadi bukti bahwa Bekasi tak hanya identik dengan pabrik dan gedung — wilayah utaranya menyimpan ekosistem pesisir yang masih terjaga, sekaligus jadi sumber penghidupan nelayan lokal yang bisa dinikmati wisatawan lewat kuliner seafood segar.",
    gambar: {
      src: "/images/destinasi/hutan_manggrove.jpg",
      alt: "Hutan manggrove muara gembong bekasi",
      sumber: "rumah123",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.rumah123.com/explore/kota-bekasi/wisata-bekasi/",
    },
  },
  {
    id: "rumah-pohon-jatiasih",
    nama: "Rumah Pohon Jatiasih",
    kategori: "alam",
    lokasi: "Jatiasih, Kota Bekasi",
    deskripsi: "Eco-park dengan rumah pohon, zip line, dan area outbound.",
    detailTambahan:
      "Cocok untuk wisata keluarga maupun kegiatan outbound komunitas, tempat ini memadukan edukasi lingkungan dengan keseruan aktivitas fisik di ketinggian.",
    gambar: {
      src: "/images/destinasi/rumah_pohon_jatiasih.jpg",
      alt: "Rumah pohon jatiasih bekasi",
      sumber: "rumah123",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.rumah123.com/explore/kota-bekasi/rumah-pohon-jatiasih/",
    },
  },

  // === TAMAN KOTA & RUANG PUBLIK ===
  {
    id: "hutan-kota-patriot",
    nama: "Hutan Kota Patriot Bina Bangsa",
    kategori: "taman-kota",
    lokasi: "Kayuringin Jaya, Bekasi Selatan",
    deskripsi:
      "Taman kota terluas di Kota Bekasi dengan lebih dari 7.000 pohon, dijuluki 'paru-paru Kota Bekasi', fasilitas lengkap dan gratis.",
    detailTambahan:
      "Dengan akses gratis dan fasilitas lengkap, taman ini jadi ruang publik favorit warga untuk olahraga pagi, piknik keluarga, hingga sekadar healing di tengah rimbunnya pepohonan — bukti nyata komitmen kota terhadap ruang hijau di tengah padatnya pembangunan.",
    gambar: {
      src: "/images/destinasi/hutan_kota_bekasi.jpg",
      alt: "Hutan kota bekasi",
      sumber: "bekasi kota",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.bekasikota.go.id/detail/hutan-kota-patriot-sebagai-paru-paru-kota-bekasi",
    },
  },
  {
    id: "taman-rusa-kemang-pratama",
    nama: "Taman Rusa Kemang Pratama",
    kategori: "taman-kota",
    lokasi: "Bojong Rawalumbu",
    deskripsi: "Taman konservasi kecil dengan belasan rusa tutul yang bisa diberi makan langsung.",
    detailTambahan:
      "Pengalaman memberi makan rusa langsung jadi daya tarik utama tempat ini, cocok untuk wisata edukasi anak sekaligus pengenalan konservasi satwa dalam skala kecil di tengah kota.",
    gambar: {
      src: "/images/destinasi/taman_rusa_kemang.webp",
      alt: "Taman rusa kemang bekasi",
      sumber: "inilah",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.inilah.com/tempat-wisata-alam-di-bekasi",
    },
  },
  {
    id: "taman-hijau-pekayon",
    nama: "Taman Hijau Pekayon",
    kategori: "taman-kota",
    lokasi: "Pekayon, Bekasi Selatan",
    deskripsi:
      "Taman hijau yang dipenuhi pepohonan rindang, memberikan suasana sejuk dan nyaman untuk bersantai.",
    detailTambahan:
      "Lokasinya yang berada di tengah kawasan permukiman Pekayon menjadikan taman ini ruang bersantai yang mudah dijangkau warga sekitar, cocok untuk aktivitas santai sepulang kerja atau akhir pekan bersama keluarga.",
    gambar: {
      src: "/images/destinasi/taman_hijau_pekayon.jpeg",
      alt: "Taman hijau pekayon bekasi",
      sumber: "pinhome",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.pinhome.id/info-area/taman-di-bekasi/",
    },
  },
  {
    id: "taman-polder-bekasi",
    nama: "Taman Polder Jakasampurna Bekasi",
    kategori: "taman-kota",
    lokasi: "Fajar Indah, Jakasampurna",
    deskripsi:
      "Taman polder yang baru diresmikan oleh Wali Kota Bekasi saat ini (Pak Tri), dilengkapi area taman dan kolam polder yang ramai dipakai warga memancing.",
    detailTambahan:
      "Sebagai salah satu pembangunan ruang publik terbaru di Bekasi, taman ini menunjukkan arah pengembangan kota yang terus menghadirkan fasilitas rekreasi baru bagi warganya, memadukan fungsi pengendalian air (polder) dengan ruang hijau yang bisa dinikmati publik.",
    gambar: {
      src: "/images/destinasi/taman_polder_bekasi.webp",
      alt: "Taman polder jakasampurna bekasi",
      sumber: "Google Maps",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF1OBuZD_6ZdwWT57OVTuAy38bUO2Ek97cohOl-uUswBhJSbw2YBaMR5Q0xuHBm3t119ZL2p0U0EiYXPTkQXt00YEXGP3Qm_m-6CGxap3aD-0GFIKVhuJJM61UQkNXBkym1zwmkuw=s680-w680-h510-rw",
    },
  },

  // === WAHANA REKREASI & KELUARGA ===
  {
    id: "trans-snow-world",
    nama: "Trans Snow World",
    kategori: "wahana-rekreasi",
    lokasi: "Transpark Juanda",
    deskripsi:
      "Wahana yang menghadirkan suasana ala pegunungan Eropa dengan salju buatan di tengah iklim tropis Bekasi.",
    detailTambahan:
      "Sebagai satu dari sedikit wahana salju indoor di Indonesia, Trans Snow World jadi daya tarik unik yang jarang ditemukan di kota lain — pengunjung bisa merasakan sensasi bermain salju tanpa harus keluar negeri.",
    gambar: {
      src: "/images/destinasi/trans_snow_world.jpg",
      alt: "Trans snow world bekasi",
      sumber: "rumah123",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.rumah123.com/explore/kota-bekasi/wisata-bekasi/",
    },
  },
  {
    id: "taman-buaya-indonesia-jaya",
    nama: "Taman Buaya Indonesia Jaya",
    kategori: "wahana-rekreasi",
    lokasi: "Cibarusah, Kabupaten Bekasi",
    deskripsi: "Taman edukasi dan konservasi buaya dengan sesi pertunjukan.",
    detailTambahan:
      "Selain menyaksikan pertunjukan buaya, pengunjung juga mendapat wawasan edukatif soal konservasi satwa reptil ini, menjadikan kunjungan bukan sekadar hiburan tapi juga pembelajaran bagi anak-anak.",
    gambar: {
      src: "/images/destinasi/taman_buaya.jpg",
      alt: "Taman buaya bekasi",
      sumber: "rumah123",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.rumah123.com/explore/kota-bekasi/wisata-bekasi/",
    },
  },
  {
    id: "gowet-waterpark",
    nama: "Go! Wet Waterpark",
    kategori: "wahana-rekreasi",
    lokasi: "Grandwisata, Kabupaten Bekasi",
    deskripsi:
      "Waterpark modern dengan area luas dan pilihan permainan air yang variatif, kolam arusnya jadi favorit banyak pengunjung.",
    detailTambahan:
      "Dengan skala yang cukup besar dan wahana yang variatif, tempat ini jadi pilihan populer untuk wisata keluarga di akhir pekan, terutama bagi warga Bekasi yang ingin liburan air tanpa harus jauh-jauh keluar kota.",
    gambar: {
      src: "/images/destinasi/gowet_waterpark.jpg",
      alt: "Gowet waterpark bekasi",
      sumber: "rumah123",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.rumah123.com/explore/kota-bekasi/wisata-bekasi/",
    },
  },
  {
    id: "kawung-tilu",
    nama: "Kawung Tilu Bojong Rangkas",
    kategori: "wahana-rekreasi",
    lokasi: "Cipayung, Kabupaten Bekasi",
    deskripsi: "Taman wisata bertema hutan pinus dengan nuansa adventure, populer sejak dibuka pada 2018.",
    detailTambahan:
      "Suasana hutan pinus yang jarang ditemui di destinasi wisata Bekasi lainnya membuat tempat ini terasa seperti melipir ke daerah pegunungan, cocok untuk pengunjung yang mencari nuansa adventure ringan tanpa perlu bepergian jauh.",
    gambar: {
      src: "/images/destinasi/kawung_tilu.webp",
      alt: "Kawung tilu bekasi",
      sumber: "topwisata",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.topwisata.info/2023/08/wisata-kawung-tilu-bojong-rangkas-bekasi-salah-satu-objek-wisata-wajib-dikunjungi-saat-liburan-di-bekasi-dan-sekitarnya.html",
    },
  },
  {
    id: "rainbow-alamanda",
    nama: "Taman Wahana Rainbow Alamanda",
    kategori: "wahana-rekreasi",
    lokasi: "Karangsatria, Tambun Utara",
    deskripsi:
      "Ruang bermain dengan beragam keseruan, wahana permainan, danau buatan, dan berbagai ornamen untuk spot foto menarik.",
    detailTambahan:
      "Kombinasi wahana bermain dan spot foto instagramable membuat tempat ini populer di kalangan anak muda maupun keluarga, sekaligus jadi bukti transformasi ruang kota Bekasi menjadi lebih ramah rekreasi.",
    gambar: {
      src: "/images/destinasi/rainbow_alamanda.jpg",
      alt: "rainbow alamanda bekasi",
      sumber: "rumah123",
      lisensi: "Cek lisensi di sumber",
      sumberUrl: "https://www.rumah123.com/explore/kota-bekasi/rainbow-alamanda/",
    },
  },
];