import { Package, Users, BarChart3, Bot, DollarSign, CheckCircle, ArrowRight, Shield, Zap, Sparkles, Target } from "lucide-react";
import { motion } from "motion/react";

// Solution features mapped to pain points
const solutionFeatures = [
    {
        icon: Bot,
        title: "AI Business Intelligence",
        desc: "Ask questions in natural language and get instant charts, insights, and analytics about your business performance.",
        painPoint: "No Business Intelligence",
        benefit: "Smart Analytics",
        color: "text-blue-400",
        bgGradient: "from-blue-500/20 via-purple-500/10 to-blue-600/20",
        highlight: true,
        category: "AI & Analytics"
    },
    {
        icon: DollarSign,
        title: "Real-time Profit Analysis",
        desc: "See exactly which products are profitable with live calculations and automated profit tracking.",
        painPoint: "Profit-Loss Confusion",
        benefit: "Clear Profitability",
        color: "text-emerald-400",
        bgGradient: "from-emerald-500/20 via-green-500/10 to-emerald-600/20",
        highlight: false,
        category: "Financial Intelligence"
    },
    {
        icon: BarChart3,
        title: "Unified Data Dashboard",
        desc: "All your business data unified in one intelligent dashboard with real-time synchronization.",
        painPoint: "Data Scattered Everywhere",
        benefit: "Centralized Intelligence",
        color: "text-purple-400",
        bgGradient: "from-purple-500/20 via-pink-500/10 to-purple-600/20",
        highlight: false,
        category: "Data Management"
    },
    {
        icon: Zap,
        title: "Automated Reporting",
        desc: "Generate comprehensive business reports in seconds with AI-powered insights and visualizations.",
        painPoint: "Manual Reporting Takes Hours",
        benefit: "Instant Reports",
        color: "text-yellow-400",
        bgGradient: "from-yellow-500/20 via-orange-500/10 to-yellow-600/20",
        highlight: false,
        category: "Automation"
    },
    {
        icon: Package,
        title: "Smart Inventory Intelligence",
        desc: "AI-powered inventory management with predictive analytics and automated reorder suggestions.",
        painPoint: "Inventory Blindness",
        benefit: "Stock Intelligence",
        color: "text-cyan-400",
        bgGradient: "from-cyan-500/20 via-teal-500/10 to-cyan-600/20",
        highlight: false,
        category: "Inventory"
    },
    {
        icon: Users,
        title: "Team Performance Analytics",
        desc: "Advanced team analytics with individual performance tracking and conversion optimization.",
        painPoint: "Team Performance Mystery",
        benefit: "Performance Intelligence",
        color: "text-teal-400",
        bgGradient: "from-teal-500/20 via-green-500/10 to-teal-600/20",
        highlight: false,
        category: "Team Management"
    }
];

export default function TheSolutionSection() {
    return (
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-950 via-gray-900/95 to-gray-950">
            {/* Premium background effects */}
            
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Premium Header Section */}
                <div className="text-center mb-20 lg:mb-24">
                    {/* Premium transition indicator */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center mb-8"
                    >
                        <div className="flex items-center space-x-6">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/60 to-red-500"></div>
                            <div className="relative px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl"></div>
                                <div className="relative flex items-center space-x-2">
                                    <Sparkles className="w-4 h-4 text-emerald-400" />
                                    <span className="text-emerald-300 font-semibold text-sm tracking-wide">THE SOLUTION</span>
                                </div>
                            </div>
                            <div className="h-px w-16 bg-gradient-to-l from-emerald-500 via-emerald-500/60 to-transparent"></div>
                        </div>
                    </motion.div>
                    
                    {/* Premium Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-display tracking-tight leading-[1.1]">
                            Meet{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    ORYZA
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 blur-xl scale-110"></div>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/80 via-blue-500/80 to-purple-500/80 rounded-full"></div>
                            </span>
                            <br className="hidden sm:block" />
                            <span className="text-gray-100">Your AI-Powered</span>
                            <br className="hidden lg:block" />
                            <span className="text-gray-100">E-commerce Command Center</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Every pain point you just experienced? We've transformed them into your competitive advantages with intelligent automation.
                        </p>
                    </motion.div>

                    {/* Premium Before/After Comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16"
                    >
                        {/* Before Card */}
                        <div className="group relative p-6 lg:p-8 bg-gradient-to-br from-red-900/20 via-red-800/10 to-red-900/20 border border-red-500/30 rounded-2xl backdrop-blur-sm overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5"></div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                                    <h3 className="text-red-300 font-bold text-lg">Before Oryza</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-gray-300">
                                        <span className="text-red-400 mr-2 mt-1">×</span>
                                        <span>Hours wasted on manual reporting</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <span className="text-red-400 mr-2 mt-1">×</span>
                                        <span>Data scattered across platforms</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <span className="text-red-400 mr-2 mt-1">×</span>
                                        <span>Profit confusion and guesswork</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <span className="text-red-400 mr-2 mt-1">×</span>
                                        <span>Team performance mystery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* After Card */}
                        <div className="group relative p-6 lg:p-8 bg-gradient-to-br from-emerald-900/20 via-emerald-800/10 to-blue-900/20 border border-emerald-500/30 rounded-2xl backdrop-blur-sm overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
                            <div className="relative">
                                <div className="flex items-center mb-4">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                                    <h3 className="text-emerald-300 font-bold text-lg">With Oryza</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>Instant AI-powered insights</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>Unified intelligent dashboard</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>Real-time profit visibility</span>
                                    </li>
                                    <li className="flex items-start text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                                        <span>Complete team analytics</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Premium Features Grid */}
                <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {solutionFeatures.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-2 ${
                                feature.highlight 
                                    ? 'bg-gradient-to-br from-emerald-900/40 via-blue-900/30 to-purple-900/20 border-2 border-emerald-400/30 shadow-2xl shadow-emerald-500/10' 
                                    : 'bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/5'
                            }`}
                        >
                            {/* Premium highlight badge */}
                            {feature.highlight && (
                                <div className="absolute -top-4 left-6 z-20">
                                    <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-2xl">
                                        <div className="flex items-center space-x-1">
                                            <Bot className="w-3 h-3" />
                                            <span>AI POWERED</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            {/* Premium background effects */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            
                            {/* Card content */}
                            <div className="relative p-6 lg:p-8 h-full flex flex-col">
                                {/* Header section */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                                        feature.highlight 
                                            ? 'bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 shadow-xl shadow-emerald-500/30' 
                                            : 'bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 group-hover:from-emerald-500 group-hover:via-blue-500 group-hover:to-purple-500 group-hover:shadow-xl group-hover:shadow-emerald-500/20'
                                    }`}>
                                        <motion.div
                                            animate={{
                                                scale: feature.icon === Bot ? [1, 1.2, 1] :
                                                       feature.icon === DollarSign ? [1, 1.15, 1] :
                                                       feature.icon === Zap ? [1, 1.18, 1] :
                                                       [1, 1.1, 1],
                                                rotate: feature.icon === Bot ? [0, 10, -10, 0] :
                                                        feature.icon === DollarSign ? [0, 15, -15, 0] :
                                                        feature.icon === Zap ? [0, 20, -20, 0] :
                                                        [0, 5, -5, 0],
                                            }}
                                            transition={{
                                                duration: feature.icon === Bot ? 4 :
                                                         feature.icon === DollarSign ? 2.5 :
                                                         feature.icon === Zap ? 2 :
                                                         3.5,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <feature.icon className={`w-7 h-7 transition-colors duration-500 ${
                                                feature.highlight ? 'text-white' : 'text-gray-300 group-hover:text-white'
                                            }`} />
                                        </motion.div>
                                    </div>
                                    
                                    <div className="flex flex-col items-end space-y-2">
                                        <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full backdrop-blur-sm">
                                            <span className="text-emerald-300 text-xs font-semibold tracking-wide">{feature.benefit}</span>
                                        </div>
                                        <div className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg">
                                            <span className="text-gray-400 text-xs">{feature.category}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content section */}
                                <div className="flex-grow">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-500 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                                        {feature.desc}
                                    </p>
                                </div>
                                
                                {/* Problem solved indicator */}
                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <div className="flex items-center justify-between text-xs lg:text-sm">
                                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                                            <span className="text-red-400 line-through truncate">{feature.painPoint}</span>
                                            <ArrowRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
                                            <span className="text-emerald-400 font-semibold flex-shrink-0">✓ Solved</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Premium Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-20 lg:mt-24"
                >
                    <div className="relative inline-flex flex-col items-center space-y-6 max-w-3xl mx-auto">
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                            Transform every business challenge into a competitive advantage with intelligent automation
                        </p>
                        <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 border border-emerald-500/20 rounded-2xl backdrop-blur-sm">
                            <Shield className="w-5 h-5 text-emerald-400" />
                            <span className="text-emerald-300 font-semibold">Built specifically for Bangladeshi e-commerce</span>
                            <Target className="w-5 h-5 text-blue-400" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}