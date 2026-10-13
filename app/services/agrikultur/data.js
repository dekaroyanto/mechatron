export const agrikulturData = {
  id: "agrikultur",
  slug: "agrikultur",
  path: "/services/agrikultur",
  group: "Teknologi Baru Untuk Bisnis Anda",
  groupSubtitle: "Layanan Solusi Bisnis & Proyek",
  category: "Smart Agriculture & Farming",
  title: "Agrikultur",
  headline: "Solusi Pertanian Pintar & Penyemprotan Presisi",
  tagline:
    "Penyemprotan Pupuk, Pestisida Otonom & Analisis Kesehatan Tanaman dengan Drone Berkapasitas Besar",
  description:
    "Layanan drone pertanian pintar untuk penyemprotan pupuk, pestisida, dan pemantauan kesehatan tanaman secara presisi dan efisien.",
  longDescription:
    "Mechatron menghadirkan ekosistem pertanian modern berbasis drone untuk meningkatkan hasil panen dan efisiensi biaya perkebunan serta sawah. Menggunakan drone berkapasitas tangki besar (Mechatron Agri H-30 dan H-15) yang dilengkapi nozel sentrifugal atomisasi halus, proses penyemprotan pupuk cair dan pestisida dilakukan secara otonom dengan cakupan merata, hemat air hingga 90%, dan 40 kali lebih cepat daripada metode manual.",
  image: "/images/agrikultur-drone-sunset.jpg",
  highlights: [
    {
      stat: "30 Liter",
      title: "Kapasitas Muatan Besar",
      desc: "Tangki semprot bervolume tinggi sanggup mencakup hingga 16–20 hektar lahan per jam operasional.",
    },
    {
      stat: "90% Hemat Air",
      title: "Atomisasi Sentrifugal Mikro",
      desc: "Ukuran tetesan kabut presisi 50–300 mikron menempel sempurna pada daun tanpa tetesan terbuang ke tanah.",
    },
    {
      stat: "RTK Sentimeter",
      title: "Navigasi Jalur Otonom",
      desc: "Terbang mandiri mengikuti kontur bukit dengan radar penghindar rintangan 360° dan sensor terrain-follow.",
    },
    {
      stat: "Analisis NDVI",
      title: "Peta Kesehatan Tanaman",
      desc: "Identifikasi area tanaman stres, kekurangan nutrisi, atau terserang hama sebelum kerusakan meluas.",
    },
  ],
  deepFeatures: [
    {
      tag: "Efisiensi Lahan Skala Besar",
      title: "Solusi Cerdas untuk Perkebunan Sawit, Padi, dan Hortikultura",
      description:
        "Metode manual tradisional membutuhkan puluhan tenaga kerja dan rentan paparan bahan kimia beracun. Drone Agrikultur Mechatron melindungi kesehatan pekerja sekaligus menyelesaikan penyemprotan ratusan hektar dalam hitungan hari.",
      image:
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=85",
      bullets: [
        "Downwash baling-baling membalikkan dedaunan sehingga obat menempel di kedua sisi daun",
        "Kalibrasi dosis presisi otomatis sesuai kecepatan terbang",
        "Kompatibel untuk penyemprotan herbisida, fungisida, dan pupuk daun",
      ],
    },
    {
      tag: "Pemetaan Multispektral",
      title: "Pertanian Presisi Berbasis Data Spektral Ilmiah",
      description:
        "Selain penyemprotan, kami menyediakan layanan pemetaan multispektral untuk menghitung populasi pohon, mengukur indeks vegetasi (NDVI/NDRE), dan menentukan zona pemupukan terarah.",
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1200&q=85",
      bullets: [
        "Deteksi dini penyakit daun dan kekurangan nitrogen",
        "Peta resep pemupukan variabel (Variable Rate Application)",
        "Perhitungan jumlah tegakan pohon kelapa sawit secara otomatis",
      ],
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Survei Batas Lahan",
      desc: "Pemetaan batas bidang tanah dan penetapan titik rintangan (tiang, pohon tinggi) menggunakan remote RTK.",
    },
    {
      step: "02",
      title: "Formulasi & Dosis",
      desc: "Penentuan dosis larutan per hektar dan ukuran droplet semprot sesuai rekomendasi agronomis.",
    },
    {
      step: "03",
      title: "Penerbangan Otonom",
      desc: "Drone terbang secara otomatis mengikuti rute presisi dengan pemantauan realtime kecepatan dan aliran cairan.",
    },
    {
      step: "04",
      title: "Laporan Cakupan",
      desc: "Pemberian log data penerbangan, peta cakupan area semprot, dan volume larutan yang telah diaplikasikan.",
    },
  ],
  specs: [
    {
      label: "Armada yang Digunakan",
      value: "Mechatron Agri H-30 (30L) & Agri H-15 (15L)",
    },
    { label: "Lebar Semprotan Efektif", value: "7 hingga 11 Meter" },
    { label: "Kapasitas Kerja", value: "Hingga 16–20 Hektar/Jam" },
    {
      label: "Sistem Penghindar Rintangan",
      value: "Radar Omnidirectional Aktif & Kamera FPV Depan/Belakang",
    },
    {
      label: "Ketahanan Air",
      value: "Rating IPX6K (Tahan Cuci Semprotan Air)",
    },
    {
      label: "Waktu Pengisian Baterai",
      value: "9–12 Menit dengan Smart Fast Charger Generator",
    },
  ],
  faqs: [
    {
      q: "Apakah layanan Agrikultur melayani lahan sawah dan perkebunan berbukit?",
      a: "Ya. Drone Mechatron dilengkapi sensor Terrain-Following Radar yang otomatis menyesuaikan ketinggian terbang secara konstan di atas tanaman pada lereng hingga kemiringan 30 derajat.",
    },
    {
      q: "Berapa minimal luasan lahan untuk menggunakan jasa semprot drone?",
      a: "Kami melayani luasan mulai dari kelompok tani 10 hektar hingga kontrak perkebunan korporat ribuan hektar.",
    },
  ],
};

export default agrikulturData;
