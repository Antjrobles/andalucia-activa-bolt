import React from 'react';
import { ArrowRight, Book, Users, School, FileCog } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Actividades educativas <span className="text-primary-600 dark:text-primary-400">personalizadas</span> para profesores andaluces
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Genera actividades a medida según materia, centro, número de alumnos y legislación vigente en Andalucía. 
              Ahorra tiempo y mejora la experiencia de aprendizaje.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="#features" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                Comenzar ahora <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="bg-white dark:bg-gray-800 text-primary-700 dark:text-primary-400 px-6 py-3 rounded-lg font-medium border border-primary-200 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                Ver cómo funciona
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Profesores creando actividades personalizadas" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Personaliza tus actividades de clase</h3>
                  <p className="text-white/90">Miles de profesores ya están mejorando sus clases con nosotros</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <Book className="text-primary-500 dark:text-primary-400 w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">Materias</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Todas las asignaturas</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <Users className="text-primary-500 dark:text-primary-400 w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">Alumnado</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Adaptada al número</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <School className="text-primary-500 dark:text-primary-400 w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">Centros</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Según tu centro</p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <FileCog className="text-primary-500 dark:text-primary-400 w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">Legislación</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Siempre actualizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;