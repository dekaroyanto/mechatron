export const lidarData = {
  id: "lidar",
  slug: "lidar",
  path: "/services/lidar",
  group: "Teknologi Baru Untuk Bisnis Anda",
  groupSubtitle: "Layanan Solusi Bisnis & Proyek",
  category: "Geospatial & Surveying",
  title: "LiDAR",
  headline: "Pemetaan Presisi Tinggi Point Cloud 3D",
  tagline:
    "Survei Topografi Presisi Sentimeter dengan Penetrasi Kanopi dan Integrasi RTK",
  description:
    "Layanan pemetaan dan survei LiDAR berpresisi tinggi untuk topografi, infrastruktur, dan aplikasi lingkungan",
  longDescription:
    "Teknologi LiDAR (Light Detection and Ranging) udara Mechatron dirancang untuk memetakan kondisi permukaan bumi secara akurat bahkan di area vegetasi lebat sekalipun. Dengan memancarkan ratusan ribu denyut laser per detik, sistem kami menghasilkan model elevasi Digital Terrain Model (DTM) dan Digital Surface Model (DSM) berkualifikasi geospasial tinggi untuk rekayasa konstruksi, kehutanan, perkebunan, dan pertambangan.",
  image:
    "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1400&q=85",
  highlights: [
    {
      stat: "±2-5 cm",
      title: "Akurasi Vertikal & Horizontal",
      desc: "Koreksi data koordinat secara presisi dengan GNSS RTK dan stasiun pangkalan diferensial.",
    },
    {
      stat: "240k pts/s",
      title: "Kerapatan Titik Tinggi",
      desc: "Menghasilkan kerapatan point cloud rapat untuk visualisasi 3D topografi permukaan secara detail.",
    },
    {
      stat: "Multi-Echo",
      title: "Penetrasi Kanopi Lebat",
      desc: "Sinar laser mampu menembus dedaunan lebat untuk memetakan kontur tanah asli (bare-earth DTM).",
    },
    {
      stat: "CAD & GIS Ready",
      title: "Format Standar Industri",
      desc: "Hasil langsung kompatibel dengan AutoCAD, ArcGIS, QGIS, Global Mapper, dan Civil 3D.",
    },
  ],
  deepFeatures: [
    {
      tag: "Ketepatan Rekayasa Geospasial",
      title: "Pemodelan 3D Topografi Cepat dan Akurat",
      description:
        "Berbeda dengan fotogrametri biasa, sensor LiDAR Mechatron mampu mengukur jarak langsung menggunakan sinar laser aktif. Hasilnya adalah data ketinggian tanpa distorsi perspektif, ideal untuk perhitungan volume cut-and-fill dan desain jalur infrastruktur.",
      image:
        "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=1200&q=85",
      bullets: [
        "Model kontur tanah dengan interval hingga 0.5 meter",
        "Deteksi cepat rekahan lereng dan potensi longsor",
        "Analisis hidrologi, Daerah Aliran Sungai (DAS), dan limpasan air",
      ],
    },
    {
      tag: "Efisiensi Area Luas",
      title: "Cakupan Ratusan Hektar dalam Hitungan Hari",
      description:
        "Menggantikan metode survei konvensional terestrial yang memakan waktu berminggu-minggu di medan berat. Survei LiDAR drone Mechatron menghemat hingga 80% waktu pengerjaan lapangan dengan keamanan kru yang terjamin.",
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1200&q=85",
      bullets: [
        "Efektif untuk area pertambangan, corridor mapping jalan, dan perkebunan sawit",
        "Dilengkapi kontrol tanah Ground Control Points (GCP) terikat jaring BIG",
        "Laporan verifikasi akurasi independen (Accuracy Assessment Report)",
      ],
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Analisis Area & GCP",
      desc: "Penentuan batas area survei (AOI) dan pemasangan titik kontrol tanah (GCP/ICP) berstandar geodesi.",
    },
    {
      step: "02",
      title: "Penerbangan LiDAR",
      desc: "Akuisisi data laser scanner dan foto udara geotagged menggunakan drone khusus survei terkalibrasi.",
    },
    {
      step: "03",
      title: "Post-Processing Trajektori",
      desc: "Pengolahan lintasan PPK/RTK dengan software INS untuk menghitung titik koordinat presisi tinggi.",
    },
    {
      step: "04",
      title: "Klasifikasi & Output",
      desc: "Klasifikasi point cloud menjadi Ground, Vegetasi, dan Bangunan, serta ekspor format LAS, DTM, dan DWG.",
    },
  ],
  specs: [
    { label: "Sensor LiDAR", value: "High-grade Multi-Echo Laser Scanner" },
    { label: "Tingkat Titik Laser", value: "Hingga 240.000 denyut/detik" },
    { label: "Akurasi Sistem", value: "Horizontal: 5 cm, Vertikal: 3-5 cm" },
    {
      label: "Output Format",
      value: "LAS, LAZ, GeoTIFF, DEM/DTM/DSM, DXF, SHP",
    },
    {
      label: "Sistem Referensi Koordinat",
      value: "WGS84 UTM / DGN95 / SRGI 2013",
    },
    {
      label: "Kamera Tambahan",
      value: "RGB Sensor Terintegrasi untuk True Color Point Cloud",
    },
  ],
  faqs: [
    {
      q: "Apa perbedaan utama antara LiDAR dan Pemetaan Fotogrametri biasa?",
      a: "Fotogrametri menggunakan foto kamera dan tidak bisa menembus tajuk pohon lebat. LiDAR menggunakan denyut laser aktif yang dapat menyusup di sela vegetasi sehingga mampu menghasilkan kontur tanah asli (DTM) dengan akurasi teruji.",
    },
    {
      q: "Berapa kapasitas luasan yang dapat disurvei dalam 1 hari kerja?",
      a: "Rata-rata 100 hingga 300 hektar per hari tergantung kondisi topografi, jarak antar jalur terbang, dan regulasi lokal.",
    },
  ],
};

export default lidarData;
