import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Equipment from "@/components/Equipment";
import WhoItsFor from "@/components/WhoItsFor";
import Membership from "@/components/Membership";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="why">
        <WhyChoose />
      </section>
      <section id="equipment">
        <Equipment />
      </section>
      <section id="who">
        <WhoItsFor />
      </section>
      <Membership />
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
