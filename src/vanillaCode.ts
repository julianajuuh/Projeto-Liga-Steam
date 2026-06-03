export const VANILLA_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArcelorMittal - Logística Reversa da Sucata</title>
    <!-- Fonte Inter para um visual moderno e limpo -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Cabeçalho Principal com Logo Conceitual ArcelorMittal -->
    <header class="main-header">
        <div class="container flex-header">
            <div class="logo">
                <span class="logo-text">ArcelorMittal</span>
                <span class="badge-header">Economia Circular</span>
            </div>
            <p class="header-subtitle">Projeto de Logística Reversa para Sucata Siderúrgica</p>
        </div>
    </header>

    <main class="container">
        
        <!-- Hero Section Explicativa -->
        <section class="hero-section">
            <div class="hero-content">
                <h1>Logística Reversa da Sucata Metálica</h1>
                <p>Veja como reinserimos materiais estruturais ferrosos descartados de volta na cadeia de valor, poupando energia, reduzindo emissões e preservando jazidas minerais cruciais para o futuro do nosso planeta.</p>
            </div>
        </section>

        <!-- SEÇÃO 1: O Ciclo do Aço (Interativo) -->
        <section class="section-cycle">
            <div class="section-title">
                <h2>O Ciclo Circular do Aço</h2>
                <p>Navegue pelas quatro etapas fundamentais de reinserção ecológica do aço na indústria.</p>
            </div>

            <!-- Grade de Cards com Passos -->
            <div class="cycle-grid">
                <!-- Passo 1 -->
                <article class="cycle-card active" onclick="selecionarEtapa(1)" id="card-1">
                    <div class="card-step">Etapa 01</div>
                    <div class="card-icon">🚚</div>
                    <h3>Coleta e Captação</h3>
                    <p class="phase-desc">Mapeamento de descartes e fornecedores locais.</p>
                </article>

                <!-- Passo 2 -->
                <article class="cycle-card" onclick="selecionarEtapa(2)" id="card-2">
                    <div class="card-step">Etapa 02</div>
                    <div class="card-icon">📊</div>
                    <h3>Triagem e Processamento</h3>
                    <p class="phase-desc">Segregação magnética e remoção de impurezas.</p>
                </article>

                <!-- Passo 3 -->
                <article class="cycle-card" onclick="selecionarEtapa(3)" id="card-3">
                    <div class="card-step">Etapa 03</div>
                    <div class="card-icon">🔥</div>
                    <h3>Derretimento Limpo</h3>
                    <p class="phase-desc">Fundição a arco elétrico com baixa emissão.</p>
                </article>

                <!-- Passo 4 -->
                <article class="cycle-card" onclick="selecionarEtapa(4)" id="card-4">
                    <div class="card-step">Etapa 04</div>
                    <div class="card-icon">🌱</div>
                    <h3>Novo Aço Ecológico</h3>
                    <p class="phase-desc">Material reinserido 100% qualificado.</p>
                </article>
            </div>

            <!-- Painel de Detalhamento Dinâmico -->
            <div class="detail-panel" id="detail-panel">
                <div class="detail-content">
                    <span class="detail-badge" id="detail-badge">Fase Ativa</span>
                    <h3 id="detail-title">Coleta e Captação</h3>
                    <p id="detail-desc">Carregando detalhes...</p>
                    <ul class="detail-bullets" id="detail-bullets">
                        <li>Fato 1</li>
                        <li>Fato 2</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- SEÇÃO 2: Calculadora de Impacto de Sucata -->
        <section class="section-calculator">
            <div class="calculator-layout">
                
                <!-- Área do Formulário de Entrada (HTML5 Semântico) -->
                <div class="calc-input-block">
                    <div class="form-header">
                        <span class="small-badge">Simulador Ambiental</span>
                        <h2>Calculadora de Impacto</h2>
                        <p>Digite a quantidade de metal/sucata recolhida para obter uma simulação instantânea dos impactos poupados ao planeta.</p>
                    </div>

                    <form id="impact-form" onsubmit="event.preventDefault();">
                        <div class="form-group">
                            <label for="sucata-peso">Peso de Sucata Metálica (Toneladas):</label>
                            <div class="input-wrapper">
                                <input type="number" id="sucata-peso" min="0" step="any" value="10" placeholder="Ex: 10" required>
                                <span class="input-unit">t</span>
                            </div>
                        </div>

                        <button type="button" id="btn-calcular" class="btn-action">Calcular Impacto</button>
                    </form>

                    <div class="tip-box">
                        <strong>💡 Dica Siderúrgica:</strong> Refinar uma tonelada de sucata poupa cerca de 1,4 toneladas de minério de ferro bruto do solo nacional.
                    </div>
                </div>

                <!-- Área dos Resultados de Impacto -->
                <div class="calc-results-block">
                    <h3>Resultados de Sustentabilidade</h3>
                    <p class="results-subtitle">Métricas de conservação ecológica baseadas nas fórmulas de cálculo:</p>

                    <div class="results-grid">
                        <!-- Métrica 1: CO2 -->
                        <div class="result-card">
                            <div class="r-icon">☁️</div>
                            <div class="r-info">
                                <span class="r-label">Gás Carbônico (CO₂) Evitado</span>
                                <output id="out-co2" class="r-value">15,0 t</output>
                                <p class="r-desc">De emissões poupadas de poluir a atmosfera.</p>
                            </div>
                        </div>

                        <!-- Métrica 2: Energia -->
                        <div class="result-card">
                            <div class="r-icon">⚡</div>
                            <div class="r-info">
                                <span class="r-label">Energia Economizada</span>
                                <output id="out-energia" class="r-value">14.000 kWh</output>
                                <p class="r-desc">Abastece <strong id="out-casas">87.5</strong> residências médias brasileiras por um mês inteiro.</p>
                            </div>
                        </div>

                        <!-- Métrica 3: Água -->
                        <div class="result-card">
                            <div class="r-icon">💧</div>
                            <div class="r-info">
                                <span class="r-label">Água Potável Poupada</span>
                                <output id="out-agua" class="r-value">400.000 L</output>
                                <p class="r-desc">Poupados por reciclar em vez de processar minério virgem.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Rodapé Científico -->
                    <div class="results-footer">
                        <p>* Simulação de precisão baseada em indicadores do ecossistema de sustentabilidade ArcelorMittal.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <footer class="main-footer">
        <div class="container footer-flex">
            <p>&copy; 2026 ArcelorMittal Brasil S.A. - Todos os direitos reservados.</p>
            <p>Trabalho Acadêmico de Web Desenvolvimento - Logística Reversa</p>
        </div>
    </footer>

    <!-- Script Pure Vanilla JS -->
    <script src="script.js"></script>
</body>
</html>`;

export const VANILLA_CSS = `/* ==========================================================================
   FOLHA DE ESTILOS CSS3 - PROJETO LOGÍSTICA REVERSA ARCELORMITTAL
   Uso de Variáveis CSS, Flexbox/Grid responsivo, e efeitos de transição.
   ========================================================================== */

:root {
    --primary-orange: #FF5F00;            /* Laranja Oficial ArcelorMittal */
    --primary-orange-hover: #E05400;      /* Laranja de Destaque no Hover */
    --sustainable-green: #10B981;         /* Verde Ecológico para os Resultados */
    --sustainable-green-bg: #E6FBF3;      /* Fundo do Card Verde de Sucesso */
    
    --neutral-bg: #F9FAFB;                /* Fundo Geral Neutro */
    --card-white: #FFFFFF;                /* Fundo dos Cards Sólidos */
    --text-dark: #1F2937;                 /* Cinza Escuro para Leitura */
    --text-muted: #6B7280;                /* Cinza Médio para Detalhes */
    --border-light: #E5E7EB;              /* Borda Padrão Suave */
    
    --font-font-family: 'Inter', sans-serif;
    --font-display: 'Space Grotesk', sans-serif;
    --border-radius-lg: 12px;
    --border-radius-md: 8px;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--neutral-bg);
    color: var(--text-dark);
    font-family: var(--font-font-family);
    line-height: 1.6;
    font-size: 16px;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.main-header {
    background-color: var(--card-white);
    border-bottom: 1px solid var(--border-light);
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.flex-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-text {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--text-dark);
}

.badge-header {
    background-color: #FFF0E6;
    color: var(--primary-orange);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
    border: 1px solid rgba(255, 95, 0, 0.1);
}

.header-subtitle {
    font-size: 0.875rem;
    color: var(--text-muted);
}

.hero-section {
    background: radial-gradient(circle at 10% 20%, rgb(255, 255, 255) 0%, rgb(240, 240, 245) 90.1%);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-lg);
    padding: 40px;
    margin: 30px auto;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.hero-content h1 {
    font-family: var(--font-display);
    font-size: 2.25rem;
    margin-bottom: 15px;
}

.hero-content p {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 800px;
}

.section-title {
    text-align: center;
    margin-bottom: 30px;
}

.section-title h2 {
    font-family: var(--font-display);
    font-size: 1.8rem;
    margin-bottom: 8px;
}

.section-cycle {
    margin-bottom: 40px;
}

.cycle-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 25px;
}

.cycle-card {
    background-color: var(--card-white);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-lg);
    padding: 24px;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.cycle-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    border-color: var(--primary-orange);
}

.cycle-card.active {
    border-color: var(--text-dark);
    background-color: var(--text-dark);
    color: #FFFFFF;
}

.card-step {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--text-muted);
    margin-bottom: 12px;
}

.cycle-card.active .card-step {
    color: var(--primary-orange);
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 15px;
}

.detail-panel {
    background-color: var(--card-white);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-lg);
    padding: 30px;
}

.detail-badge {
    background-color: #EBF5FF;
    color: #2563EB;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
    margin-bottom: 15px;
    display: inline-block;
}

.detail-bullets {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
}

.detail-bullets li {
    position: relative;
    padding-left: 24px;
    font-size: 0.9rem;
}

.detail-bullets li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--sustainable-green);
    font-weight: bold;
}

.calculator-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    background-color: var(--card-white);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-lg);
    padding: 40px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 8px;
}

.input-wrapper {
    position: relative;
}

.input-wrapper input {
    width: 100%;
    padding: 12px 50px 12px 16px;
    font-size: 1.125rem;
    font-weight: 600;
    border: 1px solid #D1D5DB;
    border-radius: var(--border-radius-md);
    outline: none;
    transition: var(--transition-smooth);
}

.input-wrapper input:focus {
    border-color: var(--primary-orange);
    box-shadow: 0 0 0 4px rgba(255, 95, 0, 0.15);
}

.input-unit {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-weight: 600;
}

.btn-action {
    width: 100%;
    background-color: var(--primary-orange);
    color: #FFFFFF;
    border: none;
    padding: 14px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--border-radius-md);
    cursor: pointer;
    transition: var(--transition-smooth);
}

.btn-action:hover {
    background-color: var(--primary-orange-hover);
}

.tip-box {
    margin-top: 25px;
    background-color: #FFF5F0;
    border-left: 4px solid var(--primary-orange);
    padding: 15px;
    border-radius: 4px;
    font-size: 0.85rem;
    color: #9A3412;
}

.calc-results-block {
    background-color: #F9FAFB;
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-md);
    padding: 30px;
}

.results-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.result-card {
    background-color: var(--card-white);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-md);
    padding: 18px;
    display: flex;
    gap: 16px;
    transition: var(--transition-smooth);
}

.result-card:hover {
    border-color: var(--sustainable-green);
    background-color: var(--sustainable-green-bg);
}

.r-icon {
    font-size: 1.8rem;
    background-color: #E6F4EA;
    padding: 8px;
    border-radius: 50%;
}

.r-value {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--sustainable-green);
}

.main-footer {
    background-color: var(--text-dark);
    color: #D1D5DB;
    padding: 40px 0;
    margin-top: 60px;
    font-size: 0.85rem;
    border-top: 3px solid var(--primary-orange);
}

.footer-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 768px) {
    .calculator-layout {
        padding: 20px;
    }
    .footer-flex {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
}
*/`;

export const VANILLA_JS = `/**
 * ==========================================================================
 * CONTROLE DE INTERAÇÃO & LÓGICA DE CÁLCULO - JAVASCRIPT PURA (VANILLA)
 * ==========================================================================
 */

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

function selecionarEtapa(etapaId) {
    const cards = document.querySelectorAll('.cycle-card');
    cards.forEach(card => card.classList.remove('active'));

    const activeCard = document.getElementById(\`card-\${etapaId}\`);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    const dados = ETAPAS_DADOS[etapaId];
    if (!dados) return;

    document.getElementById('detail-badge').innerText = dados.badge;
    document.getElementById('detail-title').innerText = dados.title;
    document.getElementById('detail-desc').innerText = dados.desc;

    const ul = document.getElementById('detail-bullets');
    ul.innerHTML = '';

    dados.bullets.forEach(bulletText => {
        const li = document.createElement('li');
        li.innerText = bulletText;
        ul.appendChild(li);
    });
}

function realizarCalculos() {
    const inputPeso = document.getElementById('sucata-peso');
    const pesoTon = parseFloat(inputPeso.value);

    if (isNaN(pesoTon) || pesoTon < 0) {
        alert("Por favor, digite um peso em toneladas que seja igual ou maior que zero.");
        return;
    }

    // MEMORIAL DE CÁLCULO:
    // 1. CO2 EVITADO: peso * 1.5 t CO2 por tonelada reciclada
    const co2Evitado = pesoTon * 1.5;

    // 2. ENERGIA SALVA: peso * 1400 kWh por tonelada reciclada
    const energiaSalvaKwh = pesoTon * 1400;

    // 3. CASAS ABASTECIDAS: Energia / 160 kWh (energia média mensal de residência no BR)
    const casasAbastecidasMes = energiaSalvaKwh / 160;

    // 4. ÁGUA POUPADA: peso * 40.000 litros por tonelada
    const aguaPreservadaLitros = pesoTon * 40000;

    // ATUALIZAÇÃO DOS VALORES NA TELA
    document.getElementById('out-co2').value = co2Evitado.toLocaleString('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
    }) + ' t';

    document.getElementById('out-energia').value = energiaSalvaKwh.toLocaleString('pt-BR', {
        maximumFractionDigits: 0
    }) + ' kWh';

    document.getElementById('out-casas').innerText = casasAbastecidasMes.toLocaleString('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });

    document.getElementById('out-agua').value = aguaPreservadaLitros.toLocaleString('pt-BR', {
        maximumFractionDigits: 0
    }) + ' L';
}

document.addEventListener('DOMContentLoaded', () => {
    selecionarEtapa(1);

    const btnCalcular = document.getElementById('btn-calcular');
    if (btnCalcular) {
        btnCalcular.addEventListener('click', realizarCalculos);
    }

    const inputPeso = document.getElementById('sucata-peso');
    if (inputPeso) {
        inputPeso.addEventListener('input', realizarCalculos);
    }
});`;
