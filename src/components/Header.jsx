"use client";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Impor Link dan NavLink
import { useLocation } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  const toggleSubmenu = (name) => {
    setExpandedSubmenu((prev) => (prev === name ? null : name));
  };

  const navLinks = [
    { name: "Beranda", path: "/" },
    {
      name: "Layanan",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Informasi Pemakaman",
          children: [
            { name: "Cek Data Makam", path: "/cemetery-search" },
            {
              name: "Ketersediaan Petak Makam",
              path: "/cemetery-availability",
            },
            { name: "Penanganan Jenazah Terlantar", path: "/corpse-handling" },
          ],
        },
        {
          name: "Pertamanan dan Kehutanan",
          children: [
            { name: "Jadwal Penggunaan Taman", path: "/park-schedule" },
            { name: "Profil Kelompok Tani Hutan (KTH)", path: "/kth-profile" },
            { name: "Katalog Produk KTH", path: "/catalog" },
            {
              name: "E-Book Panduan Teknis",
              path: "/files/ebook.pdf",
              target: "_blank",
            },
          ],
        },
        {
          name: "Permohonan",
          children: [
            { name: "Permohonan Bibit Tanaman", path: "/seedling-application" },
            { name: "Permohonan Pemangkasan Pohon", path: "/tree-application" },
            { name: "Santunan Pohon Tumbang", path: "/tree-fall-claim" },
          ],
        },
        { name: "Peta TPU & RTH", path: "/map" },
      ],
    },
    {
      name: "Berita dan Informasi",
      hasDropdown: true,
      dropdownItems: [
        { name: "Berita", path: "/news" },
        { name: "Informasi RTH", path: "/rth-info" },
      ],
    },
    { name: "Dasar Hukum", path: "/regulation" },
    {
      name: "Tentang Kami",
      hasDropdown: true,
      dropdownItems: [
        { name: "Struktur Organisasi", path: "/struktur-organisasi" },
        { name: "Visi & Misi", path: "/visi-misi" },
        { name: "Tujuan Pokok dan Fungsi", path: "/tugas-fungsi" },
        { name: "Sejarah", path: "/sejarah" },
      ],
    },
  ];

  const handleLinkClick = (e, action) => {
    if (action) {
      e.preventDefault();
      onNavigate(action);
      setActiveMenu("Layanan");
    }
    setServicesDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleTopNavClick = (e, name, action) => {
    if (action) {
      e.preventDefault();
      onNavigate(action);
    }
    setActiveMenu(name);
    setServicesDropdownOpen(false);
    setProfileDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Fungsi untuk menutup semua menu/dropdown
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setProfileDropdownOpen(false);
    setExpandedSubmenu(null);
  };

  const handleLogoutClick = () => {
    onLogout();
    closeAllMenus();
  };

  // Fungsi render untuk link, agar tidak duplikat kode
  const renderLink = (link, isMobile = false) => {
    // Untuk link biasa, gunakan NavLink
    return (
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `text-sm transition ${isMobile ? "block py-2" : ""} ${
            isActive
              ? "text-green-800 font-semibold"
              : "text-gray-600 hover:text-green-800"
          }`
        }
        onClick={closeAllMenus}
      >
        {link.name}
      </NavLink>
    );
  };

  const location = useLocation();

   return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <nav className="max-w-screen-xl w-full mx-auto px-8 py-2 flex justify-between items-center">
        <Link to="/" onClick={closeAllMenus} className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Logo DKI" className="h-10" />
          <span className="text-base font-semibold text-gray-800">
            Dinas Pertamanan dan Pemakaman DKI Jakarta
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-5">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div>
                  <button
                    className={`text-sm transition flex items-center ${
                      openDropdown === link.name ||
                      (link.dropdownItems &&
                        link.dropdownItems.some((item) =>
                          item.path
                            ? location.pathname.startsWith(item.path)
                            : item.children?.some((sub) =>
                                location.pathname.startsWith(sub.path)
                              )
                        ))
                        ? "text-green-800 font-semibold"
                        : "text-gray-600 hover:text-green-800"
                    }`}
                    onClick={() => {
                      setOpenDropdown((prev) => (prev === link.name ? null : link.name));
                    }}
                  >
                    {link.name}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 py-2 min-w-max">
                      {link.dropdownItems.map((item) =>
                        item.children ? (
                          <div key={item.name} className="px-4">
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="flex justify-between items-center w-full text-left text-sm text-gray-700 hover:text-green-700 py-2"
                            >
                              {item.name}
                              <svg
                                className={`w-4 h-4 transform transition-transform ${
                                  expandedSubmenu === item.name ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            {expandedSubmenu === item.name && (
                              <div className="pl-4 pb-2">
                                {item.children.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="block py-1 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded px-2"
                                    onClick={closeAllMenus}
                                    target={sub.target}
                                    rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                            onClick={closeAllMenus}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                renderLink(link)
              )}
            </div>
          ))}

          {!isLoggedIn ? (
            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 rounded-md text-sm font-medium"
              onClick={closeAllMenus}
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-green-700 text-white hover:bg-green-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/account-profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={closeAllMenus}
                    >
                      Profil
                    </Link>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden px-6 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm`}>
        {navLinks.map((link) => (
          <div key={link.name} className="border-b border-gray-200 py-2">
            {link.hasDropdown ? (
              <div>
                <button
                  onClick={() => toggleSubmenu(link.name)}
                  className="w-full text-left text-gray-800 font-medium flex justify-between items-center"
                >
                  {link.name}
                  <span>{expandedSubmenu === link.name ? "-" : "+"}</span>
                </button>
                {expandedSubmenu === link.name && (
                  <div className="ml-4 mt-1">
                    {link.dropdownItems.map((item) =>
                      item.children ? (
                        <div key={item.name} className="mb-2">
                          <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                          <div className="ml-2">
                            {item.children.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="block text-sm text-gray-600 py-1 hover:text-green-700"
                                onClick={closeAllMenus}
                                target={sub.target}
                                rel={sub.target === "_blank" ? "noopener noreferrer" : undefined}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block text-sm text-gray-600 py-1 hover:text-green-700"
                          onClick={closeAllMenus}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              renderLink(link, true)
            )}
          </div>
        ))}
        <div className="mt-4">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="block bg-green-700 hover:bg-green-800 text-white text-center px-3 py-2 rounded-md text-sm font-medium"
              onClick={closeAllMenus}
            >
              Login
            </Link>
          ) : (
            <div className="text-sm text-gray-700">
              <Link
                to="/account-profile"
                className="block py-2 hover:text-green-700"
                onClick={closeAllMenus}
              >
                Profil
              </Link>
              <button
                onClick={handleLogoutClick}
                className="block w-full text-left py-2 hover:text-green-700"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
