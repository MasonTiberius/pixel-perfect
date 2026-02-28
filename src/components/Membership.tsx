import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Apply for Membership",
    description: "Submit our Prospective User Form so we can understand your business, equipment needs, and production goals.",
  },
  {
    num: "02",
    title: "Review & Follow-Up",
    description: "Applications are reviewed to ensure a good fit for our space and community.",
  },
  {
    num: "03",
    title: "Private Tour",
    description: "Approved applicants are invited to tour the kitchen and discuss workflow, scheduling, and storage options.",
  },
  {
    num: "04",
    title: "Onboarding & Access",
    description: "Once approved, members complete onboarding before receiving kitchen access.",
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How Membership Works
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            All members are approved through a structured onboarding process to maintain a clean, safe, and respectful environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-display font-bold text-honey/30 mb-3">
                {step.num}
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
