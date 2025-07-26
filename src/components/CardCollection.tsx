interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const CardCollection = () => {
  const cards = [
    { title: 'Reusable Components', description: 'Isolate UI parts for better maintainability.' },
    { title: 'App Router', description: 'Built with Next.js 13+ using the App Router.' },
    { title: 'Responsive Design', description: 'Mobile-first, looks great on any device.' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};