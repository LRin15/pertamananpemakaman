"use client";

import "./index.css";
import { useState, useEffect } from "react";
// Impor komponen yang diperlukan dari React Router
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// Import komponen layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import semua halaman
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ParkSchedulePage from "./pages/ParkSchedulePage";
import ParkApplicationPage from "./pages/ParkApplicationPage";
import MapPage from "./pages/MapPage";
import CatalogPage from "./pages/CatalogPage";
import KTHProfilePage from "./pages/Kthprofile";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import RegulationPage from "./pages/RegulationPage";
import RTHInfoPage from "./pages/RTHInfoPage";
import RTHDetailPage from "./pages/RTHDetailPage";
import RTHTypologyDetailPage from "./pages/RTHTypologyDetailPage";
import RTHAtapPage from "./pages/RTHAtapPage";
import RTHPekaranganPage from "./pages/RTHPekaranganPage";
import RTHLingkunganPage from "./pages/RTHLingkunganPage";
import TreePruningApplicationPage from "./pages/TreePruningApplicationPage";
import SeedlingApplicationPage from "./pages/SeedlingApplication";
import TreeFallClaimPage from "./pages/TreeFallClaimPage";
import AccountProfilePage from "./pages/AccountProfilePage";
import CemeteryDataSearchPage from "./pages/CemeteryPlotApplication";
import CemeteryAvailabilityPage from "./pages/CemeteryAvailabilityPage";
import StrukturOrganisasiPage from "./pages/StrukturOrganisasiPage";
import VisiMisiPage from "./pages/VisiMisiPage";
import TugasFungsiPage from "./pages/TugasFungsiPage";
import SejarahPage from "./pages/SejarahPage";

// Komponen Notifikasi (Tidak ada perubahan)
const Notification = ({ message, onClear }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClear();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClear]);

  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 z-[100] bg-green-600 text-white py-2 px-5 rounded-lg shadow-lg animate-fade-in-down">
      {message}
    </div>
  );
};

// Komponen ini berisi logika utama agar bisa menggunakan hooks
const AppContent = () => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook untuk navigasi

  // handleNavigate tidak lagi diperlukan di sini, karena navigasi ditangani oleh Link/NavLink
  // Namun, kita tetap menyediakannya jika diperlukan untuk navigasi programatik dari dalam halaman
  const handleNavigate = (path, message = "") => {
    navigate(path);
    if (message) {
      setNotificationMessage(message);
    }
  };

  const handleLoginSuccess = (message) => {
    setIsLoggedIn(true);
    setNotificationMessage(message);
    navigate("/"); // Arahkan ke beranda setelah login sukses
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNotificationMessage("Anda telah berhasil log out.");
    navigate("/"); // Arahkan ke beranda setelah logout
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Notification
        message={notificationMessage}
        onClear={() => setNotificationMessage("")}
      />

      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <main className="flex-1">
        <Routes>
          {/* Definisikan semua rute di sini */}
          <Route
            path="/"
            element={<LandingPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/login"
            element={
              <LoginPage
                onNavigate={handleNavigate}
                onLoginSuccess={handleLoginSuccess}
              />
            }
          />
          <Route
            path="/register"
            element={<RegisterPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/park-schedule"
            element={<ParkSchedulePage onNavigate={handleNavigate} />}
          />
          <Route
            path="/park-application"
            element={<ParkApplicationPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/map"
            element={<MapPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/catalog"
            element={<CatalogPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/kth-profile"
            element={<KTHProfilePage onNavigate={handleNavigate} />}
          />
          <Route
            path="/news"
            element={<NewsPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/news-detail/:newsId"
            element={<NewsDetailPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/regulation"
            element={<RegulationPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/rth-info"
            element={<RTHInfoPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/rth-detail/:articleId"
            element={<RTHDetailPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/rth-typology/:typology"
            element={<RTHTypologyDetailPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/rth-atap"
            element={<RTHAtapPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/rth-pekarangan"
            element={<RTHPekaranganPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/rth-lingkungan"
            element={<RTHLingkunganPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/tree-application"
            element={<TreePruningApplicationPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/seedling-application"
            element={<SeedlingApplicationPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/tree-fall-claim"
            element={<TreeFallClaimPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/account-profile"
            element={<AccountProfilePage onNavigate={handleNavigate} />}
          />
          <Route
            path="/cemetery-search"
            element={<CemeteryDataSearchPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/cemetery-availability"
            element={<CemeteryAvailabilityPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/struktur-organisasi"
            element={<StrukturOrganisasiPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/visi-misi"
            element={<VisiMisiPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/tugas-fungsi"
            element={<TugasFungsiPage onNavigate={handleNavigate} />}
          />
          <Route
            path="/sejarah"
            element={<SejarahPage onNavigate={handleNavigate} />}
          />

          {/* Rute fallback jika URL tidak ditemukan */}
          <Route
            path="*"
            element={<LandingPage onNavigate={handleNavigate} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    // Bungkus seluruh aplikasi dengan BrowserRouter
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
