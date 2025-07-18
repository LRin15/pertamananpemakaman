import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RTHTypologyDetailPage = ({ onNavigate }) => {
  const { typology } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(0);

  // Data tipologi RTH yang konsisten dengan RTHInfoPage
  const rthTypologies = {
    a: {
      title: "Tipologi A - RTH Publik",
      description:
        "Ruang Terbuka Hijau yang dikelola pemerintah untuk kepentingan umum",
      types: [
        {
          name: "Jalur Hijau",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/07d.%20jalur%20hijau%20sempadan%20rel%20kereta%20api.png",
          description:
            "Jalur Hijau paling sedikit memiliki kriteria : jalur penempatan tanaman serta elemen lanskap lainnya terletak pada ruang milik jalan maupun pada ruang pengawasan jalan; lebar jalur hijau sempadan jalan, sempadan jalur kereta api dan sempadan jaringan transmisi dan gardu listrik sesuai peraturan perundang-undangan; proporsi jalur hijau terdiri atas paling sedikit 70% (tujuh puluh persen) tutupan hijau dan sisanya berupa tutupan nonhijau ramah lingkungan; sebagai daerah resapan air; sebagai pengendali iklim mikro; dan sebagai tempat aktivitas sosial masyarakat secara terbatas.",
          detailDescription: `
            <h3>Definisi dan Karakteristik</h3>
            <p>Jalur Hijau adalah ruang terbuka hijau berbentuk memanjang/jalur yang berfungsi sebagai peneduh, penyerap polutan, dan penambah keindahan kota. Jalur hijau merupakan bagian penting dari infrastruktur hijau perkotaan yang memberikan berbagai manfaat ekologis dan sosial.</p>
            
            <h3>Jenis-jenis Jalur Hijau</h3>
            <ul>
              <li><strong>Jalur Hijau Sempadan Jalan:</strong> Terletak di sepanjang tepi jalan raya dengan fungsi utama sebagai penyerap polutan kendaraan bermotor</li>
              <li><strong>Median Jalan:</strong> Terletak di tengah jalan sebagai pembatas arah lalu lintas sekaligus penambah estetika</li>
              <li><strong>Jalur Hijau Sempadan Rel Kereta Api:</strong> Berfungsi sebagai penyangga dan pengaman sekaligus penyerap kebisingan</li>
              <li><strong>Jalur Hijau Sempadan Sungai:</strong> Melindungi ekosistem sungai dan mencegah erosi</li>
              <li><strong>Jalur Hijau Jaringan Listrik:</strong> Di bawah saluran transmisi dengan batasan ketinggian tanaman</li>
            </ul>
            
            <h3>Kriteria Teknis</h3>
            <ul>
              <li>Minimum 70% tutupan hijau dari total luas area</li>
              <li>Pemilihan tanaman yang tahan polusi dan cuaca ekstrem</li>
              <li>Sistem perakaran yang tidak merusak infrastruktur</li>
              <li>Perawatan minimal namun tumbuh optimal</li>
              <li>Tidak mengganggu visibilitas pengguna jalan</li>
            </ul>
            
            <h3>Manfaat Ekologis</h3>
            <ul>
              <li>Menyerap polutan udara seperti CO2, NOx, dan partikel debu</li>
              <li>Mengurangi suhu udara melalui evapotranspirasi</li>
              <li>Meredam kebisingan lalu lintas</li>
              <li>Mencegah erosi tanah dan meningkatkan infiltrasi air</li>
              <li>Menyediakan habitat untuk fauna urban</li>
            </ul>
            
            <h3>Tanaman yang Direkomendasikan</h3>
            <ul>
              <li><strong>Pohon Peneduh:</strong> Angsana, Mahoni, Trembesi, Flamboyan</li>
              <li><strong>Tanaman Perdu:</strong> Pandan Variegata, Dracaena, Pucuk Merah</li>
              <li><strong>Tanaman Hias:</strong> Bougenvil, Ixora, Pentas</li>
              <li><strong>Penutup Tanah:</strong> Rumput Gajah Mini, Wedelia, Turnera</li>
            </ul>
          `,
        },
        {
          name: "Pemakaman",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/08.%20pemakaman.png",
          description:
            "Pemakaman paling sedikit memiliki kriteria : sebagai tempat penguburan jenazah; sebagai daerah resapan air; sebagai pengendali iklim mikro; sebagai tempat aktivitas sosial masyarakat secara terbatas; memiliki radius pelayanan 2.500 m (dua ribu lima ratus meter); memiliki luas perpetakan paling kecil 1,2 m2 (satu koma dua meter persegi) per kapita; dan proporsi pemakaman terdiri atas: paling sedikit 70% (tujuh puluh persen) tutupan hijau; dan sisanya berupa tutupan nonhijau ramah lingkungan.",
          detailDescription: `
            <h3>Konsep Pemakaman Hijau</h3>
            <p>Pemakaman sebagai RTH adalah konsep modern yang mengintegrasikan fungsi pemakaman dengan fungsi ekologis ruang terbuka hijau. Konsep ini tidak hanya berfungsi sebagai tempat peristirahatan terakhir, tetapi juga sebagai ruang hijau yang memberikan manfaat lingkungan bagi masyarakat.</p>
            
            <h3>Karakteristik Pemakaman RTH</h3>
            <ul>
              <li>Minimum 70% dari luas area adalah tutupan hijau</li>
              <li>Tersedia area untuk kegiatan sosial terbatas (ziarah, doa bersama)</li>
              <li>Dilengkapi dengan fasilitas pedestrian dan area parkir</li>
              <li>Memiliki sistem drainase dan resapan air yang baik</li>
              <li>Penataan makam yang teratur dengan jarak yang memadai</li>
            </ul>
            
            <h3>Standar Pelayanan</h3>
            <ul>
              <li>Radius pelayanan maksimal 2.500 meter dari pemukiman</li>
              <li>Luas perpetakan minimal 1,2 m² per kapita</li>
              <li>Aksesibilitas yang mudah dengan transportasi umum</li>
              <li>Fasilitas pendukung: mushola, toilet, tempat wudhu</li>
              <li>Sistem pengelolaan yang profesional dan berkelanjutan</li>
            </ul>
            
            <h3>Fungsi Ekologis</h3>
            <ul>
              <li>Daerah resapan air yang mencegah banjir</li>
              <li>Pengendali iklim mikro dengan suhu yang sejuk</li>
              <li>Habitat untuk flora dan fauna lokal</li>
              <li>Penyerap karbon dan penghasil oksigen</li>
              <li>Konservasi tanah dan pencegahan erosi</li>
            </ul>
            
            <h3>Penataan Lanskap</h3>
            <ul>
              <li><strong>Zonasi Makam:</strong> Penataan makam berdasarkan agama dan tradisi</li>
              <li><strong>Area Hijau:</strong> Taman, kebun, dan area rekreasi pasif</li>
              <li><strong>Jalur Sirkulasi:</strong> Jalan utama dan jalur pejalan kaki</li>
              <li><strong>Fasilitas Umum:</strong> Tempat ibadah, toilet, dan area parkir</li>
              <li><strong>Area Servis:</strong> Kantor pengelola dan fasilitas maintenance</li>
            </ul>
            
            <h3>Jenis Tanaman yang Digunakan</h3>
            <ul>
              <li><strong>Pohon Peneduh:</strong> Beringin, Angsana, Mahoni untuk area umum</li>
              <li><strong>Tanaman Hias:</strong> Mawar, Melati, Kenanga untuk estetika</li>
              <li><strong>Rumput:</strong> Rumput Manila atau Gajah Mini untuk area makam</li>
              <li><strong>Tanaman Spiritual:</strong> Pohon Beringin, Frangipani sesuai tradisi</li>
            </ul>
          `,
        },
        {
          name: "Rimba Kota",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/01.%20rimba%20kota.png",
          description:
            "Rimba Kota paling sedikit memiliki kriteria : hamparan lahan berbentuk memanjang/jalur dan/atau mengelompok sebagai tempat tumbuh vegetasi dengan stratifikasi lengkap, rapat, dan beragam di dalam Wilayah Kota atau Kawasan Perkotaan; sebagai tempat pertumbuhan berbagai jenis vegetasi dan keanekaragaman hayati; berfungsi utama sebagai ruang penyangga ekosistem alami dan membentuk kesatuan ekologis; sebagai daerah resapan air; sebagai pengendali iklim mikro; sebagai tempat aktivitas sosial masyarakat secara terbatas; membatasi perkembangan Wilayah Kota atau Kawasan Perkotaan; memiliki radius pelayanan 5.000 m (lima ribu meter); memiliki luas paling kecil 100.000 m2 (seratus ribu meter persegi); dan proporsi rimba kota terdiri atas: paling sedikit 95% (sembilan puluh lima persen) tutupan hijau; dan sisanya berupa tutupan nonhijau ramah lingkungan.",
          detailDescription: `
            <h3>Konsep Rimba Kota</h3>
            <p>Rimba Kota merupakan kawasan hutan buatan atau alami yang berada di dalam wilayah perkotaan dengan fungsi utama sebagai paru-paru kota dan kawasan konservasi keanekaragaman hayati. Rimba kota dirancang untuk menciptakan ekosistem yang mendekati kondisi hutan alami namun dapat diakses oleh masyarakat urban.</p>
            
            <h3>Kriteria Standar Rimba Kota</h3>
            <ul>
              <li>Luas minimal 100.000 m² (10 hektar)</li>
              <li>Tutupan hijau minimal 95% dari total luas</li>
              <li>Radius pelayanan hingga 5.000 meter</li>
              <li>Stratifikasi vegetasi lengkap dari ground cover hingga canopy</li>
              <li>Keanekaragaman hayati yang tinggi</li>
            </ul>
            
            <h3>Struktur Vegetasi Berlapis</h3>
            <ul>
              <li><strong>Canopy Layer (>20m):</strong> Pohon-pohon besar seperti Beringin, Mahoni, Trembesi</li>
              <li><strong>Understory (5-20m):</strong> Pohon menengah seperti Angsana, Flamboyan</li>
              <li><strong>Shrub Layer (1-5m):</strong> Tanaman perdu seperti Pandan, Dracaena</li>
              <li><strong>Ground Cover (<1m):</strong> Rumput, fern, dan tanaman penutup tanah</li>
            </ul>
            
            <h3>Fungsi Utama</h3>
            <ul>
              <li><strong>Ekologis:</strong> Penyerap CO2, penghasil O2, pengatur iklim mikro</li>
              <li><strong>Hidrologi:</strong> Daerah resapan air, pencegah banjir, konservasi air tanah</li>
              <li><strong>Biodiversitas:</strong> Habitat flora fauna, koridor ekologi, konservasi genetik</li>
              <li><strong>Sosial:</strong> Rekreasi, edukasi, penelitian, terapi alam</li>
              <li><strong>Urban Planning:</strong> Pembatas pengembangan kota, green belt</li>
            </ul>
            
            <h3>Zonasi Rimba Kota</h3>
            <ul>
              <li><strong>Zona Inti (Core Zone):</strong> Area konservasi murni, akses sangat terbatas</li>
              <li><strong>Zona Penyangga (Buffer Zone):</strong> Area transisi dengan akses terkontrol</li>
              <li><strong>Zona Pemanfaatan (Utilization Zone):</strong> Area untuk edukasi dan rekreasi</li>
              <li><strong>Zona Rehabilitasi:</strong> Area pemulihan ekosistem yang terdegradasi</li>
            </ul>
            
            <h3>Fasilitas Pendukung</h3>
            <ul>
              <li>Jalur interpretasi dan tracking trail</li>
              <li>Pusat informasi dan visitor center</li>
              <li>Area piknik dan shelter</li>
              <li>Menara pandang (watch tower)</li>
              <li>Laboratorium alam dan greenhouse</li>
            </ul>
            
            <h3>Manfaat untuk Masyarakat</h3>
            <ul>
              <li>Perbaikan kualitas udara secara signifikan</li>
              <li>Regulasi suhu dan kelembaban udara</li>
              <li>Penyediaan ruang rekreasi dan olahraga alam</li>
              <li>Sarana pendidikan lingkungan</li>
              <li>Tempat penelitian dan konservasi</li>
              <li>Terapi alam dan kesehatan mental</li>
            </ul>
          `,
        },
        {
          name: "Taman Kota",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_A/02.%20Taman%20kota.png",
          description:
            "Taman Kota paling sedikit memiliki kriteria : lahan terbuka yang berfungsi sosial budaya dan estetika sebagai sarana kegiatan rekreasi, edukasi, atau kegiatan lain yang ditujukan untuk melayani penduduk dalam 1 (satu) kota atau Kawasan Perkotaan; sebagai tempat pertumbuhan berbagai jenis vegetasi dan keanekaragaman hayati; sebagai daerah resapan air",
          detailDescription: `
            <h3>Konsep Taman Kota Modern</h3>
            <p>Taman Kota adalah ruang terbuka hijau yang dirancang khusus untuk memenuhi kebutuhan rekreasi, interaksi sosial, dan peningkatan kualitas lingkungan perkotaan. Taman kota berfungsi sebagai ruang publik yang dapat diakses oleh seluruh lapisan masyarakat untuk berbagai aktivitas sosial, budaya, dan rekreasi.</p>
            
            <h3>Fungsi Utama Taman Kota</h3>
            <ul>
              <li><strong>Sosial Budaya:</strong> Ruang interaksi masyarakat, acara komunitas, festival</li>
              <li><strong>Rekreasi:</strong> Tempat bermain, olahraga, piknik, dan relaksasi</li>
              <li><strong>Edukasi:</strong> Pembelajaran lingkungan, botanika, dan ekologi</li>
              <li><strong>Estetika:</strong> Peningkatan keindahan dan nilai properti sekitar</li>
              <li><strong>Ekologi:</strong> Penyerapan polutan, regulasi iklim, konservasi air</li>
            </ul>
            
            <h3>Komponen Utama Taman Kota</h3>
            <ul>
              <li><strong>Area Hijau Aktif:</strong> Lapangan olahraga, area bermain anak</li>
              <li><strong>Area Hijau Pasif:</strong> Taman bunga, area duduk, gazebo</li>
              <li><strong>Jalur Sirkulasi:</strong> Jogging track, pedestrian walkway</li>
              <li><strong>Fasilitas Umum:</strong> Toilet, mushola, kantin, area parkir</li>
              <li><strong>Elemen Air:</strong> Kolam, air mancur, stream buatan</li>
              <li><strong>Furniture Taman:</strong> Bangku, lampu taman, tempat sampah</li>
            </ul>
            
            <h3>Kriteria Perencanaan</h3>
            <ul>
              <li>Aksesibilitas yang mudah dengan transportasi umum</li>
              <li>Desain universal untuk semua kelompok usia</li>
              <li>Keamanan dan pencahayaan yang memadai</li>
              <li>Sistem drainase dan irigasi yang baik</li>
              <li>Pemeliharaan yang berkelanjutan</li>
            </ul>
            
            <h3>Jenis-jenis Taman Kota</h3>
            <ul>
              <li><strong>Taman Kota Aktif:</strong> Dilengkapi fasilitas olahraga dan permainan</li>
              <li><strong>Taman Kota Pasif:</strong> Fokus pada keindahan dan kontemplasi</li>
              <li><strong>Taman Tematik:</strong> Taman dengan tema khusus (sejarah, budaya, dll)</li>
              <li><strong>Taman Lingkungan:</strong> Taman skala kecil di tingkat RW/kelurahan</li>
            </ul>
            
            <h3>Manfaat Ekologis</h3>
            <ul>
              <li>Menyerap CO2 dan menghasilkan O2 dalam jumlah signifikan</li>
              <li>Menurunkan suhu udara melalui evapotranspirasi</li>
              <li>Menyerap air hujan dan mengurangi runoff</li>
              <li>Menyediakan habitat untuk burung dan fauna urban</li>
              <li>Menyaring polutan udara dan mengurangi noise pollution</li>
            </ul>
            
            <h3>Vegetasi Taman Kota</h3>
            <ul>
              <li><strong>Pohon Peneduh:</strong> Angsana, Mahoni, Rain Tree untuk area utama</li>
              <li><strong>Pohon Bunga:</strong> Flamboyan, Tabebuya, Bougenvil untuk estetika</li>
              <li><strong>Tanaman Hias:</strong> Palem, Pandan, Dracaena untuk aksen</li>
              <li><strong>Ground Cover:</strong> Rumput, bunga musiman, tanaman penutup</li>
              <li><strong>Tanaman Air:</strong> Teratai, Eceng Gondok untuk water feature</li>
            </ul>
            
            <h3>Aspek Sosial dan Budaya</h3>
            <ul>
              <li>Ruang demokratis untuk semua lapisan masyarakat</li>
              <li>Venue untuk acara budaya dan seni</li>
              <li>Tempat berkumpul dan bersosialisasi</li>
              <li>Area untuk aktivitas fisik dan kesehatan</li>
              <li>Ruang edukasi lingkungan untuk anak-anak</li>
            </ul>
          `,
        },
      ],
    },
    b: {
      title: "Tipologi B - RTH Khusus",
      description:
        "Ruang Terbuka Hijau dengan fungsi khusus untuk konservasi, produksi, dan pelestarian budaya",
      types: [
        {
          name: "Cagar Budaya",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_B/06.%20cagar%20budaya.png",
          description:
            "Kawasan/zona Cagar Budaya memiliki kriteria : mengandung situs cagar budaya terletak di daratan dan/atau di lautan; berupa lanskap budaya hasil bentukan manusia dengan kriteria sesuai peraturan perundang-undangan; memperlihatkan pengaruh manusia masa lalu pada proses pemanfaatan ruang berskala luas dan bukti pembentukan lanskap budaya; memiliki lapisan tanah terbenam yang mengandung bukti kegiatan manusia atau endapan fosil; dan/atau memiliki nilai penting bagi sejarah, ilmu pengetahuan dan budaya yang perlu dilindungi bagi tujuan pelestarian dan pemanfaatan guna memajukan kebudayaan nasional.",
          detailDescription: `
            <h3>Konsep RTH Cagar Budaya</h3>
            <p>RTH Cagar Budaya adalah kawasan ruang terbuka hijau yang memiliki nilai sejarah, budaya, dan arkeologi tinggi. Area ini berfungsi ganda sebagai ruang hijau dan sebagai tempat pelestarian warisan budaya bangsa. Integrasi antara fungsi ekologi dan budaya menciptakan ruang yang unik dan bermakna bagi masyarakat.</p>
            
            <h3>Kriteria Kawasan Cagar Budaya</h3>
            <ul>
              <li>Mengandung situs arkeologi atau bangunan bersejarah</li>
              <li>Memiliki lanskap budaya yang terbentuk dari aktivitas manusia masa lalu</li>
              <li>Terdapat bukti kegiatan manusia dalam lapisan tanah</li>
              <li>Memiliki nilai penting untuk sejarah dan ilmu pengetahuan</li>
              <li>Dilindungi oleh peraturan perundang-undangan</li>
            </ul>
            
            <h3>Jenis-jenis RTH Cagar Budaya</h3>
            <ul>
              <li><strong>Situs Arkeologi:</strong> Area dengan temuan artefak dan struktur kuno</li>
              <li><strong>Bangunan Bersejarah:</strong> Kompleks bangunan kolonial, tradisional</li>
              <li><strong>Lanskap Budaya:</strong> Taman dan area yang mencerminkan budaya masa lalu</li>
              <li><strong>Kawasan Tradisional:</strong> Area yang masih mempertahankan tradisi lokal</li>
            </ul>
            
            <h3>Fungsi dan Manfaat</h3>
            <ul>
              <li><strong>Pelestarian Budaya:</strong> Mempertahankan identitas dan warisan budaya</li>
              <li><strong>Edukasi Sejarah:</strong> Media pembelajaran sejarah dan budaya</li>
              <li><strong>Pariwisata Budaya:</strong> Daya tarik wisata berbasis sejarah</li>
              <li><strong>Penelitian:</strong> Lokasi penelitian arkeologi dan antropologi</li>
              <li><strong>Ekologi:</strong> Fungsi RTH seperti penyerapan karbon dan regulasi iklim</li>
            </ul>
            
            <h3>Pengelolaan dan Konservasi</h3>
            <ul>
              <li>Zonasi ketat antara area konservasi dan area publik</li>
              <li>Pembatasan aktivitas yang dapat merusak situs</li>
              <li>Monitoring dan maintenance rutin</li>
              <li>Interpretasi dan signage yang informatif</li>
              <li>Kerjasama dengan ahli arkeologi dan sejarawan</li>
            </ul>
            
            <h3>Tantangan Pengelolaan</h3>
            <ul>
              <li>Keseimbangan antara konservasi dan aksesibilitas publik</li>
              <li>Perlindungan dari vandalisme dan kerusakan</li>
              <li>Pendanaan untuk maintenance dan penelitian</li>
              <li>Koordinasi antar instansi terkait</li>
              <li>Peningkatan awareness masyarakat</li>
            </ul>
            
            <h3>Contoh di Jakarta</h3>
            <ul>
              <li>Taman Prasasti Museum Taman Prasasti</li>
              <li>Area sekitar Monumen Nasional</li>
              <li>Kompleks Bangunan Bersejarah di Kota Tua</li>
              <li>Situs Betawi di berbagai wilayah Jakarta</li>
            </ul>
          `,
        },
        {
          name: "Hutan Produksi",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_B/08.%20hutan%20produksi.png",
          description:
            "Kawasan/Zona Hutan Produksi memiliki kriteria : kawasan/zona hutan yang memproduksi hasil hutan; memiliki keragaman vegetasi tinggi; dilakukan dengan pendekatan agroforestri; dan/atau hutan di luar kawasan/zona lindung, kawasan/zona hutan suaka alam, kawasan/zona hutan pelestarian alam dan taman buru.",
          detailDescription: `
            <h3>Konsep Hutan Produksi Urban</h3>
            <p>Hutan Produksi dalam konteks perkotaan adalah kawasan hijau yang dirancang untuk menghasilkan produk hutan secara berkelanjutan sambil tetap memberikan manfaat ekologis dan sosial bagi masyarakat urban. Konsep ini menggabungkan prinsip kehutanan produktif dengan kebutuhan ruang terbuka hijau kota.</p>
            
            <h3>Karakteristik Hutan Produksi Urban</h3>
            <ul>
              <li>Menghasilkan produk hutan non-kayu (buah, madu, tanaman obat)</li>
              <li>Memiliki keanekaragaman vegetasi yang tinggi</li>
              <li>Menerapkan sistem agroforestri</li>
              <li>Berada di luar kawasan konservasi khusus</li>
              <li>Dapat diakses untuk edukasi dan wisata</li>
            </ul>
            
            <h3>Pendekatan Agroforestri</h3>
            <ul>
              <li><strong>Silvopasture:</strong> Kombinasi pohon, rumput, dan peternakan</li>
              <li><strong>Silvoagrikultur:</strong> Integrasi pohon dengan tanaman pertanian</li>
              <li><strong>Silvohorticulture:</strong> Kombinasi pohon dengan tanaman hortikultura</li>
              <li><strong>Aquasilvoculture:</strong> Integrasi kehutanan dengan budidaya air</li>
            </ul>
            
            <h3>Hasil Produksi yang Dapat Dihasilkan</h3>
            <ul>
              <li><strong>Buah-buahan:</strong> Mangga, rambutan, jambu, durian lokal</li>
              <li><strong>Tanaman Obat:</strong> Jahe, kunyit, temulawak, sambiloto</li>
              <li><strong>Hasil Non-Kayu:</strong> Madu, getah, bambu, rotan</li>
              <li><strong>Tanaman Hias:</strong> Anggrek, tanaman indoor, bonsai</li>
              <li><strong>Produk Olahan:</strong> Kompos, mulsa, bibit tanaman</li>
            </ul>
            
            <h3>Fungsi Ekologis</h3>
            <ul>
              <li>Konservasi keanekaragaman hayati</li>
              <li>Penyerapan karbon dan produksi oksigen</li>
              <li>Regulasi siklus air dan pencegahan erosi</li>
              <li>Habitat untuk fauna urban</li>
              <li>Mikroklim yang sejuk dan nyaman</li>
            </ul>
            
            <h3>Manfaat Sosial Ekonomi</h3>
            <ul>
              <li>Sumber pendapatan masyarakat sekitar</li>
              <li>Edukasi pertanian dan kehutanan berkelanjutan</li>
              <li>Wisata agro dan ekowisata</li>
              <li>Research dan development produk hutan</li>
              <li>Ketahanan pangan lokal</li>
            </ul>
            
            <h3>Zonasi dan Tata Kelola</h3>
            <ul>
              <li><strong>Zona Produksi Intensif:</strong> Area utama untuk produksi</li>
              <li><strong>Zona Edukasi:</strong> Demo plot dan pembelajaran</li>
              <li><strong>Zona Konservasi:</strong> Perlindungan plasma nutfah</li>
              <li><strong>Zona Rekreasi:</strong> Area wisata dan penelitian</li>
            </ul>
            
            <h3>Teknologi dan Inovasi</h3>
            <ul>
              <li>Sistem irigasi tetes untuk efisiensi air</li>
              <li>Komposting dan daur ulang organik</li>
              <li>Integrated Pest Management (IPM)</li>
              <li>Teknologi greenhouse dan nursery</li>
              <li>Sistem monitoring digital</li>
            </ul>
            
            <h3>Contoh Implementasi</h3>
            <ul>
              <li>Kebun Bibit dan Tanaman Hias Ragunan</li>
              <li>Area agroforestri di Hutan Kota</li>
              <li>Kebun komunitas di berbagai RT/RW</li>
              <li>Urban farming di area kosong</li>
            </ul>
          `,
        },
        {
          name: "Konservasi",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_B/03.%20konservasi.png",
          description:
            "Kawasan/Zona Konservasi memiliki kriteria : memiliki daya tarik sumber daya alam hayati, formasi geologi, dan/atau gejala alam yang dapat dikembangkan untuk kepentingan pemanfaatan pengembangan ilmu pengetahuan, penelitian, pendidikan, dan peningkatan kesadaran konservasi sumber daya alam hayati; memiliki ekosistem khas dan merupakan habitat alami yang memberikan perlindungan bagi perkembangan keanekaragaman tumbuhan dan satwa; kondisi alam, baik biota maupun fisiknya masih asli dan tidak atau belum diganggu manusia; dan/atau memiliki kesatuan masyarakat hukum adat dan/atau kearifan lokal, hak tradisional dan lembaga adat yang masih berlaku.",
          detailDescription: `
            <h3>Konsep RTH Konservasi</h3>
            <p>RTH Konservasi adalah kawasan ruang terbuka hijau yang didedikasikan untuk perlindungan, pemeliharaan, dan pemanfaatan berkelanjutan sumber daya alam hayati serta ekosistemnya. Area ini berfungsi sebagai reservoir keanekaragaman hayati di tengah lingkungan urban yang padat.</p>
            
            <h3>Kriteria Kawasan Konservasi</h3>
            <ul>
              <li>Memiliki daya tarik sumber daya alam hayati yang unik</li>
              <li>Ekosistem yang relatif utuh dan asli</li>
              <li>Habitat alami untuk flora dan fauna</li>
              <li>Nilai ilmiah untuk penelitian dan pendidikan</li>
              <li>Potensi untuk pengembangan ekowisata</li>
            </ul>
            
            <h3>Jenis-jenis Area Konservasi</h3>
            <ul>
              <li><strong>Suaka Margasatwa:</strong> Perlindungan khusus untuk fauna langka</li>
              <li><strong>Cagar Alam:</strong> Konservasi ekosistem dan habitat asli</li>
              <li><strong>Taman Wisata Alam:</strong> Konservasi dengan akses wisata terbatas</li>
              <li><strong>Kebun Raya:</strong> Konservasi ex-situ flora Indonesia</li>
              <li><strong>Hutan Lindung:</strong> Perlindungan fungsi hidrologi dan tanah</li>
            </ul>
            
            <h3>Fungsi Konservasi</h3>
            <ul>
              <li><strong>Preservasi:</strong> Perlindungan spesies langka dan terancam</li>
              <li><strong>Penelitian:</strong> Studi ekologi, genetika, dan evolusi</li>
              <li><strong>Pendidikan:</strong> Pembelajaran konservasi dan ekologi</li>
              <li><strong>Rekreasi Terbatas:</strong> Ekowisata yang terkontrol</li>
              <li><strong>Regulasi Ekologi:</strong> Pengaturan iklim dan siklus air</li>
            </ul>
            
            <h3>Keanekaragaman Hayati</h3>
            <ul>
              <li><strong>Flora Endemik:</strong> Tumbuhan asli dan langka Jakarta</li>
              <li><strong>Fauna Urban:</strong> Burung, reptil, dan mamalia kecil</li>
              <li><strong>Ekosistem Akuatik:</strong> Biota sungai dan danau</li>
              <li><strong>Mikroorganisme:</strong> Bakteri dan jamur tanah</li>
              <li><strong>Serangga Penyerbuk:</strong> Kupu-kupu, lebah, dan penyerbuk lain</li>
            </ul>
            
            <h3>Zonasi Konservasi</h3>
            <ul>
              <li><strong>Zona Inti:</strong> Area perlindungan ketat, akses sangat terbatas</li>
              <li><strong>Zona Penyangga:</strong> Area transisi dengan monitoring ketat</li>
              <li><strong>Zona Pemanfaatan:</strong> Area untuk pendidikan dan penelitian</li>
              <li><strong>Zona Rehabilitasi:</strong> Area pemulihan ekosistem rusak</li>
            </ul>
            
            <h3>Program Konservasi</h3>
            <ul>
              <li>Breeding program untuk spesies langka</li>
              <li>Restorasi habitat yang terdegradasi</li>
              <li>Monitoring populasi flora dan fauna</li>
              <li>Pengendalian spesies invasif</li>
              <li>Bank benih dan plasma nutfah</li>
            </ul>
            
            <h3>Teknologi Konservasi</h3>
            <ul>
              <li>Camera trap untuk monitoring fauna</li>
              <li>GIS dan remote sensing untuk pemetaan</li>
              <li>DNA barcoding untuk identifikasi spesies</li>
              <li>Sistem informasi biodiversitas</li>
              <li>Teknologi propagasi dan tissue culture</li>
            </ul>
            
            <h3>Kearifan Lokal</h3>
            <ul>
              <li>Integrasi dengan tradisi dan budaya Betawi</li>
              <li>Pemanfaatan tumbuhan obat tradisional</li>
              <li>Praktik pertanian tradisional yang berkelanjutan</li>
              <li>Ritual dan kepercayaan terkait alam</li>
              <li>Pengetahuan lokal tentang musim dan cuaca</li>
            </ul>
            
            <h3>Tantangan dan Solusi</h3>
            <ul>
              <li><strong>Fragmentasi Habitat:</strong> Pembangunan koridor hijau</li>
              <li><strong>Polusi Urban:</strong> Buffer zone dan filtrasi alami</li>
              <li><strong>Tekanan Pengembangan:</strong> Zonasi yang ketat dan penegakan hukum</li>
              <li><strong>Perubahan Iklim:</strong> Adaptasi dan mitigasi</li>
              <li><strong>Kesadaran Masyarakat:</strong> Program edukasi dan partisipasi</li>
            </ul>
          `,
        },
      ],
    },
    c: {
      title: "Tipologi C - RTH Privat",
      description:
        "Ruang Terbuka Hijau yang dikelola oleh pihak swasta atau individu untuk mendukung sistem RTH kota",
      types: [
        {
          name: "Objek Ruang pada Bangunan",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_C/OR%20Bangunan/objek%20ruang%20pada%20bangunan.png",
          description:
            "Objek Ruang pada Bangunan paling sedikit memiliki kriteria : berupa permukaan bangunan yang ditanami vegetasi; memiliki luasan sesuai perhitungan IHBI, sebagai upaya memenuhi ketentuan KDH yang ditetapkan dalam RTR; menggunakan instalasi, sistem utilitas, dan/atau media khusus sesuai kriteria teknis bangunan; dan/atau menanam vegetasi lokal yang memenuhi kriteria teknis lanskap RTH pada bangunan yang berfungsi sebagai peneduh, peredam suara, penyaring bau, penyaring debu, dan/atau pertanian perkotaan.",
          detailDescription: `
            <h3>Konsep Green Building</h3>
            <p>Objek Ruang pada Bangunan atau Green Building adalah integrasi vegetasi pada struktur bangunan untuk menciptakan lingkungan yang berkelanjutan. Konsep ini mengubah bangunan dari konsumen lingkungan menjadi kontributor positif bagi ekosistem urban.</p>
            
            <h3>Jenis-jenis Green Building</h3>
            <ul>
              <li><strong>Green Roof:</strong> Atap hijau dengan sistem drainase khusus</li>
              <li><strong>Green Wall/Vertical Garden:</strong> Dinding hijau vertikal</li>
              <li><strong>Green Facade:</strong> Fasad bangunan yang ditumbuhi tanaman</li>
              <li><strong>Sky Garden:</strong> Taman di lantai atas bangunan</li>
              <li><strong>Indoor Garden:</strong> Taman dalam ruangan dan atrium</li>
            </ul>
            
            <h3>Kriteria Teknis</h3>
            <ul>
              <li>Luasan sesuai perhitungan Indeks Hijau Bangunan Indonesia (IHBI)</li>
              <li>Memenuhi ketentuan Koefisien Dasar Hijau (KDH)</li>
              <li>Menggunakan sistem instalasi khusus (irigasi, drainase)</li>
              <li>Pemilihan vegetasi yang sesuai dengan kondisi bangunan</li>
              <li>Sistem structural yang mampu menahan beban</li>
            </ul>
            
            <h3>Sistem dan Teknologi</h3>
            <ul>
              <li><strong>Growing Medium:</strong> Media tanam ringan dan berdrainase baik</li>
              <li><strong>Irigasi Otomatis:</strong> Sistem penyiraman tetes dan sprinkler</li>
              <li><strong>Drainage System:</strong> Sistem pembuangan air berlebih</li>
              <li><strong>Root Barrier:</strong> Penghalang akar untuk melindungi struktur</li>
              <li><strong>Monitoring System:</strong> Sensor kelembaban dan nutrisi</li>
            </ul>
            
            <h3>Vegetasi yang Direkomendasikan</h3>
            <ul>
              <li><strong>Untuk Green Roof:</strong> Sedum, rumput, tanaman sukulen</li>
              <li><strong>Untuk Green Wall:</strong> Pakis, pothos, philodendron</li>
              <li><strong>Untuk Indoor:</strong> Sansevieria, peace lily, spider plant</li>
              <li><strong>Untuk Sky Garden:</strong> Semak, tanaman hias, pohon kecil</li>
            </ul>
            
            <h3>Manfaat Lingkungan</h3>
            <ul>
              <li>Mengurangi Urban Heat Island Effect</li>
              <li>Meningkatkan insulasi termal bangunan</li>
              <li>Menyaring polutan udara dan debu</li>
              <li>Meredam kebisingan dari luar</li>
              <li>Mengelola air hujan dan runoff</li>
            </ul>
            
            <h3>Manfaat Ekonomi</h3>
            <ul>
              <li>Penghematan energi untuk AC dan pemanas</li>
              <li>Peningkatan nilai properti</li>
              <li>Pengurangan biaya pengelolaan air hujan</li>
              <li>Potensi urban farming dan ekonomi kreatif</li>
              <li>Insentif pajak untuk green building</li>
            </ul>
            
            <h3>Aspek Kesehatan dan Sosial</h3>
            <ul>
              <li>Peningkatan kualitas udara dalam ruangan</li>
              <li>Pengurangan stress dan peningkatan produktivitas</li>
              <li>Ruang hijau untuk interaksi sosial</li>
              <li>Edukasi tentang lingkungan dan sustainability</li>
              <li>Terapi hortikultura dan gardening</li>
            </ul>
            
            <h3>Tantangan Implementasi</h3>
            <ul>
              <li>Biaya investasi awal yang tinggi</li>
              <li>Kebutuhan maintenance yang berkelanjutan</li>
              <li>Keterbatasan struktural bangunan lama</li>
              <li>Ketersediaan SDM yang terampil</li>
              <li>Regulasi dan standar yang belum lengkap</li>
            </ul>
            
            <h3>Contoh Implementasi di Jakarta</h3>
            <ul>
              <li>Plaza Indonesia dengan sky garden</li>
              <li>Gedung perkantoran dengan green wall</li>
              <li>Mall dengan indoor garden dan atrium hijau</li>
              <li>Apartemen dengan roof top garden</li>
              <li>Hotel dengan vertical garden di facade</li>
            </ul>
          `,
        },
        {
          name: "Objek Ruang pada Kavling",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_C/OR%20Kavling/01.%20Perkarangan%20rumah.png",
          description:
            "Objek Ruang pada Kavling paling sedikit memiliki kriteria : berupa penutup lahan/perkerasan berpori yang dapat menangkap dan/atau meresapkan air; memiliki luasan sesuai dengan KDH yang ditetapkan dalam ketentuan umum zonasi/peraturan zonasi dalam RTR; menyediakan daerah tangkapan air berupa kolam, bidang, sumur, embung, atau situ sesuai dengan peraturan perundang-undangan; menyediakan sistem pemanenan air hujan sebagai sumber air alternatif yang memenuhi kriteria teknis pemeliharaan lanskap RTH pada kaveling sesuai dengan peraturan perundang-undangan; dan/atau ditanami vegetasi lokal dengan stratifikasi lengkap yang memenuhi kriteria tanaman dan kriteria teknis lanskap untuk RTH pada kaveling yang berfungsi sebagai peneduh, peredam suara, penyaring bau, dan/atau penyaring debu sesuai dengan peraturan perundang-undangan.",
          detailDescription: `
            <h3>Konsep Pekarangan Hijau Berkelanjutan</h3>
            <p>Objek Ruang pada Kavling adalah pemanfaatan area pekarangan rumah, kantor, atau fasilitas lainnya untuk menciptakan ruang hijau yang multifungsi. Konsep ini mengintegrasikan fungsi ekologis, estetika, dan ekonomi dalam satu area yang relatif kecil namun memberikan dampak signifikan bagi lingkungan.</p>
            
            <h3>Kriteria Pekarangan Berkelanjutan</h3>
            <ul>
              <li>Luasan sesuai Koefisien Dasar Hijau (KDH) yang ditetapkan</li>
              <li>Menggunakan perkerasan berpori untuk resapan air</li>
              <li>Sistem tangkapan dan pemanenan air hujan</li>
              <li>Vegetasi berlapis dengan tanaman lokal</li>
              <li>Multifungsi: estetika, ekologi, dan ekonomi</li>
            </ul>
            
            <h3>Komponen Pekarangan Hijau</h3>
            <ul>
              <li><strong>Area Hijau Produktif:</strong> Tanaman pangan dan obat</li>
              <li><strong>Area Hijau Estetika:</strong> Tanaman hias dan bunga</li>
              <li><strong>Sistem Air:</strong> Kolam, sumur resapan, rain garden</li>
              <li><strong>Jalur Sirkulasi:</strong> Pathway dengan paving berpori</li>
              <li><strong>Area Istirahat:</strong> Gazebo, bangku taman</li>
              <li><strong>Fasilitas Pendukung:</strong> Kompos, tool shed, greenhouse mini</li>
            </ul>
            
            <h3>Stratifikasi Vegetasi</h3>
            <ul>
              <li><strong>Kanopi (>3m):</strong> Pohon buah seperti mangga, rambutan</li>
              <li><strong>Understory (1-3m):</strong> Tanaman pisang, pepaya, jambu</li>
              <li><strong>Shrub (<1m):</strong> Tanaman cabai, tomat, tanaman obat</li>
              <li><strong>Ground Cover:</strong> Sayuran hijau, rumput, tanaman rambat</li>
            </ul>
            
            <h3>Sistem Pengelolaan Air</h3>
            <ul>
              <li><strong>Rain Water Harvesting:</strong> Tangki penampung air hujan</li>
              <li><strong>Sumur Resapan:</strong> Untuk infiltrasi air ke tanah</li>
              <li><strong>Bioswale:</strong> Saluran drainase alami dengan tanaman</li>
              <li><strong>Rain Garden:</strong> Area yang dirancang menampung genangan sementara</li>
              <li><strong>Greywater System:</strong> Daur ulang air bekas cucian</li>
            </ul>
            
            <h3>Jenis Tanaman yang Direkomendasikan</h3>
            <ul>
              <li><strong>Tanaman Buah:</strong> Mangga, jambu, belimbing, jeruk</li>
              <li><strong>Sayuran:</strong> Kangkung, bayam, cabai, tomat</li>
              <li><strong>Tanaman Obat:</strong> Jahe, kunyit, lengkuas, sambiloto</li>
              <li><strong>Tanaman Hias:</strong> Anggrek, bromelia, palem, bougenvil</li>
              <li><strong>Tanaman Fungsional:</strong> Bambu, pandan wangi, serai</li>
            </ul>
            
            <h3>Teknologi Urban Farming</h3>
            <ul>
              <li><strong>Hidroponik:</strong> Budidaya tanpa tanah dengan nutrisi</li>
              <li><strong>Vertikultur:</strong> Bertanam secara vertikal</li>
              <li><strong>Aquaponik:</strong> Kombinasi budidaya ikan dan sayuran</li>
              <li><strong>Komposting:</strong> Daur ulang sampah organik</li>
              <li><strong>Greenhouse:</strong> Rumah kaca mini untuk tanaman khusus</li>
            </ul>
            
            <h3>Manfaat Multifungsi</h3>
            <ul>
              <li><strong>Ekologi:</strong> Resapan air, penyerapan karbon, habitat fauna</li>
              <li><strong>Ekonomi:</strong> Hemat belanja sayur, potensi usaha</li>
              <li><strong>Sosial:</strong> Interaksi keluarga, edukasi anak</li>
              <li><strong>Kesehatan:</strong> Aktivitas fisik, udara bersih, makanan organik</li>
              <li><strong>Psikologi:</strong> Mengurangi stress, terapi alam</li>
            </ul>
            
            <h3>Program Pemberdayaan Masyarakat</h3>
            <ul>
              <li>Pelatihan urban farming dan composting</li>
              <li>Pemberian bibit gratis dan alat berkebun</li>
              <li>Kompetisi pekarangan terbaik</li>
              <li>Bank sampah dan tukar menukar produk</li>
              <li>Kelompok tani urban dan sharing economy</li>
            </ul>
            
            <h3>Tantangan dan Solusi</h3>
            <ul>
              <li><strong>Lahan Terbatas:</strong> Optimalisasi vertikal dan container</li>
              <li><strong>Kurangnya Pengetahuan:</strong> Program edukasi dan mentoring</li>
              <li><strong>Kualitas Tanah:</strong> Kompos dan soil improvement</li>
              <li><strong>Hama dan Penyakit:</strong> Integrated Pest Management</li>
              <li><strong>Kontinuitas:</strong> Komunitas dan support system</li>
            </ul>
          `,
        },
        {
          name: "Ruang Terbuka Biru",
          image:
            "https://pertamananpemakaman.jakarta.go.id/assets/data/data-tipologi/tipologi_C/Ruang%20Tebuka%20Biru/01.%20danau.png",
          description:
            "Ruang Terbuka Biru paling sedikit memiliki kriteria : berupa badan air atau ruang perairan; penyedia ketersediaan air; memiliki fungsi retensi berupa penampungan dan penyerapan air hujan pada suatu wilayah; memiliki fungsi detensi berupa penampungan sementara air hujan pada suatu wilayah; dan/atau penyedia ruang tampungan air tanah dan pengendali air banjir.",
          detailDescription: `
            <h3>Konsep Blue Green Infrastructure</h3>
            <p>Ruang Terbuka Biru (RTB) adalah sistem infrastruktur berbasis air yang diintegrasikan dengan ruang terbuka hijau untuk menciptakan lingkungan urban yang resilient terhadap perubahan iklim. RTB berfungsi sebagai sistem natural untuk pengelolaan air hujan, banjir, dan kualitas air di area perkotaan.</p>
            
            <h3>Jenis-jenis Ruang Terbuka Biru</h3>
            <ul>
              <li><strong>Danau Buatan:</strong> Reservoir untuk rekreasi dan pengendalian banjir</li>
              <li><strong>Kolam Retensi:</strong> Penampungan air hujan sementara</li>
              <li><strong>Bioswale:</strong> Saluran drainase alami dengan vegetasi</li>
              <li><strong>Constructed Wetland:</strong> Lahan basah buatan untuk filtrasi</li>
              <li><strong>Urban Stream:</strong> Sungai atau creek yang direhabilitasi</li>
              <li><strong>Rain Garden:</strong> Taman yang dirancang menampung air hujan</li>
            </ul>
            
            <h3>Fungsi Hidrologi</h3>
            <ul>
              <li><strong>Retensi:</strong> Penampungan air hujan dalam jangka panjang</li>
              <li><strong>Detensi:</strong> Penampungan sementara untuk mengurangi peak flow</li>
              <li><strong>Infiltrasi:</strong> Peresapan air ke dalam tanah</li>
              <li><strong>Evapotranspirasi:</strong> Penguapan untuk cooling effect</li>
              <li><strong>Filtrasi:</strong> Penyaringan polutan dan sedimen</li>
            </ul>
            
            <h3>Komponen Sistem RTB</h3>
            <ul>
              <li><strong>Catchment Area:</strong> Area tangkapan air hujan</li>
              <li><strong>Inlet Structure:</strong> Pintu masuk air dengan filter</li>
              <li><strong>Storage Volume:</strong> Volume tampungan air</li>
              <li><strong>Outlet Control:</strong> Pengatur debit keluar</li>
              <li><strong>Vegetation Zone:</strong> Area vegetasi untuk filtrasi</li>
              <li><strong>Sediment Trap:</strong> Penangkap lumpur dan sedimen</li>
            </ul>
            
            <h3>Vegetasi Akuatik</h3>
            <ul>
              <li><strong>Emergent Plants:</strong> Eceng gondok, cattail, lotus</li>
              <li><strong>Floating Plants:</strong> Water hyacinth, water lettuce</li>
              <li><strong>Submerged Plants:</strong> Vallisneria, hornwort</li>
              <li><strong>Marginal Plants:</strong> Iris air, papyrus, bamboo air</li>
              <li><strong>Riparian Vegetation:</strong> Pohon dan semak di tepi air</li>
            </ul>
            
            <h3>Teknologi Water Treatment</h3>
            <ul>
              <li><strong>Constructed Wetland:</strong> Sistem treatment alami</li>
              <li><strong>Biofilter:</strong> Media filter biologis</li>
              <li><strong>Phytoremediation:</strong> Tanaman untuk cleanup polutan</li>
              <li><strong>Aerated Lagoon:</strong> Kolam dengan aerasi buatan</li>
              <li><strong>UV Sterilization:</strong> Disinfeksi dengan sinar UV</li>
            </ul>
            
            <h3>Manfaat Ekologis</h3>
            <ul>
              <li>Habitat untuk waterfowl dan fauna akuatik</li>
              <li>Peningkatan biodiversitas urban</li>
              <li>Koridor ekologi untuk migrasi fauna</li>
              <li>Penyerap karbon melalui vegetasi akuatik</li>
              <li>Regulasi iklim mikro dan kelembaban</li>
            </ul>
            
            <h3>Manfaat Sosial dan Rekreasi</h3>
            <ul>
              <li>Area rekreasi untuk fishing dan boating</li>
              <li>Jogging track dan cycling path di sekitar air</li>
              <li>Bird watching dan nature photography</li>
              <li>Edukasi lingkungan dan water cycle</li>
              <li>Venue untuk event dan festival air</li>
            </ul>
            
            <h3>Aspek Keamanan Air</h3>
            <ul>
              <li>Monitoring kualitas air secara berkala</li>
              <li>Sistem early warning untuk banjir</li>
              <li>Maintenance untuk mencegah eutrofikasi</li>
              <li>Vector control untuk nyamuk dan penyakit</li>
              <li>Safety barriers dan life saving equipment</li>
            </ul>
            
            <h3>Integrasi dengan Smart City</h3>
            <ul>
              <li>Sensor monitoring level dan kualitas air</li>
              <li>Automated gate control untuk flood management</li>
              <li>Real-time data untuk decision making</li>
              <li>Weather forecasting integration</li>
              <li>Mobile app untuk public information</li>
            </ul>
            
            <h3>Contoh Implementasi</h3>
            <ul>
              <li>Danau Sunter dengan sistem biofilter</li>
              <li>Situ Lembang sebagai retensi basin</li>
              <li>Kanal Banjir Barat dengan linear park</li>
              <li>Waduk Pluit untuk flood control</li>
              <li>Rain garden di kompleks perumahan</li>
            </ul>
            
            <h3>Tantangan Pengelolaan</h3>
            <ul>
              <li>Pencemaran dari limbah domestik dan industri</li>
              <li>Sedimentasi dan pendangkalan</li>
              <li>Encroachment dan alih fungsi lahan</li>
              <li>Maintenance cost yang tinggi</li>
              <li>Koordinasi antar stakeholder</li>
            </ul>
          `,
        },
      ],
    },
  };

  const currentTypology = rthTypologies[typology];

  if (!currentTypology) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Tipologi Tidak Ditemukan
          </h2>
          <button
            onClick={() => onNavigate("/rth-info")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Kembali ke RTH Info
          </button>
        </div>
      </div>
    );
  }

  const currentType = currentTypology.types[selectedType];

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
              onClick={() => onNavigate("/rth-info")}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Informasi RTH
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
            <span className="text-gray-500 truncate">
              {currentTypology.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentTypology.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentTypology.description}
            </p>
          </div>

          {/* Type Selection */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Pilih Jenis RTH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentTypology.types.map((type, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedType(index)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                    selectedType === index
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-green-300"
                  }`}
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {type.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {type.description.substring(0, 100)}...
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Type Detail */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img
                  src={currentType.image}
                  alt={currentType.name}
                  className="w-full h-64 object-contain rounded-lg shadow-md bg-gray-50"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentType.name}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {currentType.description}
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informasi Detail
              </h3>
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:mb-2"
                dangerouslySetInnerHTML={{
                  __html: currentType.detailDescription,
                }}
              />
            </div>
          </div>
        </div>

        {/* Panel Tipologi Lainnya */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tipologi RTH Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(rthTypologies).map(([key, typ]) => (
              <button
                key={key}
                onClick={() => onNavigate(`/rth-typology/${key}`)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  typology === key
                    ? "border-green-500 bg-green-50 cursor-default"
                    : "border-gray-200 hover:border-green-300 hover:bg-green-25"
                }`}
                disabled={typology === key}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Tipologi {key.toUpperCase()}
                </h3>
                <p className="text-gray-600 mb-4">{typ.description}</p>
                {typology !== key && (
                  <div className="inline-flex items-center text-green-600 font-medium">
                    Lihat Detail
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
                {typology === key && (
                  <div className="inline-flex items-center text-green-600 font-medium">
                    Sedang Dilihat
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTHTypologyDetailPage;
