function Newsletter() {
  return (
    <section className="py-10 bg-[#6f4e37] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Brewed ☕
        </h2>

        {/* Subtext */}
        <p className="mb-8 text-gray-200">
          Subscribe to receive exclusive offers, new arrivals, and special coffee updates directly to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-80 px-4 py-3 rounded-lg text-white border focus:outline-none"
          />

          <button
            type="submit"
            className="bg-white text-[#6f4e37] px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}

export default Newsletter;