import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What types of businesses does Milk & Honey support?",
    a: "We support licensed food trucks, caterers, bakers, CPG producers, meal prep companies, and specialty food makers. Our space is designed for businesses that need consistent access to professional equipment in a clean, organized environment.",
  },
  {
    q: "Do you accept everyone who applies?",
    a: "No. All members are prescreened to ensure a safe, respectful, and well-managed shared kitchen. Our review process helps protect the quality of the space and the success of our members.",
  },
  {
    q: "Can I bring my own equipment?",
    a: "Possibly. All personal equipment must be reviewed and approved in advance. We consider size, electrical needs, placement, and safety. Dedicated or semi-private space may be required.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is based on how you use the kitchen — including scheduled kitchen time, storage needs, and any dedicated space or approved personal equipment. This ensures fair pricing for all members.",
  },
  {
    q: "Do you offer storage?",
    a: "Yes. We offer dry, refrigerated, and frozen storage. Storage is assigned, labeled, and billed separately from kitchen time. Space is limited and approved based on availability.",
  },
  {
    q: "What makes Milk & Honey different from other commissary kitchens?",
    a: "We prioritize cleanliness, professional standards, and accountability. Members are prescreened, equipment is maintained, and expectations are enforced — creating a kitchen where serious food businesses can thrive.",
  },
];

const FAQ = () => {
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
            Questions &amp; Answers
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-cream border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
