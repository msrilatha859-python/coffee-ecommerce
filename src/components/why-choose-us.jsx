import { FaLeaf, FaCoffee, FaTruck } from "react-icons/fa";

function WhyChooseUs() {

  const features = [
    {
      id: 1,
      icon: <FaLeaf />,
      title: "Premium Quality Beans",
      description:
        "Sourced from the finest farms worldwide to ensure unmatched flavor and aroma.",
    },
    {
      id: 2,
      icon: <FaCoffee />,
      title: "Freshly Roasted Daily",
      description:
        "Our beans are roasted daily to preserve their bold, rich taste.",
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: "Fast & Secure Delivery",
      description:
        "Quick delivery straight to your doorstep with freshness guaranteed.",
    },
  ];

  return (
    <section className="py-20 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose BrewCart?
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the richness of premium coffee crafted with passion and delivered with care.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-2xl shadow-md shadow-amber-700 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#C4A484] text-white text-2xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;