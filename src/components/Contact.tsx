import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const scrollToField = (fieldName: string) => {
    const field = document.getElementById(fieldName);
    if (field) {
      field.focus();
      field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="contato" className="py-24 bg-secondary-900/80 text-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Conte-nos sobre seu projeto e descubra como podemos ajudar a transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="web">Desenvolvimento Web</option>
                    <option value="mobile">Aplicativo Mobile</option>
                    <option value="api">APIs e Integrações</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-white placeholder-secondary-400 resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? 'bg-secondary-700 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-primary-600 hover:bg-primary-700 hover:shadow-xl hover:scale-[1.02]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>✓</span>
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>

            {/* Quick Contact Links */}
            <div className="mt-8 pt-8 border-t border-secondary-700">
              <p className="text-secondary-300 mb-4">Ou entre em contato diretamente:</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToField('name')}
                  className="px-4 py-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200 text-sm"
                >
                  Preencher Nome
                </button>
                <button
                  onClick={() => scrollToField('email')}
                  className="px-4 py-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200 text-sm"
                >
                  Preencher E-mail
                </button>
                <button
                  onClick={() => scrollToField('message')}
                  className="px-4 py-2 bg-secondary-800 hover:bg-secondary-700 rounded-lg transition-colors duration-200 text-sm"
                >
                  Ir para Mensagem
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors duration-300">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p className="text-secondary-300">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors duration-300">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">E-mail</h4>
                  <p className="text-secondary-300">contato@motiondev.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-secondary-800 rounded-lg hover:bg-secondary-700 transition-colors duration-300">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Localização</h4>
                  <p className="text-secondary-300">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="bg-secondary-800 rounded-lg p-8 text-center hover:bg-secondary-700 transition-colors duration-300 group cursor-pointer">
              <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold mb-2">Mapa Interativo</h4>
              <p className="text-secondary-300">
                Clique para ver nossa localização no Google Maps
              </p>
              <div className="mt-4 inline-block px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 text-sm font-medium">
                Ver no Maps →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
