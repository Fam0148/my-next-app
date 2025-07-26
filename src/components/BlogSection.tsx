// components/BlogSection.tsx
const blogs = [
  {
    category: "FMCG",
    title: "Why Vacuum-Fried Snacks Are Taking Over Canadian Shelves",
    date: "July 2025",
    snippet: "Flyberry's vacuum-fried banana and okra chips are part of a clean-label revolution...",
    image: "/hero-banner-bg.png",
  },
  {
    category: "Textiles",
    title: "The Rise of Sustainable Fabric Sourcing for Canadian Apparel Brands",
    date: "July 2025",
    snippet: "With Indian cotton and recycled blends leading the way...",
    image: "/hero-banner-bg.png",
  },
  {
    category: "Construction",
    title: "Eco-Friendly Construction Boards You Can’t Ignore in 2025",
    date: "July 2025",
    snippet: "From rice husk composite panels to moisture-resistant boards...",
    image: "/hero-banner-bg.png",
  },
];

export const BlogSection = () => (
  <section className="py-16 px-4 md:px-10 lg:px-24 bg-white">
    <h2 className="text-3xl font-bold mb-10">Insights & Trends</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {blogs.map((blog, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
          <div className="p-5">
            <p className="text-xs uppercase text-gray-400 font-semibold mb-2">
              CATEGORY: {blog.category} • {blog.date}
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{blog.snippet}</p>
            <a href="#" className="text-indigo-600 font-medium hover:underline">Read More →</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
