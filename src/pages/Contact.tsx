import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-eneera-cream">
        <div className="container-narrow text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 fade-in-up">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto fade-in-up stagger-1">
            Questions about our products? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-section bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                detail: "hello@eneera.in",
                link: "mailto:hello@eneera.in",
                description: "For general inquiries",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                detail: "+91 99999 99999",
                link: "https://wa.me/919999999999",
                description: "Quick questions",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "+91 99999 99999",
                link: "tel:+919999999999",
                description: "Mon-Sat, 10am-6pm",
              },
              {
                icon: MapPin,
                title: "Office",
                detail: "India",
                link: null,
                description: "Ships pan-India",
              },
            ].map((item, index) => (
              <div 
                key={item.title}
                className="bg-eneera-cream p-8 text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon size={28} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-foreground">{item.detail}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-section bg-eneera-cream">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-4">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                question: "Do you ship internationally?",
                answer: "Currently, we ship within India only. International shipping is coming soon for global customers.",
              },
              {
                question: "How can I verify product authenticity?",
                answer: "Every product has a batch code. Contact us with your batch code for complete traceability information and lab reports.",
              },
              {
                question: "What is your return policy?",
                answer: "If you're not satisfied with the quality, contact us within 7 days of delivery for a full refund or replacement.",
              },
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-background p-6 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-medium text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
