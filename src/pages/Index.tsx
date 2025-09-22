import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import IntroSection from '@/components/IntroSection';
import DoctorsSection from '@/components/DoctorsSection';
import ServicesGallery from '@/components/ServicesGallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Image from '@/components/Image';
import CallToAction from '@/components/CallToAction';
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSlider />
      <IntroSection />
      <Image/>
      <ServicesGallery />
      <CallToAction />
      <DoctorsSection />
      <TestimonialsCarousel />
      <BlogSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
