import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Procedures", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div>
              <h3 className="font-accent text-2xl font-semibold">
                Dr. Patils
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Plastic Surgery
              </p>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Redefining confidence through artful surgery and compassionate care 
              in the heart of Atlanta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
  <h4 className="font-medium text-lg mb-4">Connect With Us</h4>
  <div className="space-y-3">
    <p className="text-primary-foreground/80">
      Dr. Amit Patil <br />
      Plastic & Cosmetic Surgeon <br />
      MGM Road, Seven Hills, M G M <br />
      Chhatrapati Sambhaji Nagar, Maharashtra, India
    </p>
    <p className="text-primary-foreground/80">
      +91 98765 43210 {/* 👉 Replace with actual contact number */}
    </p>

    <div className="flex space-x-4 pt-2">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  </div>
</div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Dr. Patils Plastic Surgery. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;