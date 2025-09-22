import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import logo from "@/assets/Logo[1].png"
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Procedures", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className={`transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                <Icon size={24} /> 
              </a>
            ))}
          </div>
         <div className="text-center animate-fadeInDown">
         <img
           src={logo}
           alt="Dr. Patils Plastic Surgery"
           className={`mx-auto h-28 sm:h-25 w-auto transition-all duration-500 transform ${
           isScrolled ? "scale-110 brightness-100" : "scale-100 brightness-110"
          }`}
          />
          </div>
          <div className="flex items-center space-x-4">
            <Button
              className={`hidden md:inline-flex transition-colors ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
            >
              Book Consultation
            </Button>

            <button
              onClick={toggleMenu}
              className={`p-2 transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white hover:text-primary"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-8">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block text-2xl font-light text-foreground hover:text-primary opacity-0 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div
              className="pt-8 opacity-0 animate-fadeInUp"
              style={{ animationDelay: "900ms" }}
            >
              <Button className="btn-luxury" onClick={toggleMenu}>
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
