import { useState } from "react";
import { Search, FileText, Download, Eye, Filter } from "lucide-react";

const RegulationPage = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [selectedYear, setSelectedYear] = useState("semua");

  // Data regulasi berdasarkan input user
  const regulationsData = [
    // DINAS
    {
      id: 1,
      category: "DINAS",
      type: "IKU",
      number: "2018-2022",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2018",
      pdf: "/dasarhukum/No.45 Lampiran Tahun 2022 IKU bappeda.pdf",
    },
    {
      id: 2,
      category: "DINAS",
      type: "LAKIP",
      number: "2021",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2021",
      pdf: "/dasarhukum/DINAS LAKIP 2021.pdf",
    },
    {
      id: 3,
      category: "DINAS",
      type: "LAKIP",
      number: "2022",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2022",
      pdf: "/dasarhukum/DINAS LAKIP 2022.pdf",
    },
    {
      id: 4,
      category: "DINAS",
      type: "LAKIP",
      number: "2023",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2023",
      pdf: "/files/dinas-lakip-2023.pdf",
    },
    {
      id: 5,
      category: "DINAS",
      type: "PERJANJIAN KINERJA",
      number: "2019",
      title: "DINAS KEHUTANAN KADIS SUZY MARSITAWATI",
      year: "2019",
      pdf: "/files/dinas-pk-2019.pdf",
    },
    {
      id: 6,
      category: "DINAS",
      type: "PERJANJIAN KINERJA",
      number: "2020",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA KADIS SUZY MARSITAWATI",
      year: "2020",
      pdf: "/files/dinas-pk-2020.pdf",
    },
    {
      id: 7,
      category: "DINAS",
      type: "PERJANJIAN KINERJA",
      number: "2021",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA KADIS SUZY MARSITAWATI",
      year: "2021",
      pdf: "/files/dinas-pk-2021.pdf",
    },
    {
      id: 8,
      category: "DINAS",
      type: "PERJANJIAN KINERJA",
      number: "2022",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA KADIS SUZY MARSITAWATI",
      year: "2022",
      pdf: "/files/dinas-pk-2022.pdf",
    },
    {
      id: 9,
      category: "DINAS",
      type: "PERJANJIAN KINERJA",
      number: "2023",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA KADIS BAYU MEGHANTARA",
      year: "2023",
      pdf: "/files/dinas-pk-2023.pdf",
    },
    {
      id: 10,
      category: "DINAS",
      type: "PERJANJIAN KINERJA",
      number: "2024",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA KADIS BAYU MEGHANTARA",
      year: "2024",
      pdf: "/files/dinas-pk-2024.pdf",
    },
    {
      id: 11,
      category: "DINAS",
      type: "RANKHIR",
      number: "2024",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2024",
      pdf: "/files/dinas-rankhir-2024.pdf",
    },
    {
      id: 12,
      category: "DINAS",
      type: "RENSTRA",
      number: "2017-2022",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2017",
      pdf: "/files/dinas-renstra-2017-2022.pdf",
    },
    {
      id: 13,
      category: "DINAS",
      type: "RENSTRA",
      number: "2023-2026",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2023",
      pdf: "/files/dinas-renstra-2023-2026.pdf",
    },

    // INSEKDA
    {
      id: 14,
      category: "INSEKDA",
      type: "e0049",
      number: "TAHUN 2024",
      title:
        "TENTANG PENDATAAN RUANG TERBUKA HIJAU KE DALAM SISTEM INFORMASI SEMARAK HIJAU",
      year: "2024",
      pdf: "/dasarhukum/INSEKDA e0049 TAHUN 2024.pdf",
    },

    // KEPGUB
    {
      id: 15,
      category: "KEPGUB",
      type: "697",
      number: "TAHUN 1985",
      title:
        "TENTANG BLOK MAKAM KHUSUS PADA TPU TPU DI WILAYAH DKI JAKARTA DAN KRITERIA PENGGUNAANNYA",
      year: "1985",
      pdf: "/dasarhukum/KEPGUB 697 TAHUN 1985.pdf",
    },

    // LAINNYA
    {
      id: 16,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2010",
      title: "Jakarta Dalam Angka 2010",
      year: "2010",
      pdf: "/dasarhukum/LAINNYA Jakarta Dalam Angka 2010.pdf",
    },
    {
      id: 17,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2011",
      title: "Jakarta Dalam Angka 2011",
      year: "2011",
      pdf: "/files/jakarta-dalam-angka-2011.pdf",
    },
    {
      id: 18,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2012",
      title: "Jakarta Dalam Angka 2012",
      year: "2012",
      pdf: "/files/jakarta-dalam-angka-2012.pdf",
    },
    {
      id: 19,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2013",
      title: "Jakarta Dalam Angka 2013",
      year: "2013",
      pdf: "/files/jakarta-dalam-angka-2013.pdf",
    },
    {
      id: 20,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2014",
      title: "Jakarta Dalam Angka 2014",
      year: "2014",
      pdf: "/files/jakarta-dalam-angka-2014.pdf",
    },
    {
      id: 21,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2015",
      title: "Jakarta Dalam Angka 2015",
      year: "2015",
      pdf: "/files/jakarta-dalam-angka-2015.pdf",
    },
    {
      id: 22,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2016",
      title: "Jakarta Dalam Angka 2016",
      year: "2016",
      pdf: "/files/jakarta-dalam-angka-2016.pdf",
    },
    {
      id: 23,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2020",
      title: "Jakarta Dalam Angka 2020",
      year: "2020",
      pdf: "/files/jakarta-dalam-angka-2020.pdf",
    },
    {
      id: 24,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2021",
      title: "Jakarta Dalam Angka 2021",
      year: "2021",
      pdf: "/files/jakarta-dalam-angka-2021.pdf",
    },
    {
      id: 25,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2022",
      title: "Jakarta Dalam Angka 2022",
      year: "2022",
      pdf: "/files/jakarta-dalam-angka-2022.pdf",
    },

    // PERDA
    {
      id: 26,
      category: "PERDA",
      type: "01",
      number: "TAHUN 2012",
      title: "TENTANG RTRW 2030",
      year: "2012",
      pdf: "/files/perda-01-2012.pdf",
    },
    {
      id: 27,
      category: "PERDA",
      type: "01",
      number: "TAHUN 2015",
      title: "TENTANG RETRIBUSI DAERAH",
      year: "2015",
      pdf: "/dasarhukum/PERDA NO 1 TAHUN 2015.pdf",
    },
    {
      id: 28,
      category: "PERDA",
      type: "01",
      number: "TAHUN 2012",
      title: "TENTANG RTRW 2030",
      year: "2012",
      pdf: "/dasarhukum/Perda DKI Nomor 1 Tahun 2012.pdf",
    },
    {
      id: 29,
      category: "PERDA",
      type: "01",
      number: "TAHUN 2024",
      title: "TENTANG PAJAK DAERAH DAN RETRIBUSI DAERAH",
      year: "2024",
      pdf: "/files/perda-01-2024.pdf",
    },
    {
      id: 30,
      category: "PERDA",
      type: "02",
      number: "TAHUN 2005",
      title: "TENTANG PENGENDALIAN PENCEMARAN UDARA",
      year: "2005",
      pdf: "/files/perda-02-2005.pdf",
    },
    {
      id: 31,
      category: "PERDA",
      type: "03",
      number: "TAHUN 2007",
      title: "TENTANG PEMAKAMAN",
      year: "2007",
      pdf: "/files/perda-03-2007.pdf",
    },
    {
      id: 32,
      category: "PERDA",
      type: "06",
      number: "TAHUN 2012",
      title: "TENTANG RPJMD 2005 2025",
      year: "2012",
      pdf: "/files/perda-06-2012.pdf",
    },
    {
      id: 33,
      category: "PERDA",
      type: "08",
      number: "TAHUN 2007",
      title: "TENTANG KETERTIBAN UMUM",
      year: "2007",
      pdf: "/files/perda-08-2007.pdf",
    },

    // PERGUB
    {
      id: 34,
      category: "PERGUB",
      type: "09",
      number: "TAHUN 2022",
      title: "TENTANG RUANG TERBUKA HIJAU",
      year: "2022",
      pdf: "/dasarhukum/PERGUB_NO._9_TAHUN_2022.pdf",
    },
    {
      id: 35,
      category: "PERGUB",
      type: "120",
      number: "TAHUN 2016",
      title: "TENTANG PELAYANAN AMBULAN DAN MOBIL JENAZAH",
      year: "2016",
      pdf: "/dasarhukum/PERGUB 120 Tahun 2016.pdf",
    },
    {
      id: 35,
      category: "PERGUB",
      type: "149",
      number: "TAHUN 2018",
      title: "TENTANG SOTK DINAS KEHUTANAN",
      year: "2018",
      pdf: "/files/pergub-149-2018.pdf",
    },
    {
      id: 36,
      category: "PERGUB",
      type: "157",
      number: "TAHUN 2019",
      title: "TENTANG SOTK DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2019",
      pdf: "/files/pergub-157-2019.pdf",
    },
    {
      id: 37,
      category: "PERGUB",
      type: "173",
      number: "TAHUN 2009",
      title: "TENTANG SOTK DINAS PERTAMANAN DAN PEMAKAMAN",
      year: "2009",
      pdf: "/files/pergub-173-2009.pdf",
    },
    {
      id: 38,
      category: "PERGUB",
      type: "184",
      number: "TAHUN 2012",
      title: "TENTANG PELAYANAN SOSIAL KESEHATAN DAN PEMAKAMAN ORANG TERLANTAR",
      year: "2012",
      pdf: "/files/pergub-184-2012.pdf",
    },
    {
      id: 39,
      category: "PERGUB",
      type: "188",
      number: "TAHUN 2015",
      title:
        "TENTANG TATA CARA PEMBERIAN KERINGANAN PENGURANGAN PEMBEBASAN RETRIBUSI",
      year: "2015",
      pdf: "/files/pergub-188-2015.pdf",
    },
    {
      id: 40,
      category: "PERGUB",
      type: "232",
      number: "TAHUN 2014",
      title: "TENTANG SOTK DINAS PERTAMANAN DAN PEMAKAMAN",
      year: "2014",
      pdf: "/files/pergub-232-2014.pdf",
    },
    {
      id: 41,
      category: "PERGUB",
      type: "249",
      number: "TAHUN 2016",
      title:
        "TENTANG PERUBAHAN PERGUB 212 TAHUN 2016 TENTANG PEDOMAN PENGELOLAAN PENYEDIA JASA LAINYA ORANG PERORANGAN",
      year: "2016",
      pdf: "/files/pergub-249-2016.pdf",
    },
    {
      id: 42,
      category: "PERGUB",
      type: "24",
      number: "TAHUN 2021",
      title: "TENTANG PENGELOAAN DAN PERLINDUNGAN POHON",
      year: "2021",
      pdf: "/files/pergub-24-2021.pdf",
    },
    {
      id: 43,
      category: "PERGUB",
      type: "280",
      number: "TAHUN 2016",
      title: "TENTANG SOTK DINAS KEHUTANAN",
      year: "2016",
      pdf: "/files/pergub-280-2016.pdf",
    },
    {
      id: 44,
      category: "PERGUB",
      type: "40",
      number: "TAHUN 2020",
      title:
        "TENTANG PERUBAHAN ATAS PERGUB NOMOR 50 TAHUN 2012 TENTANG PEDOMAN PELAKSANAAN PEMBINAAN, PENGAWASAN DAN PENEGAKAN HUKUM KAWASAN DILARANG MEROKOK",
      year: "2020",
      pdf: "/files/pergub-40-2020.pdf",
    },
    {
      id: 45,
      category: "PERGUB",
      type: "49",
      number: "TAHUN 2021",
      title: "TENTANG PENYEDIAAN DAN PEMANFAATAN TAMAN",
      year: "2021",
      pdf: "/files/pergub-49-2021.pdf",
    },
    {
      id: 46,
      category: "PERGUB",
      type: "57",
      number: "TAHUN 2022",
      title:
        "TENTANG ORGANISASI TATA KERJA PERANGKAT DAERAH BAB II DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2022",
      pdf: "/files/pergub-57-2022.pdf",
    },
    {
      id: 47,
      category: "PERGUB",
      type: "82",
      number: "TAHUN 2017",
      title:
        "TENTANG PEDOMAN PENGADAAN TANAH BAGI PEMBANGUNAN UNTUK KEPENTINGAN UMUM",
      year: "2017",
      pdf: "/files/pergub-82-2017.pdf",
    },

    // PERMEN
    {
      id: 48,
      category: "PERMEN",
      type: "ATR 14",
      number: "TAHUN 2022",
      title: "TENTANG PENYEDIAAN DAN PEMANFAATAN RUANG TERBUKA HIJAU",
      year: "2022",
      pdf: "/dasarhukum/Permen ATR KBPN Nomor 14 Tahun 2022-dikompresi.pdf",
    },
    {
      id: 49,
      category: "PERMEN",
      type: "PU 05",
      number: "TAHUN 2008",
      title:
        "TENTANG PEDOMAN PENYEDIAAN DAN PEMANFAATAN RTH DI KAWASAN PERKOTAAN",
      year: "2008",
      pdf: "/files/permen-pu-05-2008.pdf",
    },

    // PERPRES
    {
      id: 50,
      category: "PERPRES",
      type: "65",
      number: "TAHUN 2006",
      title:
        "TENTANG PERUBAHAN ATAS PERATURAN PRESIDEN NOMOR 36 TAHUN 2005 TENTANG PENGADAAN TANAH BAGI PELAKSANAAN PEMBANGUNAN UNTUK KEPENTINGAN UMUM",
      year: "2006",
      pdf: "/dasarhukum/PERPRES No.65 TH 2006.pdf",
    },

    // PP
    {
      id: 51,
      category: "PP",
      type: "09",
      number: "TAHUN 1987",
      title:
        "TENTANG PENYEDIAAN DAN PENGGUNAAN TANAH UNTUK KEPERLUAN TEMPAT PEMAKAMAN",
      year: "1987",
      pdf: "/dasarhukum/PP NO 9 TH 1987 (1).pdf",
    },
    {
      id: 52,
      category: "PP",
      type: "63",
      number: "TAHUN 2002",
      title: "TENTANG HUTAN KOTA",
      year: "2002",
      pdf: "/files/pp-63-2002.pdf",
    },

    // RPJMD
    {
      id: 53,
      category: "RPJMD",
      type: "DKI JAKARTA",
      number: "2013-2017",
      title: "RPJMD DKI JAKARTA 2013 2017",
      year: "2013",
      pdf: "/dasarhukum/RPJMD2013-2017.pdf",
    },

    // SK
    {
      id: 54,
      category: "SK",
      type: "07",
      number: "TAHUN 2022",
      title: "TENTANG PPID DISTAMHUT",
      year: "2022",
      pdf: "/dasarhukum/SK 07 TAHUN 2022.pdf",
    },

    // UU
    {
      id: 55,
      category: "UU",
      type: "02",
      number: "TAHUN 2012",
      title: "TENTANG PENGADAAN TANAH BAGI PEMBANGUNAN UNTUK KEPENTINGAN UMUM",
      year: "2012",
      pdf: "/dasarhukum/UU Nomor 2 Tahun 2012.pdf",
    },
    {
      id: 56,
      category: "UU",
      type: "26",
      number: "TAHUN 2007",
      title: "TENTANG PENATAAN RUANG",
      year: "2007",
      pdf: "/files/uu-26-2007.pdf",
    },
    {
      id: 57,
      category: "UU",
      type: "29",
      number: "TAHUN 2007",
      title:
        "TENTANG PEMERINTAHAN PROVINSI DAERAH KHUSUS IBUKOTA JAKARTA SEBAGAI IBUKOTA NEGARA KESATUAN REPUBLIK INDONESIA",
      year: "2007",
      pdf: "/files/uu-29-2007.pdf",
    },
  ];

  // Kategori dengan konfigurasi warna dan icon
  const categories = [
    {
      id: "semua",
      name: "Semua Regulasi",
      icon: "📄",
      color: "gray",
      count: regulationsData.length,
    },
    {
      id: "UU",
      name: "Undang-Undang",
      icon: "📄",
      color: "red",
      count: regulationsData.filter((r) => r.category === "UU").length,
    },
    {
      id: "PP",
      name: "Peraturan Pemerintah",
      icon: "📄",
      color: "blue",
      count: regulationsData.filter((r) => r.category === "PP").length,
    },
    {
      id: "PERPRES",
      name: "Peraturan Presiden",
      icon: "📄",
      color: "indigo",
      count: regulationsData.filter((r) => r.category === "PERPRES").length,
    },
    {
      id: "PERMEN",
      name: "Peraturan Menteri",
      icon: "📄",
      color: "purple",
      count: regulationsData.filter((r) => r.category === "PERMEN").length,
    },
    {
      id: "PERDA",
      name: "Peraturan Daerah",
      icon: "📄",
      color: "green",
      count: regulationsData.filter((r) => r.category === "PERDA").length,
    },
    {
      id: "PERGUB",
      name: "Peraturan Gubernur",
      icon: "📄",
      color: "yellow",
      count: regulationsData.filter((r) => r.category === "PERGUB").length,
    },
    {
      id: "KEPGUB",
      name: "Keputusan Gubernur",
      icon: "📄",
      color: "orange",
      count: regulationsData.filter((r) => r.category === "KEPGUB").length,
    },
    {
      id: "INSEKDA",
      name: "Instruksi Sekda",
      icon: "📄",
      color: "teal",
      count: regulationsData.filter((r) => r.category === "INSEKDA").length,
    },
    {
      id: "DINAS",
      name: "Dokumen Dinas",
      icon: "📄",
      color: "cyan",
      count: regulationsData.filter((r) => r.category === "DINAS").length,
    },
    {
      id: "SK",
      name: "Surat Keputusan",
      icon: "📄",
      color: "emerald",
      count: regulationsData.filter((r) => r.category === "SK").length,
    },
    {
      id: "RPJMD",
      name: "RPJMD",
      icon: "📄",
      color: "pink",
      count: regulationsData.filter((r) => r.category === "RPJMD").length,
    },
    {
      id: "LAINNYA",
      name: "Lainnya",
      icon: "📄",
      color: "slate",
      count: regulationsData.filter((r) => r.category === "LAINNYA").length,
    },
  ];

  // Filter regulasi berdasarkan pencarian dan kategori
  const filteredRegulations = regulationsData.filter((regulation) => {
    const matchesSearch =
      regulation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      regulation.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      regulation.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "semua" || regulation.category === selectedCategory;
    const matchesYear =
      selectedYear === "semua" || regulation.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  // Dapatkan tahun unik untuk filter
  const uniqueYears = [...new Set(regulationsData.map((r) => r.year))].sort(
    (a, b) => b - a,
  );

  // Fungsi untuk preview/download file
  const handleFileAction = (filePath, action) => {
    // Cek apakah file tersedia (yang dimulai dengan /dasarhukum/)
    const isFileAvailable = filePath.startsWith("/dasarhukum/");

    if (!isFileAvailable) {
      alert(
        "File PDF ini belum tersedia. Silakan hubungi admin untuk mendapatkan dokumen ini.",
      );
      return;
    }

    if (action === "preview") {
      // Buka file PDF di tab baru untuk preview
      window.open(filePath, "_blank");
    } else if (action === "download") {
      // Download file
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split("/").pop();
      link.click();
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      gray: {
        bg: "bg-gray-500",
        text: "text-gray-600",
        border: "border-gray-200",
        hover: "hover:border-gray-300",
      },
      red: {
        bg: "bg-red-500",
        text: "text-red-600",
        border: "border-red-200",
        hover: "hover:border-red-300",
      },
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:border-blue-300",
      },
      indigo: {
        bg: "bg-indigo-500",
        text: "text-indigo-600",
        border: "border-indigo-200",
        hover: "hover:border-indigo-300",
      },
      purple: {
        bg: "bg-purple-500",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:border-purple-300",
      },
      green: {
        bg: "bg-green-500",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:border-green-300",
      },
      yellow: {
        bg: "bg-yellow-500",
        text: "text-yellow-600",
        border: "border-yellow-200",
        hover: "hover:border-yellow-300",
      },
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:border-orange-300",
      },
      teal: {
        bg: "bg-teal-500",
        text: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:border-teal-300",
      },
      cyan: {
        bg: "bg-cyan-500",
        text: "text-cyan-600",
        border: "border-cyan-200",
        hover: "hover:border-cyan-300",
      },
      emerald: {
        bg: "bg-emerald-500",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:border-emerald-300",
      },
      pink: {
        bg: "bg-pink-500",
        text: "text-pink-600",
        border: "border-pink-200",
        hover: "hover:border-pink-300",
      },
      slate: {
        bg: "bg-slate-500",
        text: "text-slate-600",
        border: "border-slate-200",
        hover: "hover:border-slate-300",
      },
    };
    return colorMap[color] || colorMap.gray;
  };

  const getCategoryIcon = (categoryId, className = "w-8 h-8") => {
    const iconMap = {
      semua: (
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      ),
      UU: (
        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11H17.5A5.5,5.5 0 0,0 12,5.5A5.5,5.5 0 0,0 6.5,11H5A7,7 0 0,1 12,4A7,7 0 0,1 19,11M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,17H16A2,2 0 0,1 18,19V20H6V19A2,2 0 0,1 8,17Z" />
      ),
      PP: (
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.6 14.4,13.5 13.3,13.5H10.7C9.6,13.5 9.2,12.6 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V10.8C10.5,11.4 10.8,11.8 11.3,11.8H12.8C13.2,11.8 13.5,11.4 13.5,10.8V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
      ),
      PERPRES: (
        <path d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M20,18H4V8H20V18M17,12V10.5H15V12H13.5V13.5H15V15H16.5V13.5H18V12H17Z" />
      ),
      PERMEN: (
        <path d="M14,2V4H13V2H14M20,6V7H22V6H20M20,10V11H22V10H20M20,14V15H22V14H20M11,2V4H10V2H11M21,17.5V16.5H22V17.5H21M21,8.5V7.5H22V8.5H21M21,12.5V11.5H22V12.5H21M19,17H15L13.5,15.5V9.5L15,8H19L20.5,9.5V15.5L19,17M19,10H15V15H19V10Z" />
      ),
      PERDA: (
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
      ),
      PERGUB: (
        <path d="M5,16L3,14V9L5,7H7L8,3H16L17,7H19L21,9V14L19,16H17L16,20H8L7,16H5M12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18Z" />
      ),
      KEPGUB: (
        <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M10,16V19.08L13.08,16H20V4H4V16H10M17,11H15V13H13V11H11V9H13V7H15V9H17V11Z" />
      ),
      INSEKDA: (
        <path d="M21,16V14L18,15V13H16V15L13,14V16L16,17V19H18V17L21,16M12,12A5,5 0 0,1 7,7A5,5 0 0,1 12,2A5,5 0 0,1 17,7A5,5 0 0,1 12,12M12,4A3,3 0 0,0 9,7A3,3 0 0,0 12,10A3,3 0 0,0 15,7A3,3 0 0,0 12,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z" />
      ),
      DINAS: (
        <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />
      ),
      SK: <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />,
      RPJMD: (
        <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H15V17H13V10H11V17H9V14H7V17H17V12Z" />
      ),
      LAINNYA: (
        <path d="M16,6H18V8H16V6M16,10H18V12H16V10M10,6H12V8H10V6M10,10H12V12H10V10M4,6H6V8H4V6M4,10H6V12H4V10M18,2H16A2,2 0 0,0 14,4V5H10V4A2,2 0 0,0 8,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H8A2,2 0 0,0 10,20V19H14V20A2,2 0 0,0 16,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />
      ),
    };

    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        {iconMap[categoryId] || iconMap.semua}
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Dasar Hukum & Regulasi
          </h1>
          <p className="text-lg text-gray-600">
            Kumpulan lengkap peraturan perundang-undangan yang menjadi landasan
            hukum penyelenggaraan urusan pertamanan dan hutan kota DKI Jakarta
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari berdasarkan judul, nomor, atau jenis regulasi..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="relative">
              <select
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="semua">Semua Tahun</option>
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-8">
          {categories.map((category) => {
            const colors = getColorClasses(category.color);
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  isSelected
                    ? `${colors.border} bg-white shadow-lg scale-105`
                    : "border-gray-200 bg-white hover:shadow-md hover:scale-102"
                }`}
              >
                <div className="text-2xl mb-2">
                  {category.id === "semua" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  )}
                  {category.id === "UU" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11H17.5A5.5,5.5 0 0,0 12,5.5A5.5,5.5 0 0,0 6.5,11H5A7,7 0 0,1 12,4A7,7 0 0,1 19,11M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,17H16A2,2 0 0,1 18,19V20H6V19A2,2 0 0,1 8,17Z" />
                    </svg>
                  )}
                  {category.id === "PP" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.6 14.4,13.5 13.3,13.5H10.7C9.6,13.5 9.2,12.6 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V10.8C10.5,11.4 10.8,11.8 11.3,11.8H12.8C13.2,11.8 13.5,11.4 13.5,10.8V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                    </svg>
                  )}
                  {category.id === "PERPRES" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6M20,18H4V8H20V18M17,12V10.5H15V12H13.5V13.5H15V15H16.5V13.5H18V12H17Z" />
                    </svg>
                  )}
                  {category.id === "PERMEN" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,2V4H13V2H14M20,6V7H22V6H20M20,10V11H22V10H20M20,14V15H22V14H20M11,2V4H10V2H11M21,17.5V16.5H22V17.5H21M21,8.5V7.5H22V8.5H21M21,12.5V11.5H22V12.5H21M19,17H15L13.5,15.5V9.5L15,8H19L20.5,9.5V15.5L19,17M19,10H15V15H19V10Z" />
                    </svg>
                  )}
                  {category.id === "PERDA" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                    </svg>
                  )}
                  {category.id === "PERGUB" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5,16L3,14V9L5,7H7L8,3H16L17,7H19L21,9V14L19,16H17L16,20H8L7,16H5M12,18A3,3 0 0,0 15,15A3,3 0 0,0 12,12A3,3 0 0,0 9,15A3,3 0 0,0 12,18Z" />
                    </svg>
                  )}
                  {category.id === "KEPGUB" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M10,16V19.08L13.08,16H20V4H4V16H10M17,11H15V13H13V11H11V9H13V7H15V9H17V11Z" />
                    </svg>
                  )}
                  {category.id === "INSEKDA" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21,16V14L18,15V13H16V15L13,14V16L16,17V19H18V17L21,16M12,12A5,5 0 0,1 7,7A5,5 0 0,1 12,2A5,5 0 0,1 17,7A5,5 0 0,1 12,12M12,4A3,3 0 0,0 9,7A3,3 0 0,0 12,10A3,3 0 0,0 15,7A3,3 0 0,0 12,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z" />
                    </svg>
                  )}
                  {category.id === "DINAS" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />
                    </svg>
                  )}
                  {category.id === "SK" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                  )}
                  {category.id === "RPJMD" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H15V17H13V10H11V17H9V14H7V17H17V12Z" />
                    </svg>
                  )}
                  {category.id === "LAINNYA" && (
                    <svg
                      className="w-8 h-8 mx-auto text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16,6H18V8H16V6M16,10H18V12H16V10M10,6H12V8H10V6M10,10H12V12H10V10M4,6H6V8H4V6M4,10H6V12H4V10M18,2H16A2,2 0 0,0 14,4V5H10V4A2,2 0 0,0 8,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H8A2,2 0 0,0 10,20V19H14V20A2,2 0 0,0 16,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2Z" />
                    </svg>
                  )}
                </div>
                <div
                  className={`text-sm font-semibold ${isSelected ? colors.text : "text-gray-700"}`}
                >
                  {category.name}
                </div>
                <div className="text-xs text-gray-500">
                  {category.count} item
                </div>
              </button>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan{" "}
            <span className="font-semibold">{filteredRegulations.length}</span>{" "}
            dari <span className="font-semibold">{regulationsData.length}</span>{" "}
            regulasi
            {searchTerm && (
              <span>
                {" "}
                untuk pencarian "
                <span className="font-semibold">{searchTerm}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Regulations List */}
        <div className="space-y-4">
          {filteredRegulations.length > 0 ? (
            filteredRegulations.map((regulation) => {
              const category = categories.find(
                (cat) => cat.id === regulation.category,
              );
              const colors = getColorClasses(category?.color || "gray");

              return (
                <div
                  key={regulation.id}
                  className={`bg-white rounded-xl shadow-sm border-2 ${colors.border} ${colors.hover} p-6 transition-all duration-200 hover:shadow-md`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="text-2xl mr-3 text-gray-600">
                          {getCategoryIcon(regulation.category)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} text-white`}
                            >
                              {regulation.category}
                            </span>
                            <span className="text-sm text-gray-500">
                              {regulation.year}
                            </span>
                            {regulation.pdf.startsWith("/dasarhukum/") && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                PDF Tersedia
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {regulation.category} {regulation.type}{" "}
                            {regulation.number}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        {regulation.title}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 ml-4">
                      {regulation.pdf.startsWith("/dasarhukum/") ? (
                        <>
                          <button
                            onClick={() =>
                              handleFileAction(regulation.pdf, "preview")
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                            title="Preview PDF"
                          >
                            <Eye className="w-4 h-4" />
                            Preview
                          </button>
                          <button
                            onClick={() =>
                              handleFileAction(regulation.pdf, "download")
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
                            title="Download PDF"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              handleFileAction(regulation.pdf, "preview")
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed text-sm font-medium"
                            title="File PDF belum tersedia"
                          >
                            <Eye className="w-4 h-4" />
                            Preview
                          </button>
                          <button
                            onClick={() =>
                              handleFileAction(regulation.pdf, "download")
                            }
                            className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed text-sm font-medium"
                            title="File PDF belum tersedia"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada regulasi ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau filter yang digunakan.
              </p>
            </div>
          )}
        </div>

        {/* Statistics Summary */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Statistik Regulasi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories
              .filter((cat) => cat.id !== "semua" && cat.count > 0)
              .map((category) => {
                const colors = getColorClasses(category.color);
                return (
                  <div key={category.id} className="text-center">
                    <div
                      className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center text-white mx-auto mb-2`}
                    >
                      {getCategoryIcon(category.id)}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {category.count}
                    </div>
                    <div className="text-sm text-gray-600">{category.name}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationPage;
