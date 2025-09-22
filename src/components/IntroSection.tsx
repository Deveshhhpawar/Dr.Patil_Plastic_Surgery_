import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4 fade-in">
            <h2 className="font-prata text-4xl md:text-5xl font-normal text-black">
              Plastic Surgery in Chh.Sambhajinagar, Maharashtra
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-black font-montserrat">
              Premier Plastic Surgery & Compassionate Care
            </h3>
          </div>

          {/* Description */}
          <div className="slide-up" style={{ animationDelay: '200ms' }}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-black font-montserrat font-normal">
              Dr. Amit Patil, MBBS, MS, MCh, is a board-certified plastic and cosmetic surgeon in Aurangabad, India. 
              Co-Founder of Dr. Patil’s Plastic Surgery Center, he is a member of APSI & IAAPS. 
              Trained at premier institutes in Nagpur, Mumbai, and Ahmedabad, he specializes in aesthetic and reconstructive surgery. 
              Dr. Patil is dedicated to delivering natural, functional, and lasting results with compassionate care.
            </p>
          </div>

          {/* Video Button */}
          <div className="pt-8 slide-up" style={{ animationDelay: '400ms' }}>
            <Button 
              variant="outline" 
              className="group border-black text-black hover:bg-black hover:text-white transition-luxury px-8 py-4 rounded-full"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
