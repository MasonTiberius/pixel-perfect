import { motion } from "framer-motion";

const groups = [
  {
    label: "Production",
    items: ["Bakers & Pastry Chefs", "Meal Prep Companies", "CPG & Food Startups"],
  },
  {
    label: "Specialty",
    items: ["Chocolatiers", "Allergy-Free Brands", "Farmers & Value-Added Producers"],
  },
  {
    label: "Service",
    items: ["Food Trucks", "Caterers", "Pop-Up Chefs", "Class Presenters"],
  },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Who Milk &amp; Honey Is{" "}
            <span className="italic text-honey-light">For</span>
          </h2>
          <p className="text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">
            Best suited for licensed food businesses that value cleanliness, structure, and respectful shared use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <h3 className="text-honey font-display text-xl font-semibold mb-5">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-primary-foreground/70 font-body">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-primary-foreground/50 font-body italic mt-14 max-w-lg mx-auto"
        >
          If your business relies on consistency, accountability, and a professional environment, you'll feel at home here.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoItsFor;
