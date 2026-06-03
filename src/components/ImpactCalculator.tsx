import React, { useState, useEffect } from "react";
import { calcularImpactoSucata } from "../data";
import { ImpactResults } from "../types";
import { Leaf, Zap, Droplet, ArrowRight, BookOpen, AlertCircle, Info, Landmark } from "lucide-react";

interface ImpactCalculatorProps {
  darkMode?: boolean;
}

export default function ImpactCalculator({ darkMode = false }: ImpactCalculatorProps) {
  const [weightInput, setWeightInput] = useState<string>("10");
  const [showFormulaDetails, setShowFormulaDetails] = useState<boolean>(false);

  const numericWeight = parseFloat(weightInput);
  const validWeight = isNaN(numericWeight) || numericWeight < 0 ? 0 : numericWeight;
  const results = calcularImpactoSucata(validWeight);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeightInput(e.target.value);
  };

  const handleQuickPreset = (value: number) => {
    setWeightInput(value.toString());
  };

  return (
    <div className={`rounded-2xl border p-6 md:p-8 transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800 text-zinc-100 shadow-none" : "bg-white border-gray-100 shadow-sm"}`} id="impact-calculator-root">
      {/* Header */}
      <div className={`border-b pb-5 mb-6 transition-colors duration-300 ${darkMode ? "border-zinc-800" : "border-gray-100"}`}>
        <span className={`text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full transition-colors duration-300 ${darkMode ? "bg-emerald-950/40 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}>
          Simulador Interativo
        </span>
        <h2 className={`text-2xl md:text-3xl font-display font-semibold mt-2 transition-colors duration-300 ${darkMode ? "text-zinc-100" : "text-gray-950"}`}>
          Calculadora de Impacto Ecológico da Sucata
        </h2>
        <p className={`text-sm mt-1 transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
          Simule o ganho socioambiental obtido pela reciclagem e reinserção de sucata metálica no ciclo produtivo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Input Section */}
        <div className="lg:col-span-4 space-y-6">
          <div className={`border rounded-xl p-5 transition-colors duration-300 ${darkMode ? "bg-zinc-950 border-zinc-800" : "bg-slate-50 border-gray-200/60"}`}>
            <label htmlFor="scrap-weight-input" className={`block text-sm font-medium mb-1 transition-colors duration-300 ${darkMode ? "text-zinc-200" : "text-gray-800"}`}>
              Quantidade de Sucata (em Toneladas)
            </label>
            <p className={`text-xs mb-4 transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
              Insira o peso estimado da sucata metálica para calcular os benefícios.
            </p>
            
            <div className="relative rounded-lg shadow-sm">
              <input
                type="number"
                name="scrap-weight"
                id="scrap-weight-input"
                min="0"
                step="any"
                value={weightInput}
                onChange={handleInputChange}
                className={`w-full border rounded-lg px-4 py-3.5 text-lg font-semibold focus:border-orange-500 focus:ring-4 focus:ring-orange-550/10 placeholder-gray-300 outline-none transition-all pr-14 ${darkMode ? "bg-zinc-900 border-zinc-700 text-zinc-100" : "bg-white border-gray-300 text-gray-950"}`}
                placeholder="Ex: 10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <span className={`font-medium text-sm transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>tons</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="mt-5">
              <span className={`text-[11px] font-semibold uppercase tracking-wider block mb-2 transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
                Atalhos Rápidos:
              </span>
              <div className="flex flex-wrap gap-2">
                {[1, 5, 25, 100].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleQuickPreset(preset)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors border ${
                      numericWeight === preset
                        ? "bg-orange-600 text-white border-orange-600"
                        : darkMode 
                          ? "bg-zinc-900 text-zinc-350 border-zinc-800 hover:bg-zinc-800" 
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {preset} t
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reference panel */}
          <div className={`border rounded-xl p-5 text-xs space-y-3 transition-colors duration-300 ${darkMode ? "bg-orange-950/20 border-orange-955 border-orange-950/30 text-orange-200" : "bg-orange-50 border-orange-100/60 text-gray-750"}`}>
            <div className={`flex items-center gap-2 font-semibold transition-colors duration-300 ${darkMode ? "text-orange-450" : "text-orange-800"}`}>
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>Contexto Científico</span>
            </div>
            <p className="leading-relaxed">
              O aço é o material mais reciclável do planeta! Ele pode ser refundido repetidamente sem perder uma única propriedade de durabilidade e resistência mecânica.
            </p>
            <button
              onClick={() => setShowFormulaDetails(!showFormulaDetails)}
              className={`font-semibold inline-flex items-center gap-1 hover:underline cursor-pointer transition-colors duration-300 ${darkMode ? "text-orange-400" : "text-orange-600"}`}
            >
              {showFormulaDetails ? "Ocultar memorial de cálculo" : "Ver detalhamento das equações"}
              <ArrowRight className={`w-3 h-3 transition-transform ${showFormulaDetails ? "rotate-90" : ""}`} />
            </button>
          </div>
        </div>

        {/* Right Output Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Metric 1: CO2 Avoided */}
            <div className={`border rounded-xl p-5 transition-all text-left ${darkMode ? "bg-zinc-950/50 hover:bg-zinc-950/80 border-emerald-950/30" : "bg-emerald-50/40 hover:bg-emerald-50/70 border-emerald-100/60"}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-emerald-500 text-white rounded-lg">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded transition-colors duration-300 ${darkMode ? "bg-emerald-950/60 text-emerald-400" : "bg-emerald-100 text-emerald-800"}`}>
                  Atmosfera Livre
                </span>
              </div>
              <span className={`text-xs font-medium block transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-500"}`}>CO₂ Evitado</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-emerald-600 block mt-1">
                {results.co2.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} t
              </span>
              <p className={`text-xs mt-2.5 leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-650"}`}>
                De gás carbônico poupado das emissões globais atmosféricas.
              </p>
            </div>

            {/* Metric 2: Energy Saved */}
            <div className={`border rounded-xl p-5 transition-all text-left ${darkMode ? "bg-zinc-950/50 hover:bg-zinc-950/80 border-emerald-950/30" : "bg-emerald-50/40 hover:bg-emerald-50/70 border-emerald-100/60"}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-emerald-500 text-white rounded-lg">
                  <Zap className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded transition-colors duration-300 ${darkMode ? "bg-emerald-950/60 text-emerald-400" : "bg-emerald-100 text-emerald-800"}`}>
                  Rede Elétrica
                </span>
              </div>
              <span className={`text-xs font-medium block transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-500"}`}>Energia Economizada</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-emerald-600 block mt-1">
                {results.energyKwh.toLocaleString("pt-BR")} kWh
              </span>
              <p className={`text-xs mt-2.5 leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-650"}`}>
                Suficiente para abastecer <strong className={`font-semibold ${darkMode ? "text-emerald-400" : "text-emerald-700"}`}>{results.homesCount.toLocaleString("pt-BR")} residências</strong> brasileiras típicas por um mês.
              </p>
            </div>

            {/* Metric 3: Water Saved */}
            <div className={`border rounded-xl p-5 transition-all text-left ${darkMode ? "bg-zinc-950/50 hover:bg-zinc-950/80 border-emerald-950/30" : "bg-emerald-50/40 hover:bg-emerald-50/70 border-emerald-100/60"}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-emerald-500 text-white rounded-lg">
                  <Droplet className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded transition-colors duration-300 ${darkMode ? "bg-emerald-950/60 text-emerald-400" : "bg-emerald-100 text-emerald-800"}`}>
                  Recurso Hídrico
                </span>
              </div>
              <span className={`text-xs font-medium block transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-500"}`}>Água Preservada</span>
              <span className="text-2xl md:text-3xl font-display font-bold text-emerald-600 block mt-1">
                {results.waterLitres.toLocaleString("pt-BR")} L
              </span>
              <p className={`text-xs mt-2.5 leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-650"}`}>
                De água pura preservada de processos industriais clássicos de resfriamento.
              </p>
            </div>

          </div>

          {/* Secondary resource extraction savings */}
          <div className={`border rounded-xl p-5 md:p-6 text-left transition-colors duration-300 ${darkMode ? "bg-zinc-950/40 border-zinc-800" : "bg-gray-50 border-gray-200/80"}`}>
            <h4 className={`text-xs font-semibold uppercase tracking-widest block mb-4 flex items-center gap-2 transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
              <Landmark className="w-3.5 h-3.5 text-gray-500" />
              Preservação Adicional de Recursos Naturais Sólidos
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`border rounded-lg p-3.5 flex items-center justify-between transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-150"}`}>
                <div>
                  <span className={`text-xs block transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>Minério de Ferro no Solo</span>
                  <span className={`text-lg font-bold block mt-0.5 transition-colors duration-300 ${darkMode ? "text-zinc-200" : "text-gray-800"}`}>
                    {results.ironOreSaved.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} toneladas
                  </span>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded transition-colors duration-300 ${darkMode ? "text-orange-400 bg-orange-950/40" : "text-orange-600 bg-orange-50"}`}>
                  Não minerado
                </span>
              </div>

              <div className={`border rounded-lg p-3.5 flex items-center justify-between transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-150"}`}>
                <div>
                  <span className={`text-xs block transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>Carvão Mineral Poupado</span>
                  <span className={`text-lg font-bold block mt-0.5 transition-colors duration-300 ${darkMode ? "text-zinc-200" : "text-gray-800"}`}>
                    {results.coalSaved.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} toneladas
                  </span>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded transition-colors duration-300 ${darkMode ? "text-orange-400 bg-orange-950/40" : "text-orange-600 bg-orange-50"}`}>
                  Combustão evitada
                </span>
              </div>
            </div>
            <div className={`flex gap-2 items-start mt-4 text-[11px] transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
              <AlertCircle className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
              <span>
                Esses recursos de mineração bruta são preservados de maneira definitiva, reduzindo de forma imediata o desmatamento nas áreas de extração geológica de jazidas.
              </span>
            </div>
          </div>

          {/* Equation Breakdown Box */}
          {showFormulaDetails && (
            <div className="bg-slate-900 text-gray-100 rounded-xl p-5 md:p-6 font-sans text-xs overflow-x-auto border border-slate-800 text-left">
              <div className="flex items-center gap-2 text-orange-400 font-bold mb-3 font-display text-sm">
                <Info className="w-4 h-4 text-orange-450" />
                <span>Memorial de Cálculo (Lógica Matemática & Referências ESG)</span>
              </div>
              <p className="mb-4 text-gray-300 font-sans leading-relaxed">
                As fórmulas utilizadas foram consolidadas com base nos inventários nacionais de reciclagem do aço obtidos junto aos relatórios de Sustentabilidade da Indústria Siderúrgica:
              </p>
              <div className="space-y-4 font-sans bg-black/40 p-5 rounded-lg text-amber-100 border border-slate-800/55">
                <div>
                  <strong className="text-white block text-sm mb-1">1. Redução de Emissões de Dióxido de Carbono (CO₂)</strong>
                  <div className="font-mono bg-black/30 px-3 py-2 rounded border border-slate-800 text-orange-400 text-xs mb-1.5 inline-block">
                    CO₂ Evitado (t) = Peso da Sucata (t) × 1,5
                  </div>
                  <span className="text-gray-400 block text-[11px] leading-relaxed">
                    Evita a liberação direta de 1,5 toneladas de gases do efeito estufa (gás carbônico equivalente) por tonelada de aço refinado de reciclagem na rota de forno elétrico a arco (FEA) em comparação à rota integrada tradicional com base em alto-forno a carvão e minério de ferro.
                  </span>
                </div>
                
                <div className="h-px bg-slate-800/60 my-2"></div>
                
                <div>
                  <strong className="text-white block text-sm mb-1">2. Eficiência de Energia Elétrica & Equivalência Residencial</strong>
                  <div className="flex flex-col sm:flex-row gap-2 mb-1.5">
                    <div className="font-mono bg-black/30 px-3 py-2 rounded border border-slate-800 text-orange-400 text-xs inline-block">
                      Energia Economizada (kWh) = Peso da Sucata (t) × 1.400
                    </div>
                    <div className="font-mono bg-black/30 px-3 py-2 rounded border border-slate-800 text-orange-400 text-xs inline-block">
                      Residências Abastecidas/mês = Energia Economizada (kWh) / 160
                    </div>
                  </div>
                  <span className="text-gray-400 block text-[11px] leading-relaxed">
                    A economia média é de 1,4 MWh (1.400 kWh) por tonelada de sucata inserida na rota elétrica (redução de até 75% na energia frente à fusão geológica direta). A equivalência doméstica utiliza a média nacional de 160 kWh por mês de consumo por domicílio padrão brasileiro.
                  </span>
                </div>
                
                <div className="h-px bg-slate-800/60 my-2"></div>
                
                <div>
                  <strong className="text-white block text-sm mb-1">3. Preservação de Recursos Hídricos Industriais</strong>
                  <div className="font-mono bg-black/30 px-3 py-2 rounded border border-slate-800 text-orange-400 text-xs mb-1.5 inline-block">
                    Água Preservada (L) = Peso da Sucata (t) × 40.000
                  </div>
                  <span className="text-gray-400 block text-[11px] leading-relaxed">
                    Sistemas modernos fechados de recirculação e resfriamento secundário do aço fundido poupam 40.000 litros de água captada por tonelada reciclada em comparação com as necessidades de extração convencional.
                  </span>
                </div>

                <div className="h-px bg-slate-800/60 my-2"></div>

                <div>
                  <strong className="text-white block text-sm mb-1">4. Conservação de Recursos Minerais Não Renováveis</strong>
                  <div className="flex flex-col sm:flex-row gap-2 mb-1.5">
                    <div className="font-mono bg-black/30 px-3 py-2 rounded border border-slate-800 text-orange-400 text-xs inline-block">
                      Minério de Ferro no Solo (t) = Peso da Sucata (t) × 1,4
                    </div>
                    <div className="font-mono bg-black/30 px-3 py-2 rounded border border-slate-800 text-orange-400 text-xs inline-block">
                      Carvão Mineral Poupado (t) = Peso da Sucata (t) × 0,8
                    </div>
                  </div>
                  <span className="text-gray-400 block text-[11px] leading-relaxed">
                    Cada tonelada de sucata de aço substitui integralmente a necessidade minerária direta de 1,4 toneladas de minério de ferro bruto extraído do solo e 0,8 toneladas de carvão mineral, mitigando impactos profundos de escavação geológica.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
