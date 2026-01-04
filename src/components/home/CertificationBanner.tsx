import { Moon, Star, Shield, CheckCircle, FlaskConical, BadgeCheck } from "lucide-react";

const certifications = [
  { icon: Moon, label: "FSSAI Certified" },
  { icon: Star, label: "100% Organic" },
  { icon: Shield, label: "ISO Certified" },
  { icon: CheckCircle, label: "Non-GMO" },
  { icon: FlaskConical, label: "Lab Tested" },
  { icon: BadgeCheck, label: "Zero Additives" },
];

export function CertificationBanner() {
  return (
    <section className="py-8 md:py-10 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
              <cert.icon size={20} strokeWidth={1.5} />
              <span className="text-xs md:text-sm font-medium tracking-wide whitespace-nowrap">
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
