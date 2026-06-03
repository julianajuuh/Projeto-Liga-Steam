import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Truck, Layers, FlameKindling, CheckCircle, ArrowRight, RefreshCw, Info } from "lucide-react";
import { STAGES_DATA } from "../data";
import { CycleStep } from "../types";

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Truck: Truck,
  Layers: Layers,
  FlameKindling: FlameKindling,
  CheckCircle: CheckCircle,
};

interface SteelCycleProps {
  darkMode?: boolean;
}

export default function SteelCycle({ darkMode = false }: SteelCycleProps) {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage = STAGES_DATA.find((s) => s.id === activeStageId) || STAGES_DATA[0];

  return (
    <div className={`rounded-2xl border p-6 md:p-8 transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800 text-zinc-100 shadow-none" : "bg-white border-gray-100 shadow-sm text-gray-900"}`} id="steel-cycle-container">
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 mb-8 transition-colors duration-300 ${darkMode ? "border-zinc-800" : "border-gray-100"}`}>
        <div>
          <span className={`text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full transition-colors duration-300 ${darkMode ? "bg-orange-950/40 text-orange-450" : "bg-orange-50 text-orange-600"}`}>
            Economia Circular
          </span>
          <h2 className={`text-2xl md:text-3xl font-display font-semibold mt-2 transition-colors duration-300 ${darkMode ? "text-zinc-100" : "text-gray-950"}`}>
            O Ciclo de Logística Reversa do Aço
          </h2>
          <p className={`text-sm mt-1 transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
            Veja como transformamos descartes ferrosos em novos produtos de alto padrão ArcelorMittal.
          </p>
        </div>
        <div className={`flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg self-start md:self-center transition-colors duration-300 ${darkMode ? "text-zinc-400 bg-zinc-950/50" : "text-gray-500 bg-gray-50"}`}>
          <RefreshCw className="w-3.5 h-3.5 text-orange-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Fluxo Infinito e Reciclável</span>
        </div>
      </div>

      {/* Steps Row (Horizontal on Large Screens, Vertical/Grid on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative">
        {STAGES_DATA.map((stage, idx) => {
          const IconComponent = IconMap[stage.icon] || Info;
          const isActive = stage.id === activeStageId;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`relative flex flex-col p-5 rounded-xl border text-left transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${
                isActive
                  ? darkMode ? "bg-zinc-800 border-orange-550/60 text-white shadow-lg shadow-orange-550/5" : "bg-slate-900 border-slate-900 text-white shadow-md shadow-gray-200"
                  : darkMode ? "bg-zinc-950/50 border-zinc-800 hover:border-orange-500/30 hover:bg-zinc-900/40 text-zinc-300" : "bg-gray-50/50 border-gray-200 hover:border-orange-200 hover:bg-orange-50/10 text-gray-800"
              }`}
              id={`step-card-${stage.id}`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded-md transition-colors duration-300 ${
                    isActive ? "bg-orange-600/30 text-orange-400 font-semibold" : darkMode ? "bg-zinc-800 text-zinc-400" : "bg-gray-200/60 text-gray-655"
                  }`}
                >
                  Etapa 0{stage.id}
                </span>
                
                {/* Visual Connector for continuous flow */}
                {idx < 3 && (
                  <div className={`hidden lg:flex items-center absolute -right-3 top-1/2 -translate-y-1/2 z-10 pointer-events-none transition-colors duration-300 ${darkMode ? "text-zinc-700" : "text-gray-300"}`}>
                    <ArrowRight className="w-4 h-4 animate-pulse" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded-lg transition-all duration-300 group-hover:scale-105 ${
                    isActive ? "bg-orange-600 text-white" : darkMode ? "bg-zinc-900 border border-zinc-800 text-orange-500 shadow-sm" : "bg-white border border-gray-200 text-orange-600 shadow-sm"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-sm leading-tight group-hover:text-amber-500 transition-colors">
                    {stage.title.split(". ")[1]}
                  </h3>
                  <p className={`text-xs mt-0.5 transition-colors duration-300 ${isActive ? "text-gray-300" : darkMode ? "text-zinc-500" : "text-gray-400"}`}>
                    {stage.badge}
                  </p>
                </div>
              </div>

              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-0 left-4 right-4 h-1 bg-orange-600 rounded-t-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStageId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`rounded-xl border p-6 md:p-8 transition-colors duration-300 ${darkMode ? "bg-zinc-950/80 border-zinc-800/80" : "bg-gray-50 border-gray-100"}`}
          id="stage-details-widget"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className={`text-xs font-mono font-semibold uppercase px-2.5 py-1 rounded-md transition-colors duration-300 ${darkMode ? "text-orange-400 bg-orange-950/40 border border-orange-900/35" : "text-orange-600 bg-orange-50"}`}>
                Fase Ativa: {activeStage.phase}
              </span>
              <h3 className={`text-xl md:text-2xl font-display font-semibold mt-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>
                {activeStage.title}
              </h3>
              <p className={`leading-relaxed text-sm md:text-base transition-colors duration-300 ${darkMode ? "text-zinc-300" : "text-gray-650"}`}>
                {activeStage.description}
              </p>
              
              <div className={`flex items-center gap-3 p-3.5 rounded-lg border text-xs transition-colors duration-300 ${darkMode ? "bg-orange-500/5 border-orange-500/10 text-orange-300" : "bg-orange-500/5 border-orange-500/10 text-orange-800"}`}>
                <Info className="w-4 h-4 text-orange-600 flex-shrink-0" />
                <span>
                  Esta etapa garante conformidade com padrões globais de economia circular e descarbonização industrial.
                </span>
              </div>
            </div>

            <div className={`lg:col-span-7 rounded-xl border p-5 md:p-6 shadow-sm transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200/55"}`}>
              <span className={`text-xs font-semibold uppercase tracking-wider block mb-4 transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
                Como Funciona na Prática:
              </span>
              <ul className="space-y-3.5">
                {activeStage.details.map((detail, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-start gap-3.5 text-sm"
                  >
                    <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold mt-0.5 border transition-all duration-300 ${darkMode ? "bg-emerald-950/50 text-emerald-400 border-emerald-900/40" : "bg-emerald-50 text-emerald-600 border-emerald-200"}`}>
                      ✓
                    </span>
                    <span className={`leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-300" : "text-gray-750"}`}>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
