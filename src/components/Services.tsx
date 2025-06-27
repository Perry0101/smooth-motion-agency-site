
import { useState, useEffect, useRef } from 'react';
import { Code, Layout, Settings, Users } from 'lucide-react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Sites modernos, responsivos e otimizados para todos os dispositivos e navegadores.'
    },
    {
      icon: Layout,
      title: 'Aplicações Mobile',
      description: 'Apps nativos para iOS e Android com performance excepcional e UX intuitiva.'
    },
    {
      icon: Settings,
      title: 'APIs e Integrações',
      description: 'Sistemas robustos de backend, APIs RESTful e integrações com serviços externos.'
    },
    {
      icon: Users,
      title: 'Consultoria Tech',
      description: 'Orientação estratégica em tecnologia para acelerar o crescimento do seu negócio.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-secondary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6 animate-fade-in-up">
            Nossos Serviços
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Oferecemos soluções completas de desenvolvimento, desde a concepção até a entrega final
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                    <IconComponent 
                      className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-secondary-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200">
                    Saiba mais →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
