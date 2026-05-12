import { useState } from "react";
import { 
  BrainCircuit, 
  Database, 
  LineChart, 
  Cpu, 
  Zap, 
  Activity, 
  Microscope, 
  Sliders, 
  Briefcase, 
  Terminal, 
  BookOpen,
  BarChart3,
  Eye,
  Layers,
  Cloud
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { usePortfolioData, useLanguage } from "@/context/LanguageContext";

const iconMap = {
  BrainCircuit,
  Database,
  LineChart,
  Cpu,
  Zap,
  Activity,
  BarChart3,
  Eye,
  Layers
};

// Highlights now pulled dynamically from portfolioData.personal.services

export const About = () => {
  const portfolioData = usePortfolioData();
  const { t, language } = useLanguage();
  const [activePerspective, setActivePerspective] = useState("official");

  const switcherModes = [
    { id: "official", label: t('perspective_official'), icon: Briefcase },
    { id: "tech", label: t('perspective_tech'), icon: Terminal },
    { id: "story", label: t('perspective_story'), icon: BookOpen },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-surface/20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer(0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Column - Story & Philosophy */}
          <div className="space-y-12">
            <motion.div variants={fadeIn("right", 0.1)}>
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase px-5 py-2 rounded-full glass border border-primary/20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
                {t('biography')}
              </span>
            </motion.div>

            <motion.div variants={fadeIn("right", 0.3)} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-foreground">
                {t('about_title') || 'Bridging Two Worlds.'}
              </h2>

              {/* Perspective Switcher UI */}
              <div className="flex gap-2 p-1.5 glass rounded-2xl w-fit">
                {switcherModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActivePerspective(mode.id)}
                    className={`relative px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group ${
                      activePerspective === mode.id ? "text-background" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {activePerspective === mode.id && (
                      <motion.div
                        layoutId="activePerspectiveBg"
                        className="absolute inset-0 bg-primary z-0 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <mode.icon size={12} className="relative z-10" />
                    <span className="relative z-10">{mode.label}</span>
                  </button>
                ))}
              </div>

              <div className="relative min-h-[160px] text-muted-foreground text-lg leading-relaxed max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activePerspective}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="whitespace-pre-line"
                  >
                    {portfolioData.personal.perspectives[activePerspective]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn("up", 0.5)}
              className="grid sm:grid-cols-2 gap-6"
            >
              {portfolioData.personal.services.slice(0, 4).map((service, idx) => {
                const Icon = iconMap[service.icon] || Activity;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/5 hover:border-primary/20 transition-all group">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                       <Icon className="text-primary w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{service.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">{service.description.substring(0, 60)}...</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Bento Grid Professional Visualization */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            className="relative"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[120px]">
              {/* Box 1: Large Image - Infrastructure */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-2 row-span-2 relative glass-strong rounded-3xl overflow-hidden border border-primary/20 group"
              >
                <img 
                  src="/cloud_infra.png" 
                  alt="Cloud Infrastructure" 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                   <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-1">
                      <Cloud size={14} />
                      Cloud Native
                   </div>
                   <div className="text-xl font-bold text-foreground">Infrastructure Architect</div>
                </div>
              </motion.div>

              {/* Box 2: Metric - Experience */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-highlight/10 flex flex-col justify-center items-center text-center group"
              >
                <div className="text-3xl font-black text-highlight group-hover:scale-110 transition-transform">3+</div>
                <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mt-1">Years Exp</div>
              </motion.div>

              {/* Box 3: Metric - Projects */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-primary/10 flex flex-col justify-center items-center text-center group"
              >
                <div className="text-3xl font-black text-primary group-hover:scale-110 transition-transform">50+</div>
                <div className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mt-1">Projects</div>
              </motion.div>

              {/* Box 4: Medium Image - Pipeline */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-2 row-span-1 relative glass-strong rounded-3xl overflow-hidden border border-highlight/20 group"
              >
                <img 
                  src="/devops_pipeline.png" 
                  alt="DevOps Pipeline" 
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-between px-8">
                   <div>
                      <div className="text-xs font-black text-highlight uppercase tracking-widest">CI/CD Mastery</div>
                      <div className="text-[9px] text-muted-foreground font-mono mt-1">Automated Workflows</div>
                   </div>
                   <Zap className="text-highlight animate-pulse" size={24} />
                </div>
              </motion.div>

              {/* Box 5: Status / Availability */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl border border-green-500/10 flex flex-col justify-center items-center text-center group"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mb-3" />
                <div className="text-[8px] font-black uppercase text-green-500 tracking-widest">Status</div>
                <div className="text-[10px] font-bold text-foreground mt-1">Ready for Hire</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
