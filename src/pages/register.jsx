import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdf8f3]">
      <div className=" bg-light shadow-amber-950 p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
         Welcome to Brewcart. Create Your Account ☕
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
          />

          <button
            type="submit"
            className="w-full bg-[#6f4e37] text-white py-3 rounded-lg hover:bg-[#5a3d2b] transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-amber-700 font-semibold">
            Sign In
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Register;