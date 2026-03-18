import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          username: username,
          email: email,
          password: password
        }
      );

      console.log(res.data);
      alert("User Registered Successfully");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fdf8f3]">
      <div className="bg-light shadow-amber-950 p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome to Brewcart. Create Your Account ☕
        </h2>

        <form className="space-y-4" onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-[#6f4e37] text-white py-3 rounded-lg"
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