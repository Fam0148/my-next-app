export const Testimonial = () => {
  const testimonials = [
    {
      name: 'Sita Devi',
      quote: 'This app structure is clean and scalable. Loved the composability!',
      location: 'Tamil Nadu',
    },
    {
      name: 'Arun Kumar',
      quote: 'Super responsive and easy to extend. Great work with Next.js App Router!',
      location: 'Bangalore',
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">What People Are Saying</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">“{t.quote}”</p>
            <p className="mt-4 font-semibold text-blue-600">{t.name}</p>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};