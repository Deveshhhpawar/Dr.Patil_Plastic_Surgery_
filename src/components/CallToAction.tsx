import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full mt-16 md:mt-24 mb-16 md:mb-24 text-center px-6">
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="font-prata text-3xl md:text-4xl font-normal text-foreground">
          Ready to Take the Next Step?
        </h2>

        {/* Paragraph / Subtext */}
        <p className="font-montserrat text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
          Schedule your consultation today and explore what’s possible. 
          See our before &amp; after gallery, learn about financing options, 
          or simply reach out with questions — we’re here to guide you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
