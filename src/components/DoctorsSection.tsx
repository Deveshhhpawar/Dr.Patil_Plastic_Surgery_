import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctorMale from "@/assets/Sir.jpg";
import doctorFemale from "@/assets/mam.jpg";

const DoctorsSection = () => {
  const [step, setStep] = useState<"idle" | "images" | "text">("idle");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 🎯 Trigger animation only when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && step === "idle") {
          setStep("images");
          setTimeout(() => setStep("text"), 2500);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [step]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[600px] overflow-hidden bg-background"
    >
      {/* Left doctor */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: step !== "idle" ? 0 : "-100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-1/2 h-full"
      >
        <img
          src={doctorMale}
          alt="Dr. Patil"
          className="w-full h-full object-cover"
        />
        {/* Name overlay */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-black px-4 py-2 rounded-lg text-lg font-montserrat font-semibold">
    Dr. Patil
  </div>
      </motion.div>

      {/* Right doctor */}
    <motion.div
  initial={{ x: "100%" }}
  animate={{ x: step !== "idle" ? 0 : "100%" }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="absolute top-0 right-0 w-1/2 h-full"
>
  <img
    src={doctorFemale}
    alt="Dr. Patil"
    className="w-full h-full object-cover"
  />
  {/* Name overlay */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-black px-4 py-2 rounded-lg text-lg font-montserrat font-semibold">
    Dr. Patil
  </div>
</motion.div>



      {/* Dark overlay for text fade-in */}
      <motion.div
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        animate={{
          backgroundColor:
            step === "text" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10"
      />

      {/* Center text */}
      <AnimatePresence>
  {step === "text" && (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
    >
      <p className="max-w-6xl text-4xl md:text-2xl text-muted-foreground font-montserrat font-light leading-relaxed text-center">
        With over two decades of combined experience, they bring
        excellence, compassion, and artistry to every procedure. Every
        patient is treated with personalized care, ensuring natural,
        lasting results that enhance both confidence and well-being.
      </p>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default DoctorsSection;
