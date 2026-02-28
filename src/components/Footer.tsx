const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-primary-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to <span className="italic text-honey-light">Rise</span>?
          </h2>
          <p className="text-primary-foreground/60 font-body mb-8">
            Crafted for creators. A kitchen that works as hard as you do.
          </p>
          <a
            href="#membership"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-honey text-primary-foreground font-body font-semibold text-sm tracking-wide uppercase rounded-lg hover:opacity-90 transition-opacity"
          >
            Apply for Membership
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
          <p className="font-display text-xl mb-2">
            Milk &amp; <span className="italic text-honey-light">Honey</span>
          </p>
          <p className="text-primary-foreground/40 font-body text-sm">
            5,200 sq. ft. Commissary Kitchen · Where good ideas rise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
