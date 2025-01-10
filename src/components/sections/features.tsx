interface FeatureItem {
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: "Experience",
    description: "We have extensive experience in AI/ML development and deployment."
  },
  {
    title: "Continuous Support",
    description: "We are always ready to hear our users' needs and work tirelessly to solve them."
  },
  {
    title: "AI Innovation",
    description: "We work to support cutting-edge AI solutions across various domains."
  },
  {
    title: "Culture",
    description: "Our culture consists of working smart and delivering results. No slow movers."
  },
  {
    title: "Trust & Privacy",
    description: "All data is 100% secure and private. We take security very seriously."
  },
  {
    title: "Technical Excellence",
    description: "We have the best engineers to solve the most complex AI challenges."
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container grid gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="space-y-2">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 