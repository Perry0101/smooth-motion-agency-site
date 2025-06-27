
import { Mail, Phone, MapPin, Code, Layout, Settings, Users } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary-400">Motion</span>Dev
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                Transformamos ideias em soluções digitais excepcionais. 
                Desenvolvimento web, mobile e consultoria em tecnologia.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>contato@motiondev.com</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors duration-200">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Navegação</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Portfólio', id: 'portfolio' },
                { name: 'Depoimentos', id: 'depoimentos' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-secondary-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Serviços</h4>
            <ul className="space-y-3">
              {[
                { name: 'Desenvolvimento Web', icon: Code },
                { name: 'Aplicações Mobile', icon: Layout },
                { name: 'APIs e Integrações', icon: Settings },
                { name: 'Consultoria Tech', icon: Users }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index} className="flex items-center gap-3 text-secondary-300 hover:text-white transition-colors duration-200 group">
                    <IconComponent className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform duration-200" />
                    <span>{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-400">Newsletter</h4>
            <p className="text-secondary-300 mb-4">
              Receba dicas de tecnologia e novidades sobre nossos projetos.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Inscrever-se
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-secondary-800">
              <p className="text-xs text-secondary-400">
                Prometemos não enviar spam. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-400 text-sm">
              © {currentYear} MotionDev. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-secondary-400">
              <button className="hover:text-white transition-colors duration-200">
                Política de Privacidade
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Termos de Uso
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-secondary-500">
              Feito com ❤️ e muito código limpo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
