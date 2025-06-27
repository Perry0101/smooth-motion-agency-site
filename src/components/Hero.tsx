import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RobotHero } from './RobotHero';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Desenvolvimento Web Moderno',
      subtitle: 'Criamos experiências digitais excepcionais'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Aplicações Mobile Nativas',
      subtitle: 'Soluções móveis que fazem a diferença'
    },
    {
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'APIs e Integrações',
      subtitle: 'Conectamos sistemas de forma inteligente'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative">
      {/* Robot Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-7xl mx-auto">
          <RobotHero />
        </div>
      </div>

      {/* Traditional Hero Slider Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/70" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              {slides[currentSlide]?.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide]?.subtitle}
            </p>

          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/30 hover:bg-black/50 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
