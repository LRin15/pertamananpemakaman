import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsDetailPage = ({ onNavigate }) => {
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data berita dummy yang sama dengan NewsPage
  const newsData = [
    {
      id: 1,
      title: "Program Penanaman 10.000 Pohon di Jakarta Selatan Dimulai",
      excerpt:
        "Dinas Pertamanan dan Hutan Kota DKI Jakarta memulai program massal penanaman pohon untuk meningkatkan kualitas udara di ibu kota.",
      content: `
        <p>Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta resmi memulai program penanaman 10.000 pohon di wilayah Jakarta Selatan. Program ini merupakan bagian dari upaya pemerintah provinsi untuk meningkatkan tutupan hijau dan kualitas udara di ibu kota.</p>
        
        <p>Pohon yang ditanam meliputi berbagai jenis seperti mahoni, trembesi, dan angsana yang telah terbukti efektif dalam menyerap polutan udara. Kepala Dinas Pertamanan dan Hutan Kota DKI Jakarta, Dr. Bambang Sutrisno, mengatakan bahwa program ini akan dilaksanakan secara bertahap selama 6 bulan ke depan.</p>
        
        <h3>Lokasi Penanaman</h3>
                <p>Program penanaman akan dilaksanakan di beberapa lokasi strategis di Jakarta Selatan. Lokasi-lokasi tersebut meliputi Taman Langsat di Kebayoran Baru, Kawasan Tebet Eco Park, sepanjang Jalan Fatmawati, area RTH di Kemang, dan Taman Ayodya di Kebayoran Baru. Pemilihan lokasi ini didasarkan pada analisis kebutuhan ruang terbuka hijau dan aksesibilitas untuk masyarakat.</p>
        
                <p>Program penanaman pohon ini diharapkan dapat memberikan manfaat yang signifikan bagi lingkungan dan masyarakat Jakarta. Manfaat yang diharapkan antara lain peningkatan kualitas udara hingga 15%, penurunan suhu udara 2-3 derajat Celsius, peningkatan tutupan hijau di Jakarta Selatan, dan habitat yang lebih baik untuk fauna urban.</p>
        
        <p>Selain itu, program ini juga melibatkan partisipasi masyarakat melalui kegiatan <em>community planting</em> yang akan diselenggarakan setiap akhir pekan di berbagai lokasi.</p>
        
                <p>Untuk memastikan keberhasilan program, dinas akan menggunakan teknologi monitoring pohon berbasis IoT untuk memantau pertumbuhan dan kesehatan setiap pohon yang ditanam. Sistem ini dapat memberikan data real-time tentang kondisi tanah, kelembaban, dan kesehatan pohon.</p>
        
        <p>"Kami berkomitmen untuk menjadikan Jakarta sebagai kota yang lebih hijau dan nyaman untuk ditinggali. Program ini adalah salah satu langkah konkret dalam mewujudkan visi tersebut," ungkap Dr. Bambang Sutrisno.</p>
            `,
      fullImage:
        "https://i.pinimg.com/1200x/f8/1c/83/f81c839d8e5f53dee398b2cfdb136c47.jpg",
      author: "Tim Redaksi",
      authorImage: "/images/logo.png",
      authorBio:
        "Tim redaksi Dinas Pertamanan dan Hutan Kota DKI Jakarta yang berdedikasi menyampaikan informasi terkini seputar program-program lingkungan.",
      date: "2024-12-20",
      readTime: "5 menit",
      category: "program",
      categoryColor: "bg-blue-100 text-blue-800",
      tags: ["penanaman", "pohon", "lingkungan", "jakarta", "udara bersih"],
      location: "Jakarta Selatan",
      views: 1247,
      likes: 89,
      shares: 23,
    },
    {
      id: 2,
      title: "Taman Menteng Raih Penghargaan Taman Terbaik Se-Asia Tenggara",
      excerpt:
        "Taman Menteng berhasil meraih penghargaan sebagai taman kota terbaik se-Asia Tenggara berkat inovasi konsep ramah lingkungan.",
      content: `
        <p>Jakarta - Taman Menteng yang dikelola oleh Dinas Pertamanan dan Hutan Kota DKI Jakarta berhasil meraih penghargaan bergengsi sebagai taman kota terbaik se-Asia Tenggara. Penghargaan ini diberikan atas inovasi konsep taman yang menggabungkan teknologi modern dengan kelestarian lingkungan.</p>
        
        <p>Taman yang berlokasi di jantung kota Jakarta ini telah menjadi model pengembangan taman urban yang berkelanjutan. Dengan luas 3,5 hektar, Taman Menteng dilengkapi dengan berbagai fasilitas modern yang ramah lingkungan.</p>
        
                <p>Beberapa inovasi yang membuat Taman Menteng unggul antara lain sistem irigasi otomatis dengan sensor kelembaban tanah, lampu taman bertenaga solar panel, area playground dengan material daur ulang, zona edukasi lingkungan interaktif, dan sistem pengelolaan sampah terintegrasi. Inovasi-inovasi ini menjadikan Taman Menteng sebagai contoh taman berkelanjutan yang mengintegrasikan teknologi dengan kelestarian lingkungan.</p>
        
                <p>Penghargaan ini diberikan oleh <strong>Asian Parks and Recreation Association (APRA)</strong> dalam kategori "Best Urban Park Innovation 2024". Tim juri menilai Taman Menteng berhasil menciptakan konsep taman yang tidak hanya indah secara visual, tetapi juga memberikan dampak positif bagi lingkungan dan masyarakat.</p>
        
        <p>"Taman Menteng adalah contoh nyata bagaimana teknologi dapat diintegrasikan dengan alam untuk menciptakan ruang publik yang berkelanjutan," kata Sarah Wijaya, Ketua Tim Pengelola Taman Menteng.</p>
        
                <p>Keberadaan Taman Menteng telah memberikan dampak positif yang signifikan bagi masyarakat dan lingkungan sekitar. Taman ini telah menjadi ruang rekreasi keluarga yang aman dan nyaman, membantu menurunkan suhu udara di sekitar kawasan Menteng, menjadi habitat untuk berbagai jenis burung urban, dan berfungsi sebagai pusat edukasi lingkungan untuk pelajar.</p>
        
        <p>Kedepannya, konsep Taman Menteng akan dijadikan model untuk pengembangan taman-taman lain di DKI Jakarta, dengan adaptasi sesuai karakteristik masing-masing wilayah.</p>
            `,
      fullImage:
        "https://i.pinimg.com/736x/db/03/ee/db03ee38babbb163567aa0397e0b26a4.jpg",
      author: "Sarah Wijaya",
      authorImage: "/images/logo.png",
      authorBio:
        "Landscape architect dan sustainability expert dengan pengalaman 15 tahun dalam pengembangan ruang terbuka hijau urban.",
      date: "2024-12-18",
      readTime: "4 menit",
      category: "prestasi",
      categoryColor: "bg-yellow-100 text-yellow-800",
      tags: ["penghargaan", "taman", "menteng", "inovasi", "internasional"],
      location: "Taman Menteng, Jakarta Pusat",
      views: 892,
      likes: 156,
      shares: 45,
    },
    {
      id: 3,
      title:
        "Kebijakan Baru: Izin Pemakaman Digital Mulai Berlaku Januari 2025",
      excerpt:
        "Sistem perizinan pemakaman digital akan segera diimplementasikan untuk mempermudah masyarakat dalam mengurus administrasi pemakaman.",
      content: `
        <p>Jakarta - Mulai Januari 2025, Dinas Pertamanan dan Hutan Kota DKI Jakarta akan menerapkan sistem perizinan pemakaman digital. Sistem ini memungkinkan masyarakat untuk mengurus izin pemakaman secara online tanpa perlu datang langsung ke kantor dinas.</p>

        <p>Fitur-fitur yang tersedia meliputi pengajuan izin, pembayaran retribusi, dan tracking status permohonan secara real-time. Sistem ini dikembangkan untuk meningkatkan efisiensi pelayanan dan mengurangi waktu tunggu masyarakat dalam mengurus administrasi pemakaman.</p>

        <h3>Fitur Unggulan Sistem Digital</h3>
        <p>Sistem perizinan digital ini dilengkapi dengan berbagai fitur canggih yang memudahkan masyarakat. Fitur-fitur tersebut meliputi pendaftaran online 24/7, upload dokumen digital, pembayaran online terintegrasi, tracking real-time status permohonan, notifikasi WhatsApp dan email, dan sistem antrian digital.</p>

        <p>Kepala Dinas Pertamanan dan Hutan Kota DKI Jakarta, Ahmad Rizki, mengatakan bahwa sistem ini akan mengurangi waktu pengurusan dari 3-5 hari menjadi maksimal 24 jam untuk kasus normal.</p>

        <h3>Cara Menggunakan Sistem</h3>
        <p>Untuk menggunakan sistem perizinan digital ini, masyarakat dapat mengakses portal resmi dinas melalui website atau aplikasi mobile. Proses pengajuan meliputi registrasi akun, upload dokumen persyaratan, pengisian formulir online, pembayaran retribusi, dan tracking permohonan hingga selesai.</p>

        <p>"Kami berkomitmen untuk memberikan pelayanan terbaik bagi masyarakat Jakarta. Sistem digital ini adalah wujud nyata transformasi digital dalam pelayanan publik," ungkap Ahmad Rizki.</p>
            `,
      fullImage:
        "https://i.pinimg.com/1200x/04/ed/94/04ed94c06441b7316ab76b1cb8a9e77b.jpg",
      author: "Ahmad Rizki",
      authorImage: "/images/logo.png",
      authorBio:
        "Kepala Dinas Pertamanan dan Hutan Kota DKI Jakarta dengan fokus pada transformasi digital pelayanan publik.",
      date: "2024-12-15",
      readTime: "6 menit",
      category: "kebijakan",
      categoryColor: "bg-purple-100 text-purple-800",
      tags: ["digital", "perizinan", "pemakaman", "online", "transformasi"],
      location: "DKI Jakarta",
      views: 1456,
      likes: 123,
      shares: 67,
    },
    {
      id: 4,
      title: "Festival Bunga Tahunan Jakarta 2024 Siap Digelar di Monas",
      excerpt:
        "Festival bunga tahunan Jakarta akan menampilkan berbagai jenis bunga langka dan eksotis dari seluruh nusantara.",
      content: `
        <p>Jakarta - Festival Bunga Tahunan Jakarta 2024 akan diselenggarakan di area Monas pada 25-31 Desember 2024. Acara ini menampilkan lebih dari 500 jenis bunga langka dan eksotis dari berbagai daerah di Indonesia.</p>

        <p>Pengunjung dapat menikmati pameran bunga, workshop berkebun, dan kompetisi fotografi dengan tema 'Keindahan Alam Jakarta'. Festival ini diharapkan dapat meningkatkan kesadaran masyarakat tentang pentingnya pelestarian tanaman hias dan bunga langka.</p>

        <h3>Rangkaian Acara Festival</h3>
        <p>Festival Bunga Tahunan Jakarta 2024 menyajikan berbagai rangkaian acara menarik. Acara-acara tersebut meliputi pameran bunga langka Indonesia, workshop berkebun untuk pemula, kompetisi fotografi bunga, seminar pelestarian tanaman hias, bazaar tanaman dan bunga, dan pertunjukan seni budaya nusantara.</p>

        <p>Lisa Pratiwi, koordinator acara, mengatakan bahwa festival ini akan menjadi ajang edukasi sekaligus rekreasi untuk seluruh keluarga. "Kami ingin memperkenalkan kekayaan flora Indonesia kepada masyarakat Jakarta," katanya.</p>

        <h3>Partisipasi Komunitas</h3>
        <p>Festival ini juga melibatkan berbagai komunitas pecinta tanaman dari seluruh Jakarta. Lebih dari 50 komunitas akan berpartisipasi dalam acara ini, mulai dari komunitas kaktus, anggrek, hingga tanaman hias indoor.</p>

        <p>Tiket masuk festival gratis untuk umum, dengan harapan dapat menarik sebanyak mungkin pengunjung untuk belajar tentang keindahan dan keragaman flora Indonesia.</p>
            `,
      fullImage:
        "https://i.pinimg.com/1200x/b4/29/ff/b429ff88a01edd815809e9c9012f9744.jpg",
      author: "Lisa Pratiwi",
      authorImage: "/images/logo.png",
      authorBio:
        "Event coordinator dan botanical enthusiast dengan pengalaman 10 tahun dalam menyelenggarakan acara bertema alam.",
      date: "2024-12-12",
      readTime: "3 menit",
      category: "acara",
      categoryColor: "bg-pink-100 text-pink-800",
      tags: ["festival", "bunga", "monas", "jakarta", "edukasi"],
      location: "Monumen Nasional, Jakarta Pusat",
      views: 892,
      likes: 234,
      shares: 89,
    },
    {
      id: 5,
      title:
        "Teknologi AI Digunakan untuk Monitoring Kesehatan Pohon di Jakarta",
      excerpt:
        "Inovasi terbaru menggunakan kecerdasan buatan untuk memantau kondisi kesehatan pohon-pohon di seluruh Jakarta secara real-time.",
      content: `
        <p>Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta mengimplementasikan teknologi Artificial Intelligence (AI) untuk monitoring kesehatan pohon di seluruh wilayah Jakarta. Sistem ini dapat mendeteksi penyakit pohon, tingkat stress, dan prediksi umur pohon dengan akurasi tinggi.</p>

        <p>Teknologi ini membantu petugas dalam melakukan perawatan preventif dan mengurangi risiko pohon tumbang. Sistem AI ini menggunakan sensor IoT yang dipasang pada pohon-pohon strategis di seluruh Jakarta.</p>

        <h3>Cara Kerja Teknologi AI</h3>
        <p>Sistem monitoring ini menggunakan kombinasi sensor dan algoritma machine learning. Teknologi yang digunakan meliputi sensor kelembaban tanah dan udara, kamera thermal untuk deteksi stress pohon, sensor getaran untuk deteksi stabilitas batang, algoritma machine learning untuk analisis data, dan dashboard real-time untuk monitoring.</p>

        <p>Dr. Bambang Sutrisno, yang memimpin proyek ini, menjelaskan bahwa sistem dapat memberikan early warning jika ada pohon yang berpotensi tumbang hingga 2 minggu sebelumnya.</p>

        <h3>Manfaat untuk Masyarakat</h3>
        <p>Implementasi teknologi AI ini memberikan berbagai manfaat signifikan bagi masyarakat Jakarta. Manfaat-manfaat tersebut antara lain peningkatan keamanan dari risiko pohon tumbang, optimalisasi perawatan pohon, peningkatan kualitas udara kota, data untuk perencanaan tata ruang hijau, dan efisiensi penggunaan sumber daya.</p>

        <p>"Teknologi ini adalah investasi jangka panjang untuk keselamatan dan kenyamanan masyarakat Jakarta. Kami berharap dapat memperluas sistem ini ke seluruh pohon di Jakarta dalam 3 tahun ke depan," kata Dr. Bambang.</p>
            `,
      fullImage:
        "https://i.pinimg.com/736x/e1/c0/e7/e1c0e7167388a7e6156f9b4193fcefcf.jpg",
      author: "Dr. Bambang Sutrisno",
      authorImage: "/images/logo.png",
      authorBio:
        "Doktor di bidang Teknologi Lingkungan dengan spesialisasi AI untuk monitoring ekosistem urban.",
      date: "2024-12-10",
      readTime: "7 menit",
      category: "teknologi",
      categoryColor: "bg-blue-100 text-blue-800",
      tags: ["AI", "teknologi", "monitoring", "pohon", "smart city"],
      location: "Seluruh Jakarta",
      views: 2134,
      likes: 345,
      shares: 156,
    },
    {
      id: 6,
      title: "Kolaborasi dengan Komunitas untuk Pengelolaan Taman Lingkungan",
      excerpt:
        "Program kemitraan dengan komunitas lokal untuk pengelolaan dan perawatan taman-taman lingkungan di Jakarta.",
      content: `
        <p>Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta meluncurkan program kolaborasi dengan berbagai komunitas lokal untuk pengelolaan taman lingkungan. Program 'Jakarta Hijau Bersama' ini melibatkan 50 komunitas yang tersebar di lima wilayah Jakarta.</p>

        <p>Setiap komunitas akan bertanggung jawab dalam perawatan, pemeliharaan, dan pengembangan kreativitas di taman-taman sekitar mereka. Program ini bertujuan untuk meningkatkan rasa memiliki masyarakat terhadap ruang terbuka hijau di lingkungan mereka.</p>

        <h3>Model Kemitraan</h3>
        <p>Program kolaborasi ini menggunakan model kemitraan yang saling menguntungkan. Model kemitraan meliputi adopsi taman oleh komunitas, pelatihan teknis dari dinas, bantuan bibit dan alat berkebun, monitoring berkala oleh petugas dinas, dan apresiasi untuk komunitas berprestasi.</p>

        <p>Rina Marlina, koordinator program, mengatakan bahwa antusiasme komunitas sangat tinggi. "Mereka tidak hanya merawat, tapi juga mengembangkan konsep kreatif untuk taman-taman tersebut," ungkapnya.</p>

        <h3>Dampak Positif Program</h3>
        <p>Program ini telah memberikan dampak positif yang signifikan bagi lingkungan dan masyarakat. Dampak-dampak tersebut antara lain peningkatan kualitas taman lingkungan, penguatan ikatan sosial masyarakat, edukasi lingkungan berkelanjutan, pengembangan kreativitas komunitas, dan pengurangan biaya perawatan taman.</p>

        <p>Ke depannya, program ini akan diperluas ke seluruh RW di Jakarta dengan target 200 komunitas pada tahun 2025. "Kami yakin partisipasi masyarakat adalah kunci kesuksesan program penghijauan Jakarta," kata Rina.</p>
            `,
      fullImage:
        "https://i.pinimg.com/1200x/56/02/8e/56028ea8ac3dabc5b744c88669966150.jpg",
      author: "Rina Marlina",
      authorImage: "/images/logo.png",
      authorBio:
        "Community engagement specialist dengan fokus pada program partisipatif lingkungan dan pengembangan masyarakat.",
      date: "2024-12-08",
      readTime: "5 menit",
      category: "komunitas",
      categoryColor: "bg-green-100 text-green-800",
      tags: ["kolaborasi", "komunitas", "taman", "partisipasi", "lingkungan"],
      location: "Seluruh DKI Jakarta",
      views: 1678,
      likes: 289,
      shares: 134,
    },
    {
      id: 7,
      title: "Hutan Kota Srengseng Kembali Dibuka untuk Publik",
      excerpt:
        "Setelah renovasi selama 6 bulan, Hutan Kota Srengseng kembali dibuka dengan fasilitas yang lebih lengkap dan modern.",
      content: `
        <p>Jakarta - Hutan Kota Srengseng resmi dibuka kembali untuk publik setelah menjalani renovasi besar-besaran selama 6 bulan. Renovasi ini mencakup perbaikan jalur tracking, penambahan gazebo, area playground anak, dan fasilitas toilet yang lebih bersih.</p>

        <p>Hutan kota seluas 15 hektar ini juga dilengkapi dengan papan informasi digital dan sistem keamanan CCTV untuk kenyamanan pengunjung. Renovasi ini merupakan bagian dari program peningkatan kualitas ruang terbuka hijau di Jakarta.</p>

        <h3>Fasilitas Baru</h3>
        <p>Renovasi Hutan Kota Srengseng menghadirkan berbagai fasilitas baru yang modern dan ramah lingkungan. Fasilitas-fasilitas baru tersebut meliputi jalur jogging sepanjang 2 km dengan surface karet, area playground anak dengan permainan edukatif, 15 gazebo dengan desain modern, toilet umum dengan sistem ramah lingkungan, papan informasi digital interaktif, dan sistem keamanan CCTV 24 jam.</p>

        <p>Yudi Hermawan, pengelola hutan kota, mengatakan bahwa semua fasilitas dirancang untuk mendukung aktivitas rekreasi dan edukasi lingkungan. "Kami ingin Hutan Kota Srengseng menjadi destinasi favorit keluarga Jakarta Barat," katanya.</p>

        <h3>Program Edukasi</h3>
        <p>Selain sebagai tempat rekreasi, Hutan Kota Srengseng juga akan menjadi pusat edukasi lingkungan. Program edukasi yang ditawarkan meliputi tur edukasi flora fauna, workshop berkebun organik, kelas fotografi alam, camping edukasi untuk pelajar, dan seminar konservasi lingkungan.</p>

        <p>Hutan kota ini buka setiap hari dari pukul 05.00-18.00 WIB dengan tiket masuk gratis. Pengunjung diharapkan menjaga kebersihan dan kelestarian lingkungan hutan kota.</p>
            `,
      fullImage:
        "https://i.pinimg.com/736x/19/72/8a/19728a39a4361e274f0c3cfe1b38bcb5.jpg",
      author: "Yudi Hermawan",
      authorImage: "/images/logo.png",
      authorBio:
        "Pengelola hutan kota dengan pengalaman 15 tahun dalam manajemen ruang terbuka hijau dan program edukasi lingkungan.",
      date: "2024-12-05",
      readTime: "4 menit",
      category: "fasilitas",
      categoryColor: "bg-orange-100 text-orange-800",
      tags: ["hutan kota", "srengseng", "renovasi", "fasilitas", "rekreasi"],
      location: "Hutan Kota Srengseng, Jakarta Barat",
      views: 1234,
      likes: 198,
      shares: 76,
    },
    {
      id: 8,
      title: "Workshop Edukasi Lingkungan untuk Siswa SD se-Jakarta",
      excerpt:
        "Program edukasi lingkungan untuk meningkatkan kesadaran siswa sekolah dasar tentang pentingnya menjaga kelestarian alam.",
      content: `
        <p>Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta menggelar workshop edukasi lingkungan untuk siswa SD se-Jakarta. Program 'Generasi Hijau Jakarta' ini bertujuan mengenalkan pentingnya kelestarian lingkungan sejak dini.</p>

        <p>Materi workshop meliputi cara menanam, merawat tanaman, pengelolaan sampah, dan pemahaman ekosistem. Hingga saat ini, lebih dari 10.000 siswa telah mengikuti program ini dengan antusiasme yang sangat tinggi.</p>

        <h3>Metode Pembelajaran</h3>
        <p>Workshop ini menggunakan metode pembelajaran yang menyenangkan dan interaktif untuk anak-anak. Metode pembelajaran meliputi praktik langsung menanam bibit, permainan edukatif tentang lingkungan, storytelling tentang alam, eksperimen sederhana ekosistem, kunjungan ke taman dan hutan kota, dan kompetisi kreativitas ramah lingkungan.</p>

        <p>Sari Indrawati, koordinator program edukasi, mengatakan bahwa anak-anak sangat antusias belajar tentang lingkungan. "Mereka tidak hanya belajar teori, tapi juga praktik langsung yang membuat pembelajaran menjadi menyenangkan," ungkapnya.</p>

        <h3>Dampak Program</h3>
        <p>Program edukasi ini telah memberikan dampak positif yang signifikan terhadap kesadaran lingkungan siswa. Dampak program meliputi peningkatan kesadaran lingkungan siswa, pembentukan karakter peduli alam, pengembangan keterampilan berkebun, penguatan program sekolah hijau, dan terbentuknya agen perubahan lingkungan di sekolah.</p>

        <p>Ke depannya, program ini akan diperluas ke tingkat SMP dan SMA dengan materi yang lebih mendalam. "Kami berharap generasi muda Jakarta menjadi pionir dalam pelestarian lingkungan," kata Sari.</p>
            `,
      fullImage:
        "https://i.pinimg.com/736x/62/21/15/622115c29ee38c690bd897f4e85d230f.jpg",
      author: "Sari Indrawati",
      authorImage: "/images/logo.png",
      authorBio:
        "Education specialist dengan fokus pada program edukasi lingkungan dan pengembangan kurikulum ramah lingkungan untuk anak-anak.",
      date: "2024-12-03",
      readTime: "5 menit",
      category: "edukasi",
      categoryColor: "bg-teal-100 text-teal-800",
      tags: ["workshop", "edukasi", "siswa", "lingkungan", "sekolah"],
      location: "Seluruh Sekolah Dasar Jakarta",
      views: 987,
      likes: 156,
      shares: 45,
    },
  ];

  useEffect(() => {
    // Simulasi loading data
    setLoading(true);

    // Cari berita berdasarkan ID
    const foundNews = newsData.find((item) => item.id === parseInt(newsId));

    // Simulasi API call delay
    setTimeout(() => {
      setNews(foundNews);

      // Ambil berita terkait (berita lain dalam kategori yang sama)
      const related = newsData
        .filter(
          (item) =>
            item.id !== parseInt(newsId) &&
            item.category === foundNews?.category,
        )
        .slice(0, 3);
      setRelatedNews(related);

      setLoading(false);
    }, 800);
  }, [newsId]);

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Jakarta",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = news?.title;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        );
        break;
      case "whatsapp":
        window.open(`https://wa.me/?text=${title} ${url}`);
        break;
      case "telegram":
        window.open(`https://t.me/share/url?url=${url}&text=${title}`);
        break;
      default:
        break;
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin!");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
          <p className="text-gray-600">Memuat artikel...</p>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Artikel Tidak Ditemukan
          </h2>
          <p className="text-gray-600 mb-6">
            Maaf, artikel yang Anda cari tidak dapat ditemukan.
          </p>
          <button
            onClick={() => onNavigate("news")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Kembali ke Halaman Berita
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => onNavigate("/")}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Beranda
            </button>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <button
              onClick={() => onNavigate("news")}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Berita
            </button>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-500 truncate">{news.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <div>
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Featured Image */}
              <div className="relative">
                <img
                  src={news.fullImage}
                  alt={news.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${news.categoryColor}`}
                  >
                    {news.category.charAt(0).toUpperCase() +
                      news.category.slice(1)}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                  📍 {news.location}
                </div>
              </div>

              {/* Article Header */}
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {news.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {news.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={news.authorImage}
                      alt={news.author}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {news.author}
                      </p>
                      <p className="text-sm text-gray-500">Penulis</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {formatDate(news.date)}
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {news.readTime}
                  </div>

                  <div className="flex items-center text-gray-500 text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {news.views.toLocaleString()} views
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:mb-2 text-justify"
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-700 mr-2">
                      Tags:
                    </span>
                    {news.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interaction Stats */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center text-gray-500 hover:text-red-500 transition-colors">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {news.likes}
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-500 transition-colors">
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      {news.shares}
                    </button>
                  </div>
                </div>
              </div>
            </article>

            {/* Author Bio */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tentang Penulis
              </h3>
              <div className="flex items-start">
                <img
                  src={news.authorImage}
                  alt={news.author}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {news.author}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {news.authorBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Bagikan Artikel
              </h3>
              <div className="grid grid-cols-4 gap-3">
                <button
                  onClick={() => handleShare("facebook")}
                  className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="flex items-center justify-center p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={() => handleShare("whatsapp")}
                  className="flex items-center justify-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085" />
                  </svg>
                  WhatsApp
                </button>
                <button
                  onClick={copyLink}
                  className="flex items-center justify-center p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
          {/* Related News */}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
