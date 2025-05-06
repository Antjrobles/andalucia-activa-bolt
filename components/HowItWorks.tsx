import React from 'react';
import { Search, Settings, FileOutput, CheckCircle } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start">
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        {number < 4 && (
          <div className="absolute left-1/2 top-12 bottom-0 w-0.5 h-28 hidden md:block bg-primary-200 -translate-x-1/2" />
        )}
      </div>
      <div className="ml-6 flex-1">
        <div className="flex items-center mb-2">
          <div className="mr-3 text-primary-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Selecciona los parámetros",
      description: "Indica la materia, nivel educativo, número de alumnos y otros criterios relevantes para tu actividad.",
      icon: <Search className="w-6 h-6" />
    },
    {
      number: 2,
      title: "Personaliza el contenido",
      description: "Ajusta los detalles específicos como objetivos, duración, recursos necesarios o nivel de dificultad.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      number: 3,
      title: "Genera tu actividad",
      description: "Nuestro sistema creará una actividad completa basada en tus parámetros y alineada con la legislación andaluza vigente.",
      icon: <FileOutput className="w-6 h-6" />
    },
    {
      number: 4,
      title: "Descarga y utiliza",
      description: "Obtén tu actividad en formato PDF lista para imprimir o en formato digital para compartir con tus alumnos.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crear actividades personalizadas nunca fue tan sencillo e intuitivo
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step) => (
              <Step 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-primary-100 to-blue-100 rounded-xl p-8 md:p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para transformar tus clases?</h3>
          <p className="text-lg text-gray-700 mb-8">
            Únete a miles de profesores andaluces que ya están mejorando la experiencia educativa de sus alumnos.
          </p>
          <a 
            href="#pricing" 
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-primary-700 transition-colors"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;