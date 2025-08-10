import { Bot, Package, Users, TrendingUp, BarChart3, Truck, FileText, DollarSign, Shield } from "lucide-react";
import { motion } from "motion/react";

const features = [
    {
        icon: Bot,
        title: "AI Business Intelligence",
        desc: "Ask questions in natural language and get instant charts, insights, and analytics about your business performance, sales trends, and profitability.",
        highlight: true,
        category: "AI & Analytics"
    },
    {
        icon: Package,
        title: "Complete Order Lifecycle Management",
        desc: "Fetch orders from WooCommerce, assign team members, track from placement to delivery with automated workflows and status updates.",
        highlight: false,
        category: "Order Management"
    },
    {
        icon: Users,
        title: "Team Management & Performance",
        desc: "Assign orders to team members, track individual performance metrics, conversion rates, and productivity with detailed analytics.",
        highlight: false,
        category: "Team Management"
    },
    {
        icon: TrendingUp,
        title: "Advanced Reporting & Profit Analysis",
        desc: "Generate comprehensive reports on sales, profit/loss, inventory turnover, and business performance with exportable data.",
        highlight: false,
        category: "Analytics & Reports"
    },
    {
        icon: BarChart3,
        title: "Smart Inventory & Stock Management",
        desc: "Real-time stock tracking, low inventory alerts, automatic reorder suggestions, and inventory optimization recommendations.",
        highlight: false,
        category: "Inventory"
    },
    {
        icon: Truck,
        title: "Bulk Delivery Partner Operations",
        desc: "Assign multiple orders to delivery partners in bulk, track shipments, and manage courier partnerships with Pathao, RedX, SA Paribahan.",
        highlight: false,
        category: "Logistics"
    },
    {
        icon: FileText,
        title: "Customer Order History & CRM",
        desc: "Complete customer profiles with order history, purchase patterns, and personalized insights for better customer relationship management.",
        highlight: false,
        category: "Customer Management"
    },
    {
        icon: DollarSign,
        title: "Automated Invoicing & Documentation",
        desc: "Bulk invoice generation, delivery slip printing, memo creation, and automated documentation for seamless order processing.",
        highlight: false,
        category: "Documentation"
    },
    {
        icon: Shield,
        title: "Fraud Detection & Security",
        desc: "Duplicate order detection, fraud prevention, and security measures to protect your business from fake orders.",
        highlight: false,
        category: "Security"
    }
];


export default function FullFeatures() {
    return (

        <section id="features" className="relative overflow-hidden pb-20"> {/* bg-gradient-to-br from-gray-900 to-gray-950 */}
            {/* Background glows */}
            {/*  <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 w-[26rem] h-[26rem] rounded-full bg-green-500/15 blur-[100px] animate-blob" />
        <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] rounded-full bg-blue-500/15 blur-[110px] animate-blob-slow animation-delay-2s" />
      </div> */}
            <div className="relative container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4 font-display tracking-tight">
                        <span className="text-green-600">Smart Features</span> for Modern Business Owners
                    </h2>
                    <p className="text-xl text-gray-300">Built with advanced technology to help you make better business decisions</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <div key={idx} className={`group p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${feature.highlight ? 'ring-2 ring-green-500 relative bg-gradient-to-br from-green-950/40 to-blue-900/20' : 'bg-gray-900 border border-gray-800'
                            }`}>
                            {/* {feature.highlight && (
                <div className="absolute -top-3 left-6 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                  🤖 AI POWERED
                </div>
              )} */}
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${feature.highlight
                                    ? 'bg-gradient-to-r from-green-500 to-blue-500'
                                    : 'bg-gradient-to-r from-gray-800 to-gray-700 group-hover:from-green-500 group-hover:to-blue-500'
                                    }`}>
                                    <motion.div
                                        animate={{
                                            scale: feature.icon === Bot ? [1, 1.15, 1] :
                                                feature.icon === Package ? [1, 1.05, 1] :
                                                    feature.icon === Users ? [1, 1.08, 1] :
                                                        feature.icon === TrendingUp ? [1, 1.06, 1] :
                                                            feature.icon === BarChart3 ? [1, 1.04, 1] :
                                                                feature.icon === Truck ? [1, 1.02, 1] :
                                                                    feature.icon === FileText ? [1, 1.03, 1] :
                                                                        feature.icon === DollarSign ? [1, 1.1, 1] :
                                                                            [1, 1.05, 1], // Shield
                                            rotate: feature.icon === Bot ? [0, 8, -8, 0] :
                                                feature.icon === DollarSign ? [0, 10, -10, 0] :
                                                    feature.icon === TrendingUp ? [0, 3, -3, 0] :
                                                        feature.icon === Shield ? [0, -4, 4, 0] :
                                                            [0, 2, -2, 0],
                                            y: feature.icon === TrendingUp ? [0, -2, 0] :
                                                feature.icon === Truck ? [0, -1, 0] :
                                                    [0, 0, 0],
                                            x: feature.icon === Truck ? [0, 1, -1, 0] :
                                                feature.icon === Users ? [0, 0.5, -0.5, 0] :
                                                    [0, 0, 0]
                                        }}
                                        transition={{
                                            duration: feature.icon === Bot ? 3.5 :
                                                feature.icon === DollarSign ? 2.2 :
                                                    feature.icon === TrendingUp ? 2.8 :
                                                        feature.icon === Truck ? 2.6 :
                                                            feature.icon === Users ? 2.4 :
                                                                3.0,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <feature.icon className={`w-7 h-7 transition-colors duration-300 ${feature.highlight ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                                    </motion.div>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 bg-gray-800 px-2 py-1 rounded-full">
                                    {feature.category}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Integration Partners */}
                {/* <div className="mt-20 text-center">
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <Truck className="w-6 h-6 mr-3 text-green-600" />
              সকল জনপ্রিয় কুরিয়ার সার্ভিসের সাথে Integration
            </h3>
            <div className="flex flex-row justify-center w-full gap-4">
              {courierPartners.map((courier, idx) => (
                <div key={idx} className="group bg-gradient-to-r from-green-950/30 to-blue-900/20 hover:from-green-900/40 hover:to-blue-900/40 p-4 rounded-xl border border-transparent hover:border-green-700/40 transition-all duration-300 transform hover:-translate-y-1 w-full">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-200 text-sm">{courier}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6 text-sm">আরও courier partners যোগ হচ্ছে শীঘ্রই...</p>
          </div>
        </div> */}
            </div>
        </section>
    );
}