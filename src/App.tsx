/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import SteelCycle from "./components/SteelCycle";
import ImpactCalculator from "./components/ImpactCalculator";
import DetailedReverseLogistics from "./components/DetailedReverseLogistics";
import { Recycle, Award, Flame, Zap, Shield, Sparkles, BookOpen, Clock, Heart, HelpCircle, Sun, Moon } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("arcelor-theme");
      if (stored) return stored === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("arcelor-theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${darkMode ? "bg-zinc-950 text-zinc-100" : "bg-gray-50 text-gray-900"}`} id="app-root-view">
      {/* Upper Brand Header */}
      <header className={`border-b sticky top-0 z-50 shadow-xs transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-100"}`} id="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5F00] flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-500/20">
              A
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-display font-extrabold tracking-tight text-lg md:text-xl transition-colors duration-300 ${darkMode ? "text-zinc-100" : "text-gray-900"}`}>
                  ArcelorMittal
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border transition-colors duration-300 ${darkMode ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/40" : "bg-emerald-50 text-emerald-700 border-emerald-100"}`}>
                  ESG
                </span>
              </div>
              <p className={`text-[11px] font-medium tracking-wide uppercase transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
                Inovação & Economia Circular
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className={`text-xs font-medium transition-colors duration-300 hidden sm:inline ${darkMode ? "text-zinc-400" : "text-gray-400"}`}>
              Portal de Educação Ambiental
            </span>
            
            {/* Real-time Theme Toggle Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none ${
                darkMode 
                  ? "bg-zinc-800 border-zinc-700 text-amber-500 hover:bg-zinc-700 hover:text-amber-400 shadow-inner" 
                  : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-gray-750 shadow-xs"
              }`}
              title={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
              id="theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full space-y-12">
        
        {/* Intro Hero Badge and Banner */}
        <section className={`rounded-2xl border p-6 md:p-10 transition-colors duration-300 relative overflow-hidden ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-100 shadow-xs"}`} id="hero-banner">
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-orange-500/5 to-transparent rounded-full pointer-events-none -mr-16 -mt-16" />
          
          <div className="max-w-3xl space-y-4 relative z-10 text-left">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300 ${darkMode ? "bg-orange-500/10 border-orange-500/20 text-orange-400" : "bg-gradient-to-r from-orange-550/10 to-transparent text-orange-700 border-orange-500/15"}`}>
              <Recycle className="w-3.5 h-3.5 text-[#FF5F00] animate-spin" style={{ animationDuration: '4s' }} />
              <span>Logística Reversa & Economia Circular</span>
            </div>
            
            <h1 className={`text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-tight transition-colors duration-300 ${darkMode ? "text-zinc-100" : "text-gray-950"}`}>
              Logística Reversa da <span className="text-[#FF5F00]">Sucata Metálica</span>
            </h1>
            
            <p className={`text-sm md:text-base leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-300" : "text-gray-650"}`}>
              Olá! Esta página interativa apresenta a <strong>Economia Circular do Aço</strong> da ArcelorMittal: o fluxo ordenado de captação de sucatas férreas, sua fusão ecológica e a conversão definitiva em novo aço verde de altíssimo valor de engenharia disponível para novas aplicações sustentáveis na sociedade.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors duration-300 ${darkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-gray-50 border-gray-100"}`}>
                <div className={`p-2 rounded-lg ${darkMode ? "bg-emerald-950/50 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <span className={`text-xs block font-medium ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>Fórmula Própria</span>
                  <span className={`text-xs font-bold ${darkMode ? "text-zinc-150" : "text-gray-900"}`}>100% Auditada</span>
                </div>
              </div>

              <div className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors duration-300 ${darkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-gray-50 border-gray-100"}`}>
                <div className={`p-2 rounded-lg ${darkMode ? "bg-orange-950/50 text-[#FF5F00]" : "bg-orange-50 text-[#FF5F00]"}`}>
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <span className={`text-xs block font-medium ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>Fusão Limpa</span>
                  <span className={`text-xs font-bold ${darkMode ? "text-zinc-150" : "text-gray-900"}`}>Fornos Elétricos (FEA)</span>
                </div>
              </div>

              <div className={`flex items-center gap-3 p-3.5 rounded-xl border transition-colors duration-300 ${darkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-gray-50 border-gray-100"}`}>
                <div className={`p-2 rounded-lg ${darkMode ? "bg-blue-950/50 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className={`text-xs block font-medium ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>Economia</span>
                  <span className={`text-xs font-bold ${darkMode ? "text-zinc-150" : "text-gray-900"}`}>75% menos energia</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. SECTION: The Steel Cycle */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          id="cycle-section-container"
        >
          <SteelCycle darkMode={darkMode} />
        </motion.section>

        {/* 2. SECTION: Impact Calculator */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          id="calculator-section-container"
        >
          <ImpactCalculator darkMode={darkMode} />
        </motion.section>

        {/* 3. SECTION: Detailed Reverse Logistics Information (New, expanded study section) */}
        <motion.section 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          id="detailed-logistics"
        >
          <DetailedReverseLogistics darkMode={darkMode} />
        </motion.section>

        {/* Supplemental contextual section on Scrap vs. Classic production */}
        <section className={`rounded-2xl p-6 md:p-8 text-left relative overflow-hidden border transition-all duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-[#18181B] border-slate-800 text-white"}`} id="environmental-context">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5F00]/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3.5">
              <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase bg-orange-950/40 px-2.5 py-1 rounded-full border border-orange-900/35">
                Metas Globais ESG
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold">
                Descarbonização da Siderurgia
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A ArcelorMittal está na vanguarda da neutralidade climática. O uso sistemático de sucata metálica qualificada reduz as emissões em níveis históricos.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="text-xs font-semibold text-gray-300">Rota Clássica Integrada</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Dependente da queima de carvão mineral e redução do minério bruto em altos-fornos. Emite em média <strong>1,8 a 2,2 toneladas de CO₂</strong> para cada tonelada de aço produzido.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-400">Rota Circular (Forno a Arco)</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Utiliza eletricidade para derreter sucatas metálicas pré-selecionadas. As emissões diminuem mais de 70%, gerando apenas cerca de <strong>0,3 a 0,5 toneladas de CO₂</strong> por tonelada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Area */}
      <footer className={`border-t py-6 text-center transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-100"}`} id="app-footer">
        <div className="max-w-7xl mx-auto px-4 text-xs">
          <div className={`flex justify-center items-center gap-2 font-semibold font-display transition-colors duration-300 ${darkMode ? "text-zinc-300" : "text-gray-500"}`}>
            <Shield className="w-3.5 h-3.5 text-[#FF5F00]" />
            <span>Portal de Sustentabilidade - Gestão e Logística de Resíduos Industriais</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
