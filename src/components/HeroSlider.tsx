import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/sitting.png";
import hero2 from "@/assets/Doctor explaining[1].png";
import hero3 from "@/assets/Before after[1].png";
import hero4 from "@/assets/equipment[1].jpg";
import hero5 from "@/assets/Working[1].png";
import hero6 from "@/assets/W check[1].png";
import hero7 from "@/assets/M checking.jpeg";

const slides = [
  { image: hero1, quote: "Redefining Confidence Through Artful Surgery" },
  { image: hero2, quote: "Enhancing Natural Beauty, One Patient at a Time" },
  { image: hero3, quote: "Where Expertise Meets Compassion" },
  { image: hero4, quote: "Refined Care, Natural Results, Lasting Confidence" },
  { image: hero5, quote: "Refined Care, Natural Results, Lasting Confidence" },
  { image: hero6, quote: "Your Journey to a New You Begins Here" },
  { image: hero7, quote: "Transforming Lives with Precision and Care" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative min-h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === currentSlide ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-prata text-2xl md:text-3xl lg:text-4xl font-normal leading-tight text-shadow-luxury transition-opacity duration-500">
            "{slides[currentSlide].quote}"
          </h1>

          {/* CTA */}
          <div className="pt-8">
            <Button className="btn-luxury text-lg px-10 py-6">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
