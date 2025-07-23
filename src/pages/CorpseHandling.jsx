import React from "react";
import {
  Users,
  ClipboardCheck,
  Sprout,
} from "lucide-react";

const CorpseHandling = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8 lg:px-16">
      {/* Deskripsi Singkat */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Layanan ini disediakan untuk menangani jenazah yang tidak diketahui identitas atau tidak memiliki keluarga/pengurus. 
        Dinas Pertamanan dan Pemakaman DKI Jakarta bertanggung jawab dalam pemulasaraan dan pemakaman jenazah terlantar sesuai ketentuan yang berlaku.
      </p>

      {/* Langkah Prosedur */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
        {[
          {
            icon: <Users className="w-8 h-8 text-green-700" />,
            title: "Pelaporan",
            desc: "Masyarakat atau instansi melaporkan keberadaan jenazah terlantar kepada Dinas terkait.",
          },
          {
            icon: <ClipboardCheck className="w-8 h-8 text-green-700" />,
            title: "Verifikasi",
            desc: "Petugas melakukan verifikasi dan identifikasi jenazah di lokasi.",
          },
          {
            icon: <Sprout className="w-8 h-8 text-green-700" />,
            title: "Pemulasaraan & Pemakaman",
            desc: "Jenazah dipulasara dan dimakamkan dengan layak di TPU yang ditetapkan.",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-green-800 text-center mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{step.desc}</p>
          </div>
        ))}
      </div>
        <div className="text-center mt-6">
            <a
                href="tel:+6281234567890"
                className="inline-block bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-green-800 transition"
            >
                Hubungi Sekarang
            </a>
        </div>
    </div>
  );
};

export default CorpseHandling;
