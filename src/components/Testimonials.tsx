import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  school: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, school, image, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6 md:p-8">
        <div className="flex mb-4">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}, {school}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Esta plataforma ha revolucionado mi forma de preparar clases. Ahorro horas cada semana y mis alumnos disfrutan mucho más con actividades personalizadas.",
      name: "Carmen Rodríguez",
      role: "Profesora de Primaria",
      school: "CEIP Federico García Lorca, Sevilla",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      quote: "La adaptación a la legislación andaluza actualizada me da tranquilidad, y la personalización según el número de alumnos es perfecta para mi aula diversa.",
      name: "Antonio Márquez",
      role: "Profesor de Infantil",
      school: "EI El Faro, Málaga",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      quote: "Como directora, recomiendo esta herramienta a todo nuestro profesorado. Ha mejorado notablemente la calidad de los materiales y la satisfacción de las familias.",
      name: "Laura Fernández",
      role: "Directora",
      school: "CEIP Antonio Machado, Granada",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Docentes de toda Andalucía ya están transformando sus clases con nuestras herramientas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center mb-4 px-5 py-2 bg-primary-100 text-primary-700 rounded-full">
            <span className="font-medium">Más de 5,000 profesores ya confían en nosotros</span>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Únete a la comunidad de docentes andaluces que están mejorando la experiencia educativa en sus aulas día tras día.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;