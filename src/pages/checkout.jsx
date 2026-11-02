import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = cart.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        console.log("Customer Details:", formData);
        console.log("Order Items:", cart);
        console.log("Order Total:", subtotal);

        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-[#fcf8f3] flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
                    <div className="text-5xl mb-4">☕</div>

                    <h1 className="text-3xl font-bold text-[#3b291e] mb-3">
                        Thank You!
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Your checkout form has been submitted successfully.
                    </p>

                    <p className="text-sm text-gray-500 mb-6">
                        This is a demo confirmation. Your order has not yet
                        been saved to the backend.
                    </p>

                    <Link
                        to="/shop"
                        className="inline-block bg-[#755139] text-white px-6 py-3 rounded-lg hover:bg-[#3b291e] transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-[#fcf8f3] flex flex-col items-center justify-center px-4">
                <h1 className="text-3xl font-bold text-[#3b291e] mb-4">
                    Your cart is empty
                </h1>

                <Link
                    to="/shop"
                    className="bg-[#755139] text-white px-6 py-3 rounded-lg hover:bg-[#3b291e] transition"
                >
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcf8f3] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold text-[#3b291e] mb-2">
                    Checkout
                </h1>

                <p className="text-gray-600 mb-10">
                    Almost there! Enter your details to continue.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Customer Details Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 md:p-8">

                        <h2 className="text-2xl font-semibold text-[#3b291e] mb-6">
                            Delivery Information
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    autoComplete="name"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#755139]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#755139]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                        autoComplete="tel"
                                        pattern="[0-9]{10}"
                                        title="Enter a 10-digit phone number"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#755139]"
                                    />
                                </div>

                            </div>

                            <div>
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Delivery Address
                                </label>

                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="House number, street, area"
                                    autoComplete="street-address"
                                    rows="3"
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#755139]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        City
                                    </label>

                                    <input
                                        id="city"
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Enter your city"
                                        autoComplete="address-level2"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#755139]"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="pincode"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        PIN Code
                                    </label>

                                    <input
                                        id="pincode"
                                        type="text"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        placeholder="6-digit PIN code"
                                        autoComplete="postal-code"
                                        inputMode="numeric"
                                        pattern="[0-9]{6}"
                                        title="Enter a 6-digit PIN code"
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#755139]"
                                    />
                                </div>

                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#755139] text-white py-3 rounded-lg font-semibold hover:bg-[#3b291e] transition"
                            >
                                Place Demo Order
                            </button>

                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

                        <h2 className="text-2xl font-semibold text-[#3b291e] mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-medium text-[#3b291e]">
                                            {item.name}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>

                                    <p className="font-semibold text-[#3b291e]">
                                        ₹{(
                                            Number(item.price) * item.quantity
                                        ).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t pt-4 space-y-3">

                            <div className="flex justify-between text-gray-600">
                                <span>Total Items</span>
                                <span>{totalItems}</span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-gray-600">
                                <span>Delivery</span>
                                <span>Calculated later</span>
                            </div>

                            <div className="border-t pt-4 flex justify-between text-xl font-bold text-[#3b291e]">
                                <span>Total</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>

                        </div>

                        <p className="text-xs text-gray-500 mt-5">
                            Delivery charges and payment will be handled in a
                            future step.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Checkout;