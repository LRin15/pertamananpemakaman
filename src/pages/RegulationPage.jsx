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
      pdf: "/files/dinas-iku-2018-2022.pdf",
    },
    {
      id: 2,
      category: "DINAS",
      type: "LAKIP",
      number: "2021",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2021",
      pdf: "/files/dinas-lakip-2021.pdf",
    },
    {
      id: 3,
      category: "DINAS",
      type: "LAKIP",
      number: "2022",
      title: "DINAS PERTAMANAN DAN HUTAN KOTA",
      year: "2022",
      pdf: "/files/dinas-lakip-2022.pdf",
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
      pdf: "/files/insekda-e0049-2024.pdf",
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
      pdf: "/files/kepgub-697-1985.pdf",
    },

    // LAINNYA
    {
      id: 16,
      category: "LAINNYA",
      type: "Jakarta Dalam Angka",
      number: "2010",
      title: "Jakarta Dalam Angka 2010",
      year: "2010",
      pdf: "/files/jakarta-dalam-angka-2010.pdf",
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
      number: "TAHUN 2024",
      title: "TENTANG PAJAK DAERAH DAN RETRIBUSI DAERAH",
      year: "2024",
      pdf: "/files/perda-01-2024.pdf",
    },
    {
      id: 29,
      category: "PERDA",
      type: "02",
      number: "TAHUN 2005",
      title: "TENTANG PENGENDALIAN PENCEMARAN UDARA",
      year: "2005",
      pdf: "/files/perda-02-2005.pdf",
    },
    {
      id: 30,
      category: "PERDA",
      type: "03",
      number: "TAHUN 2007",
      title: "TENTANG PEMAKAMAN",
      year: "2007",
      pdf: "/files/perda-03-2007.pdf",
    },
    {
      id: 31,
      category: "PERDA",
      type: "06",
      number: "TAHUN 2012",
      title: "TENTANG RPJMD 2005 2025",
      year: "2012",
      pdf: "/files/perda-06-2012.pdf",
    },
    {
      id: 32,
      category: "PERDA",
      type: "08",
      number: "TAHUN 2007",
      title: "TENTANG KETERTIBAN UMUM",
      year: "2007",
      pdf: "/files/perda-08-2007.pdf",
    },

    // PERGUB
    {
      id: 33,
      category: "PERGUB",
      type: "09",
      number: "TAHUN 2022",
      title: "TENTANG RUANG TERBUKA HIJAU",
      year: "2022",
      pdf: "/files/pergub-09-2022.pdf",
    },
    {
      id: 34,
      category: "PERGUB",
      type: "120",
      number: "TAHUN 2016",
      title: "TENTANG PELAYANAN AMBULAN DAN MOBIL JENAZAH",
      year: "2016",
      pdf: "/files/pergub-120-2016.pdf",
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
      pdf: "/files/permen-atr-14-2022.pdf",
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
      pdf: "/files/perpres-65-2006.pdf",
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
      pdf: "/files/pp-09-1987.pdf",
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
      pdf: "/files/rpjmd-dki-2013-2017.pdf",
    },

    // SK
    {
      id: 54,
      category: "SK",
      type: "07",
      number: "TAHUN 2022",
      title: "TENTANG PPID DISTAMHUT",
      year: "2022",
      pdf: "/files/sk-07-2022.pdf",
    },

    // UU
    {
      id: 55,
      category: "UU",
      type: "02",
      number: "TAHUN 2012",
      title: "TENTANG PENGADAAN TANAH BAGI PEMBANGUNAN UNTUK KEPENTINGAN UMUM",
      year: "2012",
      pdf: "/files/uu-02-2012.pdf",
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
      icon: "📑",
      color: "gray",
      count: regulationsData.length,
    },
    {
      id: "UU",
      name: "Undang-Undang",
      icon: "⚖️",
      color: "red",
      count: regulationsData.filter((r) => r.category === "UU").length,
    },
    {
      id: "PP",
      name: "Peraturan Pemerintah",
      icon: "📋",
      color: "blue",
      count: regulationsData.filter((r) => r.category === "PP").length,
    },
    {
      id: "PERPRES",
      name: "Peraturan Presiden",
      icon: "🏛️",
      color: "indigo",
      count: regulationsData.filter((r) => r.category === "PERPRES").length,
    },
    {
      id: "PERMEN",
      name: "Peraturan Menteri",
      icon: "📜",
      color: "purple",
      count: regulationsData.filter((r) => r.category === "PERMEN").length,
    },
    {
      id: "PERDA",
      name: "Peraturan Daerah",
      icon: "🏢",
      color: "green",
      count: regulationsData.filter((r) => r.category === "PERDA").length,
    },
    {
      id: "PERGUB",
      name: "Peraturan Gubernur",
      icon: "🎖️",
      color: "yellow",
      count: regulationsData.filter((r) => r.category === "PERGUB").length,
    },
    {
      id: "KEPGUB",
      name: "Keputusan Gubernur",
      icon: "📝",
      color: "orange",
      count: regulationsData.filter((r) => r.category === "KEPGUB").length,
    },
    {
      id: "INSEKDA",
      name: "Instruksi Sekda",
      icon: "📋",
      color: "teal",
      count: regulationsData.filter((r) => r.category === "INSEKDA").length,
    },
    {
      id: "DINAS",
      name: "Dokumen Dinas",
      icon: "🏛️",
      color: "cyan",
      count: regulationsData.filter((r) => r.category === "DINAS").length,
    },
    {
      id: "SK",
      name: "Surat Keputusan",
      icon: "✅",
      color: "emerald",
      count: regulationsData.filter((r) => r.category === "SK").length,
    },
    {
      id: "RPJMD",
      name: "RPJMD",
      icon: "📊",
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

        {/* Breadcrumb Navigation */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <button
                onClick={() => onNavigate("LandingPage")}
                className="text-gray-500 hover:text-green-600 transition-colors"
              >
                Beranda
              </button>
            </li>
            <svg
              className="w-4 h-4 text-gray-400 mx-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <li className="inline-flex items-center">
              <span className="text-gray-800 font-medium">Regulasi</span>
            </li>
          </ol>
        </nav>

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
                <div className="text-2xl mb-2">{category.icon}</div>
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
                        <span className="text-2xl mr-3">
                          {category?.icon || "📄"}
                        </span>
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
                      className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2`}
                    >
                      {category.icon}
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
