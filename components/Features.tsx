import React from 'react';
import { BookOpen, Clock, UserPlus, FileText, LayoutGrid, Share2, Database, CloudLightning } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Actividades personalizadas",
      description: "Crea actividades adaptadas a la materia, curso y capacidades de tus alumnos."
    },
    {
      icon: <Database className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Legislación actualizada",
      description: "Contenido alineado con la normativa educativa andaluza más reciente."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Ahorro de tiempo",
      description: "Reduce horas de planificación y preparación de materiales educativos."
    },
    {
      icon: <UserPlus className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Perfiles de alumnado",
      description: "Adapta las actividades según las necesidades específicas de tus estudiantes."
    },
    {
      icon: <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Plantillas editables",
      description: "Modifica nuestras plantillas o crea las tuyas propias según tus necesidades."
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Organización por categorías",
      description: "Encuentra rápidamente el tipo de actividad que necesitas por materia y nivel."
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Compartir recursos",
      description: "Colabora con otros docentes compartiendo tus actividades y materiales."
    },
    {
      icon: <CloudLightning className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Acceso instantáneo",
      description: "Todas tus actividades siempre disponibles en la nube, desde cualquier dispositivo."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Funcionalidades principales</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Herramientas diseñadas específicamente para docentes de infantil y primaria en Andalucía
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;