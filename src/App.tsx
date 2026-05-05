/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Building2, 
  ChevronRight, 
  Download, 
  GraduationCap, 
  Globe, 
  TrendingUp, 
  Users, 
  Wallet, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  CalendarDays,
  Menu,
  X,
  PlaneTakeoff,
  Award,
  BookOpen
} from "lucide-react";
import { useState } from "react";
import { CURRICULUM_MODULES, FACULTY, PROGRAMME_DETAILS } from "./constants";

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Faculty", href: "#faculty" },
  { name: "Eligibility", href: "#eligibility" },
  { name: "Immersion", href: "#immersion" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark border-b border-white/10 shadow-xl backdrop-blur-md bg-opacity-95">
        <div className="container-custom flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-white tracking-widest uppercase">
              IIM Udaipur
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-secondary text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary text-on-secondary px-6 py-2.5 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-opacity-90 transition-all active:scale-95 shadow-lg">
              Apply Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-primary-dark border-t border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-secondary text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-secondary text-on-secondary w-full py-4 rounded-sm font-bold tracking-widest uppercase shadow-lg">
              Apply Now
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0uj0AE34Xx4M9Hbt8mNk3yzlL5WVIri11lt11gpqwp5I7wior2RNrBFyfgucMsxd2iTdmoiOw-lPjlX9rWvfrfZyUbNTXzvsSYj3SooeXfYWPpjZRGwwhusGXt1gQ29aeZOf38XngDPzkqnwPbWh7xdL4h_2myRf4PkHqrMn2v4iXSV_ICMigewXio36hQHYrVu6BZIjjE_1CVSygkxrJi8sTCTgSsi6KY8Qwa935zsYMI8ua5JU11WjyLRjTe_vztEQ8m-I_TmAkA"
            alt="IIM Udaipur Campus"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-transparent to-transparent"></div>
        </div>

        <div className="container-custom relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 rounded-sm">
                Executive Education
              </span>
              <p className="font-serif text-2xl italic tracking-wide text-white/90 mb-4">
                Defining the next generation of global CFOs
              </p>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-10">
                PG Certificate Programme for Global CFO Leadership
              </h1>
              
              <div className="grid grid-cols-2 gap-y-10 gap-x-8 border-t border-white/20 pt-10">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Starts On</p>
                  <p className="text-xl font-medium">{PROGRAMME_DETAILS.startDate}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Duration</p>
                  <p className="text-xl font-medium">{PROGRAMME_DETAILS.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Programme Fee</p>
                  <p className="text-xl font-medium">{PROGRAMME_DETAILS.fee}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Schedule</p>
                  <p className="text-xl font-medium">{PROGRAMME_DETAILS.schedule}</p>
                </div>
              </div>
            </motion.div>

            {/* Lead Capture Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-sm shadow-2xl relative"
            >
              <div className="absolute top-0 left-8 w-16 h-1 bg-secondary"></div>
              <h3 className="font-serif text-2xl font-bold text-primary-dark mb-8">
                Request Programme Brochure
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-on-surface uppercase tracking-widest mb-2">Full Name</label>
                  <input className="w-full border-outline-variant focus:ring-secondary focus:border-secondary px-4 py-3 text-sm outline-hidden transition-all bg-surface" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-on-surface uppercase tracking-widest mb-2">Work Email</label>
                  <input className="w-full border-outline-variant focus:ring-secondary focus:border-secondary px-4 py-3 text-sm outline-hidden transition-all bg-surface" placeholder="john.doe@company.com" type="email" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-on-surface uppercase tracking-widest mb-2">Phone Number</label>
                  <input className="w-full border-outline-variant focus:ring-secondary focus:border-secondary px-4 py-3 text-sm outline-hidden transition-all bg-surface" placeholder="+91 00000 00000" type="tel" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-on-surface uppercase tracking-widest mb-2">Professional Experience</label>
                  <select className="w-full border-outline-variant focus:ring-secondary focus:border-secondary px-4 py-3 text-sm outline-hidden transition-all bg-surface appearance-none">
                    <option>8-12 Years</option>
                    <option>12-15 Years</option>
                    <option>15+ Years</option>
                  </select>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 mt-4 tracking-widest uppercase text-xs hover:bg-primary-dark transition-all shadow-lg active:scale-95">
                  Download Brochure
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Trust & Navigation Bar */}
      <section className="bg-surface-container border-b border-outline-variant hidden md:block">
        <div className="container-custom py-6 flex justify-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-serif text-sm font-semibold text-primary tracking-widest uppercase hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>

      {/* Programme Overview */}
      <section id="overview" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-10">
              <h2 className="font-serif text-4xl font-bold leading-tight text-primary mb-6 max-w-2xl">
                Mastering the Modern CFO Paradigm: From Controllership to Strategic Stewardship
              </h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed italic">
                "The role of the CFO is no longer confined to the back office of financial reporting. Today, the CFO is a strategic partner to the CEO, driving digital transformation and long-term enterprise value."
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                The PG Certificate Programme for Global CFO Leadership at IIM Udaipur is meticulously designed for high-potential finance leaders ready to transition to visionary C-suite leadership. This programme bridges the gap between technical financial expertise and the visionary leadership required in the modern global landscape.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Through a blend of rigorous academic learning, case studies, and corporate interactions, you will gain the toolkit needed to influence board-level decision-making and lead through complexity.
              </p>
            </div>

            <div className="lg:col-span-5 bg-primary-dark text-white p-12 rounded-sm shadow-xl mt-4">
              <div className="flex gap-4 mb-6">
                <TrendingUp className="text-secondary" size={40} />
              </div>
              <h4 className="text-secondary font-bold tracking-widest uppercase text-xs mb-4">Market Insight</h4>
              <p className="font-serif text-4xl font-medium leading-tight mb-8">
                34% of outgoing CFOs moved into President or CEO roles in 2024.
              </p>
              <p className="text-white/60 text-sm italic">
                The pathway to organizational leadership increasingly goes through the finance office. Our programme prepares you for this critical evolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="section-padding bg-surface-container-low">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">Eligibility & Profile</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  Architecture for professionals destined for the highest levels of corporate leadership.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 border-t-4 border-primary shadow-sm space-y-4">
                  <div className="bg-surface p-3 w-fit rounded-sm text-primary">
                    <Users size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-primary">Work Experience</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Minimum 8 years of relevant professional experience in finance or related management functions.
                  </p>
                </div>
                
                <div className="bg-white p-8 border-t-4 border-secondary shadow-sm space-y-4">
                  <div className="bg-surface p-3 w-fit rounded-sm text-secondary">
                    <GraduationCap size={24} />
                  </div>
                  <h4 className="font-bold text-lg text-primary">Qualifications</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    A Bachelor's degree with strong academic record. Professional qualifications like CA/CFA/ICWA are preferred.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-outline-variant scale-100 group-hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZIRDTzbqfeZJShud4BzL-veiD1yjgSVFr4byGAxLMJJubknZc-JD9k8hXY60Wse6R6BPpNIasLiM5bfw4dPqbglcUmyAeFF-0fPL_vjMek94YRFCnevTo5seyvTK9TRQsfrvitdik5_sIqKcpyrgohHRPUbUDxJ8IlHzqdkBOV5lXb-A9BegYL4eYtWk_-s9wYTHmf8OBTXd3XE7P9Lyl6C0PUF7AlADbys0kHapQ6RTru3zzKfEoy28ARgdA9sy6jDMk2hZuWHBw"
                  alt="Executive Education"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Highlights */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-20 relative inline-block">
            Programme Highlights
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-secondary"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { icon: Clock, title: "06 Months Growth", text: "Rigorous, fast-track curriculum for busy professionals without academic compromise." },
              { icon: Wallet, title: "Full CFO Toolkit", text: "Modules covering Strategic Finance, Digital Transformation, and visionary leadership." },
              { icon: Globe, title: "Denmark Immersion", text: "3-Day international exposure at a global financial hub with corporate visits." },
              { icon: Award, title: "Executive Alumni", text: "Join the prestigious IIM Udaipur alumni network and gain lifelong institutional access." },
              { icon: Building2, title: "Top-Tier Faculty", text: "Learn from world-class professors with deep industry expertise and research focus." },
              { icon: Users, title: "CXO Mentorship", text: "Direct interaction with active CFOs and industry veterans via structured sessions." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-lg mb-3 text-primary tracking-tight">{item.title}</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Immersion */}
      <section id="immersion" className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Executive Excellence</span>
              <h2 className="font-serif text-5xl font-bold leading-tight">3-Day International Immersion in Denmark</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                The hub of Nordic finance leadership. This component brings the entire cohort together for in-person peer engagement, direct exposure to ESG-driven governance, and corporate site visits in Copenhagen.
              </p>
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="flex items-center gap-3">
                  <PlaneTakeoff className="text-secondary" />
                  <span className="font-medium">Corporate Visits</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-secondary" />
                  <span className="font-medium">Global Networking</span>
                </div>
              </div>
              <button className="bg-secondary text-on-secondary px-10 py-5 rounded-sm font-serif font-bold tracking-widest uppercase hover:scale-105 transition-all shadow-2xl">
                Learn More About Immersion
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uj0AE34Xx4M9Hbt8mNk3yzlL5WVIri11lt11gpqwp5I7wior2RNrBFyfgucMsxd2iTdmoiOw-lPjlX9rWvfrfZyUbNTXzvsSYj3SooeXfYWPpjZRGwwhusGXt1gQ29aeZOf38XngDPzkqnwPbWh7xdL4h_2myRf4PkHqrMn2v4iXSV_ICMigewXio36hQHYrVu6BZIjjE_1CVSygkxrJi8sTCTgSsi6KY8Qwa935zsYMI8ua5JU11WjyLRjTe_vztEQ8m-I_TmAkA"
                  alt="Global Hub"
                  className="w-full h-full object-cover blur-[2px] opacity-80"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <p className="font-serif text-3xl font-bold tracking-widest uppercase italic text-white/40 rotate-[-5deg]">Copenhagen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-5xl font-bold text-primary mb-6">In-Depth Curriculum</h2>
              <p className="text-on-surface-variant text-lg">A 360-degree approach to modern financial leadership, structured into nine specialized modules.</p>
            </div>
            <div className="text-secondary font-bold tracking-widest text-xs uppercase border-b-2 border-secondary pb-2">
              9 Intensive Modules
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant">
            {CURRICULUM_MODULES.map((module) => (
              <div key={module.id} className="p-10 border-r border-b border-outline-variant hover:bg-surface-container transition-all duration-300 group">
                <span className="text-[10px] font-bold text-secondary tracking-[0.2em] uppercase mb-4 block group-hover:translate-x-1 transition-transform">
                  Module {module.id}
                </span>
                <h4 className="font-serif font-bold text-xl mb-4 text-primary group-hover:text-primary-dark transition-colors">
                  {module.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="inline-flex items-center gap-3 border-2 border-secondary text-secondary px-10 py-5 rounded-sm font-serif font-bold tracking-widest uppercase hover:bg-secondary/5 transition-all text-sm">
              <Download size={20} />
              Download Detailed Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="section-padding bg-surface-container-low">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <h2 className="font-serif text-4xl font-bold text-primary">Earn Your Global Credentials</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Participants will be awarded the prestigious Post Graduate Certificate in Global CFO Leadership upon successful completion of the programme requirements.
              </p>
              
              <ul className="space-y-5">
                {[
                  "75% Minimum Attendance Requirement",
                  "Successful Completion of Capstone Project",
                  "Continuous Evaluation Framework Assessments"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-medium">
                    <CheckCircle2 className="text-secondary" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-6">
              <div className="bg-white p-8 shadow-2xl border border-outline-variant relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pattern-grid opacity-20"></div>
                <div className="aspect-[1.414/1] bg-white flex flex-col items-center justify-center border-[12px] border-double border-outline-variant p-8 md:p-12 relative z-10">
                  <div className="text-center font-serif">
                    <div className="text-3xl font-bold tracking-[.3em] text-primary mb-2">IIM UDAIPUR</div>
                    <div className="w-16 h-0.5 bg-secondary mx-auto mb-6"></div>
                    <div className="text-[10px] font-bold tracking-[.5em] uppercase text-on-surface-variant mb-10">Post Graduate Certificate</div>
                    <div className="text-on-surface-variant italic mb-10 leading-relaxed max-w-xs mx-auto">
                      This is to certify that the candidate has successfully completed the Global CFO Leadership Programme.
                    </div>
                    <div className="grid grid-cols-2 gap-12 mt-12 w-full pt-8 border-t border-outline-variant/30">
                      <div className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant">Programme Director</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant">Director, IIM Udaipur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl font-bold text-primary mb-6">Programme Directors</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {FACULTY.map((prof, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 bg-white p-8 border border-outline-variant group"
              >
                <div className="md:w-1/3 aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
                  <img src={prof.image} alt={prof.name} className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="md:w-2/3 space-y-4">
                  <h4 className="font-serif text-2xl font-bold text-primary">{prof.name}</h4>
                  <p className="text-secondary font-bold text-[10px] tracking-[.2em] uppercase">{prof.role}</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {prof.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Transformation Table */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">The Strategic Shift</h2>
            <p className="text-white/60 max-w-2xl mx-auto">This programme facilitates a powerful professional transition, equipping you for board-level stewardship.</p>
          </div>
          
          <div className="bg-white/5 rounded-sm overflow-hidden border border-white/10 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 bg-white/10 uppercase text-[10px] font-bold tracking-[.3em] py-6 px-8 border-b border-white/10">
              <div>Current Designation</div>
              <div>Target Leadership Role</div>
            </div>
            {[
              { current: "VP / AVP Finance", target: "Chief Financial Officer (CFO)" },
              { current: "Head of FP&A", target: "Group Finance Director" },
              { current: "Finance Controller", target: "Strategic Lead & CFO-designate" },
              { current: "Senior Consultant (Big 4)", target: "Finance Transformation Lead" }
            ].map((role, i) => (
              <div key={i} className="grid grid-cols-2 py-6 px-8 border-b border-white/10 hover:bg-white/5 transition-colors group">
                <div className="text-white/70 font-medium">{role.current}</div>
                <div className="text-secondary font-bold group-hover:translate-x-2 transition-transform">{role.target}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary-dark relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-12"
          >
            Ready to transition to the C-suite?
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-primary-dark px-12 py-5 rounded-sm font-bold tracking-widest uppercase hover:scale-105 transition-all shadow-2xl text-sm">
              Apply for Admission
            </button>
            <button className="bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-sm font-bold tracking-widest uppercase hover:bg-white/5 transition-all text-sm">
              Talk to an Advisor
            </button>
          </div>
          <p className="mt-8 text-white/40 text-xs uppercase tracking-widest">Limited Cohort Intake | Applications close soon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark border-t border-white/10 pt-20 pb-10 overflow-hidden">
        <div className="container-custom grid md:grid-cols-4 gap-16 items-start">
          <div className="md:col-span-2 space-y-8">
            <div className="font-serif text-2xl font-bold text-white tracking-widest uppercase">IIM UDAIPUR</div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              The Indian Institute of Management Udaipur is committed to building global business leaders through academic rigor, research excellence, and deep industry integration.
            </p>
            <div className="flex gap-4">
              {[Globe, Users, Wallet].map((Icon, i) => (
                <div key={i} className="p-2 border border-white/10 text-white/50 hover:text-secondary hover:border-secondary transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-secondary font-bold text-[10px] tracking-[.3em] uppercase">Quick Links</h5>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#faculty" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#eligibility" className="hover:text-white transition-colors">Eligibility</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-secondary font-bold text-[10px] tracking-[.3em] uppercase">Legal & Contact</h5>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campus Map</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container-custom mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">
            © 2026 IIM Udaipur. AACSB Accredited globally.
          </p>
          <div className="text-white/20 text-[10px] font-bold tracking-widest uppercase italic">
            Defining Global Leadership
          </div>
        </div>
      </footer>
    </div>
  );
}
