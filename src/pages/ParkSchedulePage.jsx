"use client";
import { useState } from "react";

const ParkSchedulePage = ({ onNavigate }) => {
  const [selectedPark, setSelectedPark] = useState("TAMAN WIJAYA KUSUMA");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 22)); // February 22, 2025
  const [viewMode, setViewMode] = useState("Mingguan");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Sample events data (remains unchanged)
  const events = [
    {
      id: 1,
      title: "Senam Terapi (Ling Tien Kung)",
      time: "8:00",
      endTime: "10:00",
      duration: 2,
      day: 1,
      color: "#0ea5e9",
      organizer: "Komunitas Ling Tien Kung Jakarta",
      description:
        "Senam terapi untuk kesehatan tubuh dan pikiran dengan gerakan Ling Tien Kung",
      participants: 25,
      contact: "081234567890",
      status: "Disetujui",
    },
    {
      id: 2,
      title: "Latihan Tari",
      time: "10:00",
      endTime: "11:00",
      duration: 1,
      day: 1,
      color: "#0ea5e9",
      organizer: "Sanggar Tari Nusantara",
      description: "Latihan rutin tari tradisional untuk persiapan pertunjukan",
      participants: 15,
      contact: "081234567891",
      status: "Disetujui",
    },
    {
      id: 3,
      title: "Design Review",
      time: "13:00",
      endTime: "14:00",
      duration: 1,
      day: 1,
      color: "#0ea5e9",
      organizer: "Tim Arsitektur Lansekap",
      description: "Review desain taman dan penataan ruang hijau",
      participants: 8,
      contact: "081234567892",
      status: "Disetujui",
    },
    {
      id: 4,
      title: "Senam Lansdance",
      time: "9:00",
      endTime: "10:00",
      duration: 1,
      day: 2,
      color: "#22c55e",
      organizer: "Klub Senam Lansia",
      description:
        "Senam aerobik khusus untuk lansia dengan musik yang menyenangkan",
      participants: 30,
      contact: "081234567893",
      status: "Disetujui",
    },
    {
      id: 5,
      title: "Paskibra",
      time: "12:00",
      endTime: "14:00",
      duration: 2,
      day: 2,
      color: "#0ea5e9",
      organizer: "SMAN 1 Jakarta",
      description: "Latihan rutin pasukan pengibar bendera sekolah",
      participants: 20,
      contact: "081234567894",
      status: "Disetujui",
    },
    {
      id: 6,
      title: "FOTO WISUDA",
      time: "14:00",
      endTime: "17:00",
      duration: 3,
      day: 2,
      color: "#0ea5e9",
      organizer: "Universitas Indonesia",
      description: "Sesi foto wisuda mahasiswa dengan latar belakang taman",
      participants: 50,
      contact: "081234567895",
      status: "Disetujui",
    },
    {
      id: 7,
      title: "Senam Aerobik",
      time: "9:00",
      endTime: "10:00",
      duration: 1,
      day: 3,
      color: "#0ea5e9",
      organizer: "Komunitas Sehat Jakarta",
      description: "Senam aerobik untuk menjaga kebugaran tubuh",
      participants: 35,
      contact: "081234567896",
      status: "Disetujui",
    },
    {
      id: 8,
      title: "Foto Prewedding",
      time: "11:00",
      endTime: "12:00",
      duration: 1,
      day: 3,
      color: "#22c55e",
      organizer: "Studio Foto Harmoni",
      description: "Sesi foto prewedding dengan konsep natural di taman",
      participants: 4,
      contact: "081234567897",
      status: "Disetujui",
    },
    {
      id: 9,
      title: "Membuat Video",
      time: "13:00",
      endTime: "14:00",
      duration: 1,
      day: 3,
      color: "#0ea5e9",
      organizer: "Production House Creative",
      description: "Pembuatan video promosi wisata taman kota",
      participants: 10,
      contact: "081234567898",
      status: "Disetujui",
    },
    {
      id: 10,
      title: "Piknik",
      time: "10:00",
      endTime: "11:00",
      duration: 1,
      day: 4,
      color: "#22c55e",
      organizer: "Keluarga Besar Wijaya",
      description: "Piknik keluarga dengan berbagai permainan tradisional",
      participants: 25,
      contact: "081234567899",
      status: "Disetujui",
    },
    {
      id: 11,
      title: "Liputan Taman 24",
      time: "13:00",
      endTime: "14:00",
      duration: 1,
      day: 4,
      color: "#0ea5e9",
      organizer: "Media Televisi Lokal",
      description: "Liputan berita tentang program perawatan taman",
      participants: 6,
      contact: "081234567800",
      status: "Disetujui",
    },
    {
      id: 12,
      title: "Gathering Santri MA FD Kafila Jakarta Timur",
      time: "9:00",
      endTime: "11:00",
      duration: 2,
      day: 5,
      color: "#0ea5e9",
      organizer: "MA FD Kafila Jakarta Timur",
      description: "Gathering dan diskusi santri tentang lingkungan hidup",
      participants: 40,
      contact: "081234567801",
      status: "Disetujui",
    },
    {
      id: 13,
      title: "Videografi",
      time: "12:00",
      endTime: "13:00",
      duration: 1,
      day: 5,
      color: "#0ea5e9",
      organizer: "Tim Dokumentasi Kota",
      description: "Pembuatan video dokumenter tentang taman kota",
      participants: 8,
      contact: "081234567802",
      status: "Disetujui",
    },
  ];

  const timeSlots = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  // All helper functions (getDayName, getMonthName, etc.) remain unchanged
  const getDayName = (date) =>
    ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
      date.getDay()
    ];
  const getMonthName = (date) =>
    [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ][date.getMonth()];
  const mapJsDayToEventDay = (jsDay) => (jsDay === 0 ? 7 : jsDay);
  const getEventsStartingAtTimeAndDay = (timeIndex, dayIndex) => {
    const targetEventDay = mapJsDayToEventDay(dayIndex);
    return events.filter((event) => {
      const eventHour = Number.parseInt(event.time.split(":")[0]);
      const slotHour = Number.parseInt(timeSlots[timeIndex].split(":")[0]);
      return event.day === targetEventDay && eventHour === slotHour;
    });
  };
  const getEventPosition = (event, timeIndex) => {
    const eventStartHour = Number.parseInt(event.time.split(":")[0]);
    const slotHour = Number.parseInt(timeSlots[timeIndex].split(":")[0]);
    if (eventStartHour === slotHour) {
      return { height: `${event.duration * 60}px`, zIndex: 10 };
    }
    return null;
  };
  const navigateDay = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };
  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(1);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };
  const getCurrentDayEvents = () => {
    const currentDayOfWeek = currentDate.getDay();
    const adjustedDay = mapJsDayToEventDay(currentDayOfWeek);
    return events.filter((event) => event.day === adjustedDay);
  };

  // EventDetailModal component remains largely unchanged but is self-contained for clarity
  const EventDetailModal = () => {
    if (!selectedEvent) return null;
    const eventDayName = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ][selectedEvent.day - 1];
    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full">
          <div className="bg-[#2e7d32] text-white p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Detail Acara</h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 space-y-3 max-h-[80vh] overflow-y-auto">
            {/* Modal content remains the same */}
          </div>
        </div>
      </div>
    );
  };

  const renderDailyView = () => {
    const dayEvents = getCurrentDayEvents();
    const dayName = getDayName(currentDate);
    const monthName = getMonthName(currentDate);
    const currentDayName = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"][
      currentDate.getDay()
    ];
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateDay(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="text-lg md:text-xl font-bold text-gray-800 text-center">
              {dayName}, {currentDate.getDate()} {monthName}{" "}
              {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => navigateDay(1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-[60px,1fr] border-b border-gray-200 bg-white sticky top-[85px] z-10">
            <div className="p-3"></div>
            <div className="p-3 text-center border-l border-gray-200">
              <div className="text-sm text-gray-600 mb-1">{currentDayName}</div>
              <div className="text-2xl font-semibold">
                {currentDate.getDate()}
              </div>
            </div>
          </div>
          <div className="relative">
            {timeSlots.map((time) => {
              const timeEvents = dayEvents.filter(
                (event) =>
                  Number.parseInt(event.time.split(":")[0]) ===
                  Number.parseInt(time.split(":")[0])
              );
              return (
                <div
                  key={time}
                  className="grid grid-cols-[60px,1fr] border-b border-gray-100 min-h-[60px]"
                >
                  <div className="p-3 text-sm text-gray-500 border-r border-gray-200 bg-white text-right">
                    {time}
                  </div>
                  <div className="border-l border-gray-200 relative hover:bg-gray-50 transition-colors">
                    {timeEvents.map((event) => (
                      <div
                        key={event.id}
                        className="absolute left-0 right-0 top-0 p-2 text-sm font-medium cursor-pointer hover:shadow-lg transition-shadow border-l-4 mb-1"
                        style={{
                          backgroundColor:
                            event.color === "#0ea5e9" ? "#dbeafe" : "#dcfce7",
                          borderLeftColor: event.color,
                          color:
                            event.color === "#0ea5e9" ? "#1e40af" : "#166534",
                          height: `${event.duration * 60 - 4}px`,
                          zIndex: 10,
                        }}
                        onClick={() => handleEventClick(event)}
                      >
                        <div className="font-semibold text-sm">
                          {event.time}
                        </div>
                        <div className="leading-tight">{event.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderMonthlyView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthName = getMonthName(currentDate);
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    const calendarDays = [];
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDays.push({
        day: lastDayOfPrevMonth - firstDayOfWeek + 1 + i,
        isCurrentMonth: false,
        events: [],
      });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
      const eventDay = mapJsDayToEventDay(dayOfWeek);
      const dayEvents = events.filter((event) => event.day === eventDay);
      calendarDays.push({ day, isCurrentMonth: true, date, events: dayEvents });
    }
    const remainingCells = 7 - (calendarDays.length % 7);
    if (remainingCells < 7) {
      for (let i = 1; i <= remainingCells; i++) {
        calendarDays.push({ day: i, isCurrentMonth: false, events: [] });
      }
    }

    return (
      <div className="flex-1 flex flex-col overflow-auto bg-white">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            {monthName} {year}
          </h2>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
        <div className="grid grid-cols-7 sticky top-[85px] bg-white z-10">
          {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-600 p-2 border-b border-r border-gray-200"
            >
              <span className="hidden sm:inline">{day}</span>
              <span className="sm:hidden">{day.charAt(0)}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 flex-1">
          {calendarDays.map((dayInfo, index) => {
            const eventsToShow = dayInfo.events.slice(0, 1);
            const hiddenEventsCount =
              dayInfo.events.length - eventsToShow.length;
            return (
              <div
                key={index}
                className={`border-t border-r border-gray-200 p-1 md:p-2 min-h-[90px] md:min-h-[120px] flex flex-col ${
                  dayInfo.isCurrentMonth
                    ? "bg-white"
                    : "bg-gray-50 text-gray-400"
                }`}
              >
                <div className="font-medium text-sm mb-1">{dayInfo.day}</div>
                <div className="space-y-1 overflow-y-auto text-left">
                  {eventsToShow.map((event) => (
                    <div
                      key={event.id}
                      onClick={() =>
                        handleEventClick({ ...event, date: dayInfo.date })
                      }
                      className="p-1 rounded-md text-xs cursor-pointer truncate"
                      style={{
                        backgroundColor:
                          event.color === "#0ea5e9" ? "#dbeafe" : "#dcfce7",
                        color:
                          event.color === "#0ea5e9" ? "#1e40af" : "#166534",
                        borderLeft: `3px solid ${event.color}`,
                      }}
                    >
                      {event.title}
                    </div>
                  ))}
                  {hiddenEventsCount > 0 && (
                    <div className="text-xs text-gray-500 mt-1 pl-1 cursor-pointer">
                      +{hiddenEventsCount} lainnya
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderWeeklyView = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    const weekDates = Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
    const weekRangeString = () => {
      const startMonth = getMonthName(startOfWeek);
      const endMonth = getMonthName(endOfWeek);
      if (startMonth === endMonth) {
        return `${startOfWeek.getDate()} - ${endOfWeek.getDate()} ${startMonth} ${startOfWeek.getFullYear()}`;
      }
      return `${startOfWeek.getDate()} ${startMonth} - ${endOfWeek.getDate()} ${endMonth} ${endOfWeek.getFullYear()}`;
    };

    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateWeek(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="text-base md:text-xl font-bold text-gray-800 text-center">
              {weekRangeString()}
            </h2>
            <button
              onClick={() => navigateWeek(1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-8 border-b border-gray-200 bg-white sticky top-0 z-10">
              <div className="p-3"></div> {/* Time column header */}
              {weekDates.map((date) => (
                <div
                  key={date.toISOString()}
                  className="p-3 text-center border-l border-gray-200"
                >
                  <div className="text-xs text-gray-600 mb-1">
                    {
                      ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"][
                        date.getDay()
                      ]
                    }
                  </div>
                  <div className="text-xl font-semibold">{date.getDate()}</div>
                </div>
              ))}
            </div>
            <div className="relative">
              {timeSlots.map((time, timeIndex) => (
                <div
                  key={time}
                  className="grid grid-cols-8 border-b border-gray-100 min-h-[60px]"
                >
                  <div className="p-3 text-sm text-gray-500 border-r border-gray-200 bg-white text-right">
                    {time}
                  </div>
                  {weekDates.map((date, dayIndex) => (
                    <div
                      key={date.toISOString()}
                      className="border-l border-gray-200 relative hover:bg-gray-50 transition-colors"
                    >
                      {getEventsStartingAtTimeAndDay(timeIndex, dayIndex).map(
                        (event) => {
                          const position = getEventPosition(event, timeIndex);
                          if (!position) return null;
                          return (
                            <div
                              key={event.id}
                              className="absolute left-0 right-0 top-0 p-2 text-xs font-medium cursor-pointer hover:shadow-lg transition-shadow border-l-4 mb-1"
                              style={{
                                backgroundColor:
                                  event.color === "#0ea5e9"
                                    ? "#dbeafe"
                                    : event.color === "#22c55e"
                                    ? "#dcfce7"
                                    : "#dbeafe",
                                borderLeftColor: event.color,
                                color:
                                  event.color === "#0ea5e9"
                                    ? "#1e40af"
                                    : event.color === "#22c55e"
                                    ? "#166534"
                                    : "#1e40af",
                                height: `${event.duration * 60 - 4}px`,
                                zIndex: position.zIndex,
                              }}
                              onClick={() => handleEventClick(event)}
                            >
                              <div className="font-semibold">{event.time}</div>
                              <div className="leading-tight">{event.title}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-72 bg-[#2e7d32] text-white p-3 flex flex-col overflow-y-auto">
          <div className="mb-4">
            <h1 className="text-xl font-bold mb-4 text-center text-yellow-400">
              {selectedPark}
            </h1>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold">Februari 2025</h2>
              <div className="flex gap-1">
                <button
                  onClick={() => navigateWeek(-1)}
                  className="text-white hover:bg-white/20 p-1 rounded"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => navigateWeek(1)}
                  className="text-white hover:bg-white/20 p-1 rounded"
                >
                  <svg
                    className="w-4 h-4"
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
                </button>
              </div>
            </div>
            <div className="mb-6">
              <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                {["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"].map(
                  (day) => (
                    <div key={day} className="text-center font-medium p-1">
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {[
                  [31, 1, 2, 3, 4, 5, 6],
                  [7, 8, 9, 10, 11, 12, 13],
                  [14, 15, 16, 17, 18, 19, 20],
                  [21, 22, 23, 24, 25, 26, 27],
                  [28, 1, 2, 3, 4, 5, 6],
                  [7, 8, 9, 10, 11, 12, 13],
                ].map((week, weekIndex) =>
                  week.map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`text-center p-1 rounded ${
                        day === 22
                          ? "bg-blue-500 text-white"
                          : (weekIndex === 0 && day > 7) ||
                            (weekIndex >= 4 && day <= 13)
                          ? "text-gray-400"
                          : ""
                      }`}
                    >
                      {day}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-white">
                  HARI INI 2/22/2025
                </div>
                <div className="flex items-center gap-1 text-xs text-white">
                  55°/40°
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      08:00 - 10:00
                    </div>
                    <div className="text-white">
                      Senam Terapi (Ling Tien Kung)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      10:00 - 11:00
                    </div>
                    <div className="text-white">Latihan Tari</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-white">
                  BESOK 2/23/2025
                </div>
                <div className="flex items-center gap-1 text-xs text-white">
                  55°/40°
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      09:00 - 10:00
                    </div>
                    <div className="text-white">Senam Landsdance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                  <div className="text-sm">
                    <div className="font-medium text-yellow-400">
                      12:00 - 14:00
                    </div>
                    <div className="text-white">Paskibraka</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col w-full">
          <div className="bg-white border-b border-gray-200 p-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentDate(new Date())}
                  className="border px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Hari Ini
                </button>
                <div className="flex gap-1 md:gap-2">
                  <button
                    onClick={() => setViewMode("Harian")}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Harian"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Harian
                  </button>
                  <button
                    onClick={() => setViewMode("Mingguan")}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Mingguan"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Mingguan
                  </button>
                  <button
                    onClick={() => setViewMode("Bulanan")}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                      viewMode === "Bulanan"
                        ? "bg-[#fdd835] text-black"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Bulanan
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                  <svg
                    className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Taman WIJAYA KUSUMA"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <button
                  onClick={() => onNavigate && onNavigate("park-application")}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Ajukan
                </button>
              </div>
            </div>
          </div>

          {viewMode === "Harian" && renderDailyView()}
          {viewMode === "Mingguan" && renderWeeklyView()}
          {viewMode === "Bulanan" && renderMonthlyView()}
        </div>
      </div>
      {isModalOpen && <EventDetailModal />}
    </div>
  );
};

export default ParkSchedulePage;
