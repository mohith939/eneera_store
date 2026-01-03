import { Award, Leaf, Shield, CheckCircle, FlaskConical, BadgeCheck } from "lucide-react";

const certifications = [
  { icon: Award, label: "FSSAI Certified" },
  { icon: Leaf, label: "100% Organic" },
  { icon: Shield, label: "ISO Certified" },
  { icon: CheckCircle, label: "Non-GMO" },
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: BadgeCheck, label: "Zero Additives" },
];

export function CertificationBanner() {
  return (
    <section className="py-12 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-full">
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
              <cert.icon size={24} strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
