import React from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  buttonText
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl relative ${
      isPopular ? 'border-2 border-primary-500 transform md:-translate-y-2' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-primary-500 text-white text-center py-1 text-sm font-medium">
          Más popular
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl md:text-4xl font-bold text-gray-900">{price}</span>
          {price !== 'Gratis' && <span className="text-gray-600 ml-1">/mes</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            isPopular
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Prueba gratuita",
      price: "Gratis",
      description: "Ideal para probar nuestras funcionalidades básicas",
      features: [
        { text: "5 actividades al mes", included: true },
        { text: "Plantillas básicas", included: true },
        { text: "Legislación actualizada", included: true },
        { text: "Asistencia por email", included: true },
        { text: "Personalización avanzada", included: false },
        { text: "Sin marca de agua", included: false },
        { text: "Compartir con otros docentes", included: false },
      ],
      buttonText: "Comenzar gratis",
      isPopular: false
    },
    {
      name: "Profesional",
      price: "14,99€",
      description: "La opción perfecta para profesores individuales",
      features: [
        { text: "Actividades ilimitadas", included: true },
        { text: "Todas las plantillas", included: true },
        { text: "Legislación actualizada", included: true },
        { text: "Soporte prioritario", included: true },
        { text: "Personalización avanzada", included: true },
        { text: "Sin marca de agua", included: true },
        { text: "Compartir con otros docentes", included: false },
      ],
      buttonText: "Suscribirme ahora",
      isPopular: true
    },
    {
      name: "Centro Educativo",
      price: "99,99€",
      description: "Solución completa para todo el centro escolar",
      features: [
        { text: "Actividades ilimitadas", included: true },
        { text: "Todas las plantillas", included: true },
        { text: "Legislación actualizada", included: true },
        { text: "Soporte prioritario 24/7", included: true },
        { text: "Personalización avanzada", included: true },
        { text: "Sin marca de agua", included: true },
        { text: "Hasta 50 usuarios docentes", included: true },
      ],
      buttonText: "Contactar para más info",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Planes y precios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades educativas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado para tu situación específica?
          </p>
          <a 
            href="#contact" 
            className="inline-block text-primary-600 font-medium hover:underline"
          >
            Contáctanos para opciones personalizadas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;