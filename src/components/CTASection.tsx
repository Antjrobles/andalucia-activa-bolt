import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

const CTASection: React.FC = () => {
  const [email, setEmail] = React.useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission with a real backend
    alert(`Gracias por tu interés! Te contactaremos en: ${email}`);
    setEmail('');
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comienza a transformar tus clases hoy mismo</h2>
            <p className="text-xl text-primary-100 mb-8">
              Únete a miles de profesores en Andalucía que ya están mejorando la experiencia educativa de sus alumnos
            </p>
            
            <div className="mt-8 inline-flex items-center justify-center px-6 py-2 bg-primary-500 bg-opacity-30 rounded-full text-primary-50">
              <span className="text-sm md:text-base font-medium">1 mes de prueba gratis en cualquier plan</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicita información</h3>
              <p className="text-gray-600 mb-6">
                Déjanos tus datos y te contactaremos para mostrarte cómo nuestra plataforma puede ayudarte.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                    Centro educativo
                  </label>
                  <input
                    type="text"
                    id="school"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Nombre de tu centro"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Cuéntanos lo que necesitas..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  Solicitar información <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-primary-100 mb-4">
              ¿Prefieres hablar directamente con nosotros?
            </p>
            <a 
              href="tel:+34900123456" 
              className="inline-flex items-center text-white font-medium hover:underline"
            >
              Llámanos al 900 123 456 <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;