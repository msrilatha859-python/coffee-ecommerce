import {Link} from "react-router-dom"
function Products({ products, addToCart }) {
  return (
    <>
     <div className="flex items-center justify-between mb-3">
      <h3 className="text-4xl font-bold mx-auto text-center py-10">
        Featured Products
      </h3>
      <Link
          to="/shop"
          className="bg-[#6f4e37] text-white px-4 py-2 rounded-lg hover:bg-[#5a3d2b] transition"
        >
          View All
        </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {products.slice(0, 3).map(product => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-[#f8f5f2] to-[#e6d5c3] shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">
              {product.name}
            </h2>

            <p className="text-gray-600 text-sm mb-3">
              {product.description}
            </p>

            <p className="text-lg font-bold text-[#6f4e37] mb-4">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-[#6f4e37] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#5a3d2b] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default Products;