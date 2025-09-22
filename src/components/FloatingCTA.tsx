import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button className="btn-luxury shadow-luxury group">
        <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
        Book Consultation
      </Button>
    </div>
  );
};

export default FloatingCTA;