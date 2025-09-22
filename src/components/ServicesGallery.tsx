import { motion } from "framer-motion";
import breast from "@/assets/breast.jpeg";
import body from "@/assets/body.jpeg";
import face from "@/assets/beforeafter.jpeg";
import medspa from "@/assets/plastic[1].jpg";
import surgery from "@/assets/Skin.jpeg";

interface Service {
  title: string;
  description?: string; 
  list?: string[];      
  image: string;
}

const services: Service[] = [
  { 
    title: "Body", 
    list: [
      "Liposuction - (Six Pack Abs,Tummy,Thigh,Arm,Buttocks)",
      "Mommy Make Over",
      "Thigh & Butt Lift",
      "Hymenoplasty",
      "Vaginal Tightening",
      "Brazilian Buttock Lift",
      "Arm lift (Brachioplasty)"
    ],     
    image: body 
  },
  { 
    title: "Face", 
    list: [
      "Rhinoplasty (Nose job)",
      "Facelift",
      "Blepharoplasty",
      "Otoplasty (Ear shaping)",
      "Dimple creation",
      "Cheek fat reduction",
      "Brow lift, Neck lift",
      "Fat Injection (Chin, Lip, Cheek)",
      "Earlobe repair"
    ],
    image: face 
  },
  { 
    title: "Skin", 
    list: [
      "Mole/Wart/Cyst removal",
      "Acne scar treatment - Laser/Surgery",
      "Multiple Lipoma removal",
      "Botox & Filler Injection treatment",
      "Hydrafacial treatment",
      "Chemical peeling",
      "Tattoo removal - Laser/Surgery",
      "Laser Hair Reduction",
      "Skin brightening Treatment"
    ],
    image: medspa 
  },
  { 
    title: "Breast", 
    list: [
      "Breast Augmentation (Implant)",
      "Breast Reduction",
      "Breast Lift (Mastopexy)",
      "Nipple Correction",
      "Male Breast Surgery - Gynaecomastia"
    ], 
    image: breast 
  },
  { 
    title: "Surgery", 
    list: [
      "Skin Grafting & Flap Surgery",
      "Hand Surgery",
      "Face Trauma Surgery",
      "Burn Contracture Surgery",
      "Diabetic Foot Surgery",
      "Bed Sore Treatment",
      "Birth Defects- Cleft lip/Palate,Syndactyly,Polydactyly,Hypospadias"
    ],
    image: surgery 
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="relative w-full h-full overflow-hidden">
    <motion.div
      className="relative w-full h-full group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay visible only on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/70 transition-all duration-500" />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full p-4 text-center">
        <div className="space-y-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <h3 className="font-prata text-2xl md:text-3xl font-medium text-white group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-all duration-500">
            {service.title}
          </h3>

          {service.list ? (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="text-white font-montserrat text-sm md:text-base leading-snug space-y-1 group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              style={{ listStyle: "none" }}
            >
              {service.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          ) : (
            service.description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-white font-montserrat text-sm md:text-base leading-snug group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
              >
                {service.description}
              </motion.p>
            )
          )}
        </div>
      </div>
    </motion.div>
  </div>
);


const ServicesGallery = () => {
  return (
    <section id="services" className="w-full min-h-screen mt-16 md:mt-24">
      {/* Heading */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="font-prata text-3xl md:text-4xl font-normal text-foreground">
          Find Your Procedure
        </h1>
        <h2 className="font-montserrat text-2xl md:text-3xl font-thin text-foreground">
          Aesthetic Procedures & Non-Surgical Enhancement In Chh.Sambhajinagar
        </h2>
        <p className="font-montserrat text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-thin">
          Explore our range of services designed to enhance your natural beauty and confidence.
        </p>
      </div>

      {/* Services Grid - full-width horizontal collage */}
      <div className="grid grid-cols-5 w-full h-[80vh]">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGallery;
