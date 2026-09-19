export const metadata = {
  title: "Insights | Kashless Ventures",
  description: "Practical perspectives on technology trends, process improvement, digital transformation, cybersecurity and business strategy.",
};

const topics = [
  "Technology trends",
  "Business process improvement",
  "Digital transformation",
  "Cybersecurity awareness",
  "Practical business strategy",
];

export default function InsightsPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-slate-200/80 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-widest text-[#0F6E62] font-semibold">Insights</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B1E3D] mt-3">Practical ideas for better business decisions.</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
            We plan to share practical perspectives on technology, business processes and the decisions that help organizations move forward.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7">
                <h2 className="text-xl font-bold text-[#0B1E3D]">{topic}</h2>
                <p className="text-slate-600 mt-3">Content for this topic can be published here using verified, practical information.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
