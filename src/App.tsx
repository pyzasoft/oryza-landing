import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Package, Users, TrendingUp, BarChart3, Truck, FileText, Brain, 
  Shield, Zap, CheckCircle, Star, ArrowRight, Menu, X, Phone, Mail, MessageCircle,
  AlertTriangle, Clock, DollarSign, Target, Eye, PlayCircle, Quote, Bot, 
  PieChart, LineChart, Search, Calculator, Database
} from 'lucide-react';

const OryzaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      desc: "Ask questions in natural language, get instant charts and data tables with real insights.",
      highlight: true
    },
    { 
      icon: Package, 
      title: "Smart Order Management", 
      desc: "WooCommerce integration with automated order processing and tracking.",
      highlight: false
    },
    { 
      icon: TrendingUp, 
      title: "Real-time Profit Tracking", 
      desc: "Know your profit margins instantly for every product and order.",
      highlight: false
    },
    { 
      icon: Truck, 
      title: "Multi-Courier Integration", 
      desc: "Connect with Pathao, RedX, SA Paribahan and other local couriers.",
      highlight: false
    },
    { 
      icon: Users, 
      title: "Team Performance Analytics", 
      desc: "Track KPIs, conversion rates, and productivity for each team member.",
      highlight: false
    },
    { 
      icon: Shield, 
      title: "Duplicate Order Detection", 
      desc: "AI-powered system to identify and prevent fake/duplicate orders.",
      highlight: false
    }
  ];

  const testimonials = [
    {
      name: "Early User",
      business: "Fashion Store Owner",
      text: "The AI Business Intelligence feature is incredible. I can just ask which products are losing money and get instant answers with charts.",
      metric: "Early Adopter",
      image: "EU"
    },
    {
      name: "Development Partner",
      business: "Electronics Retailer",
      text: "Finally, a system built specifically for Bangladeshi e-commerce. The WooCommerce integration works perfectly.",
      metric: "Dev Partner",
      image: "DP"
    }
  ];

  const trustedBrands = [
    "Dhaka Fashion", "BeautyBD", "TechWorld", "GadgetHub", "StyleZone", "HomeDecor"
  ];

  const courierPartners = [
    "Pathao", "RedX", "SA Paribahan", "Sundarban", "Karatoya", "eCourier"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="font-bold text-xl text-white">O</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Oryza</span>
                <div className="text-xs text-gray-500 -mt-1">by Pyzasoft</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#ai-demo" className="text-gray-700 hover:text-blue-600 font-medium">AI Demo</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Start Free Trial
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* New Launch Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">🚀 Newly Launched - Built for Modern E-commerce</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Guessing. <br />
              Start <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Knowing</span> Your Business.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The first e-commerce management system with AI Business Intelligence. 
              Ask questions in natural language and get instant business insights with charts and data tables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center">
                Try AI Business Intelligence
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                <PlayCircle className="w-5 h-5 mr-2" />
                See AI Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">New</div>
                <div className="text-sm text-gray-600">Just Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">AI-First</div>
                <div className="text-sm text-gray-600">Business Intelligence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">Local</div>
                <div className="text-sm text-gray-600">Built for Bangladesh</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">Free</div>
                <div className="text-sm text-gray-600">Trial Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-8 bg-gray-50 border-t border-b">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600 mb-4">বিশ্বস্ত ব্র্যান্ডসমূহ</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustedBrands.map((brand, idx) => (
              <div key={idx} className="px-6 py-3 bg-white rounded-lg shadow-sm">
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="ai-demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">AI Business Intelligence</span> in Action
            </h2>
            <p className="text-xl text-gray-600">Ask natural language questions, get instant visual insights from your real data</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* AI Interface Demo */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
              {/* AI Chat Interface Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">✨</span>
                </div>
                <div className="text-white">
                  <div className="font-semibold">AI Business Intelligence</div>
                  <div className="text-sm opacity-90">Natural language analytics • Real-time insights • Powered by AI</div>
                </div>
                <div className="ml-auto flex space-x-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>

              {/* User Input */}
              <div className="p-6 border-b bg-gray-50">
                <div className="bg-white p-4 rounded-xl shadow-sm border">
                  <p className="text-gray-700 font-medium">show me yesterday's product sold</p>
                  <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
                    <span>Press Enter to analyze • Shift+Enter for new line</span>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-medium">
                        ⚡ Quick Insights
                      </button>
                      <button className="px-3 py-1 bg-purple-600 text-white rounded-md text-xs font-medium">
                        ✨ Go
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="p-6">
                {/* Chart Title */}
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Total Quantity Sold per Product Yesterday</h3>
                  <div className="ml-auto text-sm text-gray-500">Chart Type: BarChart | Data Points: 16</div>
                </div>

                {/* Actual Chart Visualization */}
                <div className="bg-purple-50 rounded-xl p-8 mb-6">
                  <div className="grid grid-cols-10 gap-2 items-end h-48">
                    <div className="bg-purple-600 rounded-t" style={{height: '85%'}}></div>
                    <div className="bg-purple-500 rounded-t" style={{height: '65%'}}></div>
                    <div className="bg-purple-500 rounded-t" style={{height: '62%'}}></div>
                    <div className="bg-purple-500 rounded-t" style={{height: '58%'}}></div>
                    <div className="bg-purple-500 rounded-t" style={{height: '55%'}}></div>
                    <div className="bg-purple-400 rounded-t" style={{height: '52%'}}></div>
                    <div className="bg-purple-400 rounded-t" style={{height: '35%'}}></div>
                    <div className="bg-purple-400 rounded-t" style={{height: '32%'}}></div>
                    <div className="bg-purple-400 rounded-t" style={{height: '30%'}}></div>
                    <div className="bg-purple-300 rounded-t" style={{height: '25%'}}></div>
                  </div>
                  <div className="grid grid-cols-10 gap-2 mt-4 text-xs text-gray-600 text-center">
                    <div>Hair Oil</div>
                    <div>ONIMIX</div>
                    <div>Half Course</div>
                    <div>Scalp</div>
                    <div>Hairpack</div>
                    <div>Comb</div>
                    <div>ONIMIX Gift</div>
                    <div>Mehedi</div>
                    <div>Hair Trial</div>
                    <div>More...</div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="bg-white border rounded-xl overflow-hidden">
                  <div className="bg-purple-600 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center text-white">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="font-semibold">Results Table</span>
                    </div>
                    <button className="px-3 py-1 bg-white text-purple-600 rounded-md text-sm font-medium">
                      📊 Export CSV
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <input 
                        placeholder="Search results..." 
                        className="px-3 py-2 border rounded-lg text-sm"
                      />
                      <select className="px-3 py-2 border rounded-lg text-sm">
                        <option>All Columns</option>
                      </select>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold text-gray-700">📦 PRODUCT NAME</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-700">#️⃣ TOTAL QUANTITY SOLD</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Hair Oil Half Course</td>
                            <td className="py-3 px-4 text-right font-semibold">410</td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">ONIMIX Shampoo Half Course</td>
                            <td className="py-3 px-4 text-right font-semibold">274</td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Coupon Gift</td>
                            <td className="py-3 px-4 text-right font-semibold">249</td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Scalp Massager</td>
                            <td className="py-3 px-4 text-right font-semibold">238</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
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
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Search className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Natural Language Queries</h3>
                <p className="text-gray-600 text-sm">Ask questions just like you would ask a human analyst</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <PieChart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Instant Visualizations</h3>
                <p className="text-gray-600 text-sm">Get beautiful charts and graphs generated automatically</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Database className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Exportable Data Tables</h3>
                <p className="text-gray-600 text-sm">Download your results as CSV for further analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Running an E-commerce Business <span className="text-red-600">Shouldn't Be This Hard</span>
            </h2>
            <p className="text-xl text-gray-600">Common challenges every e-commerce owner faces daily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {painPoints.map((problem, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl border hover:shadow-lg transition-all">
                <div className={`w-12 h-12 ${problem.color} bg-opacity-20 rounded-xl flex items-center justify-center mb-4`}>
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Smart Features</span> for Smart Business Owners
            </h2>
            <p className="text-xl text-gray-600">Built with modern technology for the new generation of entrepreneurs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className={`p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                feature.highlight ? 'ring-2 ring-blue-500 relative' : ''
              }`}>
                {feature.highlight && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                    AI POWERED
                  </div>
                )}
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Integration Partners */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">সকল জনপ্রিয় কুরিয়ার সার্ভিসের সাথে Integration</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {courierPartners.map((courier, idx) => (
                <div key={idx} className="px-4 py-2 bg-white rounded-lg border shadow-sm">
                  <span className="font-semibold text-gray-700">{courier}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Early Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Early <span className="text-green-600">Feedback</span>
            </h2>
            <p className="text-xl text-gray-600">What our early users and development partners are saying</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.business}</div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-blue-600 mb-3" />
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience AI-Powered Analytics?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our early adopters and be among the first to revolutionize your e-commerce business with AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Schedule a Demo
              </button>
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
                <span>Early Adopter Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="font-bold text-xl">O</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Oryza</span>
                <div className="text-sm text-gray-400">by Pyzasoft • Newly Launched</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com/pyzasoft" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/+8801700000000" className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.878c-.248.693-.984 1.298-1.615 1.471-.427.116-.982.21-2.86-.612-2.406-1.053-4.46-3.868-4.595-4.045-.134-.177-1.096-1.459-1.096-2.784 0-1.325.693-1.977 .94-2.247.248-.27.54-.336.72-.336l.52.007c.167.006.39-.063.61.468.224.531.761 1.861.828 1.996.068.135.113.293.023.471-.09.177-.135.289-.27.446-.134.156-.283.35-.404.47-.123.119-.25.247-.108.494.143.248.636 1.049 1.367 1.698.945.842 1.742 1.103 1.99 1.227.247.124.392.103.536-.074.146-.177.614-.715.777-.962.164-.248.328-.208.551-.124.224.083 1.417.668 1.66.79.243.123.405.184.462.285.057.101.057.579-.19 1.272z"/>
                </svg>
              </a>
              <a href="mailto:hello@pyzasoft.com" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 Oryza by Pyzasoft. All rights reserved. Newly Launched • Made in Bangladesh
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OryzaLanding;