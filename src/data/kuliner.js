export const kategoriKuliner = [
  { value: "semua", label: "Semua" },
  { value: "hidangan-berat", label: "Hidangan Berat" },
  { value: "jajanan", label: "Jajanan & Kudapan" },
  { value: "warung-legendaris", label: "Warung Legendaris" },
];

export const kulinerData = [
  // === HIDANGAN BERAT IKONIK ===
  {
    id: "gabus-pucung",
    nama: "Sayur/Sop Gabus Pucung",
    kategori: "hidangan-berat",
    deskripsi:
      "Kuliner paling ikonik dan dianggap paling otentik khas Bekasi. Ikan gabus dimasak dalam kuah hitam pekat berbahan dasar kluwek, dipadu lengkuas, serai, daun salam, dan bawang — menghasilkan rasa gurih sedikit pedas.",
    gambar: {
      src: "/images/kuliner/Gabus_Pucung_1.jpg",
      alt: "Gabus pucung bekasi",
      sumber: "wikimedia",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://commons.wikimedia.org/wiki/File:Gabus_Pucung_1.jpg",
    }, 
  },
  {
    id: "oblok-tongki",
    nama: "Oblok Tongki",
    kategori: "hidangan-berat",
    deskripsi:
      "Olahan daging bebek yang dimasak dengan cabai dan rempah kuat hingga empuk, tampilannya mirip rendang namun dengan karakter rasa khas Betawi-Bekasi.",
    gambar: {
      src: "/images/kuliner/oblok_tongki.jpeg",
      alt: "Oblok tongki bekasi",
      sumber: "bekasi keren",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://kotabekasikeren.com/oblok-tongki-kuliner-betawi-yang-khas-di-bekasi/",
    }, 
  },
  {
    id: "sate-bebek-tambun",
    nama: "Sate Bebek Tambun",
    kategori: "hidangan-berat",
    deskripsi:
      "Berbeda dari sate pada umumnya, sate bebek khas daerah Tambun menggunakan daging bebek muda yang dibumbui khusus sebelum dibakar.",
    gambar: {
      src: "/images/kuliner/sate_bebek_tambun.jpg",
      alt: "Sate Bebek bekasi",
      sumber: "marjaya trans",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://marjayatrans.com/kuliner-khas-bekasi/",
    }, 
  },
  {
    id: "sayur-asem-bekasi",
    nama: "Sayur Asem Bekasi",
    kategori: "hidangan-berat",
    deskripsi:
      "Versi lokal dari sayur asem nusantara dengan rasa lebih kuat dan kaya rempah, berisi jagung, labu siam, kacang tanah, melinjo, daun so, dan daging tetelan.",
    gambar: {
      src: "/images/kuliner/sayur_asem.jpg",
      alt: "Sayur asem bekasi",
      sumber: "fimela",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.fimela.com/lifestyle/read/2387496/ini-7-makanan-khas-bekasi-yang-digila-gilai-warga-indonesia",
    }, 
  },
  {
    id: "bandeng-rorod",
    nama: "Bandeng Rorod",
    kategori: "hidangan-berat",
    deskripsi:
      "Olahan bandeng khas Bekasi yang mirip bandeng presto namun memiliki teknik pengolahan berbeda, belum begitu populer di luar Bekasi.",
    gambar: {
      src: "/images/kuliner/bandeng_rorod.webp",
      alt: "Bandeng rorod bekasi",
      sumber: "bekasi pojoksatu",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://bekasi.pojoksatu.id/kota-bekasi/1134997036/bandeng-rorod-kuliner-dan-oleh-oleh-unik-khas-bekasi",
    }, 
  },
  {
    id: "sop-janda",
    nama: "Sop Janda",
    kategori: "hidangan-berat",
    deskripsi:
      "Sop berbahan dasar daging dan tulang sapi dengan kuah kental yang khas, populer terutama di kawasan Pekayon — sering disebut mirip 'sop sumsum' versi Bekasi.",
    gambar: {
      src: "/images/kuliner/sop_janda.jpg",
      alt: "Sop janda bekasi",
      sumber: "tripadviosr",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.tripadvisor.co.id/LocationPhotoDirectLink-g297705-d17115346-i386730964-Sop_Janda_Ibu_Fahru-Bekasi_West_Java_Java.html",
    }, 
  },

  // === JAJANAN & KUDAPAN TRADISIONAL ===
  {
    id: "kue-rangi",
    nama: "Kue Rangi",
    kategori: "jajanan",
    deskripsi: "Adonan tepung sagu dan kelapa parut yang dipanggang, disiram kinca (saus gula merah).",
    gambar: {
      src: "/images/kuliner/kue_rangi.jpg",
      alt: "Kue rangi bekasi",
      sumber: "fimela",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.fimela.com/lifestyle/read/2387496/ini-7-makanan-khas-bekasi-yang-digila-gilai-warga-indonesia",
    }, 
  },
  {
    id: "kue-duit",
    nama: "Kue Duit",
    kategori: "jajanan",
    deskripsi: "Camilan renyah berbentuk kepingan uang logam, populer sebagai oleh-oleh.",
    gambar: {
      src: "/images/kuliner/kue_duit.jpg",
      alt: "Kue duit bekasi",
      sumber: "tempat wisataseru",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://tempatwisataseru.com/daftar-makanan-oleh-oleh-khas-bekasi/",
    }, 
  },
  {
    id: "jalabia",
    nama: "Jalabia",
    kategori: "jajanan",
    deskripsi: "Mirip donat namun berbahan tepung ketan, tepung beras, kelapa, dan gula merah, bertekstur mirip dodol.",
    gambar: {
      src: "/images/kuliner/kue_jalabia.jpg",
      alt: "Kue jalabia bekasi",
      sumber: "fimela",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.fimela.com/lifestyle/read/2387496/ini-7-makanan-khas-bekasi-yang-digila-gilai-warga-indonesia",
    }, 
  },
  {
    id: "wajik-ketan",
    nama: "Wajik Ketan",
    kategori: "jajanan",
    deskripsi: "Kudapan ketan hitam yang legit dan kenyal, oleh-oleh favorit wisatawan.",
    gambar: {
      src: "/images/kuliner/wajik_ketan.jpg",
      alt: "Kue wajik ketan bekasi",
      sumber: "tempat wisataseru",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://tempatwisataseru.com/daftar-makanan-oleh-oleh-khas-bekasi/",
    }, 
  },
  {
    id: "bir-peletok",
    nama: "Bir peletok",
    kategori: "jajanan",
    deskripsi: " bir pletok sebuah minuman yang dipercaya mampu menyehatkan tubuh karena terbuat dari berbagai macam rempah pilihan.",
    gambar: {
      src: "/images/kuliner/bir_peletok.jpg",
      alt: "Bir peletok bekasi",
      sumber: "tempat wisataseru",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://tempatwisataseru.com/daftar-makanan-oleh-oleh-khas-bekasi/",
    }, 
  },
  {
    id: "kue-sagon",
    nama: "Kue Sagon",
    kategori: "jajanan",
    deskripsi: "Kue sagon, kue ini sudah cukup legendaris di Kota Bekasi. Kue sagon memiliki aroma yang khas yang berasal dari tepung beras dan kelapa yang disangrai. ",
    gambar: {
      src: "/images/kuliner/kue_sagon.jpg",
      alt: "Kue Sagon Bekasi",
      sumber: "tempat wisataseru",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://tempatwisataseru.com/daftar-makanan-oleh-oleh-khas-bekasi/",
    }, 
  },

  // === WARUNG & RUMAH MAKAN LEGENDARIS ===
  {
    id: "bebek-ella",
    nama: "Bebek Ella",
    kategori: "warung-legendaris",
    deskripsi: "Bebek goreng gurih pedas, jadi favorit warga lokal sejak berdiri.",
    lokasi: "Pekayon Jaya",
    sejak: "1997",
    gambar: {
      src: "/images/kuliner/warung_bebek_ella.jpg",
      alt: "Warung bebek ella bekasi",
      sumber: "namnamstory",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://namnamstory.blogspot.com/2015/10/rm-ella-rumah-makan-bebek-goreng_9.html",
    }, 
  },
  {
    id: "sate-anda-kali-abang",
    nama: "Sate Anda Kali Abang",
    kategori: "warung-legendaris",
    deskripsi: "Sate Anda Kali Abang sudah ada sejak tahun 1978, yang merupakan milik Haji Thohir Murtado. Di sini, kamu bisa menikmati aneka menu oalahan daging",
    lokasi: "Kali Abang",
    sejak: "1978",
    gambar: {
      src: "/images/kuliner/sate_anda.jpg",
      alt: "Sate anda kali abang bekasi",
      sumber: "kompas",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.kompas.com/food/read/2021/03/05/181300075/15-tempat-makan-di-bekasi-dari-yang-legendaris-sampai-yang-kekinian",
    }, 
  },
  {
    id: "es-durian-patal",
    nama: "ES Durian Patal",
    kategori: "warung-legendaris",
    deskripsi: "Es Durian Patal adalah penutup yang sempurna. Daging duriannya asli dan melimpah, dipadu dengan es serut dan susu cokelat",
    lokasi: 'Jl. KH Agus Salim (Depan RS Mekar Sari).',
    sejak: "1991",
    gambar: {
      src: "/images/kuliner/es_durian_patal.png",
      alt: "Es durian patal bekasi",
      sumber: "sanshotel",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.sanshotels.com/id-id/blog/test-category-sans/15-kuliner-enak-di-bekasi",
    }, 
  },
  {
    id: "pancong-balap",
    nama: "Pancong Balap",
    kategori: "warung-legendaris",
    deskripsi: "Kue pancong tradisional dengan topping modern seperti keju, cokelat, hingga greentea.",
    lokasi: 'Jl. KH Agus Salim No.1, Bekasi Jaya.',
    sejak: '1980an',
    gambar: {
      src: "/images/kuliner/warung_pancong.png",
      alt: "Pancong balap bekasi",
      sumber: "sanshotel",
      lisensi: "Lihat lisensi di sumber",
      sumberUrl: "https://www.sanshotels.com/id-id/blog/test-category-sans/15-kuliner-enak-di-bekasi",
    }, 
  },
];