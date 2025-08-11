import { BarChart3, FileText, Search, PieChart, Database } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

export default function AiPreviewSection() {
    const { t } = useTranslation();
    return (
        <section id="ai-demo" className="relative overflow-hidden pb-20 "> {/* bg-gradient-to-br from-gray-900 to-gray-950 */}
            {/* Background glows */}
            {/*  <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/5 w-[26rem] h-[26rem] rounded-full bg-emerald-500/12 blur-[100px] animate-blob" />
          <div className="absolute -bottom-20 right-1/6 w-[30rem] h-[30rem] rounded-full bg-blue-500/12 blur-[110px] animate-blob-slow animation-delay-2s" />
        </div> */}
            <div className="relative container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4 font-display tracking-tight">
                        <span className="text-green-600">{t('ai.heading')}</span>
                    </h2>
                    <p className="text-xl text-gray-300">{t('ai.subtitle')}</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* AI Interface Demo */}
                    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-8 border border-gray-800">
                        {/* AI Chat Interface Header */}
                        <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4 flex items-center">
                            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold">💰</span>
                            </div>
                            <div className="text-white">
                                <div className="font-semibold">{t('ai.headerTitle')}</div>
                                <div className="text-sm opacity-90">{t('ai.headerSubtitle')}</div>
                            </div>
                            <div className="ml-auto flex space-x-1">
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* User Input */}
                        <div className="p-6 border-b border-gray-800 bg-gray-950">
                            <div className="bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-800">
                                <p className="text-gray-200 font-medium">{t('ai.inputSample')}</p>
                                <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
                                    <span>Press Enter to analyze • Shift+Enter for new line</span>
                                    <div className="flex space-x-2">
                                        {/* <button className="btn btn-outline btn-sm">⚡ Quick Insights</button> */}
                                        <button className="btn btn-primary btn-sm">{t('ai.analyze')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="p-6">
                            {/* Chart Title */}
                            <div className="flex items-center mb-6">
                                <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                                <h3 className="text-xl font-bold text-white">{t('ai.chartTitle')}</h3>
                                <div className="ml-auto text-sm text-gray-500">{t('ai.chartMeta')}</div>
                            </div>

                            {/* Actual Chart Visualization */}
                            <div className="bg-gray-900 rounded-xl p-8 mb-6 border border-gray-800">
                                <div className="grid grid-cols-10 gap-2 items-end h-48">
                                    <div className="bg-blue-600 rounded-t" style={{ height: '85%' }}></div>
                                    <div className="bg-blue-500 rounded-t" style={{ height: '75%' }}></div>
                                    <div className="bg-blue-500 rounded-t" style={{ height: '68%' }}></div>
                                    <div className="bg-green-500 rounded-t" style={{ height: '62%' }}></div>
                                    <div className="bg-green-500 rounded-t" style={{ height: '58%' }}></div>
                                    <div className="bg-green-400 rounded-t" style={{ height: '52%' }}></div>
                                    <div className="bg-green-400 rounded-t" style={{ height: '45%' }}></div>
                                    <div className="bg-green-400 rounded-t" style={{ height: '38%' }}></div>
                                    <div className="bg-gray-400 rounded-t" style={{ height: '25%' }}></div>
                                    <div className="bg-gray-300 rounded-t" style={{ height: '15%' }}></div>
                                </div>
                                <div className="grid grid-cols-10 gap-2 mt-4 text-xs text-gray-300 text-center">
                                    <div>P1</div>
                                    <div>P2</div>
                                    <div>P3</div>
                                    <div>P4</div>
                                    <div>P5</div>
                                    <div>P6</div>
                                    <div>P7</div>
                                    <div>P8</div>
                                    <div>P9</div>
                                    <div>More...</div>
                                </div>
                            </div>

                            {/* Data Table */}
                            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                                <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 flex items-center justify-between">
                                    <div className="flex items-center text-white">
                                        <FileText className="w-4 h-4 mr-2" />
                                        <span className="font-semibold">{t('ai.resultsTable')}</span>
                                    </div>
                                    <button className="btn btn-white btn-sm">📊 {t('ai.exportCsv')}</button>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <input
                                            placeholder={t('ai.searchPlaceholder')!}
                                            className="px-3 py-2 bg-gray-950 border border-gray-800 text-gray-200 rounded-lg text-sm placeholder:text-gray-500"
                                        />
                                        <select className="px-3 py-2 bg-gray-950 border border-gray-800 text-gray-200 rounded-lg text-sm">
                                            <option>{t('ai.allColumns')}</option>
                                        </select>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-800">
                                                    <th className="text-left py-3 px-4 font-semibold text-gray-300">📦 PRODUCT NAME</th>
                                                    <th className="text-right py-3 px-4 font-semibold text-gray-300">#️⃣ TOTAL QUANTITY SOLD</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                                                    <td className="py-3 px-4 text-gray-100">P1</td>
                                                    <td className="py-3 px-4 text-right font-semibold text-gray-100">410</td>
                                                </tr>
                                                <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                                                    <td className="py-3 px-4 text-gray-100">P2</td>
                                                    <td className="py-3 px-4 text-right font-semibold text-gray-100">274</td>
                                                </tr>
                                                <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                                                    <td className="py-3 px-4 text-gray-100">P3</td>
                                                    <td className="py-3 px-4 text-right font-semibold text-gray-100">249</td>
                                                </tr>
                                                <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                                                    <td className="py-3 px-4 text-gray-100">P4</td>
                                                    <td className="py-3 px-4 text-right font-semibold text-gray-100">238</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 text-gray-500">{t('ai.tableShowing')}</td>
                                                    <td className="py-3 px-4 text-right text-gray-500">{t('ai.tablePage')}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
                            <motion.div
                                animate={{
                                    rotate: [0, 15, -15, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="mx-auto mb-3"
                            >
                                <Search className="w-8 h-8 text-blue-400" />
                            </motion.div>
                            <h3 className="font-bold text-white mb-2">{t('ai.features.queriesTitle')}</h3>
                            <p className="text-gray-300 text-sm">{t('ai.features.queriesDesc')}</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
                            <motion.div
                                animate={{
                                    y: [0, -3, 0],
                                    scale: [1, 1.08, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="mx-auto mb-3"
                            >
                                <PieChart className="w-8 h-8 text-green-400" />
                            </motion.div>
                            <h3 className="font-bold text-white mb-2">{t('ai.features.vizTitle')}</h3>
                            <p className="text-gray-300 text-sm">{t('ai.features.vizDesc')}</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
                            <motion.div
                                animate={{
                                    y: [0, -3, 0],
                                    scale: [1, 1.08, 1],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="mx-auto mb-3"
                            >
                                <Database className="w-8 h-8 text-blue-400" />
                            </motion.div>
                            <h3 className="font-bold text-white mb-2">{t('ai.features.tablesTitle')}</h3>
                            <p className="text-gray-300 text-sm">{t('ai.features.tablesDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}