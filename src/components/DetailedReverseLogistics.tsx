import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Scale, 
  ShieldAlert, 
  Users, 
  TrendingUp, 
  ChevronsRight, 
  FileText, 
  Globe2, 
  Coins, 
  AlertCircle,
  HelpCircle,
  Sparkles,
  Award
} from "lucide-react";

interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string[];
  callout: string;
  pillColor: string;
  gradient: string;
}

const TOPICS: Topic[] = [
  {
    id: "pnrs",
    title: "Política Nacional de Resíduos Sólidos (PNRS)",
    shortTitle: "Legislação & PNRS",
    subtitle: "Conformidade Legal & Lei 12.305/2010",
    icon: Scale,
    pillColor: "bg-blue-50 text-blue-700 border-blue-100",
    gradient: "from-blue-50 to-indigo-50/30",
    callout: "A responsabilidade compartilhada pelo ciclo de vida dos produtos obriga fabricantes, importadores, distribuidores e comerciantes a estruturar sistemas de retorno pós-consumo.",
    content: [
      "Instituída em 2010, a PNRS revolucionou a gestão de resíduos no Brasil ao classificar a sucata metálica não como rejeito de descarte, mas como matéria-prima de altíssimo valor econômico e social.",
      "O setor siderúrgico é pioneiro na aplicação prática deste conceito, possuindo uma taxa histórica de reciclagem expressiva que alivia aterros industriais e lixões municipais.",
      "A logística reversa mitiga o passivo ambiental de grandes produtos descartados (como carcaças de eletrodomésticos, navios, automóveis e sucatas de obras estruturais civis).",
      "Garantia de segurança jurídica: as indústrias operam em compliance estrito com as licenças de operação ambiental vigentes nas esferas estadual e federal."
    ]
  },
  {
    id: "rastreabilidade",
    title: "Desafios de Integridade, Rastreamento e Triagem",
    shortTitle: "Segurança & Rastreabilidade",
    subtitle: "Qualidade de Entrada e Segurança de Ligas",
    icon: ShieldAlert,
    pillColor: "bg-amber-50 text-amber-700 border-amber-100",
    gradient: "from-amber-50 to-orange-50/35",
    callout: "A ArcelorMittal e parceiros utilizam detectores de radiação de pórticos e triagem por espectrometria de raios-X portátil para assegurar a inocuidade da sucata recebida.",
    content: [
      "Controle Radiológico: Toda sucata que entra nas plantas siderúrgicas passa por scanners de alta sensibilidade para evitar a contaminação acidental por fontes radioativas órfãs ou equipamentos hospitalares abandonados de forma irregular.",
      "Segregações de Elementos Espúrios: Impurezas como cobre, estanho e chumbo em níveis elevados desestabilizam as propriedades mecânicas do aço acabado. A triagem avançada em laboratório garante ligas puras.",
      "Combate à Receptação: Rigoroso protocolo de homologação de fornecedores. Cada lote deve possuir nota fiscal eletrônica de entrada clara e documentação de origem, coibindo o roubo de fiação e vandalismo de infraestrutura pública.",
      "Limpeza Física: Processamento prévio com prensas e tesouras industriais gigantescas elimina plásticos, óleos isolantes, borrachas e outros polímeros poluentes."
    ]
  },
  {
    id: "socioeconomia",
    title: "Socioeconomia e Inclusão de Cooperativas locais",
    shortTitle: "Impacto Social & Renda",
    subtitle: "Geração de Emprego, Renda e Organização Popular",
    icon: Users,
    pillColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    gradient: "from-emerald-50 to-teal-50/30",
    callout: "A cadeia de reciclagem de metais sustenta direta ou indiretamente mais de 1 milhão de pessoas no Brasil, desde catadores autônomos até intermediários de logística integrada.",
    content: [
      "Distribuição de Renda e Desenvolvimento: O capital empregado na compra de sucata flui diretamente para a base econômica nacional, financiando pequenas cooperativas locais e catadores cadastrados.",
      "Formalização do Setor: Projetos de incentivo ao cooperativismo fornecem fardamento profissional, equipamentos de proteção individual (EPIs), empilhadeiras hidráulicas e capacitação técnica e financeira.",
      "Redução de Gastos Municipais: Ao retirar milhares de toneladas das ruas, a logística reversa alivia os custos públicos de varrição, coleta urbana geral e manutenção de aterros.",
      "Inclusão de Gênero e Liderança: Grande parte das cooperativas brasileiras de triagem de recicláveis é gerida estruturalmente por mulheres, que encontram no metal um modelo seguro de emancipação."
    ]
  },
  {
    id: "carbono",
    title: "Descarbonização nas Práticas de Scope 1, 2 e 3",
    shortTitle: "Escopo de Descarbonização",
    subtitle: "Atendimento aos Acordos Climáticos Globais",
    icon: TrendingUp,
    pillColor: "bg-indigo-50 text-indigo-700 border-indigo-100",
    gradient: "from-indigo-50 to-purple-50/30",
    callout: "Substituir minério de ferro por sucata reduz instantaneamente a pegada de carbono geral, ajudando o setor industrial a cumprir as metas do Acordo de Paris para o clima.",
    content: [
      "Escopo 1 (Emissões Diretas): O refino de sucata no Forno Elétrico a Arco elimina a etapa de queima de carvão vegetal ou mineral nos altos-fornos, cortando em até 85% as emissões diretas de CO₂ gasoso.",
      "Escopo 2 (Consumo Energético): O processo utiliza energia elétrica do grid. Ao contratar fontes limpas (como solar e eólica certificadas via I-RECs), as emissões indiretas são zeradas de modo imediato.",
      "Escopo 3 (Cadeia de Fornecedores): Ao incentivar fornecedores de sucata que usam biocombustíveis e frotas otimizadas, o impacto indireto ao longo de toda a cadeia logística de transporte diminui drasticamente.",
      "Ciclo de Vida do Produto (LCA): O aço fabricado possui durabilidade ilimitada. Ao término de sua extensa vida útil de décadas, ele voltará voluntariamente a ser classificado como sucata de aço qualificada."
    ]
  }
];

export default function DetailedReverseLogistics({ darkMode = false }: { darkMode?: boolean }) {
  const [activeTopicId, setActiveTopicId] = useState<string>("pnrs");

  const activeTopic = TOPICS.find((t) => t.id === activeTopicId) || TOPICS[0];
  const IconComponent = activeTopic.icon;

  return (
    <div className={`rounded-2xl border p-6 md:p-8 text-left transition-colors duration-300 ${darkMode ? "bg-zinc-900 border-zinc-800 text-zinc-100 shadow-none" : "bg-white border-gray-100 shadow-sm"}`} id="detailed-logistics-explanation">
      {/* Intro section */}
      <div className={`border-b pb-6 mb-8 transition-colors duration-300 ${darkMode ? "border-zinc-800" : "border-gray-100"}`}>
        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors duration-300 ${darkMode ? "bg-orange-950/40 text-orange-400 border-orange-900/35" : "bg-orange-50 text-orange-700 border-orange-100/50"}`}>
          <Sparkles className="w-3.5 h-3.5 text-[#FF5F00]" />
          <span>Aprofundamento Técnico-Industrial</span>
        </div>
        <h2 className={`text-2xl md:text-3xl font-display font-semibold mt-3 transition-colors duration-300 ${darkMode ? "text-zinc-100" : "text-gray-950"}`}>
          Estudo Avançado: Logística Reversa de Sucata Metálica
        </h2>
        <p className={`text-sm mt-1.5 leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-500"}`}>
          Entenda os vetores legislativos, socioeconômicos e de engenharia e segurança que sustentam a economia circular dos metais ferrosos de forma profunda.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <span className={`text-[10px] font-semibold uppercase tracking-widest block mb-3 transition-colors duration-300 ${darkMode ? "text-zinc-550 text-zinc-500" : "text-gray-400"}`}>
            Selecione uma área de estudo:
          </span>
          <div className="flex flex-col gap-2.5">
            {TOPICS.map((topic) => {
              const TopicIcon = topic.icon;
              const isSelected = topic.id === activeTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTopicId(topic.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer group focus:outline-none focus:ring-2 focus:ring-orange-500/10 ${
                    isSelected
                      ? "bg-slate-900 border-slate-900 text-white shadow-md"
                      : darkMode
                        ? "bg-zinc-950/50 border-zinc-800 hover:border-orange-500/30 hover:bg-zinc-900/40 text-zinc-300"
                        : "bg-gray-50/50 border-gray-200 hover:border-orange-200 hover:bg-orange-50/10 text-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors duration-300 ${isSelected ? "bg-orange-600 text-white" : darkMode ? "bg-zinc-900 border border-zinc-800 text-orange-500 shadow-sm" : "bg-white border border-gray-200 text-orange-600 shadow-sm"}`}>
                      <TopicIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-semibold text-xs leading-none">
                        {topic.shortTitle}
                      </span>
                      <span className={`block text-[10px] sm:text-[11px] mt-0.5 ${isSelected ? "text-gray-300" : darkMode ? "text-zinc-500" : "text-gray-400"}`}>
                        {topic.subtitle.split(" & ")[0]}
                      </span>
                    </div>
                  </div>
                  <ChevronsRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-0.5 text-orange-400" : "text-gray-300 group-hover:text-gray-400 group-hover:translate-x-0.5"}`} />
                </button>
              );
            })}
          </div>

          <div className={`mt-6 rounded-xl p-4 border hidden lg:block transition-all duration-305 transition-colors duration-300 ${darkMode ? "bg-orange-950/10 border-orange-950/20 text-orange-200" : "bg-orange-500/5 border-orange-550/10"}`}>
            <h4 className={`text-xs font-bold flex items-center gap-1.5 transition-colors duration-300 ${darkMode ? "text-orange-400" : "text-orange-950"}`}>
              <Award className="w-4 h-4 text-orange-600" />
              Garantia de Qualidade Infinita
            </h4>
            <p className={`text-[11px] leading-relaxed mt-2 transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
              Diferente de polímeros ou papelão, cujas fibras se degradam a cada processo de reciclagem, a rede cristalina dos metais ferrosos é mantida intacta e pura a cada fusão.
            </p>
          </div>
        </div>

        {/* Selected Content View */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopicId}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 bg-gradient-to-br ${darkMode ? "border-zinc-800 bg-zinc-950 text-zinc-100" : `border-gray-150 ${activeTopic.gradient}`}`}
            >
              <div className="space-y-5">
                {/* Header detail */}
                <div>
                  <span className={`inline-block py-0.5 px-2.5 rounded-full text-[10px] font-mono font-bold tracking-wider border uppercase transition-colors duration-300 ${darkMode ? "bg-orange-950/40 text-orange-400 border-orange-900/35" : activeTopic.pillColor}`}>
                    {activeTopic.subtitle}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-display font-bold mt-2 transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {activeTopic.title}
                  </h3>
                </div>

                {/* Callout box */}
                <div className={`p-4 rounded-xl border shadow-xs flex gap-3 items-start transition-all duration-300 ${darkMode ? "bg-zinc-900/80 border-zinc-800 text-zinc-200" : "bg-white/80 border-gray-200/50"}`}>
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <p className={`text-xs font-medium leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-350 text-zinc-300" : "text-gray-800"}`}>
                    {activeTopic.callout}
                  </p>
                </div>

                {/* Bullet details expanded */}
                <div className="space-y-3.5 pt-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest block transition-colors duration-300 ${darkMode ? "text-zinc-500" : "text-gray-400"}`}>
                    Análise e Práticas Recomendadas:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeTopic.content.map((paragraph, index) => (
                      <div key={index} className={`p-4 rounded-xl border shadow-2xs flex gap-3 text-left transition-all duration-300 ${darkMode ? "bg-zinc-900/90 border-zinc-800/80 text-zinc-200" : "bg-white/90 border-gray-150"}`}>
                        <span className={`text-xs font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${darkMode ? "text-orange-400 bg-orange-950/40 border-orange-900/35" : "text-orange-600 bg-orange-50 border-orange-100"}`}>
                          {index + 1}
                        </span>
                        <p className={`text-xs font-normal leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-300" : "text-gray-700"}`}>
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Frequently Asked Questions Mini Section */}
      <div className={`mt-8 pt-8 border-t grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl border transition-all duration-300 ${darkMode ? "border-zinc-800 bg-zinc-950/80 border-zinc-800/80" : "border-gray-150 bg-slate-50 border-gray-200/50"}`}>
        <div>
          <h4 className={`text-sm font-bold flex items-center gap-1.5 mb-2 transition-colors duration-300 ${darkMode ? "text-zinc-200" : "text-gray-900"}`}>
            <HelpCircle className="w-4 h-4 text-[#FF5F00]" />
            Como posso contribuir individualmente?
          </h4>
          <p className={`text-xs leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            Separe pequenos resíduos metálicos (latas, tampas de metal, panelas antigas e pregos) de rejeitos orgânicos e destine-os a pontos de entrega voluntária (PEVs) ou coletores licenciados na sua cidade.
          </p>
        </div>
        <div>
          <h4 className={`text-sm font-bold flex items-center gap-1.5 mb-2 transition-colors duration-300 ${darkMode ? "text-zinc-200" : "text-gray-900"}`}>
            <Globe2 className="w-4 h-4 text-[#FF5F00]" />
            Qual a relevância global da logística reversa?
          </h4>
          <p className={`text-xs leading-relaxed transition-colors duration-300 ${darkMode ? "text-zinc-400" : "text-gray-600"}`}>
            Mais de 600 milhões de toneladas de metal ferroso são recicladas anualmente em todo o mundo. Isso poupa o equivalente a centenas de montanhas inteiras de exploração mineral.
          </p>
        </div>
      </div>
    </div>
  );
}
