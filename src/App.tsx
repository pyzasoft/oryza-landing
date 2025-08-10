import { useState, useEffect, useMemo } from 'react';
import {
  Package, Users, TrendingUp, BarChart3, Truck, FileText,
  Shield, Zap, CheckCircle, Mail,
  AlertTriangle, Clock, DollarSign, Quote, Bot,
  PieChart, Search, Database
} from 'lucide-react';
import Hyperspeed from './blocks/Backgrounds/Hyperspeed/Hyperspeed';

const OryzaLanding = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [viewport, setViewport] = useState<'mobile' | 'laptop' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    if (w < 640) return 'mobile';
    if (w < 1280) return 'laptop';
    return 'desktop';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setViewport(w < 640 ? 'mobile' : w < 1280 ? 'laptop' : 'desktop');
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const hyperspeedOptions = useMemo(() => {
    if (viewport === 'mobile') {
      return {
        distortion: 'turbulentDistortion' as const,
        length: 320,
        roadWidth: 8,
        islandWidth: 1.6,
        lanesPerRoad: 2,
        fov: 85,
        fovSpeedUp: 120,
        speedUp: 1.4,
        carLightsFade: 0.35,
        totalSideLightSticks: 12,
        lightPairsPerRoadWay: 20,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.4] as [number, number],
        lightStickHeight: [1.1, 1.4] as [number, number],
        movingAwaySpeed: [40, 60] as [number, number],
        movingCloserSpeed: [-90, -120] as [number, number],
        carLightsLength: [320 * 0.03, 320 * 0.18] as [number, number],
        carLightsRadius: [0.05, 0.12] as [number, number],
        carWidthPercentage: [0.28, 0.45] as [number, number],
        carShiftX: [-0.7, 0.7] as [number, number],
        carFloorSeparation: [0, 4] as [number, number],
        colors: {
          roadColor: 0x080808,
          islandColor: 0x0a0a0a,
          background: 0x000000,
          shoulderLines: 0xffffff,
          brokenLines: 0xffffff,
          leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
          rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
          sticks: 0x03B3C3,
        },
        pixelRatioCap: 1.75,
      };
    }
    if (viewport === 'laptop') {
      return {
        distortion: 'turbulentDistortion' as const,
        length: 380,
        roadWidth: 10,
        islandWidth: 2,
        lanesPerRoad: 3,
        fov: 90,
        fovSpeedUp: 140,
        speedUp: 1.8,
        carLightsFade: 0.4,
        totalSideLightSticks: 18,
        lightPairsPerRoadWay: 30,
        shoulderLinesWidthPercentage: 0.05,
        brokenLinesWidthPercentage: 0.1,
        brokenLinesLengthPercentage: 0.5,
        lightStickWidth: [0.12, 0.48] as [number, number],
        lightStickHeight: [1.2, 1.6] as [number, number],
        movingAwaySpeed: [55, 75] as [number, number],
        movingCloserSpeed: [-110, -150] as [number, number],
        carLightsLength: [380 * 0.03, 380 * 0.2] as [number, number],
        carLightsRadius: [0.05, 0.13] as [number, number],
        carWidthPercentage: [0.3, 0.48] as [number, number],
        carShiftX: [-0.8, 0.8] as [number, number],
        carFloorSeparation: [0, 5] as [number, number],
        colors: {
          roadColor: 0x080808,
          islandColor: 0x0a0a0a,
          background: 0x000000,
          shoulderLines: 0xffffff,
          brokenLines: 0xffffff,
          leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
          rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
          sticks: 0x03B3C3,
        },
        pixelRatioCap: 2,
      };
    }
    // desktop
    return {
      distortion: 'turbulentDistortion' as const,
      length: 420,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 95,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.45,
      totalSideLightSticks: 24,
      lightPairsPerRoadWay: 44,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5] as [number, number],
      lightStickHeight: [1.3, 1.7] as [number, number],
      movingAwaySpeed: [60, 80] as [number, number],
      movingCloserSpeed: [-120, -160] as [number, number],
      carLightsLength: [420 * 0.03, 420 * 0.2] as [number, number],
      carLightsRadius: [0.05, 0.14] as [number, number],
      carWidthPercentage: [0.3, 0.5] as [number, number],
      carShiftX: [-0.8, 0.8] as [number, number],
      carFloorSeparation: [0, 5] as [number, number],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x000000,
        shoulderLines: 0xffffff,
        brokenLines: 0xffffff,
        leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
        rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
        sticks: 0x03B3C3,
      },
      pixelRatioCap: 2,
    };
  }, [viewport]);

  const painPoints = [
    {
      icon: DollarSign,
      title: "Profit-Loss Confusion",
      desc: "You're selling products but can't tell which ones are actually profitable.",
      color: "text-red-500"
    },
    {
      icon: BarChart3,
      title: "Data Scattered Everywhere",
      desc: "Order data in one place, inventory in another, payments somewhere else.",
      color: "text-orange-500"
    },
    {
      icon: Clock,
      title: "Manual Reporting Takes Hours",
      desc: "Spending entire days creating reports instead of growing your business.",
      color: "text-yellow-500"
    },
    {
      icon: AlertTriangle,
      title: "No Business Intelligence",
      desc: "Making decisions based on gut feeling instead of real data insights.",
      color: "text-blue-500"
    },
    {
      icon: Package,
      title: "Inventory Blindness",
      desc: "Don't know what's selling fast, what's stuck, or when to reorder.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Team Performance Mystery",
      desc: "Can't track who's performing well and who needs support.",
      color: "text-green-500"
    }
  ];

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

  const testimonials = [
    {
      name: "Early User",
      business: "Fashion Store Owner",
      text: "The AI Business Intelligence feature is incredible. I can just ask which products are performing well and get instant answers with charts. It's so intuitive.",
      metric: "Early Adopter",
      image: "EU"
    },
    {
      name: "Development Partner",
      business: "Electronics Retailer",
      text: "Finally, a system built specifically for Bangladeshi e-commerce. The WooCommerce integration works perfectly and the insights help me focus on what matters.",
      metric: "Dev Partner",
      image: "DP"
    }
  ];



  /* const courierPartners = [
    "Pathao", "RedX", "Steadfast"
  ]; */

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/+8801795665287"
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20B358] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.94 11.94 0 0012 .04C5.37.04.02 5.39.02 12.03c0 2.12.56 4.19 1.63 6.01L.05 24l6.12-1.6a12.02 12.02 0 005.83 1.51h.01c6.63 0 12-5.36 12-11.97a11.93 11.93 0 00-3.49-8.46zM12 21.5h-.01a9.46 9.46 0 01-4.82-1.32l-.35-.2-3.63.95.97-3.54-.22-.36a9.45 9.45 0 01-1.46-5.04c0-5.22 4.26-9.48 9.5-9.48a9.45 9.45 0 016.72 2.78 9.42 9.42 0 012.79 6.7c0 5.22-4.26 9.48-9.5 9.48zm5.48-7.17c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.08c.15.2 2.09 3.2 5.08 4.49.71.3 1.26.48 1.7.62.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42z" />
        </svg>
      </a>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/70 backdrop-blur-md'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="font-bold text-xl text-white">O</span>
              </div> */}
              <div>
                <span className="text-2xl font-bold text-gray-100 font-display tracking-tight">ORYZA</span>
                <div className="text-xs text-gray-400 -mt-1">by Pyzasoft</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {/* <a href="#ai-demo" className="text-gray-300 hover:text-green-400 font-medium">AI Demo</a> */}
              <a href="#features" className="text-gray-300 hover:text-green-400 font-medium">Features</a>
              {/* <a href="#pricing" className="text-gray-300 hover:text-green-400 font-medium">Pricing</a> */}
              <a href="https://wa.me/+8801795665287" target="_blank" rel="noopener" className="btn btn-whatsapp">
                WhatsApp Us
              </a>
            </div>
            {/* Mobile WhatsApp button instead of hamburger menu */}
            <div className="md:hidden">
              <a href="https://wa.me/+8801795665287" target="_blank" rel="noopener" className="btn btn-whatsapp btn-sm">
                WhatsApp Us
              </a>
            </div>
            {/* <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-800">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button> */}
          </div>
        </div>
      </nav>

            {/* Hero Section */}
      <section className="relative pt-28 pb-28 overflow-hidden isolate min-h-[100svh] md:min-h-[100vh] flex items-center justify-center">
        {/* Hyperspeed Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
          {/* <div className="w-full h-full"> */}
            <Hyperspeed effectOptions={hyperspeedOptions} />
          {/* </div> */}
        </div>
        <div className="relative container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* New Launch Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-green-300 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">🚀 Newly Launched - Built for Modern E-commerce</span>
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-display">
              <span className="text-shimmer">Stop Guessing.</span> <br />
              Start <span className="relative bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Growing
                <span className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500 -z-10"></span>
              </span> Your Business.
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The first e-commerce management system with AI Business Intelligence.
              Make smarter decisions with real-time insights, optimize your operations, and grow your business with data-driven strategies.
              {/* Built for Bangladeshi e-commerce. AI Business Intelligence, WooCommerce sync, courier integrations (Pathao, RedX, SA Paribahan) and profit analytics — all in one place. */}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#ai-demo" className="btn btn-primary btn-lg">AI Business Intelligence</a>
              {/* <a href="#features" className="btn btn-outline btn-lg">See Features</a> */}
              <a href="https://wa.me/+8801795665287" target="_blank" rel="noopener" className="btn btn-outline backdrop-blur-xl btn-lg font-bold">Schedule a Demo</a>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                <div className="text-sm text-gray-300">Smart Analytics & Insights</div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Real-time</div>
                <div className="text-sm text-gray-300">Live Business Monitoring</div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Complete</div>
                <div className="text-sm text-gray-300">End-to-End Management</div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">Fast Setup</div>
                <div className="text-sm text-gray-300">Easy to start </div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">9+</div>
                <div className="text-gray-400 font-medium">Core Features</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">6+</div>
                <div className="text-gray-400 font-medium">Courier Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-400 font-medium">Real-time Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-400 font-medium">Bangladesh Built</div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Bottom gradient and blur to blend into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/60 to-gray-950" />
          <div className="absolute inset-x-0 bottom-0 h-40 backdrop-blur-2xl opacity-80 [mask-image:linear-gradient(to_top,black,transparent)]" />
        </div>

        {/* Scroll to bottom button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <a href="#problems" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-md">
            <span className="text-sm font-medium">Scroll to bottom</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </div>
      </section>
      {/* Hero bottom blend into next section */}
      

      {/* Trusted Brands */}
      {/* <section className="py-8 bg-gray-50 border-t border-b">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600 mb-4">বিশ্বস্ত ব্র্যান্ডসমূহ</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedBrands.map((brand, idx) => (
              <div key={idx} className="px-6 py-3 bg-gray-900 rounded-lg shadow-sm border border-gray-800">
                <span className="font-semibold text-gray-200">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      {/* Problems Section */}
      <section className="relative overflow-hidden py-20 " id='problems'>
        {/* Background glows */}
        {/* <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-red-600/10 blur-[100px] animate-blob" />
          <div className="absolute bottom-0 -left-24 w-[30rem] h-[30rem] rounded-full bg-orange-500/10 blur-[110px] animate-blob-slow animation-delay-2s" />
        </div> */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
              Running an E-commerce Business <span className="text-red-600">Shouldn't Be This Hard</span>
            </h2>
            <p className="text-xl text-gray-300">Common challenges every e-commerce owner faces daily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {painPoints.map((problem, idx) => (
              <div key={idx} className="group p-8 bg-gray-900 rounded-3xl border border-gray-800 hover:border-red-500/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-full opacity-30"></div>
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed">{problem.desc}</p>
                {/* <div className="mt-4 flex items-center text-red-500 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Common Issue
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Features Overview */}
      <section className="relative overflow-hidden py-20 ">
        {/* Background glows */}
        {/*   <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[100px] animate-blob" />
          <div className="absolute -bottom-24 right-1/4 w-[24rem] h-[24rem] rounded-full bg-emerald-500/10 blur-[100px] animate-blob-slow animation-delay-2s" />
        </div> */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-3xl md:text-3xl font-bold text-white mb-4">The Solution to Your Problems?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Complete <span className="text-green-600">E-commerce Management</span> System
            </h2>
            <p className="text-xl text-gray-300">Everything you need to run and scale your online business</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-950/40 to-blue-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-blue-900/30">
              <Package className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">WooCommerce Integration</h3>
              <p className="text-xs text-gray-300">Automatic order fetching</p>
            </div>

            <div className="group bg-gradient-to-br from-green-950/40 to-green-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-900/30">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Team Assignment</h3>
              <p className="text-xs text-gray-300">Assign orders to members</p>
            </div>

            <div className="group bg-gradient-to-br from-teal-950/40 to-teal-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-teal-900/30">
              <TrendingUp className="w-8 h-8 text-teal-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Order Lifecycle</h3>
              <p className="text-xs text-gray-300">End-to-end tracking</p>
            </div>

            <div className="group bg-gradient-to-br from-red-950/40 to-red-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-red-900/30">
              <BarChart3 className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Business Reports</h3>
              <p className="text-xs text-gray-300">Comprehensive analytics</p>
            </div>

            <div className="group bg-gradient-to-br from-orange-950/40 to-orange-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-orange-900/30">
              <Bot className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">AI Dashboard</h3>
              <p className="text-xs text-gray-300">Smart analytics</p>
            </div>

            <div className="group bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-cyan-900/30">
              <Package className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Stock Management</h3>
              <p className="text-xs text-gray-300">Inventory tracking</p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-yellow-900/30">
              <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Profit Analysis</h3>
              <p className="text-xs text-gray-300">Real-time calculations</p>
            </div>

            <div className="group bg-gradient-to-br from-indigo-950/40 to-indigo-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-indigo-900/30">
              <Truck className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Bulk Delivery</h3>
              <p className="text-xs text-gray-300">Multiple courier assign</p>
            </div>

            <div className="group bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-emerald-900/30">
              <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Customer History</h3>
              <p className="text-xs text-gray-300">Complete order records</p>
            </div>

            <div className="group bg-gradient-to-br from-teal-950/40 to-teal-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-teal-900/30">
              <Truck className="w-8 h-8 text-teal-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Courier Integration</h3>
              <p className="text-xs text-gray-300">Direct sending</p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/40 to-gray-800/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-800/30">
              <FileText className="w-8 h-8 text-gray-300 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Bulk Invoice</h3>
              <p className="text-xs text-gray-300">Mass generation</p>
            </div>

            <div className="group bg-gradient-to-br from-emerald-950/40 to-emerald-900/20 p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-emerald-900/30">
              <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-white text-sm mb-1">Print & Memo</h3>
              <p className="text-xs text-gray-300">Delivery slips & memos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative overflow-hidden py-20 "> {/* bg-gradient-to-br from-gray-900 to-gray-950 */}
        {/* Background glows */}
        {/*  <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 w-[26rem] h-[26rem] rounded-full bg-green-500/15 blur-[100px] animate-blob" />
          <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] rounded-full bg-blue-500/15 blur-[110px] animate-blob-slow animation-delay-2s" />
        </div> */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
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
                    <feature.icon className={`w-7 h-7 transition-colors duration-300 ${feature.highlight ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
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

      {/* Early Testimonials */}
      <section className="relative overflow-hidden py-20 ">
        {/* Background glows */}
        {/*   <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-1/4 w-[24rem] h-[24rem] rounded-full bg-green-500/10 blur-[100px] animate-blob" />
          <div className="absolute bottom-0 left-1/5 w-[28rem] h-[28rem] rounded-full bg-blue-500/10 blur-[110px] animate-blob-slow animation-delay-2s" />
        </div> */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
              Early <span className="text-green-600">Feedback</span>
            </h2>
            <p className="text-xl text-gray-300">What our early users and development partners are saying</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-full opacity-30"></div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-300">{testimonial.business}</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-bold shadow-lg">
                  ⭐ {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="ai-demo" className="relative overflow-hidden py-20 "> {/* bg-gradient-to-br from-gray-900 to-gray-950 */}
        {/* Background glows */}
        {/*  <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/5 w-[26rem] h-[26rem] rounded-full bg-emerald-500/12 blur-[100px] animate-blob" />
          <div className="absolute -bottom-20 right-1/6 w-[30rem] h-[30rem] rounded-full bg-blue-500/12 blur-[110px] animate-blob-slow animation-delay-2s" />
        </div> */}
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
              <span className="text-green-600">AI Business Intelligence</span> {/* in Action */}
            </h2>
            <p className="text-xl text-gray-300">Ask natural language questions and get instant visual insights from your real business data</p>
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
                  <div className="font-semibold">AI Business Intelligence</div>
                  <div className="text-sm opacity-90">Natural language analytics • Real-time insights • AI-powered analytics</div>
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
                  <p className="text-gray-200 font-medium">show me yesterday's top selling products</p>
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
                    <span>Press Enter to analyze • Shift+Enter for new line</span>
                    <div className="flex space-x-2">
                      <button className="btn btn-outline btn-sm">⚡ Quick Insights</button>
                      <button className="btn btn-primary btn-sm">✨ Analyze</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="p-6">
                {/* Chart Title */}
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold text-white">Top Selling Products Yesterday</h3>
                  <div className="ml-auto text-sm text-gray-500">Chart Type: BarChart | Sales Performance</div>
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
                    <div>Product A</div>
                    <div>Product B</div>
                    <div>Product C</div>
                    <div>Product D</div>
                    <div>Product E</div>
                    <div>Product F</div>
                    <div>Product G</div>
                    <div>Product H</div>
                    <div>Product I</div>
                    <div>More...</div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center text-white">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="font-semibold">Results Table</span>
                    </div>
                    <button className="btn btn-white btn-sm">📊 Export CSV</button>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input
                        placeholder="Search results..."
                        className="px-3 py-2 bg-gray-950 border border-gray-800 text-gray-200 rounded-lg text-sm placeholder:text-gray-500"
                      />
                      <select className="px-3 py-2 bg-gray-950 border border-gray-800 text-gray-200 rounded-lg text-sm">
                        <option>All Columns</option>
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
                            <td className="py-3 px-4 text-gray-100">Product A</td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-100">410</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                            <td className="py-3 px-4 text-gray-100">Product B</td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-100">274</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                            <td className="py-3 px-4 text-gray-100">Product C</td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-100">249</td>
                          </tr>
                          <tr className="border-b border-gray-800 hover:bg-gray-900/60">
                            <td className="py-3 px-4 text-gray-100">Product D</td>
                            <td className="py-3 px-4 text-right font-semibold text-gray-100">238</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 text-gray-500">Showing 1 to 10 of 16 results</td>
                            <td className="py-3 px-4 text-right text-gray-500">Page 1 of 2</td>
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
                <Search className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Natural Language Queries</h3>
                <p className="text-gray-300 text-sm">Ask questions just like you would ask a human analyst</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
                <PieChart className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Instant Visualizations</h3>
                <p className="text-gray-300 text-sm">Get beautiful charts and graphs generated automatically</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl text-center border border-gray-800">
                <Database className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-white mb-2">Exportable Data Tables</h3>
                <p className="text-gray-300 text-sm">Download your results as CSV for further analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-green-600 to-blue-600">
        {/* Subtle highlight */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-white/10 blur-[140px]" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
              Ready to Experience AI-Powered Analytics?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our early adopters and be among the first to revolutionize your e-commerce business with AI-powered insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://wa.me/+8801795665287" target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg font-bold">Schedule a Demo</a>
              {/* <a href="mailto:hello@pyzasoft.com" className="btn btn-outline-white btn-lg">Schedule a Demo</a> */}
            </div>

            <div className="flex justify-center items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>AI-Powered Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="page-footer" className="py-12 bg-gray-950 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="font-bold text-xl">O</span>
              </div> */}
              <div>
                <span className="text-2xl font-bold">ORYZA</span>
                <div className="text-sm text-gray-400">by Pyzasoft • Newly Launched</div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://facebook.com/pyzasoft" className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-colors border border-gray-800" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.405.595 24 1.326 24h11.495v-9.294H9.691V11.09h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.59l-.467 3.616h-3.123V24h6.127C23.405 24 24 23.405 24 22.674V1.326C24 .595 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://wa.me/+8801795665287" className="p-3 bg-gray-900 rounded-full hover:bg-[#25D366] transition-colors border border-gray-800" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.94 11.94 0 0012 .04C5.37.04.02 5.39.02 12.03c0 2.12.56 4.19 1.63 6.01L.05 24l6.12-1.6a12.02 12.02 0 005.83 1.51h.01c6.63 0 12-5.36 12-11.97a11.93 11.93 0 00-3.49-8.46zM12 21.5h-.01a9.46 9.46 0 01-4.82-1.32l-.35-.2-3.63.95.97-3.54-.22-.36a9.45 9.45 0 01-1.46-5.04c0-5.22 4.26-9.48 9.5-9.48a9.45 9.45 0 016.72 2.78 9.42 9.42 0 012.79 6.7c0 5.22-4.26 9.48-9.5 9.48zm5.48-7.17c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.21 3.08c.15.2 2.09 3.2 5.08 4.49.71.3 1.26.48 1.7.62.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42z" />
                </svg>
              </a>
              <a href="mailto:hello@pyzasoft.com" className="p-3 bg-gray-900 rounded-full hover:bg-red-600 transition-colors border border-gray-800" aria-label="Email">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2025 Pyzasoft. All rights reserved.{/*  Newly Launched • Made in Bangladesh */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OryzaLanding;