import { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Users, TrendingUp,
  Zap, CheckCircle, Mail,
  Bot,
  Phone
} from 'lucide-react';
import Hyperspeed from './blocks/Backgrounds/Hyperspeed/Hyperspeed';
// import ComprehensiveFeaturesOverview from './components/ComprehensiveFeaturesOverview';
import ProblemsSection from './components/ProblemsSection';
// import TheSolutionSection from './components/TheSolutionSection';
import ComprehensiveFeaturesOverview from './components/ComprehensiveFeaturesOverview';
import AiPreviewSection from './components/AiPreviewSection';
import ReviewsSection from './components/ReviewsSection';
import FullFeatures from './components/FullFeatures';

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
  /* const courierPartners = [
    "Pathao", "RedX", "Steadfast"
  ]; */

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <div className="pointer-events-none fixed inset-0 h-full w-full overflow-x-hidden -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(139,92,246,0.04),transparent_70%)]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Premium glow orbs */}
        {/* <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" /> */}
        {/* <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" /> */}
      </div>
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
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Bot className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                <div className="text-sm text-gray-300">Smart Analytics & Insights</div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <motion.div
                    animate={{
                      y: [0, -2, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">Real-time</div>
                <div className="text-sm text-gray-300">Live Business Monitoring</div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      x: [0, 1, -1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">Complete</div>
                <div className="text-sm text-gray-300">End-to-End Management</div>
                <div className="mt-auto pt-4 w-full rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full w-full"></div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Zap className="w-6 h-6 text-white" />
                  </motion.div>
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
              <path d="M6 9l6 6 6-6" />
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
      <ProblemsSection />

      {/* Comprehensive Features Overview */}
      <ComprehensiveFeaturesOverview />

      {/* <TheSolutionSection /> */}

      {/* Features Section */}
      <FullFeatures />

      {/* AI Demo Section */}
      <AiPreviewSection />
      {/* Early Testimonials */}
      <ReviewsSection />

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
              {/* <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free Trial</span>
              </div> */}
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Fast Setup</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>AI-Powered Analytics</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Data Migration</span>
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
              <a href="mailto:contact@pyzasoft.com" className="p-3 bg-gray-900 rounded-full hover:bg-red-600 transition-colors border border-gray-800" aria-label="Email">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="tel:+8801795665287" className="p-3 bg-gray-900 rounded-full hover:bg-orange-600 transition-colors border border-gray-800" aria-label="Email">
                <Phone className="w-5 h-5" aria-hidden="true" />
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