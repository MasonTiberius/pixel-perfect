import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Milk & Honey professional commissary kitchen interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-honey-light font-body text-sm tracking-[0.2em] uppercase mb-6"
          >
            Commissary Kitchen
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[0.95] mb-6">
            Milk &amp;{" "}
            <span className="italic text-honey-light">Honey</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/80 font-body font-light max-w-xl mb-4">
            Your Professional Launchpad
          </p>

          <p className="text-primary-foreground/60 font-body text-lg max-w-lg mb-10">
            A clean, fully equipped 5,200 sq. ft. commissary kitchen for food trucks, caterers, bakers, and food makers ready to scale with confidence.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-honey-light/80 italic font-display text-lg mb-10"
          >
            Where good ideas rise.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#membership"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-honey text-primary-foreground font-body font-semibold text-sm tracking-wide uppercase rounded-lg hover:opacity-90 transition-opacity"
            >
              Apply for Membership
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm tracking-wide uppercase rounded-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Book a Private Tour
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12 text-primary-foreground/50 font-body text-xs tracking-wide uppercase">
            <span>Prescreened members</span>
            <span className="w-1 h-1 rounded-full bg-honey" />
            <span>Professional oversight</span>
            <span className="w-1 h-1 rounded-full bg-honey" />
            <span>Clean, safe operations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
