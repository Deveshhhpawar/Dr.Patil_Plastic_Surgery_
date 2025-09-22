import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import background from "@/assets/OurClient.jpg";

const clients = [
  "Cartier",
  "Chanel",
  "Byredo",
  "Diptyque",
  "Calvin Klein",
  "Maison Margiela",
  "YSL Beauty",
  "Hermès",
  "Gucci",
  "Prada",
];

const TestimonialsCarousel = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const ourX = useTransform(scrollYProgress, [0, 1], ["0%", "-40vw"]);
  const clientsX = useTransform(scrollYProgress, [0, 1], ["0%", "40vw"]);
  const listY = useTransform(scrollYProgress, [0, 1], ["90%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative h-[400vh] bg-white pt-24" // <-- added top padding
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src={background}
          alt="Clients background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* Content above background */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          {/* Split heading */}
          <div className="relative flex justify-center w-full gap-8">
            <motion.span
              style={{ x: ourX }}
              className="text-6xl md:text-8xl font-bold text-gray-900 origin-center"
            >
              Our
            </motion.span>
            <motion.span
              style={{ x: clientsX }}
              className="text-6xl md:text-8xl font-bold text-gray-900 origin-center"
            >
              Clients
            </motion.span>
          </div>

          {/* Rising client list */}
          <motion.ul
            className="absolute text-center text-3xl font-light text-gray-800 space-y-4 top-3/5"
            style={{ y: listY }}
          >
            {clients.map((client, i) => {
              const start = i * (1 / clients.length);
              const end = start + 0.15;
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const itemY = useTransform(scrollYProgress, [start, end], [20, 0]);
              return (
                <motion.li key={i} style={{ opacity, y: itemY }}>
                  {client}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
