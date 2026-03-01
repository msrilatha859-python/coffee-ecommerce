import { Link } from "react-router-dom";
function About(){
    return(
        <section className="py-20 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <p className="text-3xl md:text-4xl font-bold mb-3">
          About BrewCart
        </p>
        <h3 className=" font-semibold text-amber-800 mb-3">
            Crafted with Passion and Roasted to Perfection for an Unforgettable Coffee Experience
            </h3>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At Brew Haven, coffee is more than just a drink — it’s a ritual, a comfort, and a daily inspiration.
We carefully source premium Arabica beans from trusted farms and roast them in small batches to preserve their natural aroma and richness.<br/><br/>

Every blend is crafted with precision, ensuring a smooth, bold flavor in every sip. From farm to cup, our mission is simple — deliver freshness, quality, and happiness in every order.
        </p>
        <Link
          to="/shop"
          className="bg-[#6f4e37] text-white px-4 py-2 rounded-lg hover:bg-[#5a3d2b] transition"
        >
          Discover Our Collections
        </Link>
        </div>
        </section>
    )
}
export default About;