import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are your products 100% organic?",
    answer: "Yes, all ENEERA products are 100% certified organic. We source from trusted organic farms and forests across India, and every batch is tested to ensure purity.",
  },
  {
    question: "How do you ensure product quality?",
    answer: "Every product goes through rigorous third-party lab testing for purity, heavy metals, and adulterants. We maintain complete traceability from source to shelf.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free shipping on all orders above ₹750. For orders below this, a nominal shipping fee of ₹49 applies.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy. If you're not satisfied with your purchase, contact us for a full refund or replacement.",
  },
  {
    question: "How should I store the products?",
    answer: "Store in a cool, dry place away from direct sunlight. Honey should be kept at room temperature - refrigeration can cause crystallization (which is natural and doesn't affect quality).",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary mb-3">
              <span className="w-6 h-[1px] bg-primary" />
              Got Questions?
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
              Find answers to common questions about our products, shipping, and quality standards.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-primary text-sm font-medium hover:underline"
            >
              Still have questions? Contact us →
            </a>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-eneera-cream rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="font-medium text-foreground text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
