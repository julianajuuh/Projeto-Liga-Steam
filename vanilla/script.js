/**
 * ==========================================================================
 * CONTROLE DE INTERAÇÃO & LÓGICA DE CÁLCULO - JACASCRIPT PURA (VANILLA)
 * Desenvolvido como Projeto Final Sênior de Web Desenvolvimento para ArcelorMittal.
 * Focado na Logística Reversa da Sucata Metálica (Economia Circular)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. DADOS DAS ETAPAS DO CICLO DO AÇO
// --------------------------------------------------------------------------
const ETAPAS_DADOS = {
    1: {
        title: "Etapa 01 - Coleta e Captação (Origem)",
        badge: "Coleta Sustentável",
        desc: "Captação de resíduos metálicos pós-consumo ou industriais em parceria com cooperativas estruturadas, gerando valor socioeconômico regional.",
        bullets: [
            "Estímulo à triagem primária em pontos comerciais e residenciais.",
            "Logística de captação eficiente minimizando emissões no transporte.",
            "Valorização econômica direta do catador e de fornecedores locais.",
            "Rastreamento de origem para atestar a qualidade e segurança inicial do lote."
        ]
    },
    2: {
        title: "Etapa 02 - Triagem e Processamento (Qualificação)",
        badge: "Preparação de Alta Tecnologia",
        desc: "Separação eletromagnética avançada para expurgar impurezas estruturais, seguida de prensagem mecânica para maximizar densidade logística.",
        bullets: [
            "Segregação magnética precisa para separar metais ferrosos de outros materiais.",
            "Trituração avançada que otimiza a área de contato físico da fusão posterior.",
            "Bateria de testes químicos preventivos contra contaminação por ligas espúrias.",
            "Conformidade rígida com os padrões de entrada do forno elétrico."
        ]
    },
    3: {
        title: "Etapa 03 - Derretimento Limpo (Transformação)",
        badge: "Fundição Sustentável / FEA",
        desc: "A sucata limpa é enviada para os Fornos Elétricos a Arco (FEA), onde é fundida sob alta temperatura consumindo uma fração de recursos comparado ao processo clássico.",
        bullets: [
            "Geração de calor via arco elétrico com alta taxas de eficiência energética.",
            "Até 75% de economia de eletricidade em relação à rota clássica de minério virgem.",
            "Menor volume de escórias residuais acumuladas por corrida metalúrgica.",
            "Filtragem dinâmica para conter de forma imediata gases particulados."
        ]
    },
    4: {
        title: "Etapa 04 - Novo Aço Ecológico (Resultados)",
        badge: "Ciclo Concluído de Qualidade Infinita",
        desc: "Criação de novos perfis e bobinas de aço com as mesmas excelentes propriedades do aço virgem, prontos para reingressar na economia real.",
        bullets: [
            "Propriedades físicas 100% idênticas às ligas ferrosas originais.",
            "Aplicação prioritária em construções sustentáveis e indústrias automotivas.",
            "Redução imediata da necessidade de abrir novas minas de ferro pelo país.",
            "Produto final com baixa pegada histórica de emissão líquida de carbono."
        ]
    }
};

// --------------------------------------------------------------------------
// 2. FUNÇÃO INTERATIVA - NAVEGAÇÃO DO CICLO DO AÇO
// --------------------------------------------------------------------------
function selecionarEtapa(etapaId) {
    // 1. Remove a classe 'active' de todos os cards
    const cards = document.querySelectorAll('.cycle-card');
    cards.forEach(card => card.classList.remove('active'));

    // 2. Adiciona a classe 'active' apenas no card clicado atualmente
    const activeCard = document.getElementById(`card-${etapaId}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    // 3. Recupera os dados estruturados desta etapa
    const dados = ETAPAS_DADOS[etapaId];
    if (!dados) return;

    // 4. Atualiza os textos no painel de detalhamento de forma dinâmica
    document.getElementById('detail-badge').innerText = dados.badge;
    document.getElementById('detail-title').innerText = dados.title;
    document.getElementById('detail-desc').innerText = dados.desc;

    // 5. Reconstrói a lista de tópicos (bullets) com inserções semânticas de HTML
    const ul = document.getElementById('detail-bullets');
    ul.innerHTML = ''; // Limpa a lista antiga

    dados.bullets.forEach(bulletText => {
        const li = document.createElement('li');
        li.innerText = bulletText;
        ul.appendChild(li);
    });
}

// --------------------------------------------------------------------------
// 3. FÓRMULAS E MÓDULO DA CALCULADORA DE IMPACTOS
// --------------------------------------------------------------------------
function realizarCalculos() {
    // 1. Captura o valor de peso digitado pelo usuário (em Toneladas)
    const inputPeso = document.getElementById('sucata-peso');
    const pesoTon = parseFloat(inputPeso.value);

    // Validação básica se é um número válido e positivo
    if (isNaN(pesoTon) || pesoTon < 0) {
        alert("Por favor, digite um peso em toneladas que seja igual ou maior que zero.");
        return;
    }

    // 2. MEMORIAL DE CÁLCULO (Equações Siderúrgicas & Sustentabilidade):
    //
    // - CO2 EVITADO: Cada tonelada de aço feita a partir da reciclagem de sucata evita
    //   a liberação de 1.5 toneladas de CO₂ na atmosfera se comparado à rota mineral clássica.
    //   Fórmula: peso em toneladas * 1.5
    const co2Evitado = pesoTon * 1.5;

    // - ENERGIA SALVA: A produção secundária com sucata economiza 75% da energia do processo virgem.
    //   Isso equivale a aproximadamente 1.400 kWh (ou 1,4 MWh) de energia por tonelada reciclada.
    //   Fórmula: peso em toneladas * 1400
    const energiaSalvaKwh = pesoTon * 1400;

    // - CASAS ABASTECIDAS: O consumo elétrico residencial médio de uma família no Brasil
    //   é de cerca de 160 kWh por mês (Fonte: EPE). Usamos esse divisor para dar senso de escala real.
    //   Fórmula: Energia economizada em kWh / 160 kWh por casa
    const casasAbastecidasMes = energiaSalvaKwh / 160;

    // - ÁGUA PRESERVADA: O resfriamento e beneficiamento da rota secundária poupa cerca de
    //   40.000 litros de água industrial por tonelada em comparação ao processo integrado convencional.
    //   Fórmula: peso em toneladas * 40.000 litros
    const aguaPreservadaLitros = pesoTon * 40000;


    // 3. ATUALIZAÇÃO SEMÂNTICA DOS OUTPUTS NA TELA
    // Usando formatação de números padrão brasileiro (pt-BR)
    
    // Atualiza CO2
    document.getElementById('out-co2').value = co2Evitado.toLocaleString('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }) + ' t';

    // Atualiza Energia Elétrica (sem decimais)
    document.getElementById('out-energia').value = energiaSalvaKwh.toLocaleString('pt-BR', {
        maximumFractionDigits: 0
    }) + ' kWh';

    // Atualiza Número Equivalente de Casas (com 1 casa decimal para precisão)
    document.getElementById('out-casas').innerText = casasAbastecidasMes.toLocaleString('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });

    // Atualiza Água (sem decimais para ficar amigável)
    document.getElementById('out-agua').value = aguaPreservadaLitros.toLocaleString('pt-BR', {
        maximumFractionDigits: 0
    }) + ' L';
}

// --------------------------------------------------------------------------
// 4. INICIALIZAÇÃO E BINDING DE EVENTOS
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa o Painel de Detalhes da Etapa 1 na arrancada da página
    selecionarEtapa(1);

    // 2. Mapeia evento do botão de calcular impactos
    const btnCalcular = document.getElementById('btn-calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', realizarCalculos);
    }

    // 3. Permite recalcular instantaneamente ao pressionar "Enter" no input de peso
    const inputPeso = document.getElementById('sucata-peso');
    if (inputPeso) {
        inputPeso.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Evita tentar recarregar a página
                realizarCalculos();
            }
        });
        
        // Opcional: Recalcula na hora ao alterar o input (para maior interatividade!)
        inputPeso.addEventListener('input', realizarCalculos);
    }
});
