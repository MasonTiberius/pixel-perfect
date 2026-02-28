import { motion } from "framer-motion";
import { Flame, Croissant, Snowflake, SprayCan } from "lucide-react";

const categories = [
  {
    icon: Croissant,
    title: "Precision Baking",
    items: ["Two rotating baker's ovens", "Three industrial mixers for heavy doughs", "Dedicated proofing room & cabinet", "Bakery prep tables & speed racks"],
  },
  {
    icon: Flame,
    title: "High-Volume Cooking",
    items: ["Three six-burner commercial ranges", "Two Blodgett convection ovens", "Rational combi ovens", "Dedicated stations for assembly & production"],
  },
  {
    icon: Snowflake,
    title: "Cold Storage & Food Safety",
    items: ["Blast chillers", "Walk-in refrigerator", "Walk-in freezer", "Ice machine"],
  },
  {
    icon: SprayCan,
    title: "Warewashing & Sanitation",
    items: ["Two three-compartment sinks", "Handwash sinks throughout", "Washer/Dryer", "Food processor & commercial slicers"],
  },
];

const Equipment = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Professional Equipment
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Intentionally chosen to support diverse food businesses while maintaining efficiency and shared-use integrity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream rounded-xl p-6 border border-border"
            >
              <cat.icon className="w-8 h-8 text-honey-dark mb-4" />
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-muted-foreground font-body text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-honey mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body text-sm mt-10 max-w-lg mx-auto">
          All equipment is shared, scheduled, and maintained to ensure availability and proper use for all members.
        </p>
      </div>
    </section>
  );
};

export default Equipment;
