import { useState } from "react";
import { VANILLA_HTML, VANILLA_CSS, VANILLA_JS } from "../vanillaCode";
import { FileCode, Clipboard, Check, Code, FileText, Sparkles } from "lucide-react";

export default function VanillaTab() {
    const [selectedTab, setSelectedTab] = useState<"html" | "css" | "js">("html");
    const [copied, setCopied] = useState<boolean>(false);

    const getCode = () => {
        switch (selectedTab) {
            case "html": return VANILLA_HTML;
            case "css": return VANILLA_CSS;
            case "js": return VANILLA_JS;
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(getCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl" id="vanilla-files-view">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
                <div>
                    <div className="flex items-center gap-2">
                        <FileCode className="w-5 h-5 text-orange-500 animate-pulse" />
                        <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase bg-orange-950/40 px-2.5 py-1 rounded-full border border-orange-900/30">
                            Pronto para Entrega
                        </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-white mt-2">
                        Código-Fonte Acadêmico (HTML, CSS & JS)
                    </h2>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">
                        Geramos também os 3 arquivos limpos requisitados no seu enunciado. Copie-os individualmente para o seu projeto local!
                    </p>
                </div>
                
                <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Lógica 100% de acordo com as diretrizes</span>
                </div>
            </div>

            {/* Tab Selection */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
                    <button
                        onClick={() => setSelectedTab("html")}
                        className={`px-3.5 py-2 rounded-md text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                            selectedTab === "html"
                                ? "bg-orange-600 text-white shadow-sm"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                        }`}
                    >
                        <Code className="w-3.5 h-3.5" />
                        index.html
                    </button>
                    <button
                        onClick={() => setSelectedTab("css")}
                        className={`px-3.5 py-2 rounded-md text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                            selectedTab === "css"
                                ? "bg-orange-600 text-white shadow-sm"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                        }`}
                    >
                        <FileText className="w-3.5 h-3.5" />
                        style.css
                    </button>
                    <button
                        onClick={() => setSelectedTab("js")}
                        className={`px-3.5 py-2 rounded-md text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                            selectedTab === "js"
                                ? "bg-orange-600 text-white shadow-sm"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                        }`}
                    >
                        <FileCode className="w-3.5 h-3.5" />
                        script.js
                    </button>
                </div>

                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-4 py-2 bg-slate-950 hover:bg-slate-800 text-xs font-medium text-slate-200 rounded-lg border border-slate-800 hover:border-slate-750 transition-colors cursor-pointer"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400">Copiado!</span>
                        </>
                    ) : (
                        <>
                            <Clipboard className="w-4 h-4 text-slate-400" />
                            <span>Copiar Código</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Rendering with elegant styling */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-850 bg-slate-950 text-[10px] font-mono text-slate-500">
                    <span>ARQUIVO: {selectedTab === "html" ? "index.html" : selectedTab === "css" ? "style.css" : "script.js"}</span>
                    <span>{selectedTab.toUpperCase()} CODE</span>
                </div>
                <pre className="p-4 md:p-6 overflow-x-auto text-[11px] md:text-xs font-mono text-slate-300 leading-relaxed max-h-[420px] select-all">
                    <code>{getCode()}</code>
                </pre>
            </div>

            <div className="mt-5 text-xs text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex gap-2.5 items-start">
                <span className="text-orange-500 font-bold mt-0.5">ℹ</span>
                <p className="leading-relaxed">
                    <strong>Estrutura de Arquivos Gerada:</strong> Os arquivos físicos originais correspondentes a estes códigos já foram gravados na raiz do seu projeto como <code className="text-emerald-400">/vanilla/index.html</code>, <code className="text-emerald-400">/vanilla/style.css</code>, e <code className="text-emerald-400">/vanilla/script.js</code>. Você pode baixá-los diretamente através do menu de arquivos do AI Studio!
                </p>
            </div>
        </div>
    );
}
