function Testimonials() {

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      review:
        "The aroma and freshness are unmatched. This is now my go-to morning coffee!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Verma",
      review:
        "Smooth, rich, and perfectly roasted. You can truly taste the quality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Arjun Reddy",
      review:
        "Fast delivery and amazing flavor. Highly recommend BrewCart!",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Customers Say !!
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#fdf8f3] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 mb-4 leading-relaxed">
                “{item.review}”
              </p>

              <h4 className="font-semibold text-[#6f4e37]">
                {"⭐".repeat(item.rating)} {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;