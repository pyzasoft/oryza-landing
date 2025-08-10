import { DollarSign, BarChart3, Clock, AlertTriangle, Package, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const painPoints = [
    {
        icon: DollarSign,
        title: "Profit-Loss Confusion",
        desc: "You're selling products but can't tell which ones are actually profitable.",
        color: "text-red-500",
        bgGradient: "from-red-600/20 to-red-800/10",
        intensity: "High Impact"
    },
    {
        icon: BarChart3,
        title: "Data Scattered Everywhere",
        desc: "Order data in one place, inventory in another, payments somewhere else.",
        color: "text-orange-500",
        bgGradient: "from-orange-600/20 to-orange-800/10",
        intensity: "Critical"
    },
    {
        icon: Clock,
        title: "Manual Reporting Takes Hours",
        desc: "Spending entire days creating reports instead of growing your business.",
        color: "text-yellow-500",
        bgGradient: "from-yellow-600/20 to-yellow-800/10",
        intensity: "Time Drain"
    },
    {
        icon: AlertTriangle,
        title: "No Business Intelligence",
        desc: "Making decisions based on gut feeling instead of real data insights.",
        color: "text-blue-500",
        bgGradient: "from-blue-600/20 to-blue-800/10",
        intensity: "Risk Factor"
    },
    {
        icon: Package,
        title: "Inventory Blindness",
        desc: "Don't know what's selling fast, what's stuck, or when to reorder.",
        color: "text-purple-500",
        bgGradient: "from-purple-600/20 to-purple-800/10",
        intensity: "Stock Issues"
    },
    {
        icon: Users,
        title: "Team Performance Mystery",
        desc: "Can't track who's performing well and who needs support.",
        color: "text-green-500",
        bgGradient: "from-green-600/20 to-green-800/10",
        intensity: "Team Blind Spot"
    }
];

// Duplicate the array to create seamless infinite scroll
const infinitePainPoints = [...painPoints, ...painPoints];

export default function ProblemsSection() {
    return (
        <section className="relative overflow-hidden py-20" id='problems'>
            {/* Dark emphasis background */}
           {/*  <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/80 to-gray-950" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-transparent to-red-950/10" />
            </div> */}
            
            <div className="relative  mx-auto px-0">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    {/* <div className="inline-flex items-center px-4 py-2 bg-red-900/30 border border-red-500/30 rounded-full mb-6">
                        <TrendingDown className="w-4 h-4 text-red-400 mr-2" />
                        <span className="text-red-300 font-medium text-sm">Pain Points Analysis</span>
                    </div> */}
                    <div className="text-3xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
                        Running an E-commerce Business<br />
                        <span className="text-red-500 relative">
                            Shouldn't Be This Hard
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500/60 via-red-400/80 to-red-500/60 rounded-full"></span>
                        </span>
                    </div>
                    <span className="text-xl text-gray-300">Every day, these challenges drain your time, money, and energy</span>
                </div>

                {/* Horizontal Infinite Scroll Container */}
                <div className="relative">
                    {/* Gradient masks for seamless scroll effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Scrolling container */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{
                                x: [0, -6 * 320 - 6 * 6] // Move by exactly 6 cards + gaps
                            }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                            style={{ width: "200%" }}
                        >
                            {infinitePainPoints.map((problem, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative flex-shrink-0 w-80 h-64 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-red-500/20 hover:border-red-400/40 transition-all duration-500 overflow-hidden"
                                    style={{ minWidth: "320px" }}
                                >
                                    {/* Background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgGradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-500/20 to-orange-500/10 rounded-full blur-xl"></div>
                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-red-600/15 to-transparent rounded-full blur-lg"></div>
                                    
                                    {/* Content */}
                                    <div className="relative p-6 h-full flex flex-col">
                                        {/* Intensity badge */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="px-3 py-1 bg-red-900/50 border border-red-500/30 rounded-full">
                                                <span className="text-red-300 text-xs font-semibold">{problem.intensity}</span>
                                            </div>
                                            <div className="w-12 h-12 bg-gray-800/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <motion.div
                                                    animate={{
                                                        y: problem.icon === DollarSign ? [0, -3, 0] :
                                                            problem.icon === BarChart3 ? [0, 2, -2, 0] :
                                                                problem.icon === Clock ? [0, 0, 0] :
                                                                    problem.icon === AlertTriangle ? [0, -1, 1, 0] :
                                                                        problem.icon === Package ? [0, 1, -1, 0] :
                                                                            [0, -2, 2, 0], // Users
                                                        rotate: problem.icon === DollarSign ? [0, 5, -5, 0] :
                                                            problem.icon === AlertTriangle ? [0, -3, 3, 0] :
                                                                problem.icon === Clock ? [0, 360] :
                                                                    [0, 2, -2, 0],
                                                        scale: problem.icon === Package ? [1, 1.1, 1] : [1, 1.05, 1]
                                                    }}
                                                    transition={{
                                                        duration: problem.icon === Clock ? 8 :
                                                            problem.icon === DollarSign ? 2 :
                                                                problem.icon === AlertTriangle ? 1.8 : 3,
                                                        repeat: Infinity,
                                                        ease: problem.icon === Clock ? "linear" : "easeInOut"
                                                    }}
                                                >
                                                    <problem.icon className={`w-6 h-6 ${problem.color}`} />
                                                </motion.div>
                                            </div>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300 leading-tight">
                                            {problem.title}
                                        </h3>
                                        
                                        {/* Description */}
                                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                            {problem.desc}
                                        </p>
                                        
                                        {/* Pain indicator */}
                                        <div className="mt-4 flex items-center">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
                                                <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse delay-200"></div>
                                            </div>
                                            <span className="ml-2 text-red-400 text-xs font-medium">Active Pain Point</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Call to action */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">Sound familiar? You're not alone.</p>
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl">
                        <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-white font-medium">There's a better way to run your business</span>
                    </div>
                </div>
            </div>
        </section>
    );
}