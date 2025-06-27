import { useState, useEffect, useRef } from 'react';
import { Image, Star } from 'lucide-react';

const Portfolio = () => {

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'OnlineJobHub.com',
      category: 'web',
      image: '/lovable-uploads/0518c82d-9b36-476e-a9be-df1a7ed24501.png',
      description: 'Plataforma completa de marketplace de empregos online conectando candidatos e empresas com funcionalidades avançadas de busca e matching.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'TypeScript'],
      featured: true,
      website: 'https://onlinejobhub.com'
    }
  ];

  const filteredProjects = projects;

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
      { threshold: 0.2, rootMargin: '-50px' }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const openModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Nosso Portfólio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Conheça alguns dos projetos que desenvolvemos com paixão e dedicação
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="text-muted-foreground text-lg">
                Em breve, novos projetos serão adicionados ao nosso portfólio.
              </div>
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={project.id}
                  data-index={index}
                  className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-border transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                    isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary text-primary-foreground p-2 rounded-full">
                          <Star className="w-4 h-4" fill="currentColor" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/30 backdrop-blur-sm rounded-full p-4">
                        <Image className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-secondary-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-hover">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-secondary-800">
                    {selectedProject.title}
                  </h3>
                  {selectedProject.featured && (
                    <div className="bg-primary-600 text-white p-2 rounded-full">
                      <Star className="w-5 h-5" fill="currentColor" />
                    </div>
                  )}
                </div>
                
                <p className="text-secondary-600 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-3">
                    Tecnologias Utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.website && (
                  <button 
                    onClick={() => window.open(selectedProject.website, '_blank')}
                    className="w-full px-6 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg"
                  >
                    Visitar Site
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
