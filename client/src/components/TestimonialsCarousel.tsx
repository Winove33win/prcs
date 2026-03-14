import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  if (!testimonials.length) return null;

  const testimonial = testimonials[current];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-foreground/70">Confira os depoimentos de empresas que confiaram na PRCS Advogados</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-foreground/60">{testimonial.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={goToPrevious}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === current
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 w-3 hover:bg-primary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-foreground/60 text-sm">
            {current + 1} de {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
