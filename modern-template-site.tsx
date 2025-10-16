import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Star, Clock, MapPin, Phone, Instagram, Heart, Award, Palette, Scissors, CheckCircle, Calendar, ChevronLeft, ChevronRight, Gift, Crown, BookOpen, Users, TrendingUp, MessageCircle, Camera, Zap } from 'lucide-react';

const GracianeStudio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('alongamento');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGallery((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = {
    alongamento: [
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Alongamento Completo",
        description: "Alongamento profissional com técnicas modernas e produtos de alta qualidade para unhas perfeitas e duradouras.",
        price: "R$ 200",
        duration: "2-3 horas",
        details: ["Preparação completa das unhas", "Aplicação profissional", "Modelagem personalizada", "Acabamento premium", "Durabilidade garantida"],
        popular: true
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Manutenção de Alongamento",
        description: "Manutenção e retoque do alongamento para manter suas unhas sempre impecáveis.",
        price: "R$ 150",
        duration: "1.5-2 horas",
        details: ["Retoque da base", "Ajuste de comprimento", "Correção de imperfeições", "Nova esmaltação", "Hidratação incluída"],
        popular: false
      }
    ],
    gel: [
      {
        icon: <Crown className="w-8 h-8" />,
        title: "Banho em Gel",
        description: "Fortalecimento profundo com gel de qualidade premium para unhas mais resistentes.",
        price: "R$ 150",
        duration: "1.5 horas",
        details: ["Gel importado premium", "Fortalecimento intenso", "Brilho duradouro", "Secagem UV/LED", "Proteção máxima"],
        popular: false
      },
      {
        icon: <Palette className="w-8 h-8" />,
        title: "Esmaltação em Gel",
        description: "Esmaltação duradoura em gel que mantém suas unhas perfeitas por semanas.",
        price: "R$ 100",
        duration: "1 hora",
        details: ["Cores variadas disponíveis", "Durabilidade de 3-4 semanas", "Brilho intenso", "Não descasca", "Secagem rápida"],
        popular: true
      }
    ],
    blindagem: [
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Blindagem Estrutural",
        description: "Proteção e fortalecimento completo para unhas fracas e quebradiças.",
        price: "R$ 120",
        duration: "1.5 horas",
        details: ["Tratamento intensivo", "Fortalecimento profundo", "Vitaminas e nutrientes", "Proteção UV", "Crescimento saudável"],
        popular: true
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Blindagem Básica",
        description: "Fortalecimento básico das unhas com produtos de qualidade.",
        price: "R$ 75",
        duration: "45 min",
        details: ["Fortalecimento básico", "Proteção diária", "Brilho natural", "Tratamento preventivo", "Ótimo custo-benefício"],
        popular: false
      }
    ]
  };

  const tabs = [
    { id: 'alongamento', label: 'Alongamento', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'gel', label: 'Gel & Esmaltação', icon: <Crown className="w-4 h-4" /> },
    { id: 'blindagem', label: 'Blindagem', icon: <Zap className="w-4 h-4" /> }
  ];

  const courses = [
    {
      title: "Curso Iniciante de Alongamento",
      duration: "10 horas • 1 dia intensivo",
      price: "R$ 600",
      installments: "ou 3x sem juros",
      features: [
        "Técnicas fundamentais de alongamento",
        "Preparação e higienização profissional",
        "Aplicação de moldes e tips",
        "Finalização e esmaltação perfeita",
        "Material didático completo",
        "Certificado de conclusão",
        "Suporte pós-curso",
        "Grupo VIP de alunas"
      ],
      highlighted: true,
      icon: <BookOpen className="w-12 h-12" />
    }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      service: "Alongamento Completo",
      content: "A Graciane é incrível! Minhas unhas ficaram perfeitas e duraram mais de um mês sem nenhum problema. Profissionalismo e qualidade impecáveis!",
      rating: 5,
      image: "👩"
    },
    {
      name: "Júlia Santos",
      service: "Curso de Alongamento",
      content: "O curso mudou minha vida! A Graciane ensina com muita paciência e competência. Hoje trabalho com unhas graças a ela!",
      rating: 5,
      image: "👱‍♀️"
    },
    {
      name: "Camila Oliveira",
      service: "Blindagem Estrutural",
      content: "Minhas unhas eram muito fracas e agora estão fortes e lindas! O tratamento realmente funciona. Super recomendo!",
      rating: 5,
      image: "🧕"
    },
    {
      name: "Rafaela Costa",
      service: "Esmaltação em Gel",
      content: "Adoro fazer minhas unhas com a Gra! Sempre saio de lá com unhas maravilhosas. Atendimento nota 10!",
      rating: 5,
      image: "👩‍🦰"
    }
  ];

  const stats = [
    { number: "9+", label: "Anos de Experiência", icon: <Award className="w-8 h-8" /> },
    { number: "5000+", label: "Clientes Satisfeitas", icon: <Users className="w-8 h-8" /> },
    { number: "100+", label: "Alunas Formadas", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "100%", label: "Satisfação", icon: <Star className="w-8 h-8" /> }
  ];

  const galleryCategories = [
    { name: "Alongamentos Premium", color: "from-amber-200 to-yellow-300" },
    { name: "Nail Art Exclusiva", color: "from-rose-300 to-pink-400" },
    { name: "Francesinha Moderna", color: "from-purple-300 to-indigo-400" },
    { name: "Blindagem & Tratamentos", color: "from-emerald-300 to-teal-400" },
    { name: "Esmaltação em Gel", color: "from-orange-300 to-amber-400" }
  ];

  const whatsappNumber = "+5517992239221";
  const instagramHandle = "grahoracionails";

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl transform rotate-6">
                <Sparkles className="w-8 h-8 text-white transform -rotate-6" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 via-yellow-700 to-orange-700 bg-clip-text text-transparent">
                  Graciane Horácio
                </span>
                <p className="text-xs text-gray-600 font-medium">Especialista em Unhas</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Início</a>
              <a href="#servicos" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Serviços</a>
              <a href="#galeria" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Galeria</a>
              <a href="#cursos" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Cursos</a>
              <a href="#sobre" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contato</a>
            </div>

            <div className="hidden md:flex space-x-4">
              <button 
                onClick={() => openWhatsApp('Olá! Gostaria de agendar um horário.')}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white rounded-full hover:scale-105 transition-all shadow-lg font-semibold flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar</span>
              </button>
            </div>

            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-amber-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#inicio" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Início</a>
              <a href="#servicos" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Serviços</a>
              <a href="#galeria" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Galeria</a>
              <a href="#cursos" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Cursos</a>
              <a href="#sobre" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Sobre</a>
              <a href="#contato" className="block py-2 text-gray-700 hover:text-amber-600 transition-colors">Contato</a>
              <button 
                onClick={() => openWhatsApp('Olá! Gostaria de agendar um horário.')}
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full mt-4 font-semibold"
              >
                Agendar Horário
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-8 border border-amber-300 shadow-lg">
              <Award className="w-5 h-5 text-amber-700" />
              <span className="text-sm text-amber-800 font-bold">9 Anos de Excelência em Alongamento de Unhas</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Graciane Horácio
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
              Alongamentos • Blindagem • Cursos Profissionalizantes
            </p>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Transforme suas unhas em verdadeiras obras de arte com técnicas avançadas e produtos premium
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={() => openWhatsApp('Olá! Gostaria de agendar um horário.')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Horário</span>
              </button>
              <button 
                onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
                className="px-8 py-4 bg-white text-gray-700 rounded-full text-lg font-semibold hover:shadow-2xl transition-all border-2 border-amber-200 flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Ver Instagram</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:scale-105 transition-all border border-amber-200">
                  <div className="text-amber-600 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Serviços <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Técnicas avançadas e produtos de alta qualidade para unhas perfeitas
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white shadow-xl scale-105'
                    : 'bg-amber-50 text-gray-700 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services[activeTab].map((service, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer border-2 ${
                  service.popular ? 'border-amber-400 shadow-xl' : 'border-amber-200'
                }`}
              >
                {service.popular && (
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                    ⭐ MAIS POPULAR
                  </div>
                )}
                
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-amber-200">
                  <div>
                    <div className="text-4xl font-bold text-amber-600">{service.price}</div>
                    <div className="text-sm text-gray-500 mt-1">por sessão</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">Inclui:</h4>
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openWhatsApp(`Olá! Gostaria de agendar: ${service.title}`)}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar Este Serviço</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Galeria de <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Trabalhos</span>
            </h2>
            <p className="text-xl text-gray-600">Trabalhos exclusivos e designs únicos</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {galleryCategories.map((category, idx) => (
                <div
                  key={idx}
                  className={`transition-opacity duration-500 ${
                    activeGallery === idx ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className={`h-96 bg-gradient-to-br ${category.color} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10 text-center text-gray-800 p-8">
                      <Camera className="w-20 h-20 mx-auto mb-6 opacity-80" />
                      <h3 className="text-4xl font-bold mb-4">{category.name}</h3>
                      <p className="text-lg opacity-90">Trabalhos exclusivos da Graciane Horácio</p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-white p-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveGallery((prev) => (prev - 1 + galleryCategories.length) % galleryCategories.length)}
                    className="p-3 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-amber-600" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {galleryCategories.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGallery(idx)}
                        className={`h-3 rounded-full transition-all ${
                          activeGallery === idx ? 'bg-amber-500 w-10' : 'bg-gray-300 w-3'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setActiveGallery((prev) => (prev + 1) % galleryCategories.length)}
                    className="p-3 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-amber-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl inline-flex items-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Ver Mais no Instagram</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cursos <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Profissionalizantes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aprenda com quem tem 9 anos de experiência e forme-se profissionalmente
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300"
              >
                <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 p-8 text-white text-center">
                  <div className="flex justify-center mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{course.title}</h3>
                  <p className="text-xl opacity-90">{course.duration}</p>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                        <Sparkles className="w-5 h-5 text-amber-600" />
                        <span>O que você vai aprender:</span>
                      </h4>
                      <ul className="space-y-3">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
                      <div className="text-center mb-6">
                        <div className="text-sm text-gray-600 mb-2">Investimento</div>
                        <div className="text-5xl font-bold text-amber-600 mb-2">{course.price}</div>
                        <div className="text-gray-600">{course.installments}</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Award className="w-5 h-5 text-amber-600" />
                          <span>Certificado Reconhecido</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Users className="w-5 h-5 text-amber-600" />
                          <span>Turmas Reduzidas</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Heart className="w-5 h-5 text-amber-600" />
                          <span>Suporte Vitalício</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => openWhatsApp('Olá! Quero saber mais sobre o Curso Iniciante de Alongamento')}
                        className="w-full py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg"
                      >
                        Quero Me Inscrever
                      </button>
                    </div>
                  </div>

                  <div className="bg-amber-100 border-l-4 border-amber-500 p-6 rounded-lg">
                    <p className="text-gray-800">
                      <strong>✨ Bônus Especial:</strong> Todas as alunas recebem acesso ao grupo VIP exclusivo com dicas, atualizações e networking com outras profissionais!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Mim</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-amber-400 to-orange-400 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/50">
                    <Sparkles className="w-24 h-24" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Graciane Horácio</h3>
                  <p className="text-xl opacity-90">Especialista em Unhas</p>
                </div>
              </div>

              <div className="p-12">
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Olá! Me chamo <strong>Graciane Horácio</strong> e sou especialista em alongamento de unhas há mais de <strong>9 anos</strong>. Minha paixão é transformar as unhas das minhas clientes em verdadeiras obras de arte, sempre priorizando a saúde e o bem-estar.
                  </p>
                  <p>
                    Trabalho com as <strong>técnicas mais modernas</strong> do mercado e utilizo apenas <strong>produtos premium</strong> para garantir resultados excepcionais e duradouros.
                  </p>
                  <p>
                    Além dos atendimentos personalizados, também ofereço <strong>cursos profissionalizantes</strong> para quem deseja aprender essa arte maravilhosa. Acredito que compartilhar conhecimento é a melhor forma de elevar nossa profissão.
                  </p>
                  <div className="pt-6 border-t border-amber-200">
                    <p className="font-semibold text-amber-700">
                      "Cada unha é uma tela em branco, e meu objetivo é criar arte que traga confiança e felicidade para cada cliente."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Que Dizem <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Minhas Clientes</span>
            </h2>
            <p className="text-xl text-gray-600">Depoimentos reais de quem confia no meu trabalho</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200">
              <div className="relative h-96 flex items-center justify-center p-8">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 p-12 transition-opacity duration-500 flex flex-col justify-center ${
                      activeTestimonial === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">{testimonial.image}</div>
                      
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-2xl text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                      
                      <div>
                        <div className="font-bold text-xl text-gray-800">{testimonial.name}</div>
                        <div className="text-amber-600 font-medium">{testimonial.service}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6">
                <div className="flex justify-center space-x-3">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-3 rounded-full transition-all ${
                        activeTestimonial === idx ? 'bg-amber-500 w-10' : 'bg-gray-300 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-xl text-gray-600">Agende seu horário ou tire suas dúvidas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-12 text-center transition-all hover:scale-105 hover:shadow-2xl border-2 border-green-200 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Agendamentos e dúvidas</p>
              <div className="text-green-600 font-semibold">Clique para conversar</div>
            </a>

            <a
              href={`https://instagram.com/${instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-12 text-center transition-all hover:scale-105 hover:shadow-2xl border-2 border-pink-200 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Instagram</h3>
              <p className="text-gray-600 mb-4">Veja meus trabalhos</p>
              <div className="text-pink-600 font-semibold">@{instagramHandle}</div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Gift className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Primeira Visita? Ganhe Desconto Especial!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato agora e receba uma condição exclusiva no seu primeiro serviço
          </p>
          <button 
            onClick={() => openWhatsApp('Olá! É minha primeira visita e gostaria de saber sobre o desconto especial!')}
            className="px-8 py-4 bg-white text-amber-600 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl"
          >
            Quero Meu Desconto
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-2xl font-bold">Graciane Horácio</span>
          </div>
          <p className="text-gray-400 mb-6">Especialista em Alongamento de Unhas • Cursos Profissionalizantes</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href={`https://instagram.com/${instagramHandle}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; 2025 Graciane Horácio. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp('Olá! Gostaria de mais informações.')}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
};

export default GracianeStudio;