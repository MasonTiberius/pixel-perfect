import { motion } from "framer-motion";
import { ShieldCheck, CakeSlice, Expand, TrendingUp } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Built for Food Safety & Scale",
    description:
      "We are the only local commissary equipped with blast chillers — a critical tool for food safety, shelf-life extension, and high-volume production.",
  },
  {
    icon: CakeSlice,
    title: "A Baker's Paradise",
    description:
      "Three industrial mixers built for heavy doughs, rotating baker's ovens, and a dedicated proofing room. A high-volume, precision-focused environment.",
  },
  {
    icon: Expand,
    title: "Space That Grows With You",
    description:
      "From shared prep areas to semi-private and private spaces, our layout adapts as your business evolves. Climate-controlled specialty room available.",
  },
  {
    icon: TrendingUp,
    title: "A Growth-Oriented Environment",
    description:
      "Members may utilize our professional storefront for customer pickups and participate in on-site classes focused on technique, compliance, and growth.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Why Food Entrepreneurs Choose{" "}
            <span className="italic text-honey-dark">Milk &amp; Honey</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Designed for operators who take their business — and food safety — seriously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-honey/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-honey-dark" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
