import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, updateQuantity }) {
    const totalItems = cart.reduce(
        (total, item) => total + (item.quantity || 1),
        0
    );

    const subtotal = cart.reduce(
        (total, item) =>
            total + Number(item.price) * (item.quantity || 1),
        0
    );

    return (
        <div className="min-h-screen bg-[#fcf8f3] px-4 py-12 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">

                {/* Page Heading */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-[#3b291e] sm:text-4xl">
                        Your Shopping Cart
                    </h1>

                    <p className="mt-3 text-[#76665b]">
                        Review your favourite coffee before checkout.
                    </p>
                </div>

                {/* Empty Cart */}
                {cart.length === 0 ? (
                    <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                        <div className="mb-4 text-6xl">🛒</div>

                        <h2 className="text-2xl font-semibold text-[#3b291e]">
                            Your cart is empty!
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Looks like you haven't added any coffee yet.
                        </p>

                        <Link
                            to="/shop"
                            className="mt-6 inline-block rounded-lg bg-[#755139] px-6 py-3 text-white transition hover:bg-[#563923]"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

                        {/* Cart Products */}
                        <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:col-span-2">
                            {cart.map((item) => {
                                const quantity = item.quantity || 1;

                                return (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-4 border-b border-[#eee5dc] py-6 first:pt-2 last:border-b-0 sm:flex-row sm:items-center"
                                    >
                                        {/* Product Image */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-24 w-24 rounded-xl object-cover"
                                        />

                                        {/* Product Details */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#3b291e]">
                                                {item.name}
                                            </h3>

                                            <p className="mt-2 font-medium text-[#755139]">
                                                ₹{Number(item.price).toFixed(2)}
                                            </p>

                                            {/* Quantity Controls */}
                                            <div className="mt-4 inline-flex items-center gap-4 rounded-lg border border-[#dfd2c5] px-3 py-1">
                                                <button
                                                    type="button"
                                                    disabled={quantity <= 1}
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            quantity - 1
                                                        )
                                                    }
                                                    className="text-xl text-[#755139] disabled:cursor-not-allowed disabled:opacity-40"
                                                    aria-label={`Decrease ${item.name} quantity`}
                                                >
                                                    −
                                                </button>

                                                <span className="min-w-4 text-center">
                                                    {quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        updateQuantity(
                                                            item.id,
                                                            quantity + 1
                                                        )
                                                    }
                                                    className="text-xl text-[#755139]"
                                                    aria-label={`Increase ${item.name} quantity`}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Subtotal and Remove */}
                                        <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-4">
                                            <p className="font-bold text-[#3b291e]">
                                                ₹
                                                {(
                                                    Number(item.price) *
                                                    quantity
                                                ).toFixed(2)}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                                className="text-sm text-red-600 hover:text-red-800 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

                            <Link
                                to="/shop"
                                className="mt-4 inline-block font-medium text-[#755139] hover:underline"
                            >
                                ← Continue Shopping
                            </Link>
                        </div>

                        {/* Order Summary */}
                        <div className="rounded-2xl bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-2xl font-bold text-[#3b291e]">
                                Order Summary
                            </h2>

                            <div className="mb-4 flex justify-between text-gray-600">
                                <span>Total Items</span>
                                <span>{totalItems}</span>
                            </div>

                            <div className="mb-4 flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>

                            <div className="mb-5 flex items-start justify-between gap-4 text-sm text-gray-600">
                                <span>Delivery</span>
                                <span className="text-right">
                                    Calculated at checkout
                                </span>
                            </div>

                            <hr className="border-[#eee5dc]" />

                            <div className="my-5 flex justify-between text-xl font-bold text-[#3b291e]">
                                <span>Total</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <Link
                             to="/checkout"
                             className="block w-full text-center bg-[#755139] text-white py-3 rounded-lg font-semibold hover:bg-[#3b291e] transition">
                                Proceed to Checkout
                            </Link>                           

                            <p className="mt-4 text-center text-sm text-[#76665b]">
                                ☕ Fresh coffee, just a few steps away!!!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;