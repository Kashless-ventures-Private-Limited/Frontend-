import { createSeoMetadata } from "@/lib/data";
export const metadata = createSeoMetadata("insights", "/insights");

const topics = [
  {
    title: "Technology trends",
    description: "Practical perspectives on technologies and digital capabilities that can affect the way businesses operate."
  },
  {
    title: "Business process improvement",
    description: "Ideas for identifying friction, improving workflows and creating more consistent ways of working."
  },
  {
    title: "Digital transformation",
    description: "Practical considerations for modernising processes, systems and digital experiences."
  },
  {
    title: "Cybersecurity awareness",
    description: "Straightforward guidance for understanding common technology risks and strengthening everyday security practices."
  },
  {
    title: "Practical business strategy",
    description: "Frameworks and observations for turning business challenges into clear priorities and practical action."
  },
];

export default function InsightsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Insights</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Practical ideas for better business decisions.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            Our insights focus on practical technology, business processes and decisions that can help organisations work more effectively and prepare for what is next.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Areas We Cover</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1E3D] mt-2">Useful perspectives, grounded in practice.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <article key={topic.title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
                <h2 className="text-xl font-bold text-[#0B1E3D]">{topic.title}</h2>
                <p className="text-slate-600 mt-3 leading-relaxed">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
