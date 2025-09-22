import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="font-accent text-4xl md:text-5xl font-medium text-primary mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-xl text-muted-foreground">
              Take the first step towards your transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-card">
                <h3 className="font-accent text-2xl font-medium text-primary mb-6">
                  Request Consultation
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="border-border focus:border-primary transition-smooth"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="border-border focus:border-primary transition-smooth"
                    />
                  </div>
                  
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="border-border focus:border-primary transition-smooth"
                  />
                  
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="border-border focus:border-primary transition-smooth"
                  />
                  
                  <Select>
                    <SelectTrigger className="border-border focus:border-primary transition-smooth">
                      <SelectValue placeholder="Procedure of Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="face">Facial Procedures</SelectItem>
                      <SelectItem value="breast">Breast Enhancement</SelectItem>
                      <SelectItem value="body">Body Contouring</SelectItem>
                      <SelectItem value="medspa">Med Spa Services</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Textarea 
                    placeholder="Tell us about your goals and any questions you have..." 
                    className="min-h-32 border-border focus:border-primary transition-smooth resize-none"
                  />
                  
                  <Button className="w-full btn-luxury">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="slide-in-right space-y-8">
              {/* Contact Information */}
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-card">
                <h3 className="font-accent text-2xl font-medium text-primary mb-6">
                  Visit Our Clinic
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
  <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
  <div>
    <p className="font-medium text-foreground">Address</p>
    <p className="text-muted-foreground">
      Dr. Amit Patil <br />
      Plastic & Cosmetic Surgeon <br />
      MGM Road, Seven Hills, M G M <br />
      Chhatrapati Sambhaji Nagar, Maharashtra, India
    </p>
  </div>
</div>

                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">(404) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@drpatils.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <div className="text-muted-foreground text-sm">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 shadow-card">
  <div className="aspect-video rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.173080949559!2d75.350889!3d19.876004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98123b86f6d7%3A0x8da23b3e9e60b2f3!2sDr.%20Amit%20Patil%20Plastic%20%26%20Cosmetic%20Surgeon!5e0!3m2!1sen!2sin!4v1695245100000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;