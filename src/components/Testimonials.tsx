import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Marina Silva',
      role: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'A MotionDev transformou completamente nossa presença digital. O site ficou moderno, rápido e nossos clientes adoraram a nova experiência.',
      project: 'E-commerce Platform'
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      role: 'Diretor de TI, FinanceApp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Profissionalismo excepcional! Entregaram nosso app mobile no prazo e com qualidade superior. A comunicação foi transparente do início ao fim.',
      project: 'Mobile Banking App'
    },
    {
      id: 3,
      name: 'Ana Paula Costa',
      role: 'Fundadora, EcoStore',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'A API desenvolvida pela equipe revolucionou nossos processos internos. Agora temos integração perfeita entre todos os nossos sistemas.',
      project: 'Custom API Integration'
    },
    {
      id: 4,
      name: 'Roberto Mendes',
      role: 'CTO, LogisticPro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Trabalho impecável! O sistema de gestão entregue superou nossas expectativas. A interface é intuitiva e as funcionalidades são robustas.',
      project: 'Management System'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-br from-secondary-900/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Depoimentos reais de clientes que confiaram em nosso trabalho
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl border border-border transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-xl font-bold text-card-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-card hover:bg-accent p-3 rounded-full shadow-lg hover:shadow-xl border border-border transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-card hover:bg-accent p-3 rounded-full shadow-lg hover:shadow-xl border border-border transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-primary/20 rounded-full h-1 mt-6">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
