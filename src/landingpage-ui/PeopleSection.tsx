import { useState } from "react";
import { Reveal, SectionBg, SectionHeading } from "./atoms";
import {
  GraduationCap,
  Heart,
  Presentation,
  Building2,
  Users,
  Target,
  Calendar,
  TrendingUp,
  AlertCircle,
  Rocket,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

import studentImg from "../assets/webp dashboard images/approved screens/12th student dashboard.webp";
import parentImg from "../assets/webp dashboard images/approved screens/12th parent dashboard.webp";
import teacherImg from "../assets/webp dashboard images/approved screens/12th teacherdashboard.webp";
import managementImg from "../assets/webp dashboard images/approved screens/12th management dashboard.webp";

type TabId = "students" | "parents" | "teachers" | "management";

type FeatureItem = {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
};

type TabContent = {
  label: string;
  subtitle: string;
  roleTitle: string;
  kicker: string;
  desc: string;
  color: string;
  accentBg: string;
  icon: React.ComponentType<{ className?: string }>;
  features: FeatureItem[];
  image: string;
};

export function PeopleSection() {
  const [activeTab, setActiveTab] = useState<TabId>("students");

  const TABS: Record<TabId, TabContent> = {
    students: {
      label: "Students",
      subtitle: "Your learning journey",
      roleTitle: "Performance Insights",
      kicker: "Own Your Academic Journey",
      desc: "Visualize your progress across all subjects at a glance to identify areas of improvement and track your growth over time.",
      color: "#c97a3a",
      accentBg: "bg-[#c97a3a]/8",
      icon: GraduationCap,
      features: [
        {
          text: "Track subject-wise proficiency and average grades",
          icon: TrendingUp,
        },
        {
          text: "Identify specific topics for improvement",
          icon: Target,
        },
        {
          text: "View upcoming revision targets",
          icon: Calendar,
        },
      ],
      image: studentImg,
    },
    parents: {
      label: "Parents",
      subtitle: "Stay informed",
      roleTitle: "Attendance & Grades Tracking",
      kicker: "Stay Connected with Growth",
      desc: "Stay updated on your child's daily attendance and latest assessment scores in real-time, right from your portal.",
      color: "#3e5db0",
      accentBg: "bg-[#3e5db0]/8",
      icon: Heart,
      features: [
        {
          text: "Monitor daily attendance and absentee trends",
          icon: Calendar,
        },
        {
          text: "Access latest assessment results instantly",
          icon: TrendingUp,
        },
        {
          text: "Support learning with data-driven insights",
          icon: Heart,
        },
      ],
      image: parentImg,
    },
    teachers: {
      label: "Teachers",
      subtitle: "Empower teaching",
      roleTitle: "Classroom Performance Analytics",
      kicker: "Focus on Teaching, Not Admin",
      desc: "Monitor overall class performance and identify subjects or topics where students need the most support.",
      color: "#3a6b4a",
      accentBg: "bg-[#3a6b4a]/8",
      icon: Presentation,
      features: [
        {
          text: "View class-wide proficiency across topics",
          icon: Users,
        },
        {
          text: "Identify at-risk students for early intervention",
          icon: AlertCircle,
        },
        {
          text: "Analyze mock test and assessment scores",
          icon: TrendingUp,
        },
      ],
      image: teacherImg,
    },
    management: {
      label: "Management",
      subtitle: "Drive excellence",
      roleTitle: "School-wide Health Metrics",
      kicker: "Data-Backed Decision Making",
      desc: "Track overall institutional performance, from attendance trends to average GPA and parent satisfaction.",
      color: "#7a4ea1",
      accentBg: "bg-[#7a4ea1]/8",
      icon: Building2,
      features: [
        {
          text: "Monitor school-wide GPA and academic trends",
          icon: TrendingUp,
        },
        {
          text: "Analyze enrollment and attendance metrics",
          icon: Users,
        },
        {
          text: "Track parent satisfaction and engagement levels",
          icon: Heart,
        },
      ],
      image: managementImg,
    },
  };

  return (
    <SectionBg id="dashboards" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10 bg-[#fbfbfa]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="Role-Based Dashboards" align="center">
            <span className="relative inline-flex items-center gap-2">
              <span className="text-[#c97a3a]/80 text-[24px] select-none">✦</span>
              Four Dashboards. One Platform.
              <span className="text-[#c97a3a]/80 text-[24px] select-none">✦</span>
            </span>
          </SectionHeading>
          
          <Reveal delay={120}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/80 font-medium">
              Academic intelligence requires collaboration. Studiqs provides personalized workspaces tailored to the distinct needs of each member of your school community.
            </p>
          </Reveal>
        </div>

        {/* Unified Mockup App Dashboard Container */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-[#1a1a1a]/8 overflow-hidden bg-white/70 backdrop-blur-md shadow-[0_24px_50px_-20px_rgba(26,26,26,0.12)] items-stretch">
            
            {/* Dashboard Sidebar Navigation */}
            <div className="lg:col-span-3 bg-[#efeadd]/20 border-r border-[#1a1a1a]/6 p-5 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-2">
                <div className="px-3.5 py-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#2a2a2a]/45 uppercase font-bold">Role Workspace</span>
                </div>
                
                <div className="flex flex-col gap-2.5">
                  {Object.entries(TABS).map(([id, item]) => {
                    const active = activeTab === id;
                    const IconComponent = item.icon;
                    
                    return (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id as TabId)}
                        className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                          active 
                            ? "bg-white border-[#1a1a1a]/12 shadow-[0_4px_16px_-4px_rgba(26,26,26,0.08)] text-[#161616]" 
                            : "bg-transparent border-transparent text-[#2a2a2a]/75 hover:bg-white/30"
                        }`}
                        style={active ? { borderColor: `${item.color}35` } : {}}
                      >
                        <div className="flex items-center gap-3.5">
                          <div 
                            className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${active ? "scale-105" : "scale-100"}`}
                            style={{ 
                              backgroundColor: active ? `${item.color}15` : "rgba(26,26,26,0.04)",
                              color: item.color 
                            }}
                          >
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="font-display text-[15px] font-bold block leading-tight">
                              {item.label}
                            </span>
                            <span className="text-[11.5px] text-[#2a2a2a]/60 font-medium block mt-0.5">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <span 
                          className="font-mono text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shrink-0 transition-colors"
                          style={{
                            backgroundColor: active ? `${item.color}12` : "rgba(26,26,26,0.05)",
                            color: active ? item.color : "rgba(26,26,26,0.4)"
                          }}
                        >
                          {active ? "Active" : "Open"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Built for every role footer widget */}
              <div className="bg-gradient-to-br from-[#7a4ea1]/8 to-[#3e5db0]/8 border border-[#7a4ea1]/12 rounded-2xl p-4 flex items-center gap-3.5 shadow-[0_4px_12px_-4px_rgba(26,26,26,0.04)]">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#7a4ea1]/15 shadow-sm">
                  <Users className="h-5 w-5 text-[#7a4ea1]" />
                </div>
                <div>
                  <div className="font-display text-[13px] font-bold text-[#161616]">Built for every role.</div>
                  <div className="text-[11.5px] text-[#2a2a2a]/70 font-semibold mt-0.5">Better together.</div>
                </div>
              </div>
            </div>

            {/* Dashboard Main Workspace Area */}
            <div className="lg:col-span-9 p-6 sm:p-10 flex flex-col justify-center min-h-[450px]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center h-full">
                
                {/* Left Details Panel */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    <span 
                      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase font-bold bg-[#efeadd]/60 border border-[#1a1a1a]/8`} 
                      style={{ color: TABS[activeTab].color, backgroundColor: `${TABS[activeTab].color}10`, borderColor: `${TABS[activeTab].color}20` }}
                    >
                      {TABS[activeTab].kicker}
                    </span>
                    <h3 className="font-display text-[26px] sm:text-[30px] font-bold text-[#161616] mt-4 leading-tight">
                      {TABS[activeTab].roleTitle}
                    </h3>
                    <p className="mt-4 text-[14px] sm:text-[14.5px] leading-relaxed text-[#2a2a2a]/75 font-medium">
                      {TABS[activeTab].desc}
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {TABS[activeTab].features.map((feat, fIdx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div key={fIdx} className="flex items-center gap-3.5">
                          <div 
                            className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border"
                            style={{ 
                              backgroundColor: `${TABS[activeTab].color}08`, 
                              borderColor: `${TABS[activeTab].color}18`,
                              color: TABS[activeTab].color
                            }}
                          >
                            <FeatIcon className="h-4 w-4" />
                          </div>
                          <span className="text-[13.5px] text-[#2a2a2a]/85 font-semibold leading-snug">
                            {feat.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <button className="bg-[#161616] hover:bg-[#222222] text-white font-display text-[13px] font-bold px-5 py-3 rounded-xl transition duration-200 inline-flex items-center gap-2.5 shadow-sm border border-[#161616]/10 cursor-pointer">
                      <span>Explore {TABS[activeTab].label} Dashboard</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Right Inner Workspace Widget */}
                <div className="lg:col-span-8 flex items-center justify-center">
                  <div className="w-full relative rounded-none overflow-hidden shadow-[0_12px_40px_-15px_rgba(26,26,26,0.18)] border border-[#1a1a1a]/8 transition-all duration-300">
                    <img 
                      src={TABS[activeTab].image} 
                      alt={`${TABS[activeTab].label} Dashboard`} 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom Feature Highlights Panel */}
        <Reveal delay={300}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/60 border border-[#1a1a1a]/8 rounded-3xl p-6 sm:p-7 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(26,26,26,0.06)]">
            {/* Highlight 1 */}
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/15">
                <Rocket className="h-5.5 w-5.5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-display text-[13.5px] font-bold text-[#161616]">Personalized Insights</h4>
                <p className="text-[11.5px] text-[#2a2a2a]/70 leading-normal mt-0.5 font-medium">AI-powered insights tailored to your unique learning pattern.</p>
              </div>
            </div>
            
            {/* Highlight 2 */}
            <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l lg:border-t-0 lg:border-l border-[#1a1a1a]/8 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="h-11 w-11 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/15">
                <ShieldCheck className="h-5.5 w-5.5 text-green-600" />
              </div>
              <div>
                <h4 className="font-display text-[13.5px] font-bold text-[#161616]">Data You Can Trust</h4>
                <p className="text-[11.5px] text-[#2a2a2a]/70 leading-normal mt-0.5 font-medium">Secure, accurate and actionable data for better decisions.</p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-l border-[#1a1a1a]/8 pt-4 lg:pt-0 lg:pl-6">
              <div className="h-11 w-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/15">
                <Users className="h-5.5 w-5.5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-display text-[13.5px] font-bold text-[#161616]">Collaborative Growth</h4>
                <p className="text-[11.5px] text-[#2a2a2a]/70 leading-normal mt-0.5 font-medium">Bringing students, parents, teachers and management together.</p>
              </div>
            </div>

            {/* Highlight 4 */}
            <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-l border-[#1a1a1a]/8 pt-4 lg:pt-0 lg:pl-6">
              <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/15">
                <TrendingUp className="h-5.5 w-5.5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-display text-[13.5px] font-bold text-[#161616]">Track. Improve. Achieve.</h4>
                <p className="text-[11.5px] text-[#2a2a2a]/70 leading-normal mt-0.5 font-medium">Continuously track progress and achieve academic excellence.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionBg>
  );
}
