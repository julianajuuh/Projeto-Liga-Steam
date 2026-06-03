import { CycleStep, ImpactResults } from "./types";

export const STAGES_DATA: CycleStep[] = [
  {
    id: 1,
    title: "1. Coleta e Captação",
    phase: "Origem da Sucata",
    description: "Recuperação de resíduos de aço de diversas fontes (indústrias, demolições, bens de consumo obsoletos e canais de descarte autorizados).",
    details: [
      "Parceria com cooperativas e indústrias locais.",
      "Separação primária de materiais ferrosos na fonte geradora.",
      "Estímulo à economia local através da geração de renda com compra de metais.",
      "Logística de transporte eficiente para reduzir a pegada de carbono do frete."
    ],
    icon: "Truck",
    color: "from-amber-500 to-orange-600",
    badge: "Coleta"
  },
  {
    id: 2,
    title: "2. Triagem e Processamento",
    phase: "Preparação e Qualificação",
    description: "Classificação rigorosa da sucata recebida, eliminando impurezas e elementos não metálicos, garantindo máxima eficiência no reaproveitamento.",
    details: [
      "Uso de eletroímãs gigantes para segregação de metais ferrosos.",
      "Fragmentação e prensa dos materiais para otimização espacial.",
      "Análise química preliminar da composição da sucata.",
      "Garantia de segurança operacional livre de contaminantes perigosos."
    ],
    icon: "Layers",
    color: "from-blue-500 to-indigo-600",
    badge: "Processamento"
  },
  {
    id: 3,
    title: "3. Derretimento",
    phase: "Alto-forno e Transformação",
    description: "Inclusão da sucata qualificada nos fornos elétricos a arco (FEA) da ArcelorMittal, onde é fundida sob altíssimas temperaturas com baixíssima emissão.",
    details: [
      "Processo de fusão consome até 75% menos energia que a rota clássica do minério.",
      "Redução drástica do tempo de fusão mineral.",
      "Controle automatizado de emissões e filtragem de resíduos gasosos.",
      "Ajustes químicos de precisão para atingir as especificações exatas das ligas de aço."
    ],
    icon: "FlameKindling",
    color: "from-red-500 to-rose-600",
    badge: "Fusão"
  },
  {
    id: 4,
    title: "4. Novo Aço",
    phase: "Economia Circular Concluída",
    description: "O metal fundido é transformado em novos produtos siderúrgicos de altíssima qualidade, prontos para reingressar no mercado comercial e industrial.",
    details: [
      "Aço 100% reciclável de forma infinita sem perda de propriedades mecânicas.",
      "Aplicação em estruturas verdes, indústria automotiva e infraestrutura.",
      "Cumprimento integral dos protocolos nacionais e internacionais de sustentabilidade (ESG).",
      "Redução direta do consumo de recursos naturais não renováveis (minério e carvão)."
    ],
    icon: "CheckCircle",
    color: "from-emerald-500 to-teal-600",
    badge: "Eco-Eficiência"
  }
];

/**
 * Cálculos do Impacto Ambiental da Sucata Metálica
 * 
 * Fórmulas e Comentários (Para apresentação acadêmica):
 * 1. CO2 Evitado: Cada tonelada de aço fabricada via reciclagem de sucata impede a emissão
 *    de aproximadamente 1.5 toneladas de CO₂ em comparação com a rota de produção integrada primária (minério de ferro).
 *    Fórmula: peso * 1.5
 * 
 * 2. Energia Economizada: Reciclar aço consome em média 75% menos energia elétrica.
 *    Uma tonelada de sucata economiza cerca de 1.400 kWh (1.4 MWh).
 *    Fórmula do consumo doméstico: O consumo residencial médio mensal brasileiro é de 160 kWh.
 *    Casas abastecidas = (peso * 1400) / 160 = peso * 8.75 residências domésticas.
 * 
 * 3. Água Economizada: O processo de reciclagem de metais reduz o uso de água em até 40%.
 *    Estima-se que 40.000 litros de água de circulação e resfriamento sejam economizados por tonelada.
 *    Fórmula: peso * 40000 litros.
 * 
 * 4. Matérias-Primas Preservadas:
 *    - Minério de ferro poupado: Cerca de 1.4 toneladas por toneladas de sucata fundida.
 *    - Carvão mineral poupado: Cerca de 0.8 toneladas por tonelada.
 */
export function calcularImpactoSucata(pesoTon: number): ImpactResults {
  const CO2_MULT = 1.5; // Toneladas de CO2 evitadas por tonelada de sucata
  const ENERGIA_MULT = 1400; // kWh economizados por tonelada de sucata
  const BR_HOUSEHOLD_AVG_MONTHLY_KWH = 160; // Consumo médio mensal de uma residência brasileira
  const WATER_MULT = 40000; // Litros de água economizados por tonelada
  const MINERIO_MULT = 1.4; // Toneladas de minério de ferro poupadas por tonelada
  const CARVAO_MULT = 0.8; // Toneladas de carvão mineral poupadas por tonelada

  const co2Evitado = pesoTon * CO2_MULT;
  const energiaInKwh = pesoTon * ENERGIA_MULT;
  const residenciasAbastecidas = energiaInKwh / BR_HOUSEHOLD_AVG_MONTHLY_KWH;
  const aguaRecuperada = pesoTon * WATER_MULT;
  const minerioPoupado = pesoTon * MINERIO_MULT;
  const carvaoPoupado = pesoTon * CARVAO_MULT;

  return {
    weight: pesoTon,
    co2: Number(co2Evitado.toFixed(2)),
    energyKwh: Number(energiaInKwh.toFixed(0)),
    homesCount: Number(residenciasAbastecidas.toFixed(1)),
    waterLitres: Number(aguaRecuperada.toFixed(0)),
    ironOreSaved: Number(minerioPoupado.toFixed(2)),
    coalSaved: Number(carvaoPoupado.toFixed(2))
  };
}
