import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdf8f3]">
      <div className=" bg-light shadow-amber-950 p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back to Brewcart ☕
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-[#6f4e37] text-white py-3 rounded-lg hover:bg-[#5a3d2b] transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-amber-700 font-semibold">
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}

export default SignIn;