import React, { useState } from 'react';
import { 
  Search, MapPin, Star, Calendar, Users, 
  BookOpen, Video, PlusCircle, ArrowRight, Filter, ChevronRight
} from 'lucide-react';

export default function App() {
  const [role, setRole] = useState('student'); // 'student' | 'educator'

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2D2D] font-sans antialiased pb-12">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b-2 border-dashed border-[#D1C7BD] px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#FF6B6B] rounded-full flex items-center justify-center font-black text-white text-xl shadow-sm transform -rotate-3 border-2 border-[#2D2D2D]">
            N
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-[#2D2D2D]">
            NonScholastic<span className="text-[#FF6B6B]">.</span>
          </span>
        </div>

        {/* Role Toggle Switch */}
        <div className="bg-[#EFEAE1] p-1 rounded-full flex items-center border-2 border-[#2D2D2D]">
          <button 
            onClick={() => setRole('student')}
            className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all ${
              role === 'student' ? 'bg-[#FF6B6B] text-white shadow-sm' : 'text-[#666]'
            }`}
          >
            Student View
          </button>
          <button 
            onClick={() => setRole('educator')}
            className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all ${
              role === 'educator' ? 'bg-[#4D96FF] text-white shadow-sm' : 'text-[#666]'
            }`}
          >
            Educator Dashboard
          </button>
        </div>
      </header>

      {/* 2. HERO SEARCH SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-8 pb-4">
        <div className="bg-[#FFFDF9] border-2 border-[#2D2D2D] rounded-2xl p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] relative overflow-hidden">
          <h1 className="text-3xl md:text-4xl font-black mb-2 text-[#2D2D2D]">
            {role === 'student' ? "Discover what you're good at 🎨" : "Educator Dashboard ✏️"}
          </h1>
          <p className="text-[#666] mb-6 font-medium text-sm md:text-base">
            {role === 'student' 
              ? "Find local workshops, offline classes, and passionate mentors near you." 
              : "Manage your listed classes, slots, recorded lessons, and active students."}
          </p>

          {role === 'student' && (
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-3.5 text-[#888] w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search dance, music, painting, photography..." 
                  className="w-full pl-11 pr-4 py-3 bg-[#F5F0E6] border-2 border-[#2D2D2D] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-[#F5F0E6] border-2 border-[#2D2D2D] rounded-xl text-sm font-bold hover:bg-[#EFEAE1]">
                  <MapPin className="w-4 h-4 text-[#FF6B6B]" /> Near Me
                </button>
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-[#FF6B6B] text-white border-2 border-[#2D2D2D] rounded-xl text-sm font-bold shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] hover:translate-y-0.5 transition-transform">
                  <Filter className="w-4 h-4" /> Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. MAIN DASHBOARD CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        {role === 'student' ? <StudentHomeView /> : <EducatorDashboardView />}
      </main>

    </div>
  );
}

/* ==========================================================================
   STUDENT HOMEPAGE VIEW
   ========================================================================== */
function StudentHomeView() {
  const categories = ["Performing Arts", "Music", "Sports", "Digital Art", "Crafts"];
  
  return (
    <div className="space-y-10">

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat, i) => (
          <button key={i} className="whitespace-nowrap px-4 py-2 bg-white border-2 border-[#2D2D2D] rounded-full text-xs font-bold shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] hover:bg-[#FFD93D] transition-colors">
            {cat}
          </button>
        ))}
      </div>

      {/* SECTION 1: Recommended Classes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-black flex items-center gap-2">
            ⭐ Recommended Classes
          </h2>
          <button className="text-xs font-bold text-[#FF6B6B] hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Dance 101: Dancing Basics", teacher: "Marie", rating: 4.9, mode: "Offline", fee: "₹100", tag: "Popular" },
            { title: "Guitar Chords for Beginners", teacher: "Alex Reed", rating: 4.8, mode: "Online", fee: "₹450", tag: "Best Seller" },
            { title: "Digital Art & Sketching", teacher: "Sonia K.", rating: 4.9, mode: "Online", fee: "₹600", tag: "New" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-[#2D2D2D] rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] hover:-translate-y-1 transition-all relative flex flex-col justify-between">
              <div>
                <span className="absolute top-3 right-3 bg-[#FFD93D] border border-[#2D2D2D] text-[10px] font-black px-2 py-0.5 rounded-md">
                  {item.tag}
                </span>
                <div className="h-32 bg-[#F5F0E6] rounded-lg border-2 border-dashed border-[#C4B8A5] mb-3 flex items-center justify-center font-bold text-[#888] text-xs">
                  [ Course Image ]
                </div>
                <h3 className="font-bold text-base mb-1 leading-snug">{item.title}</h3>
                <p className="text-xs text-[#666] mb-3 font-medium">By {item.teacher} • <span className="font-bold text-[#6C5CE7]">{item.mode}</span></p>
              </div>

              <div className="flex items-center justify-between border-t-2 border-dashed border-[#E0D8CC] pt-3 mt-2">
                <span className="flex items-center text-xs font-bold text-[#D97706]">
                  <Star className="w-3.5 h-3.5 fill-current mr-1" /> {item.rating}
                </span>
                <span className="font-black text-base">{item.fee}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Near Me Map Banner */}
      <section className="bg-[#6C5CE7]/10 border-2 border-[#2D2D2D] rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="bg-[#6C5CE7] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-[#2D2D2D]">
              Map Feature
            </span>
            <h2 className="text-xl md:text-2xl font-black mt-2 mb-1">Nearby Activities & Instructors</h2>
            <p className="text-xs md:text-sm text-[#555] max-w-md font-medium">
              Explore offline sessions happening within walking distance. View locations, slots, and join instant meetups.
            </p>
          </div>
          <button className="px-5 py-3 bg-[#6C5CE7] text-white font-bold text-sm border-2 border-[#2D2D2D] rounded-xl shadow-[3px_3px_0px_0px_rgba(45,45,45,1)] hover:bg-[#5B4BC4] transition-all whitespace-nowrap">
            Open Interactive Map 🗺️
          </button>
        </div>
      </section>

      {/* SECTION 3: Workshops & Community Get-Togethers */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-black flex items-center gap-2">
            🎉 Upcoming Workshops & Meetups
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Sunset Photography Walk", date: "Sat • 5:00 PM", spot: "8 slots left", type: "Community Walk" },
            { title: "Acoustic Jam & Music Session", date: "Sun • 3:00 PM", spot: "3 slots left", type: "Group Session" },
          ].map((ws, i) => (
            <div key={i} className="bg-[#FFFDF9] border-2 border-[#2D2D2D] rounded-xl p-5 flex items-center justify-between shadow-[3px_3px_0px_0px_rgba(45,45,45,1)]">
              <div>
                <span className="text-[10px] font-black text-[#FF6B6B] uppercase tracking-wider">{ws.type}</span>
                <h3 className="font-bold text-base leading-snug">{ws.title}</h3>
                <p className="text-xs text-[#666] mt-1 flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5" /> {ws.date}
                </p>
                <span className="inline-block mt-2 text-[10px] bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7] px-2 py-0.5 rounded-md font-bold">
                  {ws.spot}
                </span>
              </div>
              <button className="px-4 py-2 bg-[#FFD93D] text-[#2D2D2D] font-bold text-xs border-2 border-[#2D2D2D] rounded-lg shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] hover:bg-[#F4C414]">
                Register
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

/* ==========================================================================
   EDUCATOR DASHBOARD VIEW
   ========================================================================== */
function EducatorDashboardView() {
  return (
    <div className="space-y-8">
      
      {/* Quick Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Active Classes", val: "4", icon: BookOpen, color: "bg-[#FFD93D]" },
          { label: "Recorded Lessons", val: "12", icon: Video, color: "bg-[#6C5CE7]" },
          { label: "Total Students", val: "86", icon: Users, color: "bg-[#00B894]" },
          { label: "Upcoming Slots", val: "5", icon: Calendar, color: "bg-[#FF6B6B]" },
        ].map((stat, i) => (
          <div key={i} className="bg-white border-2 border-[#2D2D2D] rounded-xl p-4 shadow-[3px_3px_0px_0px_rgba(45,45,45,1)]">
            <div className={`w-8 h-8 ${stat.color} text-white rounded-lg border-2 border-[#2D2D2D] flex items-center justify-center mb-2`}>
              <stat.icon className="w-4 h-4 text-[#2D2D2D]" />
            </div>
            <p className="text-[10px] font-bold text-[#777] uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-black">{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Class Management Actions */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-[#D1C7BD] pb-4">
        <h2 className="text-xl font-black">My Active Classes</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#00B894] text-white font-bold text-xs border-2 border-[#2D2D2D] rounded-xl shadow-[2px_2px_0px_0px_rgba(45,45,45,1)] hover:bg-[#00A383]">
          <PlusCircle className="w-4 h-4" /> Add New Class
        </button>
      </div>

      {/* Class List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { 
            name: "Dance 101 — Dancing Basics", 
            category: "Performing Arts", 
            difficulty: "Easy", 
            duration: "1 Week", 
            fee: "₹100", 
            slots: "12 Available", 
            students: 24 
          },
          { 
            name: "Guitar Chords — Beginner Lesson", 
            category: "Music", 
            difficulty: "Beginner", 
            duration: "2 Weeks", 
            fee: "₹450", 
            slots: "5 Available", 
            students: 18 
          }
        ].map((cls, idx) => (
          <div key={idx} className="bg-white border-2 border-[#2D2D2D] rounded-xl p-5 shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold bg-[#F5F0E6] border border-[#2D2D2D] px-2 py-0.5 rounded-md uppercase">
                  {cls.category}
                </span>
                <span className="font-black text-base text-[#00B894]">{cls.fee}</span>
              </div>
              <h3 className="font-bold text-base mb-3 leading-snug">{cls.name}</h3>

              <div className="text-xs text-[#555] space-y-1.5 mb-4 bg-[#FFFDF9] p-3 rounded-lg border border-[#E0D8CC] font-medium">
                <p><strong>Difficulty:</strong> {cls.difficulty} | <strong>Duration:</strong> {cls.duration}</p>
                <p><strong>Slots:</strong> {cls.slots} | <strong>Enrolled:</strong> {cls.students} students</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-[#FFD93D] border-2 border-[#2D2D2D] text-xs font-bold rounded-lg shadow-[2px_2px_0px_0px_rgba(45,45,45,1)]">
                Edit Class
              </button>
              <button className="flex-1 py-2 bg-[#FF6B6B] text-white border-2 border-[#2D2D2D] text-xs font-bold rounded-lg shadow-[2px_2px_0px_0px_rgba(45,45,45,1)]">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}