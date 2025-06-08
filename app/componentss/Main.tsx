'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

const RAADecorsLanding = () => {
    const [currentSlide, setCurrentSlide] = useState({
        services: 0,
        works: 0
    });
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const servicesRef = useRef(null);
    const worksRef = useRef(null);

    // Services data
    const services = [
        {
            id: 1,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 2,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }, {
            id: 3,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }, {
            id: 4,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }, {
            id: 5,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
        // ... rest of services data
    ];

    // Works data
    const works = [
        {
            id: 1,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            id: 2,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }, {
            id: 3,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }, {
            id: 4,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }, {
            id: 5,
            title: "Complete Interior Design",
            description: "Full-service interior design from concept to completion",
            image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
        // ... rest of services data
    ];

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-play carousels
    useEffect(() => {
        const servicesInterval = setInterval(() => {
            setCurrentSlide(prev => ({
                ...prev,
                services: (prev.services + 1) % services.length
            }));
        }, 5000);

        const worksInterval = setInterval(() => {
            setCurrentSlide(prev => ({
                ...prev,
                works: (prev.works + 1) % works.length
            }));
        }, 5000);

        return () => {
            clearInterval(servicesInterval);
            clearInterval(worksInterval);
        };
    }, []);

    const nextSlide = (section:string) => {
        const dataLength = section === 'services' ? services.length : works.length;
        setCurrentSlide(prev => ({
            ...prev,
            [section]: (prev[section] + 1) % dataLength
        }));
    };

    const prevSlide = (section) => {
        const dataLength = section === 'services' ? services.length : works.length;
        setCurrentSlide(prev => ({
            ...prev,
            [section]: (prev[section] - 1 + dataLength) % dataLength
        }));
    };

    const goToSlide = (section, index) => {
        setCurrentSlide(prev => ({
            ...prev,
            [section]: index
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            e.target.reset();

            setTimeout(() => {
                setSubmitStatus('');
            }, 3000);
        }, 1500);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const CarouselComponent = ({ data, section, currentIndex }) => (
        <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {data.map((item) => (
                    <div key={item.id} className="min-w-full h-96 relative">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#700038]/90 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                onClick={() => prevSlide(section)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={() => nextSlide(section)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
                <ChevronRight size={20} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(section, index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-yellow-400 w-6'
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#700038] via-[#4a0025] to-[#2d0015] text-white overflow-x-hidden">
            {/* Floating Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/12 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute top-3/5 right-1/6 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/5 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
            </div>

            {/* Header */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[#700038]/95 backdrop-blur-lg shadow-lg'
                    : 'bg-[#700038]/90'
                }`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center text-[#700038] font-bold text-xl shadow-lg hover:scale-105 transition-transform duration-300">
                                R
                            </div>
                            <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Anutrati, sans-serif' }}>
                                <span className="bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                                    RAA Decors
                                </span>
                            </h1>
                        </div>
                        <nav className="hidden md:flex gap-8">
                            {[
                                { label: 'Home', id: 'home' },
                                { label: 'Services', id: 'services' },
                                { label: 'Works', id: 'works' },
                                { label: 'Contact', id: 'contact' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 font-medium"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center text-center px-6"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-[#700038]/50 via-[#4a0025]/70 to-[#2d0015]/90" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                        Transform Your Space
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                        Premium interior design solutions that reflect your unique style and elevate your living experience.
                    </p>
                    <button
                        onClick={() => scrollToSection('works')}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#700038] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                        Explore Our Work
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                    Our Services
                </h2>
                <CarouselComponent
                    data={services}
                    section="services"
                    currentIndex={currentSlide.services}
                />
            </section>

            {/* Works Section */}
            <section id="works" className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                    Our Works
                </h2>
                <CarouselComponent
                    data={works}
                    section="works"
                    currentIndex={currentSlide.works}
                />
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
                        Contact Us
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Get In Touch</h3>
                            <p className="text-lg opacity-90 leading-relaxed mb-8">
                                Ready to transform your space? Let's discuss your vision and bring it to life with our expert design team.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-yellow-400 flex-shrink-0" size={20} />
                                    <span>No.1/352b,Ambethkar Colony,Somarasampettai, Vayalour Road,Tiruchirappalli, Tamil Nadu, 620102.</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-yellow-400 flex-shrink-0" size={20} />
                                    <span>+91 8940943348 | 9994648092</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-yellow-400 flex-shrink-0" size={20} />
                                    <span>raadecors24@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Clock className="text-yellow-400 flex-shrink-0" size={20} />
                                    <span>Mon-Fri 9:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-yellow-400 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-400 focus:outline-none focus:bg-white/15 transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-400 focus:outline-none focus:bg-white/15 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-yellow-400 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-400 focus:outline-none focus:bg-white/15 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-yellow-400 font-medium mb-2">Project Type</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-400 focus:outline-none focus:bg-white/15 transition-all duration-300"
                    placeholder="Residential, Commercial..."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-yellow-400 font-medium mb-2">Project Details</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-yellow-400 focus:outline-none focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project vision"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#700038] px-6 py-4 rounded-lg text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RAADecorsLanding;