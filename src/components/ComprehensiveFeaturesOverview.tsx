import { Package, Users, TrendingUp, BarChart3, Bot, DollarSign, Truck, FileText } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';

export default function ComprehensiveFeaturesOverview() {
    const { t } = useTranslation();
    return (
        <section className="relative overflow-hidden pb-20">
            {/* Subtle section highlight */}
           {/*  <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/[0.015] to-transparent" />
            </div> */}
            <div className="relative container mx-auto px-6">
                <div className="text-center mb-16">
                    {/* <span className="text-3xl md:text-3xl font-bold text-white mb-4">The Solution to Your Problems?</span> */}
                    <span className="text-5xl md:text-7xl font-display tracking-tight font-bold text-white mb-4">{t('overview.brand')}</span>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('overview.headingLead')} <span className="text-green-600">{t('overview.headingHighlight')}</span> {t('overview.headingSuffix')}
                    </h2>
                    <p className="text-xl text-gray-300">{t('overview.subtitle')}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, -2, 0],
                                rotate: [0, 3, -3, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Package className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.integrationTitle', { defaultValue: 'WooCommerce Integration' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.integrationDesc', { defaultValue: 'Automatic order fetching' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                x: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Users className="w-12 h-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.teamTitle', { defaultValue: 'Team Assignment' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.teamDesc', { defaultValue: 'Assign orders to members' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, -3, 0],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <TrendingUp className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.lifecycleTitle', { defaultValue: 'Order Lifecycle' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.lifecycleDesc', { defaultValue: 'End-to-end tracking' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, 2, -2, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <BarChart3 className="w-12 h-12 text-red-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.reportsTitle', { defaultValue: 'Business Reports' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.reportsDesc', { defaultValue: 'Comprehensive analytics' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Bot className="w-12 h-12 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.aiTitle', { defaultValue: 'AI Dashboard' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.aiDesc', { defaultValue: 'Smart analytics' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, -2, 0],
                                rotate: [0, 4, -4, 0],
                            }}
                            transition={{
                                duration: 2.3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Package className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.stockTitle', { defaultValue: 'Stock Management' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.stockDesc', { defaultValue: 'Inventory tracking' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, -3, 0],
                                rotate: [0, 8, -8, 0],
                                scale: [1, 1.08, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <DollarSign className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.profitTitle', { defaultValue: 'Profit Analysis' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.profitDesc', { defaultValue: 'Real-time calculations' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                x: [0, 2, -2, 0],
                                y: [0, -1, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Truck className="w-12 h-12 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.bulkDeliveryTitle', { defaultValue: 'Bulk Delivery' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.bulkDeliveryDesc', { defaultValue: 'Multiple courier assign' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                scale: [1, 1.06, 1],
                                x: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: 2.1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Users className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.customerHistoryTitle', { defaultValue: 'Customer History' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.customerHistoryDesc', { defaultValue: 'Complete order records' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                x: [0, 3, -3, 0],
                                y: [0, -1, 0],
                            }}
                            transition={{
                                duration: 2.7,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <Truck className="w-12 h-12 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.courierIntegrationTitle', { defaultValue: 'Courier Integration' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.courierIntegrationDesc', { defaultValue: 'Direct sending' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, -2, 0],
                                rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <FileText className="w-12 h-12 text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.bulkInvoiceTitle', { defaultValue: 'Bulk Invoice' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.bulkInvoiceDesc', { defaultValue: 'Mass generation' })}</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm p-4 py-16 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full hover:bg-white/8">
                        <motion.div
                            animate={{
                                y: [0, -2, 0],
                                scale: [1, 1.04, 1],
                            }}
                            transition={{
                                duration: 2.9,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="mx-auto mb-3 flex items-center justify-center"
                        >
                            <FileText className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <h3 className="font-bold text-white text-sm mb-1">{t('overview.cards.printMemoTitle', { defaultValue: 'Print & Memo' })}</h3>
                        <p className="text-xs text-gray-300">{t('overview.cards.printMemoDesc', { defaultValue: 'Delivery slips & memos' })}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}